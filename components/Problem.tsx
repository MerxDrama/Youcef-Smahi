const scenarios = [
  {
    time: '09:14',
    day: 'Tisdag',
    title: 'Jobbet som gick till grannen',
    body: 'Du är inne hos en kund och monterar. Telefonen ringer. Du kan inte svara. Den personen väntar inte — de ringer nästa firma på Google. Du vet aldrig ens att de ringde.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  {
    time: '20:30',
    day: 'Måndag kväll',
    title: 'Kvällen som försvann i papper',
    body: 'Offert hit, bokningsbekräftelse dit, återuppringning hit. Du sitter vid köksbordet och jobbar när du borde vara ledig. Barnen är i sängen. Partnern sitter ensam i soffan.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    time: 'Nu',
    day: 'Varje dag',
    title: 'Kunderna hittar dig inte',
    body: 'Hemsidan du aldrig hann uppdatera. Nummret som inte finns på Google. Recensionerna du glömt svara på. Kunderna som väljer den firma som syns — inte den som är bäst.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
]

export default function Problem() {
  return (
    <section id="problem" className="bg-menodi-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">

        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <p className="text-menodi-amber text-sm font-semibold tracking-widest uppercase mb-4">
            Problemet
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-menodi-dark leading-tight mb-5">
            Varje missat samtal kostar dig ett jobb.
          </h2>
          <p className="text-lg text-menodi-muted-dark leading-relaxed">
            Det är inte lathet — det är verkligheten när du jobbar ensam eller med ett litet lag.
            Du kan inte vara på stegen och i telefonen samtidigt.
          </p>
        </div>

        {/* Scenario cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {scenarios.map((s, i) => (
            <div
              key={i}
              className="card-hover bg-menodi-bone rounded-2xl p-7 border border-menodi-cream-dark shadow-sm"
            >
              {/* Time badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-menodi-dark flex items-center justify-center text-menodi-amber shrink-0">
                  {s.icon}
                </div>
                <div>
                  <span className="text-xs font-semibold text-menodi-muted-dark uppercase tracking-wide">
                    {s.day}
                  </span>
                  <p className="text-menodi-dark font-bold text-lg leading-none">{s.time}</p>
                </div>
              </div>

              <h3 className="text-menodi-dark font-bold text-lg mb-3">{s.title}</h3>
              <p className="text-menodi-muted-dark leading-relaxed text-base">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Bridge to solution */}
        <div className="mt-14 md:mt-16 bg-menodi-dark rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-gray-200 text-lg leading-snug max-w-xl">
            <span className="text-white font-semibold">Det här är inte ditt fel.</span>{' '}
            Branschen har aldrig haft ett verktyg som faktiskt passar hur du jobbar. Tills nu.
          </p>
          <a
            href="#hur-det-funkar"
            className="shrink-0 inline-flex items-center gap-2 bg-menodi-amber hover:bg-menodi-amber-hover text-menodi-dark font-semibold px-6 py-3 rounded-xl transition-colors duration-150 text-sm"
          >
            Se lösningen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
