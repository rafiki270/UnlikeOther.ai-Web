import { ICONS } from '../components/icons'
import { SERVICES } from '../data'

// ─── Services ────────────────────────────────────────────────────────────────

const TILTS = ['tilt-l', '', 'tilt-r', 'tilt-r', '', 'tilt-l']

export function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">
              <span className="mono" style={{ color: 'var(--ink)' }}>§ 03</span> · what we do
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
