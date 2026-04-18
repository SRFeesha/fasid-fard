import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fasid Fard',
  description: 'Fabbrica siciliana di droghe — Via Leucatia, 76A, 95125 Catania CT',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
