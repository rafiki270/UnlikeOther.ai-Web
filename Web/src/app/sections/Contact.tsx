import { useState } from 'react'
import type { FormEvent } from 'react'
import { Arrow, Star } from '../components/icons'
import { CONTACT_EMAIL, GITHUB_URL } from '../data'

const INTEREST_OPTS = ['Mobile app', 'SaaS', 'AI feature', 'Security audit', 'Brand & identity', 'A vibe check']
const BUDGET_OPTS = ['< £25k', '£25–75k', '£75–150k', '£150k+']

function Pill({ label, on, onClick }: { label: string; on: boolean; onClick: () => void }) {
  return (
    <span role="button" tabIndex={0} aria-pressed={on} className={`pill ${on ? 'on' : ''}`} onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } }}>
      {label}
    </span>
  )
}

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [interests, setInterests] = useState<string[]>([])
  const [budget, setBudget] = useState('')
  const [sent, setSent] = useState(false)

  const toggle = (o: string) =>
    setInterests((cur) => (cur.includes(o) ? cur.filter((x) => x !== o) : [...cur, o]))

  // The site is static, so the brief is handed to the visitor's mail client.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `What kind of thing: ${interests.join(', ') || '-'}`,
      `Budget: ${budget || '-'}`,
      '',
      message,
    ].join('\n')
    const subject = `New project${name ? ` from ${name}` : ''}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div>
            <span className="eyebrow mono" style={{ color: 'var(--c2)' }}>§ 04 · start a project</span>
            <div className="sub">drop us a line — we&apos;re kind</div>
            <h2>
              got something <em className="serif-em" style={{ color: 'var(--c1)' }}>strange</em>
              <br />you want built?
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.5, maxWidth: '38ch', color: 'rgba(0,0,0,.8)' }}>
              We pick up a handful of new engagements a quarter. A short note tells us a lot;
              we&apos;ll come back within 48hrs whether it&apos;s a fit or not.
            </p>
            <ul>
              <li className="contact-email">
                <span className="bullet">@</span>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                <span className="contact-email__prompt" aria-hidden="true">
                  <Arrow style={{ transform: 'rotate(180deg)' }} color="var(--c2)" length={96} />
                  <span className="hand">say hi!</span>
                </span>
              </li>
              <li><span className="bullet" style={{ background: 'var(--c1)' }}>↗</span> <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">github.com/UnlikeOtherAI</a></li>
              <li><span className="bullet" style={{ background: 'var(--c5)' }}>♥</span> Scotland &amp; Czech Republic, mostly.</li>
            </ul>
          </div>

          <form className="form" onSubmit={onSubmit}>
            <span className="tape" style={{ top: -14, left: 40 }} />
            <span className="tape" style={{ top: -14, right: 40, transform: 'rotate(7deg)' }} />
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <Star color="var(--c1)" size={80} rotation={20} />
                <h3 className="display" style={{ fontSize: 40, margin: '14px 0 6px' }}>got it!</h3>
                <p className="hand" style={{ fontSize: 24, color: 'var(--c2)' }}>back in 48 hrs.</p>
              </div>
            ) : (
              <>
                <div className="field">
                  <label htmlFor="c-name">your name</label>
                  <input id="c-name" type="text" placeholder="e.g. Sam Whitmore" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="field">
                  <label htmlFor="c-email">email</label>
                  <input id="c-email" type="email" required placeholder="sam@somewhere.co" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="field">
                  <label>what kind of thing?</label>
                  <div className="pill-row">
                    {INTEREST_OPTS.map((o) => <Pill key={o} label={o} on={interests.includes(o)} onClick={() => toggle(o)} />)}
                  </div>
                </div>
                <div className="field">
                  <label>budget-ish</label>
                  <div className="pill-row">
                    {BUDGET_OPTS.map((o) => <Pill key={o} label={o} on={budget === o} onClick={() => setBudget(o)} />)}
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="c-msg">tell us a bit</label>
                  <textarea id="c-msg" placeholder="the more specific, the better. screenshots welcome."
                    value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  send it →
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
