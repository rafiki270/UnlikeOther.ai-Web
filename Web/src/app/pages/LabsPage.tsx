import { Link } from 'react-router-dom'
import { Squiggle, Star } from '../components/icons'
import { LABS_PROJECTS } from '../data/labs'
import { usePageMeta } from '../usePageMeta'

const STATUS_BG: Record<string, string> = {
  released: 'var(--c4)',
  'early access': 'var(--c2)',
  prototype: 'var(--c3)',
  experiment: 'var(--c5)',
  'open source': 'var(--c4)',
}

export default function LabsPage() {
  usePageMeta('Labs', 'Experimental tools from UnlikeOtherAI for people who build with AI agents — Kelpie, Wireframes, EWP, Electroscope, and the UnlikeOther Authenticator.')
  return (
    <main>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">
            <span className="mono" style={{ color: 'var(--ink)' }}>§ 01</span> · the labs
          </span>
          <h1>
            tools we built because <em className="serif-em">we needed them</em>.
            <Star color="var(--c2)" size={34} rotation={14} style={{ marginLeft: 16 }} />
          </h1>
          <div className="sub">
            <p>
              We build our products with AI agents in the loop — and kept hitting the same wall:
              agents that can write code but can&apos;t see a circuit board, drive a real phone, or
              test a native app beyond screenshots and hope.
            </p>
            <p>
              Labs is where we fix that. Everything here speaks <strong>MCP</strong>, so it plugs
              straight into Claude Code, Codex, or whatever agent you run. Statuses are honest: some
              of this is signed and shipping, some of it is a soldering iron and a dream.
            </p>
          </div>
        </div>
      </section>

      <section className="container lab-stack">
        {LABS_PROJECTS.map((project, i) => (
          <article key={project.id} className="lab-card" style={{ transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}>
            <span className="tape" style={{ top: -12, left: 30 + ((i * 13) % 50), transform: `rotate(${i % 2 ? 7 : -6}deg)` }} />
            <div className="lab-grid">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                  <h2>
                    <Link to={`/labs/${project.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {project.name}
                    </Link>
                  </h2>
                  <span className="lab-status" style={{ background: STATUS_BG[project.status], color: 'var(--paper)' }}>
                    {project.status}
                  </span>
                </div>
                <p>{project.what}</p>
                <p>
                  <strong>Why it matters: </strong>
                  {project.why}
                </p>
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 14 }}>
                  <Link className="feat-link" to={`/labs/${project.id}`} style={{ borderBottomColor: 'var(--c2)' }}>
                    more about {project.name.split(' ')[0]} →
                  </Link>
                  {project.href && (
                    <a className="feat-link" href={project.href} target="_blank" rel="noopener noreferrer">
                      {project.linkLabel ?? project.href.replace(/^https?:\/\//, '')} ↗
                    </a>
                  )}
                </div>
              </div>
              <div>
                {project.image && (
                  <div className="prod-screen">
                    <img src={project.image} alt={`${project.name} screenshot`} draggable={false} />
                  </div>
                )}
                <ul className="prod-high" style={{ marginTop: 4 }}>
                  {project.capabilities.map((capability) => (
                    <li key={capability.slice(0, 32)}>
                      <span className="tick" style={{ color: project.color }}>✦</span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <div className="container">
        <Squiggle color="var(--c2)" />
      </div>

      <section className="container" style={{ paddingBottom: 100 }}>
        <div className="custom-banner-inner" style={{ transform: 'rotate(.4deg)' }}>
          <div className="lead">
            want early access — or one of these <em className="serif-em">bent to your workflow</em>?
          </div>
          <p>
            Most Labs tools started as a problem on our own bench. If one of them is 80% of what you
            need, talk to us about the other 20%.
          </p>
          <a className="btn btn-blue" href="mailto:hello@unlikeotherai.com">hello@unlikeotherai.com</a>
        </div>
      </section>
    </main>
  )
}
