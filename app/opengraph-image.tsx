import { ImageResponse } from 'next/og'

export const alt = 'Fasid Fard — Fabbrica Siciliana Droghe'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#f0e6d3',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '64px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* amber rule */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
          <div style={{ width: '80px', height: '1px', background: '#b8650a' }} />
          <div style={{ width: '6px', height: '6px', background: '#b8650a', transform: 'rotate(45deg)' }} />
          <div style={{ width: '80px', height: '1px', background: '#b8650a' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div style={{ fontSize: '20px', fontWeight: 500, letterSpacing: '0.2em', color: '#b8650a', textTransform: 'uppercase' }}>
            Fabbrica Siciliana Droghe
          </div>
          <div style={{ fontSize: '130px', fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.03em', color: '#1a0d05' }}>
            Fasid Fard
          </div>
          <div style={{ fontSize: '22px', fontWeight: 400, letterSpacing: '0.1em', color: '#7a5c3a', marginTop: '8px' }}>
            Via Leucatia, 76A — 95125 Catania CT
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
