/**
 * Footer — phone + email prominently visible (Swedish hantverkare audience).
 * Dark on light gold accent, "En del av Noderum AB".
 */

const links = [
  {
    heading: 'Produkt',
    items: [
      { label: 'Lösning', href: '#losning' },
      { label: 'Hur det funkar', href: '#hur-det-funkar' },
      { label: 'Integrationer', href: '#integrationer' },
      { label: 'Priser', href: '#priser' },
    ],
  },
  {
    heading: 'Resurser',
    items: [
      { label: 'Blogg', href: '/blogg' },
      { label: 'Vanliga frågor', href: '#fragor' },
      { label: 'Boka demo', href: '#demo' },
    ],
  },
  {
    heading: 'Företag',
    items: [
      { label: 'Noderum AB', href: 'https://noderum.se' },
      { label: 'Integritetspolicy', href: '/integritetspolicy' },
      { label: 'Användarvillkor', href: '/villkor' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-menodi-ink text-white relative overflow-hidden">
      {/* Subtle gold bloom */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-radial-gold opacity-15 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-16">

          {/* Brand + contact */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-flex items-baseline gap-0.5 mb-5">
              <span className="font-serif text-3xl text-white tracking-tight">Menod</span>
              <span className="relative">
                <span className="font-serif text-3xl text-white tracking-tight">i</span>
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-menodi-gold shadow-[0_0_12px_rgba(201,162,39,0.7)]" aria-hidden="true" />
              </span>
            </a>

            <p className="text-base text-white/70 leading-relaxed max-w-sm mb-7">
              AI-receptionisten byggd för hantverkar­branschen.
              Förstår språket. Tar samtalen. Bokar in jobbet.
            </p>

            {/* Prominent contact */}
            <div className="space-y-3">
              <a
                href="tel:+46841022000"
                className="group flex items-center gap-3 text-white hover:text-menodi-gold transition-colors duration-150"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-menodi-gold/50 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-white/40">Telefon</p>
                  <p className="font-medium tabular-nums">+46 8 410 220 00</p>
                </div>
              </a>

              <a
                href="mailto:hej@menodi.se"
                className="group flex items-center gap-3 text-white hover:text-menodi-gold transition-colors duration-150"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-menodi-gold/50 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-white/40">E-post</p>
                  <p className="font-medium">hej@menodi.se</p>
                </div>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {links.map(col => (
            <div key={col.heading}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-menodi-gold mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.items.map(it => (
                  <li key={it.href}>
                    <a
                      href={it.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-150"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Menodi · En del av{' '}
            <a
              href="https://noderum.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-menodi-gold transition-colors"
            >
              Noderum AB
            </a>
          </p>
          <p className="text-xs text-white/40 font-mono">
            Byggt i Stockholm · Drivs i EU
          </p>
        </div>
      </div>
    </footer>
  )
}
