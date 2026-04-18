import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'
import sharp from 'sharp'

export const alt = 'Fasid Fard — Fabbrica Siciliana Droghe'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/jpeg'

export default async function Image() {
  const webpBuffer = readFileSync(join(process.cwd(), 'public', 'spices.webp'))
  const fontRaw = readFileSync(join(process.cwd(), 'assets', 'Anton.ttf'))
  const fontData = fontRaw.buffer.slice(fontRaw.byteOffset, fontRaw.byteOffset + fontRaw.byteLength) as ArrayBuffer
  const pngBuffer = await sharp(webpBuffer).resize(1260, 630, { fit: 'cover' }).png().toBuffer()

  const src = `data:image/png;base64,${pngBuffer.toString('base64')}`

  const pngResponse = new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          overflow: 'hidden',
          position: 'relative',
          fontFamily: 'Anton',
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
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0px',
          }}
        >
          <div style={{ fontSize: 300, fontWeight: 400, lineHeight: 0.88, color: '#f2e4c0', letterSpacing: '-4px' }}>
            FASID
          </div>
          <div style={{ fontSize: 300, fontWeight: 400, lineHeight: 0.88, color: '#f2e4c0', letterSpacing: '-4px' }}>
            FARD
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Anton', data: fontData, style: 'normal', weight: 400 }],
    }
  )

  const renderedPng = Buffer.from(await pngResponse.arrayBuffer())
  const jpeg = await sharp(renderedPng).jpeg({ quality: 82 }).toBuffer()
  return new Response(new Uint8Array(jpeg), { headers: { 'Content-Type': 'image/jpeg' } })
}
