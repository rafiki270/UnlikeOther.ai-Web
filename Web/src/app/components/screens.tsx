import type { ReactNode } from 'react'

const INK = '#16140F'
const PAPER = '#F4ECDB'

export type ScreenProps = { bg: string; accent: string; second: string; variant?: number }

// Sketchy portrait app UI used inside phone frames.
export const AppScreen = ({ bg, accent, second, variant = 0 }: ScreenProps) => {
  let items: ReactNode = null
  if (variant === 0) {
    items = (
      <g>
        <rect x="20" y="40" width="120" height="20" rx="6" fill={accent} stroke={INK} strokeWidth="2" />
        <rect x="20" y="70" width="80" height="10" rx="4" fill={INK} opacity=".55" />
        <rect x="20" y="86" width="120" height="60" rx="10" fill={second} stroke={INK} strokeWidth="2" />
        <circle cx="48" cy="116" r="10" fill={PAPER} stroke={INK} strokeWidth="2" />
        <rect x="64" y="110" width="60" height="6" rx="3" fill={INK} opacity=".6" />
        <rect x="64" y="120" width="40" height="5" rx="2.5" fill={INK} opacity=".4" />
        <rect x="20" y="156" width="120" height="50" rx="10" fill={accent} stroke={INK} strokeWidth="2" opacity=".7" />
        <rect x="20" y="216" width="120" height="50" rx="10" fill={second} stroke={INK} strokeWidth="2" opacity=".7" />
      </g>
    )
  } else if (variant === 1) {
    // dashboard
    items = (
      <g>
        <circle cx="80" cy="90" r="44" fill={accent} stroke={INK} strokeWidth="2" />
        <circle cx="80" cy="90" r="22" fill={bg} stroke={INK} strokeWidth="2" />
        <path d="M 80 46 A 44 44 0 0 1 124 90 L 80 90 Z" fill={second} stroke={INK} strokeWidth="2" />
        <rect x="20" y="160" width="50" height="60" rx="8" fill={second} stroke={INK} strokeWidth="2" />
        <rect x="76" y="160" width="50" height="60" rx="8" fill={accent} stroke={INK} strokeWidth="2" opacity=".7" />
        <rect x="20" y="232" width="120" height="32" rx="8" fill={INK} />
        <rect x="34" y="244" width="50" height="8" rx="3" fill={bg} />
      </g>
    )
  } else if (variant === 2) {
    // chat
    items = (
      <g>
        <rect x="20" y="40" width="120" height="20" rx="10" fill={accent} stroke={INK} strokeWidth="2" />
        <rect x="20" y="76" width="86" height="32" rx="14" fill={second} stroke={INK} strokeWidth="2" />
        <rect x="54" y="120" width="86" height="32" rx="14" fill={accent} stroke={INK} strokeWidth="2" />
        <rect x="20" y="164" width="100" height="32" rx="14" fill={second} stroke={INK} strokeWidth="2" />
        <rect x="20" y="240" width="120" height="28" rx="14" fill={PAPER} stroke={INK} strokeWidth="2" />
      </g>
    )
  } else if (variant === 3) {
    // map / location
    items = (
      <g>
        <rect x="20" y="40" width="120" height="180" rx="12" fill={second} stroke={INK} strokeWidth="2" />
        <path d="M 30 90 Q 70 60 110 100 T 130 160" fill="none" stroke={INK} strokeWidth="2" opacity=".6" />
        <path d="M 28 140 L 80 170" fill="none" stroke={INK} strokeWidth="2" opacity=".6" />
        <circle cx="80" cy="120" r="8" fill={accent} stroke={INK} strokeWidth="2" />
        <circle cx="48" cy="180" r="6" fill={accent} stroke={INK} strokeWidth="2" />
        <rect x="20" y="232" width="120" height="32" rx="10" fill={accent} stroke={INK} strokeWidth="2" />
      </g>
    )
  } else if (variant === 4) {
    // grid feed
    items = (
      <g>
        <rect x="20" y="40" width="120" height="24" rx="6" fill={accent} stroke={INK} strokeWidth="2" />
        <rect x="20" y="76" width="56" height="56" rx="8" fill={second} stroke={INK} strokeWidth="2" />
        <rect x="84" y="76" width="56" height="56" rx="8" fill={accent} stroke={INK} strokeWidth="2" opacity=".75" />
        <rect x="20" y="140" width="56" height="56" rx="8" fill={accent} stroke={INK} strokeWidth="2" opacity=".75" />
        <rect x="84" y="140" width="56" height="56" rx="8" fill={second} stroke={INK} strokeWidth="2" />
        <rect x="20" y="204" width="120" height="60" rx="10" fill={INK} />
      </g>
    )
  } else if (variant === 5) {
    // big hero card
    items = (
      <g>
        <rect x="20" y="40" width="120" height="140" rx="14" fill={accent} stroke={INK} strokeWidth="2" />
        <circle cx="80" cy="100" r="28" fill={second} stroke={INK} strokeWidth="2" />
        <rect x="20" y="196" width="74" height="10" rx="4" fill={INK} />
        <rect x="20" y="212" width="120" height="6" rx="3" fill={INK} opacity=".4" />
        <rect x="20" y="224" width="90" height="6" rx="3" fill={INK} opacity=".4" />
        <rect x="20" y="244" width="120" height="24" rx="12" fill={INK} />
      </g>
    )
  }
  return (
    <svg viewBox="0 0 160 280" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
      <rect width="160" height="280" fill={bg} />
      <rect width="160" height="280" fill="url(#dots)" opacity=".25" style={{ color: INK }} />
      {items}
    </svg>
  )
}

// Landscape browser/SaaS UI.
export const WebScreen = ({ bg, accent, second, variant = 0 }: ScreenProps) => {
  let inner: ReactNode
  if (variant === 0) {
    inner = (
      <g>
        <rect x="16" y="40" width="80" height="120" rx="8" fill={second} stroke={INK} strokeWidth="2" />
        <rect x="104" y="40" width="160" height="56" rx="8" fill={accent} stroke={INK} strokeWidth="2" />
        <rect x="104" y="104" width="160" height="56" rx="8" fill={second} stroke={INK} strokeWidth="2" opacity=".75" />
        <rect x="16" y="168" width="248" height="6" rx="3" fill={INK} opacity=".3" />
        <rect x="16" y="180" width="180" height="6" rx="3" fill={INK} opacity=".3" />
      </g>
    )
  } else if (variant === 1) {
    inner = (
      <g>
        <path d="M 16 150 L 60 110 L 100 130 L 150 70 L 200 100 L 250 50 L 264 60"
          fill="none" stroke={accent} strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="60" cy="110" r="4" fill={accent} stroke={INK} strokeWidth="1.5" />
        <circle cx="150" cy="70" r="4" fill={accent} stroke={INK} strokeWidth="1.5" />
        <circle cx="250" cy="50" r="4" fill={accent} stroke={INK} strokeWidth="1.5" />
        <rect x="16" y="170" width="74" height="20" rx="6" fill={second} stroke={INK} strokeWidth="1.5" />
        <rect x="100" y="170" width="74" height="20" rx="6" fill={second} stroke={INK} strokeWidth="1.5" />
        <rect x="184" y="170" width="80" height="20" rx="6" fill={accent} stroke={INK} strokeWidth="1.5" />
      </g>
    )
  } else if (variant === 2) {
    inner = (
      <g>
        <rect x="16" y="40" width="248" height="32" rx="10" fill={accent} stroke={INK} strokeWidth="2" />
        <rect x="16" y="80" width="116" height="100" rx="10" fill={second} stroke={INK} strokeWidth="2" />
        <rect x="148" y="80" width="116" height="48" rx="10" fill={second} stroke={INK} strokeWidth="2" opacity=".75" />
        <rect x="148" y="136" width="116" height="44" rx="10" fill={accent} stroke={INK} strokeWidth="2" opacity=".75" />
      </g>
    )
  } else {
    inner = (
      <g>
        <circle cx="80" cy="100" r="50" fill={accent} stroke={INK} strokeWidth="2" />
        <rect x="150" y="60" width="114" height="14" rx="6" fill={INK} />
        <rect x="150" y="84" width="80" height="8" rx="4" fill={INK} opacity=".5" />
        <rect x="150" y="100" width="114" height="8" rx="4" fill={INK} opacity=".5" />
        <rect x="150" y="118" width="100" height="22" rx="10" fill={second} stroke={INK} strokeWidth="2" />
      </g>
    )
  }
  return (
    <svg viewBox="0 0 280 220" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
      <rect width="280" height="220" fill={bg} />
      <rect width="280" height="220" fill="url(#lines)" opacity=".15" style={{ color: INK }} />
      {/* fake browser bar */}
      <rect x="0" y="0" width="280" height="22" fill={PAPER} />
      <line x1="0" y1="22" x2="280" y2="22" stroke={INK} strokeWidth="1.5" />
      <circle cx="10" cy="11" r="3" fill="#FF5C39" />
      <circle cx="22" cy="11" r="3" fill="#F4B53A" />
      <circle cx="34" cy="11" r="3" fill="#1F7A4D" />
      {inner}
    </svg>
  )
}

// Phone bezel wrapping an AppScreen.
export const PhoneFrame = ({ children, color = INK }: { children: ReactNode; color?: string }) => (
  <div style={{
    width: '100%', height: '100%', position: 'relative',
    borderRadius: 'inherit', overflow: 'hidden', background: color,
    padding: '14px 10px 16px', display: 'flex', flexDirection: 'column',
  }}>
    <div style={{
      position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)',
      width: 60, height: 16, background: color, borderRadius: 999, zIndex: 2,
    }} />
    <div style={{
      flex: 1, borderRadius: 18, overflow: 'hidden',
      border: '1.5px solid rgba(255,255,255,.1)', position: 'relative',
    }}>
      {children}
    </div>
  </div>
)
