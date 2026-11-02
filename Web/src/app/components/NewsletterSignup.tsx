import {
  SIGNUP_FORM_ACTION,
  SIGNUP_FORM_CONFIG,
  SIGNUP_FORM_ID,
  SIGNUP_HONEYPOT,
  useNessieForm,
} from '../nessieForms'

export function NewsletterSignup() {
  useNessieForm(SIGNUP_FORM_CONFIG)

  return (
    <div className="foot-signup nessie-signup nessie-signup--unstyled" lang="en-GB">
      <p className="foot-signup-lead">leave your email and we&apos;ll write when we ship something new.</p>
      <form
        action={SIGNUP_FORM_ACTION}
        method="post"
        id="nessie-embedded-subscribe-form"
        name="nessie-embedded-subscribe-form"
        className="validate"
        data-nessie-form={SIGNUP_FORM_ID}
        target="_self"
        noValidate
      >
        <div className="signup-row-inner">
          <div data-nessie-field="EMAIL" className="signup-email">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input type="email" name="EMAIL" className="required email" id="newsletter-email" required autoComplete="email" placeholder="you@somewhere.co" />
          </div>
          <div aria-hidden="true" style={{ position: 'absolute', left: -5000 }}>
            <input type="text" name={SIGNUP_HONEYPOT} tabIndex={-1} defaultValue="" autoComplete="off" />
          </div>
          <button type="submit" name="subscribe" id="nessie-embedded-subscribe" className="btn btn-blue">
            keep me posted →
          </button>
          <div className="signup-responses">
            <div className="response" id="nessie-error-response" style={{ display: 'none' }} role="alert" />
            <div className="response" id="nessie-success-response" style={{ display: 'none' }} role="status" />
          </div>
        </div>
      </form>
    </div>
  )
}
