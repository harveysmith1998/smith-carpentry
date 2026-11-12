import { NextRequest, NextResponse } from 'next/server';
import { kvGet, kvSet, ns, requireOwner } from '@/lib/sc-store';

// Quote/invoice logs, shared between Harvey's devices. Owner passcode required.
const LOG_KEYS = ['sc_quote_log', 'sc_invoice_log'];

// GET /api/sync?key=sc_quote_log
export async function GET(req: NextRequest) {
  const denied = await requireOwner(req);
  if (denied) return denied;
  const key = req.nextUrl.searchParams.get('key') || '';
  if (!LOG_KEYS.includes(key)) {
    return NextResponse.json({ error: 'Invalid key' }, { status: 400 });
  }
  const data = await kvGet<unknown[]>(ns(key));
  return NextResponse.json({ data: data ?? [] });
}

// POST /api/sync  body: { key, data }
export async function POST(req: NextRequest) {
  const denied = await requireOwner(req);
  if (denied) return denied;
  const body = await req.json().catch(() => null);
  const key = body?.key;
  if (!LOG_KEYS.includes(key) || !Array.isArray(body?.data)) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
  await kvSet(ns(key), body.data);
  return NextResponse.json({ ok: true });
}
