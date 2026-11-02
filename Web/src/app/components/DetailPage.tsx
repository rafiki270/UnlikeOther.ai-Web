import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Star } from './icons'

export interface DetailProps {
  name: string
  tagline?: string
  kind: string
  status: string
  statusColor: string
  color: string
  /** Lead paragraph: what it is. */
  what: string[]
  /** Why it exists / why it matters. */
  why: string[]
  /** What it can do for you. */
  canDo: string[]
  tags?: string[]
  image?: string
  images?: string[]
  href?: string
  linkLabel?: string
  backTo: string
  backLabel: string
  cta?: ReactNode
}

export default function DetailPage(d: DetailProps) {
  return (
    <main>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">
            <Link to={d.backTo} style={{ color: 'var(--c2)', textDecoration: 'none' }}>← {d.backLabel}</Link>
          </span>
          <h1>
            {d.name}
            <Star color={d.color} size={34} rotation={-10} style={{ marginLeft: 16 }} />
          </h1>
          {d.tagline && <div className="prod-tagline" style={{ fontSize: 30 }}>“{d.tagline}”</div>}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <span className="prod-status" style={{ background: d.statusColor, color: 'var(--paper)' }}>
              {d.status}
            </span>
            <span className="prod-kind">{d.kind}</span>
          </div>
        </div>
      </section>

      <section className="container detail-body">
        <div className="detail-grid">
          <div className="detail-main">
            {d.image && (
              <div className="prod-screen detail-hero">
                <img src={d.image} alt={`${d.name} screenshot`} draggable={false} />
              </div>
            )}

            <h2 className="detail-h">what it is</h2>
            {d.what.map((paragraph) => (
              <p className="body" key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}

            {d.why.length > 0 && (
              <>
                <h2 className="detail-h">why it exists</h2>
                {d.why.map((paragraph) => (
                  <p className="body" key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </>
            )}

            <h2 className="detail-h">what it can do for you</h2>
            <ul className="prod-high">
              {d.canDo.map((item) => (
                <li key={item.slice(0, 32)}>
                  <span className="tick" style={{ color: d.color }}>✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {d.tags && (
              <div className="tags" style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20 }}>
                {d.tags.map((t) => (
                  <span key={t} className="mono" style={{ fontSize: 11, padding: '4px 10px', border: '1.5px solid var(--ink)', borderRadius: 999 }}>{t}</span>
                ))}
              </div>
            )}

            {d.href && (
              <a className="btn btn-primary" href={d.href} target="_blank" rel="noopener noreferrer" style={{ marginTop: 24 }}>
                visit {d.linkLabel} →
              </a>
            )}
            {d.cta}
          </div>

          {(d.images?.length ?? 0) > 0 && (
            <aside className="detail-side">
              {d.images!.map((src, i) => (
                <div className="prod-screen detail-shot" key={src} style={{ transform: `rotate(${i % 2 === 0 ? 1 : -1}deg)` }}>
                  <img src={src} alt={`${d.name} screenshot ${i + 2}`} draggable={false} />
                </div>
              ))}
            </aside>
          )}
        </div>
      </section>
    </main>
  )
}
