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
          dark: '#1a2332',
          navy: '#243447',
          surface: '#0f1520',
          card: '#1e2d40',
          border: '#2a3d55',
          amber: '#f59e0b',
          'amber-hover': '#d97706',
          cream: '#f5f4f0',
          'cream-dark': '#eceae4',
          muted: '#9ca3af',
          'muted-dark': '#6b7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'headline': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.2', fontWeight: '700' }],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ring': 'ring 2s ease-in-out infinite',
      },
      keyframes: {
        ring: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '10%, 30%': { transform: 'rotate(-8deg)' },
          '20%, 40%': { transform: 'rotate(8deg)' },
          '50%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
