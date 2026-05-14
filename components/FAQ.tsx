'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Funkar det verkligen på riktig svenska?',
    a: 'Ja. Menodi är förtränad på svensk hantverkar­vokabulär — inte maskinöversatt engelska. Den hanterar dialekter, branschtermer som "stambyte", "tätskikt", "VVS-jour", och svarar med naturlig prosodi. Vi testar mot riktiga inkommande samtal varje vecka.',
  },
  {
    q: 'Vad händer om Menodi inte förstår kunden?',
    a: 'Hybrid AI + människa är inbyggt. Om samtalet inte kan kvalificeras säkert — konstig dialekt, juridiska frågor, akuta jourärenden — eskalerar Menodi direkt till en verklig människa hos oss, eller vidare till dig. Du bestämmer flödet.',
  },
  {
    q: 'Vad kostar det om jag bara har 10 samtal i månaden?',
    a: 'Mini-planen på 499 kr/mån täcker 50 minuter. 10 samtal à 3 minuter = 30 min använt. Du betalar fast pris även om du är under, men ett enda missat jobb hos en konkurrent kostar mer än årspremien.',
  },
  {
    q: 'Vad händer med mitt nuvarande telefonnummer?',
    a: 'Ingenting förändras för dig. Du vidarekopplar ditt vanliga mobilnummer till Menodis linje — samma princip som att vidarekoppla till en kollega. Inget nytt SIM, ingen operatörsbyte, ingen hårdvara.',
  },
  {
    q: 'Kan ni integrera med vårt befintliga CRM?',
    a: 'Vi stödjer Pipedrive, HubSpot, Fortnox och Zapier/n8n out-of-the-box. På Max-planen bygger vi custom-integrationer mot ert eget system. Boka en demo så går vi igenom er stack.',
  },
  {
    q: 'Hur säkert är det? GDPR?',
    a: 'Data lagras i EU. Vi följer GDPR och svenska bokföringsregler. Inspelningar raderas efter 30 dagar om du inte aktivt sparar dem. PUB-avtal skickas vid signup.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="fragor" className="bg-menodi-soft py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-menodi-gold mb-4">
            07 · Frågor &amp; svar
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight text-menodi-ink text-balance">
            Det du undrar — och det raka svaret.
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2.5">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-menodi-gold/40 bg-menodi-surface shadow-[0_8px_24px_-12px_rgba(0,0,0,0.06)]'
                    : 'border-menodi-border bg-menodi-bg hover:border-menodi-border-strong'
                }`}
              >
                <button
                  className="w-full flex items-start justify-between gap-5 px-6 py-5 text-left focus-gold rounded-2xl"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg text-menodi-ink leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 mt-0.5 ${
                      isOpen
                        ? 'bg-menodi-gold text-white rotate-45'
                        : 'bg-menodi-soft text-menodi-muted'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-menodi-body leading-relaxed text-pretty">
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Have a question */}
        <p className="text-center text-sm text-menodi-muted mt-10">
          Hittar du inte svaret?{' '}
          <a href="#demo" className="text-menodi-gold-dark font-medium hover:underline">
            Ställ frågan i demot
          </a>{' '}
          — vi svarar på allt.
        </p>
      </div>
    </section>
  )
}
