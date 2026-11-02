import { Link } from 'react-router-dom'
import { Squiggle, Star } from '../components/icons'
import { LABS_PROJECTS } from '../data/labs'
import {
  SIGNUP_FORM_ACTION,
  SIGNUP_FORM_CONFIG,
  SIGNUP_FORM_ID,
  SIGNUP_HONEYPOT,
  useNessieForm,
} from '../nessieForms'
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
  useNessieForm(SIGNUP_FORM_CONFIG)
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
          <article key={project.id} className="lab-card" style={{ transform: `rotate(${i % 2 === 0 ? -0.4 : 0.4}deg)` }}>
            <span className="tape" style={{ top: -12, left: 30 + ((i * 13) % 50), transform: `rotate(${i % 2 ? 7 : -6}deg)` }} />
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
            {project.image && (
              <div className="prod-screen" style={{ marginTop: 18 }}>
                <img src={project.image} alt={`${project.name} screenshot`} draggable={false} />
              </div>
            )}
            <p>{project.what}</p>
            <p>
              <strong>Why it matters: </strong>
              {project.why}
            </p>
            <ul className="prod-high" style={{ marginTop: 16 }}>
              {project.capabilities.map((capability) => (
                <li key={capability.slice(0, 32)}>
                  <span className="tick" style={{ color: project.color }}>✦</span>
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 16 }}>
              <Link className="feat-link" to={`/labs/${project.id}`} style={{ borderBottomColor: 'var(--c2)' }}>
                more about {project.name.split(' ')[0]} →
              </Link>
              {project.href && (
                <a className="feat-link" href={project.href} target="_blank" rel="noopener noreferrer">
                  {project.linkLabel ?? project.href.replace(/^https?:\/\//, '')} ↗
                </a>
              )}
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
            need, talk to us about the other 20% — or leave your email and we&apos;ll write when
            something new ships.
          </p>
          <div id="nessie_embed_shell" style={{ flex: '1 1 100%' }}>
            <div id="nessie_embed_signup" className="nessie-signup nessie-signup--unstyled" lang="en-GB">
              <form
                action={SIGNUP_FORM_ACTION}
                method="post"
                id="nessie-embedded-subscribe-form"
                name="nessie-embedded-subscribe-form"
                className="validate signup-row"
                data-nessie-form={SIGNUP_FORM_ID}
                target="_self"
                noValidate
              >
                <div id="nessie_embed_signup_scroll" className="signup-row-inner">
                  <div data-nessie-field="EMAIL" className="signup-email">
                    <label htmlFor="nessie-EMAIL" className="sr-only">Email address</label>
                    <input type="email" name="EMAIL" className="required email" id="nessie-EMAIL" required autoComplete="email" placeholder="you@somewhere.co" />
                  </div>
                  <div aria-hidden="true" style={{ position: 'absolute', left: -5000 }}>
                    <input type="text" name={SIGNUP_HONEYPOT} tabIndex={-1} defaultValue="" autoComplete="off" />
                  </div>
                  <button type="submit" name="subscribe" id="nessie-embedded-subscribe" className="btn btn-blue">
                    keep me posted →
                  </button>
                  <a className="feat-link" href="mailto:hello@unlikeotherai.com" style={{ alignSelf: 'center' }}>
                    or email hello@unlikeotherai.com ↗
                  </a>
                  <div id="nessie-responses" className="clear" style={{ flex: '1 1 100%' }}>
                    <div className="response" id="nessie-error-response" style={{ display: 'none' }} role="alert" />
                    <div className="response" id="nessie-success-response" style={{ display: 'none' }} role="status" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
