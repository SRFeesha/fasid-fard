import type { Metadata } from 'next'
import './globals.css'

const title = 'Fasid Fard'
const description = 'Fabbrica Siciliana Droghe — Via Leucatia, 76A, 95125 Catania CT'
const url = 'https://www.fasidfard.com'

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: ['spezie', 'droghe', 'sicilia', 'catania', 'fasid fard', 'fabbrica siciliana'],
  openGraph: {
    title,
    description,
    url,
    siteName: 'Fasid Fard',
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
