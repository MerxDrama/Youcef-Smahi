const steps = [
  {
    number: '01',
    title: 'Kunden ringer ditt nummer',
    body: 'Du vidarekopplar till Menodi — ingen hårdvara, inget byte av operatör. Tar 10 minuter att sätta upp.',
    detail: 'Fungerar med ditt befintliga mobilnummer',
  },
  {
    number: '02',
    title: 'Menodi svarar inom 2 sekunder',
    body: 'På svenska, med ditt företagsnamn. Förstår vad kunden behöver: ny installation, jour, offertförfrågan.',
    detail: 'Alltid tillgänglig — även 07:00 på en måndag',
  },
  {
    number: '03',
    title: 'Bokar in tid i din kalender',
    body: 'Ser din lediga tid, föreslår datum, bekräftar direkt. Kunden behöver inte ringa tillbaka.',
    detail: 'Synkar med Google Calendar och Outlook',
  },
  {
    number: '04',
    title: 'SMS till dig och kunden',
    body: 'Du får ett meddelande med vad kunden sa och vad som bokades. Kunden får en bekräftelse. Klart.',
    detail: 'Du ringer tillbaka om du vill — men ofta behöver du inte',
  },
]

export default function HowItWorks() {
  return (
    <section id="hur-det-funkar" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">

        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <p className="text-menodi-amber text-sm font-semibold tracking-widest uppercase mb-4">
            Hur det funkar
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-menodi-dark leading-tight mb-5">
            Fyra steg. Sedan sköter Menodi resten.
          </h2>
          <p className="text-lg text-menodi-muted-dark leading-relaxed">
            Ingen utbildning. Inget manuellt inställnings-helvete.
            Du berättar om ditt företag en gång, sedan är det igång.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+0.75rem)] right-[calc(12.5%+0.75rem)] h-px bg-gradient-to-r from-menodi-amber/30 via-menodi-amber/60 to-menodi-amber/30" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col">
                {/* Number circle */}
                <div className="flex items-center gap-4 mb-5 lg:block">
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-menodi-dark border-2 border-menodi-amber flex items-center justify-center shrink-0 lg:mb-5">
                    <span className="text-menodi-amber font-bold text-sm tabular-nums">{step.number}</span>
                  </div>

                  {/* Mobile connecting line */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden flex-1 h-px bg-menodi-amber/30 mt-px" />
                  )}
                </div>

                <h3 className="text-menodi-dark font-bold text-lg mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-menodi-muted-dark leading-relaxed text-base mb-4 flex-1">
                  {step.body}
                </p>
                <p className="text-xs text-menodi-muted-dark/70 bg-menodi-cream rounded-lg px-3 py-2 border border-menodi-cream-dark font-medium">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust signal */}
        <div className="mt-14 grid sm:grid-cols-3 gap-4">
          {[
            { stat: '< 2 sek', label: 'Svarstid i genomsnitt' },
            { stat: '07–22', label: 'Tillgänglig varje dag' },
            { stat: '10 min', label: 'Att komma igång' },
          ].map((item, i) => (
            <div key={i} className="bg-menodi-cream border border-menodi-cream-dark rounded-xl px-6 py-5 text-center">
              <p className="text-3xl font-bold text-menodi-dark mb-1">{item.stat}</p>
              <p className="text-sm text-menodi-muted-dark">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
