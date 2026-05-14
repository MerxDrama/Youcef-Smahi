export default function Footer() {
  return (
    <footer className="bg-menodi-surface border-t border-menodi-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-bold text-white tracking-tight">Menodi</span>
              <span className="w-1.5 h-1.5 rounded-full bg-menodi-amber" />
            </div>
            <p className="text-sm text-menodi-muted max-w-xs leading-relaxed">
              AI-receptionist byggd för svenska hantverkare.
              Du jobbar. Vi svarar.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-menodi-muted">
            <a href="#hur-det-funkar" className="hover:text-white transition-colors">Hur det funkar</a>
            <a href="#priser" className="hover:text-white transition-colors">Priser</a>
            <a href="#fragor" className="hover:text-white transition-colors">Frågor</a>
            <a href="#demo" className="hover:text-white transition-colors">Boka demo</a>
          </nav>

          {/* Contact */}
          <div className="text-sm text-menodi-muted">
            <a href="mailto:hej@menodi.se" className="hover:text-white transition-colors">
              hej@menodi.se
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-menodi-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-menodi-muted/60">
          <p>© {new Date().getFullYear()} Menodi AB. Alla rättigheter förbehållna.</p>
          <div className="flex gap-6">
            <a href="/integritetspolicy" className="hover:text-menodi-muted transition-colors">
              Integritetspolicy
            </a>
            <a href="/villkor" className="hover:text-menodi-muted transition-colors">
              Användarvillkor
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
