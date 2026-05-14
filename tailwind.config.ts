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
          // Midnight Navy — primary dark (from brand: "Family Navy/Bone/Gold")
          dark: '#0A1F44',
          navy: '#122A58',
          surface: '#060E24',
          card: '#0F2040',
          border: '#1C3568',
          // Champagne Gold — accent (from brand: "Champagne #C9A227")
          amber: '#C9A227',
          'amber-hover': '#A88520',
          // Soft Ivory — light backgrounds (from brand: "Soft Ivory #F4F1EA")
          cream: '#F4F1EA',
          'cream-dark': '#E5DFD2',
          // Bone — warmest background (from brand HTML: background #f0eee9)
          bone: '#f0eee9',
          muted: '#9ca3af',
          'muted-dark': '#6b7280',
        },
      },
      fontFamily: {
        // Familjen Grotesk — the chosen brand typeface
        sans: ['var(--font-familjen)', 'Familjen Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.1', fontWeight: '700' }],
        headline: ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.2', fontWeight: '700' }],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
