import { Redis } from '@upstash/redis';
import { randomBytes, scryptSync, timingSafeEqual } from 'crypto';

// Storage for the quote/invoice tools: logs, online documents and the owner passcode.

const hasKv = !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
const redis = hasKv
  ? new Redis({ url: process.env.KV_REST_API_URL!, token: process.env.KV_REST_API_TOKEN! })
  : null;

// Local development without the database: keep data in memory for the life of the dev server
const devGlobal = globalThis as typeof globalThis & { __scMem?: Map<string, string> };
const mem = (devGlobal.__scMem ??= new Map<string, string>());
function assertDevMemory() {
  if (process.env.NODE_ENV === 'production') throw new Error('KV database is not configured');
}

// Preview deployments share the database with the live site, so keep their data separate
const NS = process.env.VERCEL_ENV === 'preview' ? 'preview:' : '';
export const ns = (key: string) => NS + key;

export async function kvGet<T>(key: string): Promise<T | null> {
  if (redis) return (await redis.get<T>(key)) ?? null;
  assertDevMemory();
  const v = mem.get(key);
  return v === undefined ? null : (JSON.parse(v) as T);
}

/** Returns false when `nx` is set and the key already exists. */
export async function kvSet(key: string, value: unknown, nx = false): Promise<boolean> {
  if (redis) {
    const res = nx ? await redis.set(key, value, { nx: true }) : await redis.set(key, value);
    return res === 'OK';
  }
  assertDevMemory();
  if (nx && mem.has(key)) return false;
  mem.set(key, JSON.stringify(value));
  return true;
}

export async function kvMGet<T>(keys: string[]): Promise<(T | null)[]> {
  if (!keys.length) return [];
  if (redis) return await redis.mget<(T | null)[]>(...keys);
  assertDevMemory();
  return keys.map((k) => {
    const v = mem.get(k);
    return v === undefined ? null : (JSON.parse(v) as T);
  });
}

async function kvIncr(key: string, ttlSeconds: number): Promise<number> {
  if (redis) {
    const n = await redis.incr(key);
    if (n === 1) await redis.expire(key, ttlSeconds);
    return n;
  }
  assertDevMemory();
  const n = Number(mem.get(key) ?? '0') + 1;
  mem.set(key, String(n));
  return n;
}

// ---- Owner passcode ----

type OwnerRecord = { salt: string; hash: string; created: number };

const OWNER_KEY = ns('sc_owner');
const MAX_FAILS = 20; // per IP, per 15 minutes

function hashPasscode(passcode: string, salt: string) {
  return scryptSync(passcode, salt, 32).toString('hex');
}

export async function ownerClaimed() {
  return !!(await kvGet<OwnerRecord>(OWNER_KEY));
}

/** Sets the passcode the first time only. Returns false if one is already set. */
export async function claimOwner(passcode: string) {
  const salt = randomBytes(16).toString('hex');
  return kvSet(OWNER_KEY, { salt, hash: hashPasscode(passcode, salt), created: Date.now() }, true);
}

function clientIp(req: Request) {
  return (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
}

async function checkOwner(req: Request): Promise<'ok' | 'denied' | 'locked'> {
  const passcode = req.headers.get('x-sc-key') || '';
  if (!passcode) return 'denied';
  const failKey = ns('sc_owner_fails:' + clientIp(req));
  if (((await kvGet<number>(failKey)) ?? 0) >= MAX_FAILS) return 'locked';
  const rec = await kvGet<OwnerRecord>(OWNER_KEY);
  if (rec) {
    const a = Buffer.from(hashPasscode(passcode, rec.salt), 'hex');
    const b = Buffer.from(rec.hash, 'hex');
    if (a.length === b.length && timingSafeEqual(a, b)) return 'ok';
  }
  await kvIncr(failKey, 15 * 60);
  return 'denied';
}

/** Returns an error response unless the request carries the owner passcode. */
export async function requireOwner(req: Request): Promise<Response | null> {
  const result = await checkOwner(req);
  if (result === 'ok') return null;
  return result === 'locked'
    ? Response.json({ error: 'Too many attempts — try again in 15 minutes' }, { status: 429 })
    : Response.json({ error: 'Passcode required' }, { status: 401 });
}
