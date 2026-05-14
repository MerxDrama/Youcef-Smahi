'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Funkar det verkligen på svenska — riktig svenska?',
    a: 'Ja. Menodi är byggt från grunden för svenska hantverkare. Det förstår regionala dialekter, branschtermer som "stambyte", "tätskikt" och "VVS-jour", och svarar med ett naturligt, korrekt svenska — inte maskinöversatt engelska. Vi testar kontinuerligt mot verkliga samtal i branschen.',
  },
  {
    q: 'Vad kostar det om jag bara har 10 samtal i månaden?',
    a: 'Miniplan på 499 kr/mån inkluderar 50 minuters samtalstid. Om du har 10 samtal à 3 minuter använder du 30 minuter — fortfarande 20 i reserv. Har du färre samtal betalar du ändå det fasta priset, men det är fortfarande billigare än att förlora ett enda jobb till en konkurrent.',
  },
  {
    q: 'Vad händer om Menodi inte förstår kunden?',
    a: 'Menodi eskalerar direkt. Om ett samtal inte kan hanteras ordentligt — för konstiga frågor, dialekt som inte känns igen, eller om kunden uttryckligen vill prata med en person — kopplas samtalet vidare till dig, eller ett meddelande skickas för återuppringning. Du bestämmer eskaleringsflödet.',
  },
  {
    q: 'Vad händer med mitt nuvarande telefonnummer?',
    a: 'Ingenting ändras för dig. Du ställer in vidarekoppling från ditt vanliga mobilnummer till Menodis linje — precis som om du vidarekopplar till ett annat mobil. Kunder ringer ditt nummer, Menodi svarar. Ingen hårdvara, inget nytt SIM-kort, ingen ny operatör.',
  },
  {
    q: 'Kan jag testa innan jag bestämmer mig?',
    a: 'Ja — boka en 15-minutersdemo så visar vi hur det funkar med ditt företagsnamn och din typ av arbete. Du slipper sitta igenom en säljpresentation. Vi kör ett testsamtal live, du ser resultatet direkt, och sedan bestämmer du.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="fragor" className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">

        {/* Header */}
        <div className="mb-12">
          <p className="text-menodi-amber text-sm font-semibold tracking-widest uppercase mb-4">
            Vanliga frågor
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-menodi-dark leading-tight">
            Det du undrar — och det raka svaret.
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`border rounded-2xl transition-colors duration-150 ${
                  isOpen
                    ? 'border-menodi-amber/40 bg-menodi-cream'
                    : 'border-menodi-cream-dark bg-white hover:border-menodi-muted/40'
                }`}
              >
                <button
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-menodi-dark text-base leading-snug pr-2">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 mt-0.5 ${
                      isOpen
                        ? 'bg-menodi-amber border-menodi-amber text-menodi-dark rotate-45'
                        : 'border-menodi-cream-dark text-menodi-muted-dark'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-menodi-muted-dark leading-relaxed text-base">
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Overflow prompt */}
        <p className="mt-10 text-center text-menodi-muted-dark text-sm">
          Annan fråga?{' '}
          <a href="#demo" className="text-menodi-dark font-semibold hover:underline">
            Ställ den i demot
          </a>{' '}
          — vi svarar på allting.
        </p>
      </div>
    </section>
  )
}
