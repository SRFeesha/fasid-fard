import type { Metadata } from 'next'
import { Sansita } from 'next/font/google'
import './globals.css'

const sansita = Sansita({
  subsets: ['latin'],
  weight: ['400', '900'],
  style: ['normal', 'italic'],
  variable: '--font-sansita',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fasid Fard',
  description: 'Fabbrica siciliana di droghe — Via Leucatia, 76A, 95125 Catania CT',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={sansita.variable}>
      <body>{children}</body>
    </html>
  )
}
