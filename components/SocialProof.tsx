/**
 * Social proof — credibility through math, not fake logos.
 * Hero stat: hybrid AI+human → +74% conversion.
 * Reference: smith.ai service tone, amazing.beste.co polish.
 */

export default function SocialProof() {
  return (
    <section className="bg-menodi-soft py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-menodi-gold mb-4">
            05 · Förtroende
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight text-menodi-ink text-balance mb-5">
            Siffrorna bakom hybrid&shy;modellen.
          </h2>
          <p className="text-lg text-menodi-body leading-relaxed text-pretty">
            Vi visar inga falska logotyper. Det vi visar är rådata kring varför AI + människa
            slår ren AI varje gång — och varför du borde bry dig.
          </p>
        </div>

        {/* Big stat row */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Highlight stat */}
          <div className="bg-menodi-ink text-white rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-radial-gold opacity-40 pointer-events-none" />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-widest text-menodi-gold mb-3">
                Konvertering
              </p>
              <p className="font-serif text-[clamp(4rem,9vw,6.5rem)] leading-none mb-3 text-gold-shimmer">
                +74%
              </p>
              <p className="text-base text-white/90 leading-snug">
                Högre &ldquo;lead-to-booked&rdquo;-rate när AI och människa jobbar tillsammans.
              </p>
              <p className="text-xs text-white/50 mt-4">Källa: HubSpot Service Trends 2024.</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-menodi-surface border border-menodi-border rounded-3xl p-8 md:p-10">
            <p className="font-mono text-xs uppercase tracking-widest text-menodi-gold-dark mb-3">
              Svar
            </p>
            <p className="font-serif text-[clamp(4rem,9vw,6.5rem)] leading-none mb-3 text-menodi-ink">
              1.8&thinsp;s
            </p>
            <p className="text-base text-menodi-body leading-snug">
              Genomsnittlig svarstid på inkommande samtal. Snabbare än mänsklig reception.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="bg-menodi-surface border border-menodi-border rounded-3xl p-8 md:p-10">
            <p className="font-mono text-xs uppercase tracking-widest text-menodi-gold-dark mb-3">
              Bokade
            </p>
            <p className="font-serif text-[clamp(4rem,9vw,6.5rem)] leading-none mb-3 text-menodi-ink">
              83%
            </p>
            <p className="text-base text-menodi-body leading-snug">
              Andel inkommande som bokas på första samtalet. Resten eskaleras till människa.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="relative bg-menodi-surface border border-menodi-border rounded-3xl p-8 md:p-12">
          {/* Quote mark */}
          <svg className="absolute top-7 left-8 w-12 h-12 text-menodi-gold/20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M0 24V12c0-4.4 1.7-8 5-10.9L9 4c-2 1.6-3 3.6-3 6h4v14H0zm18 0V12c0-4.4 1.7-8 5-10.9L27 4c-2 1.6-3 3.6-3 6h4v14H18z" />
          </svg>

          <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-menodi-ink max-w-3xl mx-auto text-balance pt-8">
            &ldquo;Vi behövde inte ännu ett system. Vi behövde någon som svarar när vi
            är inne hos kund. Menodi gör exakt det — och bokar dessutom in jobben.&rdquo;
          </blockquote>

          <div className="mt-7 flex items-center gap-3 justify-center">
            <div className="w-10 h-10 rounded-full bg-menodi-gold-soft border border-menodi-gold/20 flex items-center justify-center font-mono text-xs font-semibold text-menodi-gold-dark">
              EH
            </div>
            <div>
              <p className="text-sm font-medium text-menodi-ink">Erik Holmberg</p>
              <p className="text-xs text-menodi-muted">VVS-firma, Stockholm · Pilot 2026</p>
            </div>
          </div>
        </div>

        {/* Honesty footnote */}
        <p className="mt-8 text-center text-xs text-menodi-muted-soft max-w-2xl mx-auto">
          Vi visar inga &ldquo;trusted by&rdquo;-logotyper innan vi har dem. Erik är en av våra
          pilotkunder. Vill du också testa? Vi tar in 5 firmor i taget.
        </p>
      </div>
    </section>
  )
}
