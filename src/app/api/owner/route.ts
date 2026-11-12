import { NextRequest, NextResponse } from 'next/server';
import { claimOwner, ownerClaimed, requireOwner } from '@/lib/sc-store';

// GET /api/owner → whether a passcode has been set yet
export async function GET() {
  return NextResponse.json({ claimed: await ownerClaimed() });
}

// POST /api/owner  { action: 'claim', passcode } sets the passcode the first time
//                  { action: 'check' } with the x-sc-key header verifies it
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (body?.action === 'claim') {
    const passcode = typeof body.passcode === 'string' ? body.passcode : '';
    if (passcode.length < 6 || passcode.length > 100) {
      return NextResponse.json({ error: 'Passcode must be at least 6 characters' }, { status: 400 });
    }
    if (!(await claimOwner(passcode))) {
      return NextResponse.json({ error: 'A passcode is already set' }, { status: 409 });
    }
    return NextResponse.json({ ok: true });
  }

  if (body?.action === 'check') {
    const denied = await requireOwner(req);
    return denied ?? NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
}
