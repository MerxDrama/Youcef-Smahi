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

      if (!res.ok) {
        throw new Error(data.error ?? 'Något gick fel')
      }

      setState('success')
      setPhone('')
    } catch (err) {
      setState('error')
      setErrorMsg(err instanceof Error ? err.message : 'Något gick fel, försök igen.')
    }
  }

  return (
    <section id="demo" className="bg-menodi-dark">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">

          {/* Label */}
          <p className="text-menodi-amber text-sm font-semibold tracking-widest uppercase mb-6">
            Kom igång
          </p>

          {/* Headline */}
          <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-bold text-white leading-tight mb-6 text-balance">
            Boka 15 minuter.<br />
            Se Menodi svara live med{' '}
            <span className="text-menodi-amber">ditt företagsnamn.</span>
          </h2>

          <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-xl mx-auto">
            Inget säljsnack. Vi kör ett riktigt testsamtal — du ser vad kunden hör och vad du får.
            Sedan bestämmer du.
          </p>

          {/* Form */}
          {state === 'success' ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl px-8 py-10 max-w-md mx-auto">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <p className="text-white font-bold text-xl mb-2">Vi hör av oss snart!</p>
              <p className="text-gray-400 text-base">Vi ringer upp dig inom ett par timmar för att boka in din demo.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto" noValidate>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label htmlFor="demo-phone" className="sr-only">
                    Ditt telefonnummer
                  </label>
                  <input
                    id="demo-phone"
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="07X-XXX XX XX"
                    autoComplete="tel"
                    required
                    disabled={state === 'loading'}
                    className="w-full bg-menodi-card border border-menodi-border text-white placeholder-menodi-muted rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-menodi-amber/60 focus:border-menodi-amber transition-colors disabled:opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={state === 'loading' || !phone.trim()}
                  className="sm:shrink-0 bg-menodi-amber hover:bg-menodi-amber-hover disabled:opacity-50 disabled:cursor-not-allowed text-menodi-dark font-bold px-7 py-4 rounded-xl transition-colors duration-150 text-base amber-glow"
                >
                  {state === 'loading' ? (
                    <span className="flex items-center gap-2 justify-center">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Skickar...
                    </span>
                  ) : (
                    'Boka demo'
                  )}
                </button>
              </div>

              {state === 'error' && (
                <p className="mt-3 text-red-400 text-sm text-left">{errorMsg}</p>
              )}

              <p className="mt-4 text-menodi-muted text-sm">
                Vi ringer upp dig — ingen spam, inga nyhetsbrev, inget CRM-system som jagar dig.
              </p>
            </form>
          )}

          {/* Reassurance row */}
          <div className="mt-14 grid sm:grid-cols-3 gap-6 text-left border-t border-menodi-border pt-12">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
                title: 'Ingen bindningstid',
                body: 'Månadsabonnemang. Säg upp när du vill.',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                ),
                title: 'Igång på 10 min',
                body: 'Vidarekoppling, inga tekniker, ingen IT.',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>
                ),
                title: 'Vi pratar svenska',
                body: 'Support på svenska. Byggt i Sverige.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-menodi-card border border-menodi-border flex items-center justify-center shrink-0 text-menodi-amber">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-gray-500 text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
