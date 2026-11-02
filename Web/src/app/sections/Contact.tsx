import { useState } from 'react'
import { Arrow } from '../components/icons'
import { CONTACT_EMAIL, GITHUB_URL } from '../data'
import {
  CONTACT_FORM_ACTION,
  CONTACT_FORM_CONFIG,
  CONTACT_FORM_ID,
  CONTACT_HONEYPOT,
  useNessieForm,
} from '../nessieForms'

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

  useNessieForm(CONTACT_FORM_CONFIG)

  const toggle = (o: string) =>
    setInterests((cur) => (cur.includes(o) ? cur.filter((x) => x !== o) : [...cur, o]))

  // The pills travel inside MESSAGE; the Nessie form only knows name/email/message.
  const composedMessage = [
    interests.length ? `What kind of thing: ${interests.join(', ')}` : '',
    budget ? `Budget: ${budget}` : '',
    interests.length || budget ? '' : null,
    message,
  ]
    .filter((line) => line !== null)
    .join('\n')

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

          <div className="form" id="nessie_embed_shell">
            <span className="tape" style={{ top: -14, left: 40 }} />
            <span className="tape" style={{ top: -14, right: 40, transform: 'rotate(7deg)' }} />
            <div id="nessie_embed_signup" className="nessie-signup nessie-contact nessie-signup--unstyled" lang="en-GB">
              <form
                action={CONTACT_FORM_ACTION}
                method="post"
                id="nessie-embedded-contact-form"
                name="nessie-embedded-contact-form"
                className="validate"
                data-nessie-form={CONTACT_FORM_ID}
                data-nessie-kind="contact"
                target="_self"
                noValidate
              >
                <div id="nessie_embed_signup_scroll">
                  <div className="field" data-nessie-field="TEXT">
                    <label htmlFor="nessie-TEXT">your name</label>
                    <input id="nessie-TEXT" name="TEXT" type="text" maxLength={500} placeholder="e.g. Sam Whitmore" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="field" data-nessie-field="EMAIL">
                    <label htmlFor="nessie-EMAIL">email</label>
                    <input id="nessie-EMAIL" name="EMAIL" className="required email" type="email" required maxLength={500} autoComplete="email" placeholder="sam@somewhere.co" value={email} onChange={(e) => setEmail(e.target.value)} />
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
                  <div className="field" data-nessie-field="MESSAGE">
                    <label htmlFor="c-msg">tell us a bit</label>
                    <textarea id="c-msg" placeholder="the more specific, the better. screenshots welcome."
                      value={message} onChange={(e) => setMessage(e.target.value)} />
                    <textarea name="MESSAGE" id="nessie-MESSAGE" className="required textarea" required maxLength={5000} value={composedMessage} readOnly hidden />
                  </div>
                  <div className="field" data-nessie-field="MARKETING">
                    <label className="consent-row" htmlFor="nessie-MARKETING">
                      <input type="checkbox" name="MARKETING" id="nessie-MARKETING" value="yes" />
                      <span>send me the occasional news email. unsubscribe any time.</span>
                    </label>
                  </div>
                  <div id="nessie-responses" className="clear">
                    <div className="response" id="nessie-error-response" style={{ display: 'none' }} role="alert" />
                    <div className="response" id="nessie-success-response" style={{ display: 'none' }} role="status" />
                  </div>
                  <div aria-hidden="true" style={{ position: 'absolute', left: -5000 }}>
                    <input type="text" name={CONTACT_HONEYPOT} tabIndex={-1} defaultValue="" autoComplete="off" />
                  </div>
                  <button type="submit" name="send" id="nessie-embedded-send" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    send it →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
