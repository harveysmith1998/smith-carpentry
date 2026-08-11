import { Redis } from '@upstash/redis';
import { NextRequest, NextResponse } from 'next/server';

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

// GET /api/sync?key=sc_quote_log
export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get('key');
  if (!key || !key.startsWith('sc_')) {
    return NextResponse.json({ error: 'Invalid key' }, { status: 400 });
  }
  const data = await redis.get(key);
  return NextResponse.json({ data: data ?? [] });
}

// POST /api/sync  body: { key, data }
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { key, data } = body;
  if (!key || !key.startsWith('sc_')) {
    return NextResponse.json({ error: 'Invalid key' }, { status: 400 });
  }
  await redis.set(key, JSON.stringify(data));
  return NextResponse.json({ ok: true });
}
