import type { MouseEvent as ReactMouseEvent } from 'react'
import { Smiley } from '../components/icons'
import { NAV_LINKS } from '../data'

export function Nav({ onLogoClick }: { onLogoClick: (e: ReactMouseEvent<HTMLElement>) => void }) {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="logo" onClick={onLogoClick}>
          <div className="logo-mark">
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <g filter="url(#wob-soft)">
                <path d="M 8 8 L 8 18 Q 8 24 16 24 Q 24 24 24 18 L 24 8"
                  fill="none" stroke="#F4ECDB" strokeWidth="3.5" strokeLinecap="round" />
                <circle cx="16" cy="14" r="2" fill="#F4ECDB" />
              </g>
            </svg>
          </div>
          <div className="logo-text">
            UnlikeOtherAI<br />
            <small>a tiny studio ✦</small>
          </div>
        </div>
        <div className="nav-links">
          {NAV_LINKS.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
          <a className="nav-cta" href="#contact">start a project →</a>
        </div>
      </div>
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="container">
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: 12 }}>
          <Smiley size={36} rotation={-8} />
          <span className="hand" style={{ fontSize: 26, color: 'var(--c2)' }}>made by hand, mostly.</span>
          <Smiley color="var(--c1)" size={36} rotation={8} />
        </div>
        © {new Date().getFullYear()} UnlikeOtherAI studio · ★ try the Konami code ↑↑↓↓←→←→BA
      </div>
    </footer>
  )
}
