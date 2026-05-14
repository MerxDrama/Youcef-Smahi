const differentiators = [
  {
    title: 'Förstår branschspråket',
    body: 'Stambyte, tätskikt, VVS-jour, tillbyggnad, fuktspärr — Menodi vet vad det betyder och kan ställa rätt följdfrågor. En generisk AI tar emot ett meddelande. Menodi kvalificerar ett jobb.',
    example: '"Jag behöver någon som tittar på stammarna" → Menodi frågar: rörspolning eller stambyte?',
  },
  {
    title: 'Vet hur hantverkare jobbar',
    body: 'Du jobbar 07–17. Du äter lunch vid 11. Du är inte tillgänglig för onboarding-samtal en onsdag kl 14. Menodi är byggd kring din dag — inte ett kontors dag.',
    example: 'Bokningsflöden anpassade för jobb som tar 2 timmar, inte möten som tar 30 minuter.',
  },
  {
    title: 'Ditt namn, din röst',
    body: 'Kunden hör aldrig "du har nått en automatisk svarstjänst". De hör ditt företagsnamn, ett vänligt bemötande på riktig svenska, och ett konkret erbjudande om en tid.',
    example: '"Hej, du har nått Lindgrens VVS. Vad kan jag hjälpa dig med idag?"',
  },
]

const comparisonRows = [
  { feature: 'Svarar på svenska', generic: false, menodi: true },
  { feature: 'Förstår branschtermer', generic: false, menodi: true },
  { feature: 'Tillgänglig 07–22', generic: 'Ibland', menodi: true },
  { feature: 'Bokar direkt i kalender', generic: false, menodi: true },
  { feature: 'Anpassad för hantverkare', generic: false, menodi: true },
  { feature: 'Inga långa kontrakt', generic: false, menodi: true },
]

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? 'w-5 h-5'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  )
}

function CrossIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? 'w-5 h-5'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}

export default function WhyMenodi() {
  return (
    <section id="varfor-menodi" className="bg-menodi-dark">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">

        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <p className="text-menodi-amber text-sm font-semibold tracking-widest uppercase mb-4">
            Varför Menodi
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-white leading-tight mb-5">
            Byggd för din bransch.<br className="hidden md:inline" /> Inte för alla branscher.
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Generiska AI-verktyg är byggda för receptionen på ett kontor.
            Menodi är byggt för dig som är ute på jobb kl 07 och har tre samtal missade vid lunch.
          </p>
        </div>

        {/* Differentiators */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {differentiators.map((d, i) => (
            <div
              key={i}
              className="card-hover bg-menodi-card border border-menodi-border rounded-2xl p-7"
            >
              <div className="w-10 h-10 rounded-xl bg-menodi-amber/10 border border-menodi-amber/20 flex items-center justify-center mb-5">
                <CheckIcon className="w-5 h-5 text-menodi-amber" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{d.title}</h3>
              <p className="text-gray-400 leading-relaxed text-base mb-4">{d.body}</p>
              <div className="bg-menodi-surface rounded-xl px-4 py-3 border border-menodi-border/50">
                <p className="text-gray-400 text-sm italic leading-snug">{d.example}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="bg-menodi-card border border-menodi-border rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-menodi-surface border-b border-menodi-border px-6 py-4">
            <p className="text-menodi-muted text-sm font-medium">Funktion</p>
            <p className="text-menodi-muted text-sm font-medium text-center">Generisk AI</p>
            <p className="text-menodi-amber text-sm font-bold text-center">Menodi</p>
          </div>
          {comparisonRows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 px-6 py-4 items-center ${
                i < comparisonRows.length - 1 ? 'border-b border-menodi-border/40' : ''
              }`}
            >
              <p className="text-gray-300 text-sm font-medium">{row.feature}</p>
              <div className="flex justify-center">
                {row.generic === true ? (
                  <CheckIcon className="w-5 h-5 text-green-500" />
                ) : row.generic === false ? (
                  <CrossIcon className="w-5 h-5 text-menodi-muted/50" />
                ) : (
                  <span className="text-menodi-muted text-sm">{row.generic}</span>
                )}
              </div>
              <div className="flex justify-center">
                {row.menodi === true ? (
                  <CheckIcon className="w-5 h-5 text-menodi-amber" />
                ) : (
                  <CrossIcon className="w-5 h-5 text-red-400/70" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
