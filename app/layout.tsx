import type { Metadata } from 'next'
import { Kalam, DM_Mono } from 'next/font/google'
import './globals.css'

// Google Fonts
const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-kalam',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-dm-mono',
})

export const metadata: Metadata = {
  title: 'Menodi — AI-receptionisten för hantverkare',
  description:
    'Branschspecialiserad AI-receptionist för rörmokare, elektriker och byggare. Förstår skillnaden mellan avloppsspolning och stambyte. Hybrid AI + människa ökar konvertering 74%.',
  keywords:
    'AI receptionist, hantverkare, VVS, elektriker, byggare, telefonsvarare, missade samtal, Sverige, hybrid AI',
  authors: [{ name: 'Menodi' }],
  metadataBase: new URL('https://menodi.se'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Menodi — AI-receptionisten för hantverkare',
    description:
      'Förstår branschspråket. Tar samtalen när du jobbar. Hybrid AI + människa — 74% högre konvertering.',
    url: 'https://menodi.se',
    siteName: 'Menodi',
    locale: 'sv_SE',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Menodi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menodi — AI-receptionisten för hantverkare',
    description:
      'Förstår branschspråket. Tar samtalen när du jobbar.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="sv"
      className={`${kalam.variable} ${dmMono.variable} scroll-smooth`}
    >
      <head>
        {/* Fontshare — Switzer + Recoleta */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f%5B%5D=switzer@200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i&f%5B%5D=recoleta@600&display=swap"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#FAFAF7" />
      </head>
      <body className="font-sans bg-menodi-bg text-menodi-body antialiased">
        {children}
      </body>
    </html>
  )
}
