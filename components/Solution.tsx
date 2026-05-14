/**
 * Solution + UVP — the two killer differentiators:
 *   1. Industry-trained (avloppsspolning vs stambyte)
 *   2. Hybrid AI + människa (+74% conversion)
 * Reference: architech-dev.tech for premium sectional feel.
 */

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-menodi-gold-dark shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="w-4 h-4 text-menodi-muted-soft shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}

export default function Solution() {
  return (
    <section id="losning" className="bg-menodi-soft py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-menodi-gold mb-4">
            02 · Lösningen
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight text-menodi-ink text-balance mb-5">
            En AI byggd för{' '}
            <span className="text-gold-shimmer italic">hantverkar­branschen</span>{' '}
            — inte för alla.
          </h2>
          <p className="text-lg text-menodi-body leading-relaxed text-pretty">
            Generiska AI-receptionister tar bara emot meddelanden.
            Menodi förstår jobbet, kvalificerar kunden och bokar in tiden direkt.
          </p>
        </div>

        {/* UVP #1 — Industry trained */}
        <div className="grid md:grid-cols-5 gap-8 mb-16 items-stretch">
          <div className="md:col-span-3 bg-menodi-surface rounded-3xl border border-menodi-border p-8 md:p-10">
            <div className="flex items-center gap-2 mb-5">
              <span className="font-mono text-xs uppercase tracking-widest text-menodi-gold-dark">
                UVP 01
              </span>
              <span className="h-px flex-1 bg-menodi-border" />
            </div>

            <h3 className="font-serif text-2xl md:text-3xl text-menodi-ink leading-tight mb-4 text-balance">
              Förtränad på branschspråket.
            </h3>
            <p className="text-base text-menodi-body leading-relaxed mb-7">
              Menodi vet att &ldquo;det luktar konstigt i avloppet&rdquo; betyder rörspolning —
              inte stambyte. Det här gör skillnaden mellan en korrekt offert och en kund
              som lägger på.
            </p>

            {/* Example exchange */}
            <div className="bg-menodi-bg rounded-2xl border border-menodi-border p-5 space-y-3">
              <div className="flex gap-3 items-start">
                <span className="font-mono text-[10px] uppercase tracking-widest text-menodi-muted shrink-0 mt-1.5">Kund</span>
                <p className="text-sm text-menodi-body italic">&ldquo;Jag behöver hjälp med stammarna.&rdquo;</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="font-mono text-[10px] uppercase tracking-widest text-menodi-gold-dark shrink-0 mt-1.5">Menodi</span>
                <p className="text-sm text-menodi-ink font-medium">&ldquo;Är det avloppsspolning eller stambyte du behöver?&rdquo;</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="font-mono text-[10px] uppercase tracking-widest text-menodi-muted shrink-0 mt-1.5">Generisk AI</span>
                <p className="text-sm text-menodi-muted italic">&ldquo;Jag noterar det och en medarbetare kontaktar dig.&rdquo;</p>
              </div>
            </div>
          </div>

          {/* Branschtermer */}
          <div className="md:col-span-2 bg-menodi-ink text-white rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-radial-gold opacity-40 pointer-events-none" />
            <div className="relative">
              <span className="font-mono text-xs uppercase tracking-widest text-menodi-gold mb-5 block">
                Begrepp Menodi förstår
              </span>
              <ul className="space-y-3 text-base">
                {[
                  'Stambyte vs stamspolning',
                  'Tätskikt + våtrumsregler',
                  'VVS-jour utanför kontorstid',
                  'Säkerhetsklass på el-arbeten',
                  'Renoveringskoder (ROT)',
                  'Branschspecifik ROT-avdrag',
                ].map(t => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="text-menodi-gold mt-1.5 shrink-0">●</span>
                    <span className="text-white/90 leading-snug">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* UVP #2 — Hybrid AI + människa */}
        <div className="grid md:grid-cols-5 gap-8 items-stretch">
          {/* Big stat */}
          <div className="md:col-span-2 bg-menodi-gold rounded-3xl p-8 md:p-10 text-menodi-ink relative overflow-hidden">
            <span className="font-mono text-xs uppercase tracking-widest text-menodi-gold-dark mb-3 block">
              UVP 02
            </span>
            <p className="font-serif text-[clamp(4rem,9vw,7rem)] leading-none mb-2 tracking-tight">
              +74%
            </p>
            <p className="text-lg font-medium leading-snug">
              Högre konvertering när AI och människa jobbar tillsammans.
            </p>
            <p className="text-sm text-menodi-ink/70 mt-4 leading-relaxed">
              Källa: HubSpot &amp; Salesforce — hybrida supportflöden 2024.
            </p>
          </div>

          <div className="md:col-span-3 bg-menodi-surface rounded-3xl border border-menodi-border p-8 md:p-10">
            <h3 className="font-serif text-2xl md:text-3xl text-menodi-ink leading-tight mb-4 text-balance">
              Hybrid AI + människa — i hela processen.
            </h3>
            <p className="text-base text-menodi-body leading-relaxed mb-6">
              AI:n tar 95 % av samtalen själv. När något kräver omdöme tar en verklig person
              vid — utan att kunden märker glappet.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {[
                'AI svarar inom 2 sekunder',
                'Människa eskalerar vid behov',
                'Du får sammanfattning + ljudfil',
                'Privat kontaktperson hos oss',
                'Inga kontrakt, inga onboarding-möten',
                'Closer-stöd på Max-plan',
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <span className="text-sm text-menodi-body leading-snug">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
