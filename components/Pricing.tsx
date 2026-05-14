const plans = [
  {
    name: 'Mini',
    price: '499',
    minutes: '50 min / mån',
    description: 'Perfekt om du har färre samtal men vill aldrig missa ett viktigt jobb.',
    features: [
      '50 minuters samtalshantering',
      'Svarar på svenska',
      'SMS-bekräftelse till kund',
      'SMS-notis till dig',
      'Vidarekoppling av ditt nummer',
      'E-postsupport',
    ],
    cta: 'Kom igång',
    highlighted: false,
    badge: null,
  },
  {
    name: 'Mellan',
    price: '1 450',
    minutes: '500 min / mån',
    description: 'För dig som har ett stabilt inflöde av nya kunder och inte har råd att missa dem.',
    features: [
      '500 minuters samtalshantering',
      'Svarar på svenska',
      'SMS-bekräftelse till kund',
      'SMS-notis till dig',
      'Kalenderbokning (Google/Outlook)',
      'Branschanpassade frågeflöden',
      'Prioriterad support',
    ],
    cta: 'Boka demo',
    highlighted: true,
    badge: 'Mest populär',
  },
  {
    name: 'Max',
    price: '2 999',
    minutes: '1 000 min / mån',
    description: 'För dig med högt samtalsflöde, fler tjänstegrenar eller ett litet lag.',
    features: [
      '1 000 minuters samtalshantering',
      'Svarar på svenska',
      'SMS-bekräftelse till kund',
      'SMS-notis till dig',
      'Kalenderbokning (Google/Outlook)',
      'Branschanpassade frågeflöden',
      'Closer-support vid uppstart',
      'Dedikerad onboarding',
    ],
    cta: 'Kontakta oss',
    highlighted: false,
    badge: null,
  },
]

function CheckIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-menodi-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="priser" className="bg-menodi-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">

        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <p className="text-menodi-amber text-sm font-semibold tracking-widest uppercase mb-4">
            Priser
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-menodi-dark leading-tight mb-5">
            Betala för det du använder. Inget annat.
          </h2>
          <p className="text-lg text-menodi-muted-dark leading-relaxed">
            Inga startavgifter. Ingen bindningstid. Om det inte funkar, säger du upp och färdig med det.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden flex flex-col ${
                plan.highlighted
                  ? 'bg-menodi-dark border-2 border-menodi-amber shadow-2xl scale-[1.02] md:scale-105'
                  : 'bg-white border border-menodi-cream-dark shadow-sm'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px">
                  <span className="bg-menodi-amber text-menodi-dark text-xs font-bold px-4 py-1 rounded-b-lg inline-block">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className={`px-7 pt-8 pb-6 ${plan.badge ? 'mt-4' : ''}`}>
                <p className={`font-bold text-sm uppercase tracking-widest mb-3 ${
                  plan.highlighted ? 'text-menodi-amber' : 'text-menodi-muted-dark'
                }`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-menodi-dark'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlighted ? 'text-gray-400' : 'text-menodi-muted-dark'}`}>
                    kr/mån
                  </span>
                </div>
                <p className={`text-sm font-semibold mb-4 ${
                  plan.highlighted ? 'text-menodi-amber' : 'text-menodi-muted-dark'
                }`}>
                  {plan.minutes}
                </p>
                <p className={`text-sm leading-relaxed ${
                  plan.highlighted ? 'text-gray-400' : 'text-menodi-muted-dark'
                }`}>
                  {plan.description}
                </p>
              </div>

              <div className={`border-t ${plan.highlighted ? 'border-menodi-border' : 'border-menodi-cream-dark'} px-7 py-6 flex-1`}>
                <ul className="space-y-3">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className={`text-sm leading-snug ${
                        plan.highlighted ? 'text-gray-300' : 'text-menodi-muted-dark'
                      }`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-7 pb-7 pt-2">
                <a
                  href="#demo"
                  className={`block text-center font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors duration-150 ${
                    plan.highlighted
                      ? 'bg-menodi-amber hover:bg-menodi-amber-hover text-menodi-dark'
                      : 'bg-menodi-dark hover:bg-menodi-navy text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-sm text-menodi-muted-dark mt-10">
          Behöver du mer än 1 000 min/mån?{' '}
          <a href="#demo" className="text-menodi-dark font-semibold hover:underline">
            Hör av dig
          </a>{' '}
          — vi löser det.
        </p>
      </div>
    </section>
  )
}
