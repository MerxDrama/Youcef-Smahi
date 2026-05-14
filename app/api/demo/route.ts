import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  let body: { phone?: string; source?: string }

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Ogiltigt format' }, { status: 400 })
  }

  const phone = body?.phone?.trim()
  if (!phone) {
    return NextResponse.json({ error: 'Telefonnummer saknas' }, { status: 400 })
  }

  const webhookUrl = process.env.WEBHOOK_URL
  if (!webhookUrl) {
    // In dev without a webhook configured, just succeed silently
    console.log('[menodi] Demo booking (no webhook configured):', { phone })
    return NextResponse.json({ success: true })
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone,
        source: 'menodi-landing-page',
        timestamp: new Date().toISOString(),
      }),
    })

    if (!res.ok) {
      throw new Error(`Webhook responded ${res.status}`)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[menodi] Webhook error:', err)
    return NextResponse.json(
      { error: 'Kunde inte skicka förfrågan, försök igen.' },
      { status: 500 }
    )
  }
}
