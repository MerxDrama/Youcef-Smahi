/**
 * How it works — 4 clean steps, blueprint-inspired connector line.
 * Reference: bonnie.ai, bricksbuilder.io
 */

const steps = [
  {
    n: '01',
    title: 'Kunden ringer ditt nummer',
    body: 'Du vidarekopplar ditt befintliga nummer till Menodi. 10 minuter att sätta upp. Ingen hårdvara.',
  },
  {
    n: '02',
    title: 'Menodi svarar på svenska',
    body: 'Inom 2 sekunder, med ditt företagsnamn. Förstår branschspråket, ställer rätt följdfrågor.',
  },
  {
    n: '03',
    title: 'Bokar tid i din kalender',
    body: 'Synkar med Google Calendar och Outlook. Ser ledig tid. Bekräftar direkt på samtalet.',
  },
  {
    n: '04',
    title: 'SMS till dig och kunden',
    body: 'Du får en sammanfattning. Kunden får en bekräftelse. Eskalering till människa vid behov.',
  },
]

export default function HowItWorks() {
  return (
    <section id="hur-det-funkar" className="bg-menodi-bg py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-menodi-gold mb-4">
            03 · Hur det funkar
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight text-menodi-ink text-balance mb-5">
            Fyra steg. Sedan sköter Menodi resten.
          </h2>
          <p className="text-lg text-menodi-body leading-relaxed text-pretty">
            Ingen utbildning. Ingen IT-avdelning. Vi konfigurerar med dig på 10 minuter.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-menodi-gold/40 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                {/* Number circle */}
                <div className="relative z-10 w-14 h-14 mb-6 rounded-full bg-menodi-surface border border-menodi-border flex items-center justify-center shadow-[0_8px_24px_-12px_rgba(0,0,0,0.10)]">
                  <span className="font-mono text-sm font-semibold text-menodi-gold-dark tabular-nums">
                    {s.n}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-menodi-ink mb-2.5 leading-snug">
                  {s.title}
                </h3>
                <p className="text-menodi-body text-base leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats below */}
        <div className="mt-16 grid sm:grid-cols-3 gap-4">
          {[
            { stat: '< 2 s', label: 'Genomsnittlig svarstid' },
            { stat: '07–22', label: 'Öppet alla dagar' },
            { stat: '10 min', label: 'Att komma igång' },
          ].map((item, i) => (
            <div key={i} className="bg-menodi-surface border border-menodi-border rounded-2xl p-5 text-center">
              <p className="font-serif text-3xl text-menodi-ink mb-1">{item.stat}</p>
              <p className="text-sm text-menodi-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
