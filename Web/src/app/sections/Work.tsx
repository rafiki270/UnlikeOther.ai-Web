import { useCallback, useEffect, useRef, useState } from 'react'
import type { MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react'
import { ICONS } from '../components/icons'
import { AppScreen, PhoneFrame, WebScreen } from '../components/screens'
import { FEATURED, PROJECTS, SERVICES } from '../data'
import type { Featured } from '../data'

type AnyPointer = MouseEvent | TouchEvent | ReactMouseEvent | ReactTouchEvent
const pointOf = (e: AnyPointer) => ('touches' in e ? e.touches[0] : e)

// ─── Services ────────────────────────────────────────────────────────────────

const TILTS = ['tilt-l', '', 'tilt-r', 'tilt-r', '', 'tilt-l']

export function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">
              <span className="mono" style={{ color: 'var(--ink)' }}>§ 02</span> · what we do
            </span>
            <h2>a small studio with a <em className="serif-em">big toolkit</em></h2>
          </div>
          <div className="h-side">
            we pick projects we&apos;d <i>actually</i> use ourselves. that&apos;s the whole filter.
          </div>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon]
            return (
              <div key={s.n} className={`svc-card ${TILTS[i]}`} style={{ gridColumn: 'span 4' }}>
                <span className="tape" style={{ top: -12, left: 20 + ((i * 7) % 30), transform: `rotate(${i % 2 ? 6 : -7}deg)` }} />
                <div className="num">PROC.{s.n}</div>
                <div className="ico"><Icon color={s.color} /></div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Featured carousel ───────────────────────────────────────────────────────

const Chevron = ({ dir }: { dir: 'prev' | 'next' }) => (
  <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
    <path d={dir === 'prev' ? 'M 19 7 L 4 7 M 10 1 L 3 7 L 10 13' : 'M 1 7 L 16 7 M 10 1 L 17 7 L 10 13'}
      fill="none" stroke="#16140F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export function FeaturedCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const offsetRef = useRef(0)
  offsetRef.current = offset
  const [dragging, setDragging] = useState(false)
  const drag = useRef({ active: false, startX: 0, startOff: 0, vx: 0, lastX: 0, lastT: 0 })
  const raf = useRef(0)

  // Bounds of the track; `slack` allows a little rubber-banding past the edges.
  const bound = useCallback((v: number, slack: number) => {
    if (!trackRef.current || !wrapRef.current) return v
    const min = wrapRef.current.clientWidth - trackRef.current.scrollWidth
    return Math.max(min - slack, Math.min(slack, v))
  }, [])

  const onDown = (e: ReactMouseEvent | ReactTouchEvent) => {
    cancelAnimationFrame(raf.current)
    const p = pointOf(e)
    drag.current = { active: true, startX: p.clientX, startOff: offsetRef.current, vx: 0, lastX: p.clientX, lastT: performance.now() }
    setDragging(true)
  }

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      const d = drag.current
      if (!d.active) return
      const p = pointOf(e)
      const now = performance.now()
      d.vx = (p.clientX - d.lastX) / Math.max(1, now - d.lastT)
      d.lastX = p.clientX
      d.lastT = now
      setOffset(bound(d.startOff + p.clientX - d.startX, 60))
    }
    const onUp = () => {
      if (!drag.current.active) return
      drag.current.active = false
      setDragging(false)
      // momentum, then snap back inside bounds
      let v = drag.current.vx * 16
      const tick = () => {
        v *= 0.92
        if (Math.abs(v) > 0.4) {
          setOffset((cur) => bound(cur + v, 60))
          raf.current = requestAnimationFrame(tick)
        } else {
          setOffset((cur) => bound(cur, 0))
        }
      }
      if (Math.abs(v) > 1) raf.current = requestAnimationFrame(tick)
      else setOffset((cur) => bound(cur, 0))
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove, { passive: false })
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
      cancelAnimationFrame(raf.current)
    }
  }, [bound])

  const step = (dir: number) => setOffset((cur) => bound(cur - dir * (380 + 24), 0))

  return (
    <section className="featured" id="work">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">
              <span className="mono" style={{ color: 'var(--ink)' }}>§ 03</span> · featured work
            </span>
            <h2>some <em className="serif-em">good</em> ones we shipped lately.</h2>
          </div>
          <div className="h-side">
            ← drag the strip, or use the buttons. there&apos;s 6 in here.
          </div>
        </div>

        <div className="carousel-wrap" ref={wrapRef}>
          <div className="carousel-controls">
            <button className="car-btn" aria-label="prev" onClick={() => step(-1)}><Chevron dir="prev" /></button>
            <button className="car-btn" aria-label="next" onClick={() => step(1)} style={{ background: 'var(--c3)' }}>
              <Chevron dir="next" />
            </button>
          </div>

          <div className="carousel-track" ref={trackRef}
            style={{ transform: `translateX(${offset}px)`, transition: dragging ? 'none' : 'transform .35s cubic-bezier(.2,.9,.2,1)' }}
            onMouseDown={onDown} onTouchStart={onDown}>
            {FEATURED.map((f, i) => <FeatCard key={f.name} f={f} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatCard({ f, i }: { f: Featured; i: number }) {
  return (
    <div className="feat-card" style={{ transform: `rotate(${i % 2 === 0 ? -1.4 : 1.6}deg)` }}>
      <div className="pin" style={{ background: f.accent }} />
      <div className="feat-meta">
        <span className="dot" style={{ background: f.bg }} />
        <span>{f.kind}</span>
        <span style={{ marginLeft: 'auto' }}>{f.year}</span>
      </div>
      <h4>{f.name}</h4>
      <div className="tagline">“{f.tag}”</div>
      <div className={`feat-screen ${f.type === 'web' ? 'web' : ''}`}>
        {f.type === 'phone'
          ? <PhoneFrame><AppScreen bg={f.bg} accent={f.accent} second={f.second} variant={f.variant} /></PhoneFrame>
          : <WebScreen bg={f.bg} accent={f.accent} second={f.second} variant={f.variant} />}
      </div>
      <div className="tags">
        {f.tags.map((t) => <span key={t}>{t}</span>)}
      </div>
    </div>
  )
}

// ─── Projects grid ───────────────────────────────────────────────────────────

const FILTERS = ['all', 'SaaS', 'iOS', 'Mobile']
const SPANS = [4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 6, 6]

export function Projects() {
  const [filter, setFilter] = useState('all')
  const list = filter === 'all' ? PROJECTS
    : PROJECTS.filter((p) => p.kind === filter || (filter === 'Mobile' && (p.kind === 'iOS' || p.kind === 'Mobile')))

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">
              <span className="mono" style={{ color: 'var(--ink)' }}>§ 04</span> · the whole archive
            </span>
            <h2>twelve more, give or take.</h2>
          </div>
          <div className="h-side" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', transform: 'none' }}>
            {FILTERS.map((f) => (
              <span key={f} role="button" tabIndex={0} className={`pill ${filter === f ? 'on' : ''}`}
                onClick={() => setFilter(f)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setFilter(f) }}>
                {f}
              </span>
            ))}
          </div>
        </div>

        <div className="proj-grid">
          {list.map((p, i) => {
            const rot = i % 3 === 0 ? -0.8 : i % 3 === 1 ? 1.0 : -0.4
            return (
              <div key={p.name} className="proj-tile" style={{ gridColumn: `span ${SPANS[i % 12]}`, transform: `rotate(${rot}deg)` }}>
                <div className="proj-thumb">
                  {p.type === 'phone' ? (
                    <div style={{ width: '100%', height: '100%', background: p.bg, padding: '20px 14%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '100%', maxWidth: 180, aspectRatio: '9/16', background: '#16140F',
                        borderRadius: 24, padding: '8px 6px', boxShadow: '4px 4px 0 #16140F' }}>
                        <div style={{ width: '100%', height: '100%', borderRadius: 18, overflow: 'hidden',
                          border: '1.5px solid rgba(255,255,255,.1)' }}>
                          <AppScreen bg={p.bg} accent={p.accent} second={p.second} variant={p.variant} />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <WebScreen bg={p.bg} accent={p.accent} second={p.second} variant={p.variant} />
                  )}
                </div>
                <div className="proj-info">
                  <div>
                    <div className="ttl">{p.name}</div>
                    <div className="desc">{p.desc}</div>
                  </div>
                  <div className="yr">{p.kind} · &apos;{String(p.year).slice(-2)}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
