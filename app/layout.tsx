import type { Metadata } from 'next'
import { Familjen_Grotesk } from 'next/font/google'
import './globals.css'

// Familjen Grotesk — the Menodi brand typeface
const familjenGrotesk = Familjen_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-familjen',
})

export const metadata: Metadata = {
  title: 'Menodi — AI-receptionist för hantverkare',
  description:
    'Menodi är AI-receptionisten byggd för VVS, el, bygg och våtrum. Svarar på svenska, bokar in jobb, skickar bekräftelser — medan du jobbar.',
  keywords:
    'AI receptionist, hantverkare, VVS, elektriker, byggnadsarbetare, Sverige, telefonservice, bokningssystem',
  authors: [{ name: 'Menodi' }],
  metadataBase: new URL('https://menodi.se'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Menodi — AI-receptionist för hantverkare',
    description:
      'Du missar samtal när du jobbar. Menodi tar dem åt dig — och bokar in jobben.',
    url: 'https://menodi.se',
    siteName: 'Menodi',
    locale: 'sv_SE',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Menodi — AI-receptionist för hantverkare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menodi — AI-receptionist för hantverkare',
    description:
      'Du missar samtal när du jobbar. Menodi tar dem åt dig — och bokar in jobben.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" className={`${familjenGrotesk.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0A1F44" />
      </head>
      <body className="font-sans bg-menodi-dark text-white">{children}</body>
    </html>
  )
}
