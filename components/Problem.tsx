/**
 * Problem — what missed calls actually cost a hantverkare.
 * Light bg, math-driven framing.
 */

const stats = [
  {
    big: '27 %',
    label: 'av kundsamtal missas',
    detail: 'Småföretagare i tjänstebranschen — branschsnitt.',
  },
  {
    big: '2 800 kr',
    label: 'snittvärde per missat jobb',
    detail: 'Mindre VVS- och elarbeten enligt branschdata.',
  },
  {
    big: '8 min',
    label: 'innan kunden ringer nästa firma',
    detail: 'De som inte fick svar väntar inte länge.',
  },
]

export default function Problem() {
  return (
    <section className="bg-menodi-bg py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-menodi-gold mb-4">
            01 · Problemet
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight text-menodi-ink text-balance mb-5">
            Varje missat samtal är ett jobb hos konkurrenten.
          </h2>
          <p className="text-lg text-menodi-body leading-relaxed text-pretty">
            Du är på ställning. Du står i en kabelstege. Du har händerna fulla av silikon.
            Telefonen ringer ändå — och kunden väntar inte.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((s, i) => (
            <div
              key={i}
              className="card-lift relative bg-menodi-surface rounded-3xl p-7 border border-menodi-border"
            >
              {/* Index number */}
              <span className="absolute top-7 right-7 font-mono text-xs text-menodi-muted-soft">
                0{i + 1}
              </span>

              <p className="font-serif text-5xl md:text-6xl text-menodi-ink leading-none mb-3 tracking-tight">
                {s.big}
              </p>
              <p className="text-menodi-ink font-medium mb-2">{s.label}</p>
              <p className="text-sm text-menodi-muted leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>

        {/* Math row */}
        <div className="bg-menodi-soft rounded-3xl border border-menodi-border p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          <div className="flex-1">
            <p className="font-mono text-xs uppercase tracking-widest text-menodi-gold-dark mb-3">
              Räkna baklänges
            </p>
            <p className="text-2xl md:text-3xl font-serif text-menodi-ink leading-tight text-balance">
              5 missade samtal i veckan ={' '}
              <span className="text-gold-shimmer">~58 000 kr/år</span> i förlorad omsättning.
            </p>
          </div>
          <a
            href="#losning"
            className="shrink-0 inline-flex items-center gap-2 bg-menodi-ink hover:bg-menodi-ink2 text-white font-medium text-sm px-6 py-3.5 rounded-full transition-colors duration-150 focus-gold"
          >
            Så löser Menodi det
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
