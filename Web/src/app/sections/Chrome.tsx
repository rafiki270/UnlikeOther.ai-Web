import type { MouseEvent as ReactMouseEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Smiley } from '../components/icons'
import { NewsletterSignup } from '../components/NewsletterSignup'
import { NAV_LINKS } from '../data'
import { PRODUCTS } from '../data/products'

function isCurrentPage(href: string, pathname: string) {
  if (href === '/labs') return pathname === '/labs' || pathname.startsWith('/labs/')
  if (href === '/#products') return PRODUCTS.some((p) => pathname === `/${p.id}`)
  return false
}

export function Nav({ onLogoClick }: { onLogoClick: (e: ReactMouseEvent<HTMLElement>) => void }) {
  const { pathname } = useLocation()
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
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
        </Link>
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <Link key={l.label} to={l.href} aria-current={isCurrentPage(l.href, pathname) ? 'page' : undefined}>
              {l.label}
            </Link>
          ))}
          <Link className="nav-cta" to="/#contact">start a project →</Link>
        </div>
      </div>
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="container">
        <NewsletterSignup />
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: 12 }}>
          <Smiley size={36} rotation={-8} />
          <span className="hand" style={{ fontSize: 26, color: 'var(--c2)' }}>made by hand, mostly.</span>
          <Smiley color="var(--c1)" size={36} rotation={8} />
        </div>
        <nav className="footer-legal" aria-label="Legal">
          <a href="/privacy/">Privacy policy</a>
          <a href="/terms/">Terms of service</a>
        </nav>
        © {new Date().getFullYear()} UnlikeOtherAI studio · ★ try the Konami code ↑↑↓↓←→←→BA
      </div>
    </footer>
  )
}
