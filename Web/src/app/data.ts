export type IconName = 'IconBrain' | 'IconCircuit' | 'IconPhone' | 'IconSpark' | 'IconBolt' | 'IconEye'

export interface Service {
  n: string
  title: string
  body: string
  icon: IconName
  color: string
}

export interface Featured {
  name: string
  tag: string
  kind: string
  year: string
  tags: string[]
  bg: string
  accent: string
  second: string
  type: 'phone' | 'web'
  variant: number
}

export interface Project {
  name: string
  desc: string
  year: number
  kind: 'SaaS' | 'iOS' | 'Mobile'
  bg: string
  accent: string
  second: string
  type: 'phone' | 'web'
  variant: number
}

export const CONTACT_EMAIL = 'hello@unlikeotherai.com'

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
    title: 'Vibe checks & audits',
    body: 'Bring us in to poke at an existing product. UX, perf, AI integration, the lot. You get a punchy memo, not a 90-slide deck.',
    icon: 'IconEye',
    color: 'var(--c1)',
  },
]

export const FEATURED: Featured[] = [
  { name: 'Finchly', tag: 'AI bookkeeping that argues back', kind: 'iOS app', year: '2025', tags: ['Mobile', 'AI', 'Fintech'],
    bg: '#1F7A4D', accent: '#F4B53A', second: '#FF5C39', type: 'phone', variant: 1 },
  { name: 'Looplab', tag: 'a SaaS for video-first teams', kind: 'Web app', year: '2025', tags: ['SaaS', 'B2B', 'Video'],
    bg: '#FF4FA3', accent: '#16140F', second: '#F4ECDB', type: 'web', variant: 0 },
  { name: 'Quillo', tag: 'writing assistant for journalists', kind: 'iOS · Android', year: '2024', tags: ['Mobile', 'AI', 'Editorial'],
    bg: '#2B4DD9', accent: '#F4B53A', second: '#FF4FA3', type: 'phone', variant: 2 },
  { name: 'Rooftop', tag: 'planning ops for property mgmt', kind: 'SaaS dashboard', year: '2024', tags: ['SaaS', 'Operations'],
    bg: '#16140F', accent: '#F4B53A', second: '#FF5C39', type: 'web', variant: 1 },
  { name: 'Foragr', tag: 'a foraging companion app', kind: 'iOS app', year: '2025', tags: ['Mobile', 'Outdoors', 'AI'],
    bg: '#F4B53A', accent: '#1F7A4D', second: '#FF5C39', type: 'phone', variant: 3 },
  { name: 'Sundialer', tag: 'CRM for very tiny teams', kind: 'Web app', year: '2024', tags: ['SaaS', 'CRM'],
    bg: '#FF5C39', accent: '#2B4DD9', second: '#F4ECDB', type: 'web', variant: 2 },
]

export const PROJECTS: Project[] = [
  { name: 'Halibut.fm', desc: 'podcast hosting + AI clipping', year: 2025, kind: 'SaaS', bg: '#2B4DD9', accent: '#F4B53A', second: '#FF4FA3', type: 'web', variant: 1 },
  { name: 'Pebbleput', desc: 'kids learning app, fully offline', year: 2025, kind: 'iOS', bg: '#FF4FA3', accent: '#F4B53A', second: '#1F7A4D', type: 'phone', variant: 0 },
  { name: 'Drawer', desc: 'tabletop game companion', year: 2025, kind: 'iOS', bg: '#1F7A4D', accent: '#FF5C39', second: '#F4B53A', type: 'phone', variant: 5 },
  { name: 'Mossway', desc: 'climate disclosure for SMEs', year: 2024, kind: 'SaaS', bg: '#16140F', accent: '#1F7A4D', second: '#F4B53A', type: 'web', variant: 3 },
  { name: 'Tinroof', desc: 'a CRM for music venues', year: 2024, kind: 'SaaS', bg: '#FF5C39', accent: '#F4ECDB', second: '#2B4DD9', type: 'web', variant: 2 },
  { name: 'Brillo', desc: 'AI study buddy for med students', year: 2024, kind: 'Mobile', bg: '#F4B53A', accent: '#FF4FA3', second: '#2B4DD9', type: 'phone', variant: 2 },
  { name: 'Northsea', desc: 'fleet ops for shipping', year: 2023, kind: 'SaaS', bg: '#2B4DD9', accent: '#FF5C39', second: '#F4ECDB', type: 'web', variant: 0 },
  { name: 'Mirrorbox', desc: 'private journaling w/ AI coach', year: 2023, kind: 'iOS', bg: '#1F7A4D', accent: '#F4ECDB', second: '#FF4FA3', type: 'phone', variant: 4 },
  { name: 'Saltbreak', desc: 'a recovery app for athletes', year: 2023, kind: 'iOS', bg: '#FF5C39', accent: '#1F7A4D', second: '#F4B53A', type: 'phone', variant: 1 },
  { name: 'Outpostly', desc: 'a comms tool for rural clinics', year: 2023, kind: 'SaaS', bg: '#F4B53A', accent: '#2B4DD9', second: '#FF5C39', type: 'web', variant: 0 },
  { name: 'Wickwire', desc: 'AI plain-english contract review', year: 2022, kind: 'SaaS', bg: '#FF4FA3', accent: '#1F7A4D', second: '#F4ECDB', type: 'web', variant: 1 },
  { name: 'Junebug', desc: 'a tiny app for tracking moods', year: 2022, kind: 'iOS', bg: '#F4ECDB', accent: '#FF5C39', second: '#2B4DD9', type: 'phone', variant: 3 },
]

export const NAV_LINKS = [
  { label: 'work', href: '#work' },
  { label: 'services', href: '#services' },
  { label: 'projects', href: '#projects' },
  { label: 'contact', href: '#contact' },
]
