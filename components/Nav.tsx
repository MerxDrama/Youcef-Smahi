'use client'

import { useEffect, useState } from 'react'

const links = [
  { href: '#losning', label: 'Lösning' },
  { href: '#hur-det-funkar', label: 'Hur det funkar' },
  { href: '#integrationer', label: 'Integrationer' },
  { href: '#priser', label: 'Priser' },
  { href: '/blogg', label: 'Blogg' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-menodi-bg/85 backdrop-blur-md border-b border-menodi-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Wordmark — gold dot of the 'i' */}
        <a href="/" className="flex items-baseline gap-0.5 group" aria-label="Menodi startsida">
          <span className="font-serif text-2xl text-menodi-ink leading-none tracking-tight">
            Menod
          </span>
          <span className="relative inline-flex items-baseline">
            <span className="font-serif text-2xl text-menodi-ink leading-none tracking-tight">i</span>
            {/* Gold dot replacing the dot of 'i' rendered via decoration */}
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-menodi-gold animate-pulse-slow shadow-[0_0_8px_rgba(201,162,39,0.6)]" aria-hidden="true" />
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-menodi-body hover:text-menodi-ink transition-colors duration-150 focus-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#demo"
          className="inline-flex items-center gap-2 bg-menodi-gold hover:bg-menodi-gold-hover text-white font-medium text-sm px-5 py-2.5 rounded-full transition-colors duration-150 focus-gold shadow-[0_4px_16px_-4px_rgba(201,162,39,0.4)]"
        >
          Boka demo
        </a>
      </div>
    </header>
  )
}
