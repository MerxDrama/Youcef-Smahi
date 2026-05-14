import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blogg — Menodi',
  description:
    'Tankar, råd och beräkningar för hantverkare som inte vill missa fler samtal. Hybrid AI, missade leads, branschspecifik automation.',
}

// Initial topic ladder (Smith.ai-inspired framework).
// Drafts live here as placeholders until the editorial pipeline ships.
const topics = [
  {
    cat: 'Kostnad',
    title: 'Vad kostar ett missat samtal för en VVS-firma?',
    snippet:
      'Vi räknar baklänges på branschdata: snittjobb, andelen missade samtal och hur mycket en mellanstor firma faktiskt förlorar per år.',
    read: '6 min',
  },
  {
    cat: 'Jämförelse',
    title: 'AI-receptionist vs. traditionell telefonsvarare',
    snippet:
      'Telefonsvararen tar inte ett enda jobb. En AI-receptionist bokar in det direkt. Här är hela kostnadsbilden.',
    read: '8 min',
  },
  {
    cat: 'Konvertering',
    title: 'Så ökar hybrid AI + människa konverteringen 74 %',
    snippet:
      'Forskning från HubSpot, Salesforce och Smith.ai visar varför hybrida flöden alltid slår ren automation. Vi summerar siffrorna.',
    read: '5 min',
  },
  {
    cat: 'Implementering',
    title: 'Implementera en AI-receptionist på 4 steg',
    snippet:
      'En konkret playbook: vidarekoppling, kalender-koppling, kvalificeringsregler, eskalering. Vad som tar 10 minuter och vad som tar en eftermiddag.',
    read: '7 min',
  },
]

export default function Blogg() {
  return (
    <>
      <Nav />
      <main className="bg-menodi-bg pt-32 pb-24 min-h-screen">
        <div className="mx-auto max-w-4xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-menodi-gold mb-4">
            Blogg
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-menodi-ink text-balance mb-6">
            Tankar för hantverkare som vill{' '}
            <span className="text-gold-shimmer italic">missa färre jobb.</span>
          </h1>
          <p className="text-lg text-menodi-body leading-relaxed mb-14 max-w-2xl text-pretty">
            Vi skriver om det som faktiskt påverkar din topplinje: missade samtal, bokningsflöden,
            hybrid-konvertering. Inga listicles, inga AI-floskler.
          </p>

          {/* Coming soon notice */}
          <div className="bg-menodi-gold-soft border border-menodi-gold/20 rounded-2xl p-6 mb-14">
            <p className="font-mono text-xs uppercase tracking-widest text-menodi-gold-dark mb-2">
              Snart
            </p>
            <p className="text-base text-menodi-ink leading-relaxed">
              Första artikeln publiceras vecka 21. Vill du få den i mailen?{' '}
              <a href="mailto:hej@menodi.se?subject=Bloggprenumeration" className="underline font-medium">
                Skriv till oss
              </a>{' '}
              så lägger vi till dig.
            </p>
          </div>

          {/* Topic ladder */}
          <h2 className="font-serif text-2xl text-menodi-ink mb-6">Kommande ämnen</h2>
          <div className="space-y-3">
            {topics.map((t, i) => (
              <article
                key={i}
                className="card-lift bg-menodi-surface border border-menodi-border rounded-2xl p-6 md:p-7"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-menodi-gold-dark bg-menodi-gold-soft border border-menodi-gold/20 px-2 py-0.5 rounded-full">
                    {t.cat}
                  </span>
                  <span className="font-mono text-xs text-menodi-muted-soft">{t.read}</span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-menodi-ink leading-tight mb-2.5 text-balance">
                  {t.title}
                </h3>
                <p className="text-menodi-body leading-relaxed text-pretty">{t.snippet}</p>
              </article>
            ))}
          </div>

          {/* Back to home */}
          <div className="mt-14">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-menodi-gold-dark font-medium hover:underline"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Tillbaka till startsidan
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
