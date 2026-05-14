/**
 * Hero — light theme, radial gold intro (Gamma-style), serif headline.
 * Inspired by: ui.beste.co/block/hero99, template-07-startup.vercel.app
 */
function RadialIntro() {
  // Three nested radial gold layers create the "radial intro" feel:
  // a steady glow with two expanding rings that pulse outward.
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Static center bloom */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[1100px] max-h-[1100px] radial-gold opacity-90" />

      {/* Expanding rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-menodi-gold/30 animate-radial-intro" />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full border border-menodi-gold/40 animate-radial-intro"
        style={{ animationDelay: '0.4s' }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full border border-menodi-gold/50 animate-radial-intro"
        style={{ animationDelay: '0.8s' }}
      />

      {/* Dot grid wash */}
      <div className="absolute inset-0 dot-grid-soft opacity-50" />
    </div>
  )
}

function CallPreview() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Soft gold halo behind the card */}
      <div className="absolute -inset-10 bg-radial-gold opacity-70 blur-2xl pointer-events-none" />

      <div className="relative bg-menodi-surface border border-menodi-border rounded-3xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)] overflow-hidden">
        {/* Header band */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-menodi-border">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-menodi-gold animate-pulse" />
            <span className="text-xs font-mono text-menodi-muted">LIVE · 09:14</span>
          </div>
          <span className="text-xs font-mono text-menodi-muted-soft">+46 70 123 45 67</span>
        </div>

        {/* Conversation */}
        <div className="p-5 space-y-3">
          {/* Customer */}
          <div className="flex gap-2">
            <div className="w-7 h-7 rounded-full bg-menodi-soft border border-menodi-border flex items-center justify-center text-xs font-mono text-menodi-muted shrink-0">K</div>
            <div className="bg-menodi-soft rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm text-menodi-body max-w-[80%]">
              Hej, jag behöver hjälp med stammarna i lägenheten.
            </div>
          </div>

          {/* Menodi answers */}
          <div className="flex gap-2 flex-row-reverse">
            <div className="w-7 h-7 rounded-full bg-gold-gradient flex items-center justify-center text-xs font-semibold text-white shrink-0">M</div>
            <div className="bg-menodi-gold-soft border border-menodi-gold/20 rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm text-menodi-body max-w-[80%]">
              Hej! Vill du rörspola eller är det ett stambyte du behöver?
            </div>
          </div>

          <div className="flex gap-2">
            <div className="w-7 h-7 rounded-full bg-menodi-soft border border-menodi-border flex items-center justify-center text-xs font-mono text-menodi-muted shrink-0">K</div>
            <div className="bg-menodi-soft rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm text-menodi-body max-w-[80%]">
              Rörspolning. Det luktar lite konstigt i avloppet.
            </div>
          </div>

          {/* Booking confirmed */}
          <div className="mt-2 bg-menodi-bg rounded-2xl border border-menodi-border p-3.5">
            <div className="flex items-center gap-2 mb-1.5">
              <svg className="w-4 h-4 text-menodi-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-wider text-menodi-gold-dark">Bokad</span>
            </div>
            <p className="text-sm text-menodi-ink font-medium">Måndag 13:00 · Rörspolning</p>
            <p className="text-xs text-menodi-muted mt-0.5">SMS skickat till kund + dig</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative bg-menodi-bg pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <RadialIntro />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — copy */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-menodi-gold-soft text-menodi-gold-dark text-xs font-mono uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-7 border border-menodi-gold/20">
              <span className="w-1.5 h-1.5 rounded-full bg-menodi-gold animate-pulse-slow" />
              AI-receptionist · för hantverkare
            </div>

            {/* Headline — Recoleta serif, mixed case */}
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-menodi-ink text-balance mb-6">
              Receptionisten som faktiskt förstår{' '}
              <span className="text-gold-shimmer italic">din bransch.</span>
            </h1>

            {/* Sub */}
            <p className="text-lg md:text-xl leading-relaxed text-menodi-body max-w-xl text-pretty mb-10">
              Menodi är förtränad på hantverkar­svenska. Den vet skillnaden mellan en
              avloppsspolning och ett stambyte — och bokar in jobbet medan du står på taket.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 bg-menodi-gold hover:bg-menodi-gold-hover text-white font-medium text-base px-7 py-4 rounded-full transition-colors duration-150 focus-gold shadow-[0_10px_30px_-10px_rgba(201,162,39,0.5)]"
              >
                Boka 15 min demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#hur-det-funkar"
                className="inline-flex items-center justify-center gap-2 text-menodi-ink font-medium text-base px-7 py-4 rounded-full border border-menodi-border-strong hover:border-menodi-ink transition-colors duration-150 focus-gold"
              >
                Se hur det funkar
              </a>
            </div>

            {/* Trust line */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-menodi-muted">
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-menodi-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Hybrid AI + människa
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-menodi-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Ingen bindningstid
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-menodi-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Igång på 10 min
              </span>
            </div>
          </div>

          {/* Right — call preview */}
          <div className="relative">
            <CallPreview />
          </div>
        </div>
      </div>
    </section>
  )
}
