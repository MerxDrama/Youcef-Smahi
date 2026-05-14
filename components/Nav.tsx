'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-menodi-dark/95 backdrop-blur-sm border-b border-menodi-border'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="group" aria-label="Menodi startsida">
          <span className="text-xl font-bold tracking-tight text-white">
            Menodi
          </span>
        </a>

        {/* CTA */}
        <a
          href="#demo"
          className="inline-flex items-center gap-2 bg-menodi-amber hover:bg-menodi-amber-hover text-menodi-dark font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-150"
        >
          Boka demo
        </a>
      </div>
    </header>
  )
}
