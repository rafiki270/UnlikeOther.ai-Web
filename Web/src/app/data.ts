
export type IconName = 'IconBrain' | 'IconCircuit' | 'IconPhone' | 'IconSpark' | 'IconBolt' | 'IconEye'

export interface Service {
  n: string
  title: string
  body: string
  icon: IconName
  color: string
}

export const CONTACT_EMAIL = 'hello@unlikeotherai.com'
export const GITHUB_URL = 'https://github.com/UnlikeOtherAI'

export const SERVICES: Service[] = [
  {
    n: '01',
    title: 'AI strategy & R&D',
    body: "We figure out where AI actually moves the needle for your product — and where it's just noise. Workshops, prototypes, plain-language reports.",
    icon: 'IconBrain',
    color: 'var(--c1)',
  },
  {
    n: '02',
    title: 'SaaS product design & build',
    body: 'End-to-end web product work. We design, ship, and iterate full SaaS tools with a team that does both research and pixels.',
    icon: 'IconCircuit',
    color: 'var(--c2)',
  },
  {
    n: '03',
    title: 'Mobile apps that feel alive',
    body: 'iOS + Android apps with handcrafted motion, real native polish, and AI features that earn their keep.',
    icon: 'IconPhone',
    color: 'var(--c5)',
  },
  {
    n: '04',
    title: 'Brand & visual identity',
    body: 'Logos, type, illustration, and a system you can actually run. We do the weird stuff: mascots, micro-sites, packaging.',
    icon: 'IconSpark',
    color: 'var(--c3)',
  },
  {
    n: '05',
    title: 'Custom AI tooling',
    body: 'Internal copilots, agents, RAG over your messy docs, eval harnesses. We build the boring infra so the magic shows up.',
    icon: 'IconBolt',
    color: 'var(--c4)',
  },
  {
    n: '06',
    title: 'Serious security audits',
    body: 'Authorized API pentests, source and PR security reviews, threat models. Every finding comes with evidence, a fix and a retest checklist. Powered by DeepTest.',
    icon: 'IconEye',
    color: 'var(--c1)',
  },
]

export const NAV_LINKS = [
  { label: 'products', href: '/#products' },
  { label: 'labs', href: '/labs' },
  { label: 'services', href: '/#services' },
  { label: 'contact', href: '/#contact' },
]
