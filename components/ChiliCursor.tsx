'use client'

import { useEffect, useRef } from 'react'

export default function ChiliCursor() {
  const cursorRef = useRef<SVGSVGElement>(null)
  const trailRef  = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const trail  = trailRef.current
    if (!cursor || !trail) return

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top  = `${e.clientY}px`
      trail.style.left  = `${e.clientX}px`
      trail.style.top   = `${e.clientY}px`
    }

    document.addEventListener('mousemove', onMouseMove)
    return () => document.removeEventListener('mousemove', onMouseMove)
  }, [])

  const cursorStyle: React.CSSProperties = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 999,
    transform: 'translate(-50%, -50%) rotate(-20deg)',
    animation: 'sway 3s ease-in-out infinite',
    left: '-100px',
    top:  '-100px',
  }

  const trailStyle: React.CSSProperties = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 998,
    transform: 'translate(-50%, -50%) rotate(-20deg)',
    transition: 'left 0.2s ease, top 0.2s ease',
    opacity: 0.3,
    left: '-100px',
    top:  '-100px',
  }

  return (
    <>
      <svg ref={cursorRef} style={cursorStyle} viewBox="0 0 18 38" width="22" height="46" xmlns="http://www.w3.org/2000/svg">
        <path d="M9,6 C9.5,3.5 11.5,1.5 11,0" stroke="#3a7d44" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
        <path d="M9,6.5 C7,5 5,6 6.5,7.5 C7.5,6.5 9,6.5 9,6.5Z" fill="#3a7d44"/>
        <path d="M9,6.5 C11,5 13,6 11.5,7.5 C10.5,6.5 9,6.5 9,6.5Z" fill="#3a7d44"/>
        <path d="M9,6.5 C8,4 7,3.5 7.5,5.5 C8,6 9,6.5 9,6.5Z" fill="#3a7d44"/>
        <path d="M9,6.5 C5.5,8 3.5,14 4,21 C4.5,26.5 6.5,32.5 8.5,36 C9,36.8 9.5,36.5 9.5,35.5 C11.5,31.5 13.5,25.5 14,19.5 C14.5,13 12.5,8 9,6.5Z" fill="#e63946"/>
        <path d="M9,6.5 C12.5,8 14.5,13 14,19.5 C13.5,25.5 11.5,31.5 9.5,35.5 C10.5,31 12,24.5 12,19 C12,13.5 11,8.5 9,6.5Z" fill="#c1121f"/>
        <path d="M6.5,10.5 Q5.5,18 6.5,26" stroke="rgba(255,220,210,0.45)" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
      </svg>

      <svg ref={trailRef} style={trailStyle} viewBox="0 0 18 38" width="18" height="38" xmlns="http://www.w3.org/2000/svg">
        <path d="M9,6 C9.5,3.5 11.5,1.5 11,0" stroke="#3a7d44" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <path d="M9,6.5 C5.5,8 3.5,14 4,21 C4.5,26.5 6.5,32.5 8.5,36 C9,36.8 9.5,36.5 9.5,35.5 C11.5,31.5 13.5,25.5 14,19.5 C14.5,13 12.5,8 9,6.5Z" fill="none" stroke="#e63946" strokeWidth="0.8"/>
      </svg>
    </>
  )
}
