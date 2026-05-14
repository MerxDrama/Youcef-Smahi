import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        menodi: {
          // Light-first palette per brand direction
          bg: '#FAFAF7',           // base warm white
          surface: '#FFFFFF',      // pure white card / hero
          soft: '#F4F1EA',         // Soft Ivory — alternating section
          cream: '#F8F5EE',        // gentler cream
          // Text
          ink: '#0A0A0A',          // primary heading
          body: '#2A2A2A',         // body
          muted: '#5B5B57',        // muted secondary
          'muted-soft': '#8A8780', // tertiary
          // Borders
          border: '#E5E2DA',
          'border-strong': '#D4D0C5',
          // Gold — primary accent throughout
          gold: '#C9A227',
          'gold-hover': '#A88520',
          'gold-dark': '#7A5F14',
          'gold-soft': '#F5ECCB',  // tinted background for highlights
          // Dark variant — used sparingly (footer only)
          ink2: '#141414',
        },
      },
      fontFamily: {
        sans: ['var(--font-switzer)', 'Switzer Fallback', 'system-ui', 'sans-serif'],
        serif: ['var(--font-recoleta)', 'Georgia', 'serif'],
        mono: ['var(--font-dm-mono)', 'ui-monospace', 'monospace'],
        hand: ['var(--font-kalam)', 'cursive'],
      },
      fontSize: {
        display: ['clamp(2.75rem, 7vw, 5rem)', { lineHeight: '1.05', fontWeight: '600' }],
        headline: ['clamp(1.875rem, 4.5vw, 3.25rem)', { lineHeight: '1.15', fontWeight: '600' }],
      },
      animation: {
        'radial-intro': 'radial-intro 1.6s ease-out forwards',
        'gold-pulse': 'gold-pulse 4s ease-in-out infinite',
        'gold-shimmer': 'gold-shimmer 6s linear infinite',
        'rise-in': 'rise-in 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'radial-intro': {
          '0%':   { transform: 'scale(0.2)', opacity: '0' },
          '40%':  { opacity: '0.9' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        'gold-pulse': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.04)' },
        },
        'gold-shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'rise-in': {
          '0%':   { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',     opacity: '1' },
        },
      },
      backgroundImage: {
        'gold-gradient':  'linear-gradient(135deg, #E5BE3F 0%, #C9A227 50%, #A88520 100%)',
        'gold-shimmer':   'linear-gradient(90deg, transparent 0%, rgba(201,162,39,0.45) 50%, transparent 100%)',
        'radial-gold':    'radial-gradient(circle at center, rgba(201,162,39,0.35) 0%, rgba(201,162,39,0.08) 35%, transparent 70%)',
      },
    },
  },
  plugins: [],
}

export default config
