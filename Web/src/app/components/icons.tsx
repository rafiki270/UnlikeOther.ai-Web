import type { CSSProperties, ReactNode } from 'react'

const INK = '#16140F'
const PAPER = '#F4ECDB'

// Shared SVG filters and patterns referenced by url(#…) across the page.
export const Defs = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
    <defs>
      <filter id="wob" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves={2} seed={3} />
        <feDisplacementMap in="SourceGraphic" scale={2.5} />
      </filter>
      <filter id="wob-soft" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves={2} seed={7} />
        <feDisplacementMap in="SourceGraphic" scale={1.4} />
      </filter>
      <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.4" fill="currentColor" opacity=".55" />
      </pattern>
      <pattern id="lines" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="8" stroke="currentColor" strokeWidth="2" opacity=".5" />
      </pattern>
    </defs>
  </svg>
)

// — Service card icons —

type IconProps = { color: string }

const IconBox = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
    <g filter="url(#wob-soft)">{children}</g>
  </svg>
)

export const IconCircuit = ({ color }: IconProps) => (
  <IconBox>
    <circle cx="50" cy="50" r="32" fill="none" stroke={INK} strokeWidth="3" />
    <circle cx="50" cy="50" r="14" fill={color} stroke={INK} strokeWidth="3" />
    <line x1="18" y1="50" x2="6" y2="50" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    <line x1="82" y1="50" x2="94" y2="50" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    <line x1="50" y1="18" x2="50" y2="6" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    <line x1="50" y1="82" x2="50" y2="94" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    <circle cx="6" cy="50" r="3.5" fill={INK} />
    <circle cx="94" cy="50" r="3.5" fill={INK} />
    <circle cx="50" cy="6" r="3.5" fill={INK} />
    <circle cx="50" cy="94" r="3.5" fill={INK} />
  </IconBox>
)

export const IconPhone = ({ color }: IconProps) => (
  <IconBox>
    <rect x="28" y="10" width="44" height="80" rx="8" fill={color} stroke={INK} strokeWidth="3" />
    <rect x="34" y="22" width="32" height="48" rx="3" fill={PAPER} stroke={INK} strokeWidth="2" />
    <circle cx="50" cy="80" r="3.5" fill={INK} />
    <line x1="42" y1="16" x2="58" y2="16" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 40 34 L 60 34 M 40 42 L 54 42 M 40 50 L 58 50" stroke={INK} strokeWidth="2" strokeLinecap="round" />
  </IconBox>
)

export const IconSpark = ({ color }: IconProps) => (
  <IconBox>
    <path d="M 50 8 L 56 42 L 90 50 L 56 58 L 50 92 L 44 58 L 10 50 L 44 42 Z"
      fill={color} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    <circle cx="50" cy="50" r="6" fill={INK} />
  </IconBox>
)

export const IconBrain = ({ color }: IconProps) => (
  <IconBox>
    <path d="M 30 28 Q 20 28 18 42 Q 10 50 18 58 Q 16 72 30 74 Q 36 84 50 80 Q 64 84 70 74 Q 84 72 82 58 Q 90 50 82 42 Q 80 28 70 28 Q 60 18 50 24 Q 40 18 30 28 Z"
      fill={color} stroke={INK} strokeWidth="3" />
    <path d="M 50 24 L 50 80 M 30 40 Q 40 46 50 40 M 70 40 Q 60 46 50 40 M 30 60 Q 40 66 50 60 M 70 60 Q 60 66 50 60"
      fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
  </IconBox>
)

export const IconBolt = ({ color }: IconProps) => (
  <IconBox>
    <path d="M 55 6 L 24 56 L 46 56 L 38 94 L 76 38 L 52 38 Z"
      fill={color} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
  </IconBox>
)

export const IconEye = ({ color }: IconProps) => (
  <IconBox>
    <path d="M 8 50 Q 50 14 92 50 Q 50 86 8 50 Z" fill={color} stroke={INK} strokeWidth="3" />
    <circle cx="50" cy="50" r="16" fill={PAPER} stroke={INK} strokeWidth="3" />
    <circle cx="50" cy="50" r="8" fill={INK} />
    <circle cx="46" cy="46" r="2.5" fill={PAPER} />
  </IconBox>
)

export const ICONS = { IconBrain, IconCircuit, IconPhone, IconSpark, IconBolt, IconEye }

// — Decorative shapes —

type ShapeProps = { color?: string; size?: number; rotation?: number; style?: CSSProperties }

export const Squiggle = ({ color = 'var(--c1)', height = 36, style }: { color?: string; height?: number; style?: CSSProperties }) => (
  <svg className="squiggle" viewBox="0 0 1200 36" preserveAspectRatio="none" style={{ height, ...style }} aria-hidden="true">
    <path d="M 0 18 Q 60 -2 120 18 T 240 18 T 360 18 T 480 18 T 600 18 T 720 18 T 840 18 T 960 18 T 1080 18 T 1200 18"
      fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
)

export const Star = ({ color = 'var(--c3)', size = 24, rotation = 0, style }: ShapeProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} style={{ transform: `rotate(${rotation}deg)`, ...style }} aria-hidden="true">
    <path d="M 12 1 L 14 9 L 23 12 L 14 15 L 12 23 L 10 15 L 1 12 L 10 9 Z"
      fill={color} stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)

export const Arrow = ({ color = INK, style, length = 90 }: { color?: string; style?: CSSProperties; length?: number }) => (
  <svg viewBox="0 0 120 60" width={length} height={length * 0.5} style={style} aria-hidden="true">
    <g filter="url(#wob-soft)">
      <path d="M 8 36 Q 40 6 80 24 T 110 28" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M 100 18 L 112 28 L 100 38" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
)

export const ScribbleHeart = ({ color = 'var(--c5)', size = 28, style }: ShapeProps) => (
  <svg viewBox="0 0 32 32" width={size} height={size} style={style} aria-hidden="true">
    <path d="M 16 28 Q 4 18 4 11 Q 4 4 11 4 Q 14 4 16 8 Q 18 4 21 4 Q 28 4 28 11 Q 28 18 16 28 Z"
      fill={color} stroke={INK} strokeWidth="2" />
  </svg>
)

export const Smiley = ({ color = 'var(--c3)', size = 56, rotation = 0, style }: ShapeProps) => (
  <svg viewBox="0 0 60 60" width={size} height={size} style={{ transform: `rotate(${rotation}deg)`, ...style }} aria-hidden="true">
    <circle cx="30" cy="30" r="26" fill={color} stroke={INK} strokeWidth="2.5" />
    <circle cx="22" cy="26" r="2.5" fill={INK} />
    <circle cx="38" cy="26" r="2.5" fill={INK} />
    <path d="M 19 36 Q 30 46 41 36" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
)
