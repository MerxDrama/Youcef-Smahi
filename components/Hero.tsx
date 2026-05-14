import React from 'react'

function CallCard() {
  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0">
      {/* Ambient glow */}
      <div className="absolute -inset-8 bg-menodi-amber/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative bg-menodi-card border border-menodi-border rounded-2xl overflow-hidden shadow-2xl">
        {/* Phone status bar */}
        <div className="bg-menodi-surface/80 px-4 py-2 flex items-center justify-between border-b border-menodi-border">
          <span className="text-xs text-menodi-muted font-medium tabular-nums">09:14</span>
          <div className="flex items-center gap-1">
            <span className="text-xs text-menodi-muted">4G</span>
            <div className="flex gap-0.5 items-end">
              <span className="w-1 h-2 bg-menodi-muted/60 rounded-sm inline-block" />
              <span className="w-1 h-3 bg-menodi-muted/80 rounded-sm inline-block" />
              <span className="w-1 h-4 bg-menodi-muted rounded-sm inline-block" />
            </div>
          </div>
        </div>

        {/* Incoming call header */}
        <div className="px-5 pt-5 pb-4 text-center border-b border-menodi-border/50">
          <div className="inline-flex items-center gap-2 bg-menodi-amber/10 text-menodi-amber text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-menodi-amber/20">
            <span className="w-2 h-2 bg-menodi-amber rounded-full animate-pulse" />
            Inkommande samtal
          </div>
          <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-menodi-surface border border-menodi-border flex items-center justify-center">
            <svg className="w-7 h-7 text-menodi-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
          <p className="text-white font-semibold text-sm">Ny kund</p>
          <p className="text-menodi-muted text-xs mt-0.5">070-123 45 67</p>
        </div>

        {/* Menodi response flow */}
        <div className="px-5 py-4 space-y-3">
          {/* Answer */}
          <div className="bg-menodi-surface rounded-xl p-3 border border-menodi-border/60">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow" />
              <span className="text-green-400 text-xs font-semibold">Menodi svarar — 1.8 s</span>
            </div>
            <p className="text-gray-300 text-sm leading-snug">
              &ldquo;Hej! Bygg &amp; VVS AB, vad kan jag hjälpa dig med?&rdquo;
            </p>
          </div>

          {/* Booking */}
          <div className="bg-menodi-surface rounded-xl p-3 border border-menodi-border/60">
            <div className="flex items-center gap-2 mb-1.5">
              <svg className="w-3.5 h-3.5 text-menodi-amber shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <span className="text-menodi-amber text-xs font-semibold">Bokar tid i din kalender</span>
            </div>
            <p className="text-gray-300 text-sm">Måndag 13:00 · Stambyte · Kungsholmen</p>
          </div>

          {/* SMS */}
          <div className="bg-menodi-surface rounded-xl p-3 border border-menodi-border/60">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
              <span className="text-blue-400 text-xs font-semibold">SMS skickat — till dig och kunden</span>
            </div>
          </div>
        </div>

        {/* Bottom label */}
        <div className="px-5 pb-4 pt-1 flex items-center justify-center gap-1.5">
          <span className="text-menodi-muted text-xs">Du fick aldrig avbryta jobbet.</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative bg-menodi-dark dot-grid min-h-screen flex items-center pt-16">
      {/* Gradient overlay so text is crisp over the dot grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-menodi-dark via-menodi-dark/95 to-menodi-dark pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-menodi-amber/10 text-menodi-amber text-sm font-medium px-4 py-2 rounded-full mb-8 border border-menodi-amber/20">
              AI-receptionist för VVS · El · Bygg · Våtrum
            </div>

            <h1 className="text-[clamp(2.25rem,5.5vw,4.25rem)] font-bold leading-[1.1] tracking-tight text-white mb-6 text-balance">
              Du missar samtal när du jobbar.{' '}
              <span className="text-menodi-amber">Menodi tar dem åt dig.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
              Bokar in jobb medan du står på taket. Svarar på svenska.
              Förstår skillnaden mellan stambyte och stamspolning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 bg-menodi-amber hover:bg-menodi-amber-hover text-menodi-dark font-semibold text-base px-7 py-3.5 rounded-xl transition-colors duration-150 amber-glow"
              >
                Boka demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#hur-det-funkar"
                className="inline-flex items-center justify-center gap-2 text-gray-300 hover:text-white font-medium text-base px-7 py-3.5 rounded-xl border border-menodi-border hover:border-gray-500 transition-colors duration-150"
              >
                Se hur det funkar
              </a>
            </div>

            <p className="text-menodi-muted text-sm mt-8">
              Ingen hårdvara. Ingen IT-avdelning. Inga kontrakt.
            </p>
          </div>

          {/* Right — phone card */}
          <div className="flex justify-center lg:justify-end">
            <CallCard />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-menodi-muted/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
