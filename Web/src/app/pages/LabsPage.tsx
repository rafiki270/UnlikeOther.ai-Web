import { Squiggle, Star } from '../components/icons'
import { LABS_PROJECTS } from '../data/labs'

const STATUS_BG: Record<string, string> = {
  released: 'var(--c4)',
  'early access': 'var(--c2)',
  prototype: 'var(--c3)',
  experiment: 'var(--c5)',
}

export default function LabsPage() {
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
                  <h2>{project.name}</h2>
                  <span className="lab-status" style={{ background: STATUS_BG[project.status], color: 'var(--paper)' }}>
                    {project.status}
                  </span>
                </div>
                <p>{project.what}</p>
                <p>
                  <strong>Why it matters: </strong>
                  {project.why}
                </p>
              </div>
              <ul className="prod-high" style={{ marginTop: 4 }}>
                {project.capabilities.map((capability) => (
                  <li key={capability.slice(0, 32)}>
                    <span className="tick" style={{ color: project.color }}>✦</span>
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
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
