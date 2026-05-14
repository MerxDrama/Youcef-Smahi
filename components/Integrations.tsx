/**
 * Integrations — Menodi plugs into the agents and tools you already use.
 * Reference: efferd.com/view/integrations-9, voiceline.ai
 */

const groups = [
  {
    label: 'Kalender',
    items: [
      { name: 'Google Calendar', code: 'GCAL' },
      { name: 'Outlook', code: 'OUT' },
      { name: 'Apple Calendar', code: 'ICAL' },
    ],
  },
  {
    label: 'CRM',
    items: [
      { name: 'Pipedrive', code: 'PIPE' },
      { name: 'HubSpot', code: 'HUB' },
      { name: 'Fortnox', code: 'FTNX' },
    ],
  },
  {
    label: 'Kommunikation',
    items: [
      { name: 'SMS via Twilio', code: 'SMS' },
      { name: 'E-post (SMTP)', code: 'MAIL' },
      { name: 'Slack', code: 'SLCK' },
    ],
  },
  {
    label: 'Automation',
    items: [
      { name: 'Zapier', code: 'ZAP' },
      { name: 'n8n', code: 'N8N' },
      { name: 'Webhook', code: 'WBHK' },
    ],
  },
]

function Tile({ name, code }: { name: string; code: string }) {
  return (
    <div className="card-lift bg-menodi-surface border border-menodi-border rounded-2xl p-5 flex items-center gap-3.5">
      <div className="w-10 h-10 rounded-lg bg-menodi-gold-soft border border-menodi-gold/20 flex items-center justify-center shrink-0">
        <span className="font-mono text-[10px] font-semibold text-menodi-gold-dark tracking-wide">{code}</span>
      </div>
      <span className="text-sm text-menodi-ink font-medium leading-tight">{name}</span>
    </div>
  )
}

export default function Integrations() {
  return (
    <section id="integrationer" className="bg-menodi-bg py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-menodi-gold mb-4">
            04 · Integrationer
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight text-menodi-ink text-balance mb-5">
            Pluggar in i agenterna du redan kör.
          </h2>
          <p className="text-lg text-menodi-body leading-relaxed text-pretty">
            Menodi är inte ännu ett system att lära sig. Det kopplas in i dina befintliga verktyg
            och låter dem prata med varandra.
          </p>
        </div>

        {/* Groups */}
        <div className="space-y-10">
          {groups.map(g => (
            <div key={g.label}>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-menodi-gold-dark">
                  {g.label}
                </span>
                <span className="h-px flex-1 bg-menodi-border" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {g.items.map(it => (
                  <Tile key={it.code} name={it.name} code={it.code} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Custom callout */}
        <div className="mt-14 bg-menodi-soft rounded-3xl border border-menodi-border p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="font-serif text-xl text-menodi-ink mb-1">
              Använder ni ett eget system?
            </p>
            <p className="text-sm text-menodi-muted">
              Custom-integration ingår på Max-planen. Vi bygger åt dig.
            </p>
          </div>
          <a
            href="#demo"
            className="shrink-0 inline-flex items-center gap-2 bg-menodi-gold hover:bg-menodi-gold-hover text-white font-medium text-sm px-6 py-3 rounded-full transition-colors duration-150 focus-gold"
          >
            Prata med oss
          </a>
        </div>
      </div>
    </section>
  )
}
