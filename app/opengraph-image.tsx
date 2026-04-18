import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'
import sharp from 'sharp'

export const alt = 'Fasid Fard — Fabbrica Siciliana Droghe'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const webpBuffer = readFileSync(join(process.cwd(), 'public', 'spices.webp'))
  const pngBuffer = await sharp(webpBuffer).resize(1260, 630, { fit: 'cover' }).png().toBuffer()
  const src = `data:image/png;base64,${pngBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          overflow: 'hidden',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        <img src={src} width={1260} height={630} style={{ position: 'absolute', top: 0, left: -30 }} />
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(12, 6, 2, 0.52)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 155,
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-4px',
              color: '#f2e4c0',
            }}
          >
            FASID FARD
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
