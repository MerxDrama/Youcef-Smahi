/**
 * Pricing — three tiers with audience labels (solo / team / scale).
 * Light theme, gold on the recommended tier.
 */

const plans = [
  {
    name: 'Mini',
    audience: 'För solo-hantverkaren',
    price: '499',
    minutes: '50 min/mån',
    description: 'Du jobbar ensam och vill aldrig missa ett samtal igen.',
    features: [
      '50 minuters samtalshantering',
      'Svensk AI-receptionist',
      'SMS till kund + dig',
      'Vidarekoppling av befintligt nummer',
      'E-postsupport',
    ],
    cta: 'Kom igång',
    highlighted: false,
  },
  {
    name: 'Mellan',
    audience: 'För upptagna team',
    price: '1 450',
    minutes: '500 min/mån',
    description: 'Ni har stabilt inflöde och ett team som inte hinner svara.',
    features: [
      '500 minuters samtalshantering',
      'Allt i Mini',
      'Google Calendar / Outlook',
      'Branschspecifika frågeflöden',
      'Människa eskalerar vid behov',
      'Prioriterad support',
    ],
    cta: 'Boka demo',
    highlighted: true,
    badge: 'Mest populär',
  },
  {
    name: 'Max',
    audience: 'För firmor som skalar',
    price: '2 999',
    minutes: '1 000 min/mån',
    description: 'Ni driver flera ben i verksamheten och behöver full täckning.',
    features: [
      '1 000 minuters samtalshantering',
      'Allt i Mellan',
      'Custom CRM-integration',
      'Closer-stöd vid uppstart',
      'Dedikerad onboarding',
      'Privat kontaktperson',
    ],
    cta: 'Kontakta oss',
    highlighted: false,
  },
]

function Check({ on }: { on: 'gold' | 'ink' }) {
  return (
    <svg className={`w-4 h-4 shrink-0 ${on === 'gold' ? 'text-menodi-gold' : 'text-menodi-gold-dark'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="priser" className="bg-menodi-bg py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-menodi-gold mb-4">
            06 · Priser
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight text-menodi-ink text-balance mb-5">
            Enkla priser. Ingen bindningstid.
          </h2>
          <p className="text-lg text-menodi-body leading-relaxed text-pretty">
            Betala per månad. Säg upp när du vill. Behöver du mer minuter? Vi löser det.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl overflow-hidden flex flex-col ${
                plan.highlighted
                  ? 'bg-menodi-ink text-white border-2 border-menodi-gold shadow-[0_30px_80px_-30px_rgba(201,162,39,0.4)] md:scale-[1.03]'
                  : 'bg-menodi-surface border border-menodi-border'
              }`}
            >
              {/* Gold bloom on highlighted */}
              {plan.highlighted && (
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-radial-gold opacity-40 pointer-events-none" />
              )}

              {/* Badge */}
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                  <span className="bg-menodi-gold text-menodi-ink text-xs font-semibold uppercase tracking-widest px-4 py-1 rounded-b-lg inline-block">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className={`relative px-7 pt-10 pb-6 ${plan.highlighted ? '' : 'pt-8'}`}>
                <p className={`font-mono text-xs uppercase tracking-widest mb-2 ${
                  plan.highlighted ? 'text-menodi-gold' : 'text-menodi-muted'
                }`}>
                  {plan.name} · {plan.audience}
                </p>

                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className={`font-serif text-5xl ${plan.highlighted ? 'text-white' : 'text-menodi-ink'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlighted ? 'text-white/60' : 'text-menodi-muted'}`}>
                    kr/mån
                  </span>
                </div>

                <p className={`text-sm font-medium mb-4 ${
                  plan.highlighted ? 'text-menodi-gold' : 'text-menodi-gold-dark'
                }`}>
                  {plan.minutes}
                </p>

                <p className={`text-sm leading-relaxed ${
                  plan.highlighted ? 'text-white/75' : 'text-menodi-muted'
                }`}>
                  {plan.description}
                </p>
              </div>

              <div className={`relative px-7 py-6 flex-1 border-t ${
                plan.highlighted ? 'border-white/10' : 'border-menodi-border'
              }`}>
                <ul className="space-y-3">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5">
                      <Check on={plan.highlighted ? 'gold' : 'ink'} />
                      <span className={`text-sm leading-snug ${
                        plan.highlighted ? 'text-white/85' : 'text-menodi-body'
                      }`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative px-7 pb-7 pt-2">
                <a
                  href="#demo"
                  className={`block text-center font-medium text-sm px-6 py-3.5 rounded-full transition-colors duration-150 ${
                    plan.highlighted
                      ? 'bg-menodi-gold hover:bg-menodi-gold-hover text-menodi-ink'
                      : 'bg-menodi-ink hover:bg-menodi-ink2 text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-sm text-menodi-muted mt-10">
          Alla priser ex moms · Behöver du fler minuter eller flera nummer?{' '}
          <a href="#demo" className="text-menodi-gold-dark font-medium hover:underline">
            Skräddarsy en plan
          </a>
        </p>
      </div>
    </section>
  )
}
