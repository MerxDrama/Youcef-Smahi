'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function FinalCTA() {
  const [phone, setPhone] = useState('')
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const cleaned = phone.trim().replace(/\s+/g, '')
    if (!cleaned) return

    setState('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: cleaned }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Något gick fel')
      setState('success')
      setPhone('')
    } catch (err) {
      setState('error')
      setErrorMsg(err instanceof Error ? err.message : 'Något gick fel, försök igen.')
    }
  }

  return (
    <section id="demo" className="bg-menodi-bg py-20 md:py-28 relative overflow-hidden">
      {/* Gold radial glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-gold opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-menodi-gold mb-4">
          08 · Kom igång
        </p>

        <h2 className="font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tight text-menodi-ink text-balance mb-6">
          Hör hur Menodi låter med{' '}
          <span className="text-gold-shimmer italic">ditt företagsnamn.</span>
        </h2>

        <p className="text-lg text-menodi-body leading-relaxed mb-10 max-w-xl mx-auto text-pretty">
          15 minuter. Inget säljsnack. Vi kör ett riktigt testsamtal — du hör hur det
          låter, ser bokningsflödet, och bestämmer sedan.
        </p>

        {state === 'success' ? (
          <div className="max-w-md mx-auto bg-menodi-surface border border-menodi-gold/40 rounded-3xl p-10 shadow-[0_30px_80px_-30px_rgba(201,162,39,0.4)]">
            <div className="w-14 h-14 bg-menodi-gold-soft border border-menodi-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-menodi-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <p className="font-serif text-2xl text-menodi-ink mb-2">Tack! Vi hör av oss.</p>
            <p className="text-menodi-muted text-base">Vi ringer upp dig inom ett par timmar.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto" noValidate>
            <div className="flex flex-col sm:flex-row gap-2 bg-menodi-surface border border-menodi-border rounded-full p-2 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.08)]">
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="07X-XXX XX XX"
                autoComplete="tel"
                required
                disabled={state === 'loading'}
                aria-label="Ditt telefonnummer"
                className="flex-1 bg-transparent text-menodi-ink placeholder-menodi-muted-soft text-base px-5 py-3 focus:outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={state === 'loading' || !phone.trim()}
                className="bg-menodi-gold hover:bg-menodi-gold-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-full transition-colors duration-150 focus-gold whitespace-nowrap"
              >
                {state === 'loading' ? 'Skickar...' : 'Boka demo'}
              </button>
            </div>

            {state === 'error' && (
              <p className="mt-3 text-red-600 text-sm">{errorMsg}</p>
            )}

            <p className="mt-4 text-sm text-menodi-muted">
              Vi ringer upp dig. Inga nyhetsbrev. Ingen spam.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
