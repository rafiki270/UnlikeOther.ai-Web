import { useEffect } from 'react'

/**
 * Nessie (nessie.works) hosted forms — the team's Clients section receives
 * every submission. The embed script does inline validation, the anti-bot
 * proof of work, and in-place success/error messages; without it the form
 * still works as a plain POST to the same endpoint.
 */
export const NESSIE_EMBED_SRC = 'https://api.nessie.works/api/newsletter/embed.js'

export const CONTACT_FORM_ID = '388555ac-06ef-4bdb-a385-c9f809aa2c7d'
export const CONTACT_FORM_ACTION = `https://api.nessie.works/api/contact/post?f=${CONTACT_FORM_ID}`
export const CONTACT_HONEYPOT = `b_${CONTACT_FORM_ID.replace(/-/g, '')}`

export const SIGNUP_FORM_ID = '0bba8be5-32e3-47d0-9b00-1b293338225b'
export const SIGNUP_FORM_ACTION = `https://api.nessie.works/api/newsletter/subscribe/post?f=${SIGNUP_FORM_ID}`
export const SIGNUP_HONEYPOT = `b_${SIGNUP_FORM_ID.replace(/-/g, '')}`

type NessieWindow = Window & { nessieSignup?: unknown[] }

/** Loads the embed script once and registers a form config with it. */
export function useNessieForm(config: Record<string, unknown>) {
  useEffect(() => {
    const w = window as NessieWindow
    if (!document.querySelector(`script[src="${NESSIE_EMBED_SRC}"]`)) {
      const s = document.createElement('script')
      s.src = NESSIE_EMBED_SRC
      s.async = true
      s.defer = true
      document.head.appendChild(s)
    }
    ;(w.nessieSignup = w.nessieSignup || []).push(config)
    // The script owns the queue once loaded; nothing to clean up.
  }, [config])
}

export const CONTACT_FORM_CONFIG = {
  fields: [
    { kind: 'text', label: 'Name', options: [], required: false, tag: 'TEXT' },
    { kind: 'email', label: 'Email address', options: [], required: true, tag: 'EMAIL' },
    { kind: 'textarea', label: 'Message', options: [], required: true, tag: 'MESSAGE' },
    {
      kind: 'consent',
      label: 'Send me news and offers by email. I can unsubscribe at any time.',
      options: [],
      required: false,
      tag: 'MARKETING',
    },
  ],
  id: CONTACT_FORM_ID,
  kind: 'contact',
  limits: { message: 5000, value: 500 },
  successMessage: 'Got it! We’ll be back within 48 hours.',
  words: {
    email: 'Please enter a valid email address.',
    failed: 'Your message could not be sent. Please try again in a moment.',
    required: 'This field is required.',
    tooLong: 'This is too long.',
  },
}

export const SIGNUP_FORM_CONFIG = {
  fields: [{ kind: 'email', label: 'Email address', required: true, tag: 'EMAIL' }],
  id: SIGNUP_FORM_ID,
  successMessage:
    'Almost there — we’ve sent you an email. Press the link in it to confirm.',
  words: {
    email: 'Please enter a valid email address.',
    failed: 'Something went wrong. Please try again.',
    required: 'This field is required.',
  },
}
