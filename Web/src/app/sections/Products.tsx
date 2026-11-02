import { Link } from 'react-router-dom'
import { Star } from '../components/icons'
import { WebScreen } from '../components/screens'
import { PRODUCTS } from '../data/products'
import type { Product } from '../data/products'

export function CustomBanner() {
  return (
    <div className="container custom-banner">
      <div className="custom-banner-inner">
        <span className="tape" style={{ top: -14, left: 32, transform: 'rotate(5deg)' }} />
        <div className="lead">
          we build <em className="serif-em">custom, tailored</em> software for clients.
        </div>
        <p>
          Everything below is ours — products we design, build, and run in-house. It&apos;s also our
          portfolio: the same team is for hire.
        </p>
        <a className="btn btn-primary" href="/#contact">start a project →</a>
      </div>
    </div>
  )
}

function ProductCard({ p, i }: { p: Product; i: number }) {
  return (
    <article className={`prod-card ${p.featured ? 'featured' : ''}`}
      style={{ transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}>
      <span className="tape" style={{ top: -12, right: 40, left: 'auto', transform: `rotate(${i % 2 ? -5 : 6}deg)` }} />
      <div className="prod-grid">
        <div>
          <div className="prod-head">
            <h3>{p.name}</h3>
            <span className="prod-status" style={{ background: p.statusColor, color: 'var(--paper)' }}>
              {p.status}
            </span>
          </div>
          <div className="prod-kind">{p.kind}</div>
          <div className="prod-tagline">“{p.tagline}”</div>
          {p.description.map((paragraph) => (
            <p className="body" key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          <div className="tags" style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
            {p.tags.map((t) => (
              <span key={t} className="mono" style={{ fontSize: 11, padding: '4px 10px', border: '1.5px solid var(--ink)', borderRadius: 999 }}>{t}</span>
            ))}
          </div>
          {p.href && (
            <a className="feat-link" href={p.href} target="_blank" rel="noopener noreferrer" style={{ marginTop: 16 }}>
              {p.linkLabel} ↗
            </a>
          )}
        </div>
        <div>
          <div className="prod-screen">
            {p.image
              ? <img src={p.image} alt={`${p.name} screenshot`} draggable={false} />
              : p.sketch && <WebScreen bg={p.sketch.bg} accent={p.sketch.accent} second={p.sketch.second} variant={p.sketch.variant} />}
          </div>
          <ul className="prod-high">
            {p.highlights.map((h) => (
              <li key={h.slice(0, 32)}>
                <span className="tick" style={{ color: p.color }}>✦</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export function Products() {
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">
              <span className="mono" style={{ color: 'var(--ink)' }}>§ 02</span> · the products
            </span>
            <h2>made <em className="serif-em">here</em>, run here.</h2>
          </div>
          <div className="h-side">
            not a portfolio of other people&apos;s apps — ours. we answer the support emails too.
          </div>
        </div>
        <div className="prod-stack">
          {PRODUCTS.map((p, i) => <ProductCard key={p.id} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}

export function ExploreTeasers() {
  return (
    <div className="container">
      <div className="explore-grid">
        <Link className="explore-card" to="/kits" style={{ transform: 'rotate(-.6deg)' }}>
          <Star color="var(--c5)" size={28} rotation={-10} />
          <h3>the kits →</h3>
          <p>
            Smaller apps and games we release alongside the main products — racing on breakfast
            tables, block building without the combat, pixel art without the ads. Signed, finished,
            free.
          </p>
          <span className="go">/kits</span>
        </Link>
        <Link className="explore-card" to="/labs" style={{ transform: 'rotate(.6deg)' }}>
          <Star color="var(--c2)" size={28} rotation={12} />
          <h3>the labs →</h3>
          <p>
            Tools for people who build with AI agents: a microscope your agent can see through, a
            Bluetooth keyboard for walls of phones, native-app testing over MCP, wireframes as YAML.
          </p>
          <span className="go">/labs</span>
        </Link>
      </div>
    </div>
  )
}
