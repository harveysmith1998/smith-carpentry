import { NextRequest, NextResponse } from 'next/server';
import { kvGet, kvMGet, kvSet, ns, requireOwner } from '@/lib/sc-store';

// Online copies of quotes and invoices, shared with customers by a private link
// (/q/<id> and /i/<id>). Records when the link is viewed and when a quote is accepted.

type DocType = 'quote' | 'invoice';
type Accepted = { at: number; name: string; total: string };
type Doc = {
  type: DocType;
  data: Record<string, unknown>;
  created: number;
  updated: number;
  views: number[];
  accepted: Accepted | null;
};

const ID_RE = /^[A-Za-z0-9]{12,32}$/;
const MAX_DATA = 200_000;
const VIEW_GAP_MS = 2 * 60 * 1000; // reloads within 2 minutes count as one view
const docKey = (id: string) => ns('sc_doc:' + id);
const noStore = { headers: { 'Cache-Control': 'no-store' } };

// GET /api/docs?id=<id>         → public: the document for the customer view
// GET /api/docs?ids=<id>,<id>   → owner: view/accept status for the logs
export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;

  const ids = params.get('ids');
  if (ids !== null) {
    const denied = await requireOwner(req);
    if (denied) return denied;
    const list = ids.split(',').filter((id) => ID_RE.test(id)).slice(0, 200);
    const docs = await kvMGet<Doc>(list.map(docKey));
    const statuses: Record<string, unknown> = {};
    list.forEach((id, i) => {
      const d = docs[i];
      if (!d) return;
      statuses[id] = {
        views: d.views.length,
        firstViewed: d.views[0] ?? null,
        lastViewed: d.views[d.views.length - 1] ?? null,
        accepted: d.accepted,
      };
    });
    return NextResponse.json({ statuses }, noStore);
  }

  const id = params.get('id') || '';
  if (!ID_RE.test(id)) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  const doc = await kvGet<Doc>(docKey(id));
  if (!doc) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ type: doc.type, data: doc.data, accepted: doc.accepted }, noStore);
}

// POST /api/docs
//   { action: 'save', id, type, data }  owner: create or update an online copy
//   { action: 'view', id }              customer: record that the link was opened
//   { action: 'accept', id, name }      customer: accept a quote
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const id = typeof body?.id === 'string' ? body.id : '';
  if (!ID_RE.test(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
  const key = docKey(id);
  const now = Date.now();

  if (body.action === 'save') {
    const denied = await requireOwner(req);
    if (denied) return denied;
    const type = body.type;
    const data = body.data;
    if ((type !== 'quote' && type !== 'invoice') || !data || typeof data !== 'object' || Array.isArray(data)) {
      return NextResponse.json({ error: 'Invalid document' }, { status: 400 });
    }
    if (JSON.stringify(data).length > MAX_DATA) {
      return NextResponse.json({ error: 'Document too large' }, { status: 413 });
    }
    const existing = await kvGet<Doc>(key);
    if (existing && existing.type !== type) {
      return NextResponse.json({ error: 'Id already used' }, { status: 409 });
    }
    const doc: Doc = {
      type,
      data,
      created: existing?.created ?? now,
      updated: now,
      views: existing?.views ?? [],
      accepted: existing?.accepted ?? null,
    };
    await kvSet(key, doc);
    return NextResponse.json({ ok: true });
  }

  const doc = await kvGet<Doc>(key);
  if (!doc) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  if (body.action === 'view') {
    const last = doc.views[doc.views.length - 1];
    if (!last || now - last > VIEW_GAP_MS) {
      doc.views = [...doc.views, now].slice(-100);
      await kvSet(key, doc);
    }
    return NextResponse.json({ ok: true });
  }

  if (body.action === 'accept') {
    if (doc.type !== 'quote') return NextResponse.json({ error: 'Only quotes can be accepted' }, { status: 400 });
    if (doc.accepted) return NextResponse.json({ accepted: doc.accepted });
    const name = typeof body.name === 'string' ? body.name.trim().slice(0, 100) : '';
    if (!name) return NextResponse.json({ error: 'Please enter your name' }, { status: 400 });
    doc.accepted = { at: now, name, total: String(doc.data.total ?? '') };
    await kvSet(key, doc);
    return NextResponse.json({ accepted: doc.accepted });
  }

  return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
}
