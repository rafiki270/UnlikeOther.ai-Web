import authenticatorScreen from '../assets/featured/authenticator.jpg'
import deeptestScreen from '../assets/featured/deeptest.jpg'
import deepwaterScreen from '../assets/featured/deepwater.jpg'
import myrpgScreen from '../assets/featured/myrpg.jpg'
import nessieScreen from '../assets/featured/nessie.jpg'
import rememberNinjaScreen from '../assets/featured/remember-ninja.jpg'
import salesnerdScreen from '../assets/featured/salesnerd.jpg'

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
  status: 'open source' | 'partly open source' | 'coming soon'
  tags: string[]
  href?: string
  linkLabel?: string
  /** Real screenshot shown instead of the sketched screen. */
  image?: string
  bg: string
  accent: string
  second: string
  type: 'phone' | 'web'
  variant: number
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

// Products we are releasing — nothing here has shipped yet.
export const FEATURED: Featured[] = [
  { name: 'Nessie', tag: 'the European Slack alternative for an AI world', kind: 'Team chat + agents', status: 'open source',
    tags: ['Open source', 'Chat', 'Agents'], href: 'https://nessie.works', linkLabel: 'nessie.works', image: nessieScreen,
    bg: '#2B4DD9', accent: '#F4B53A', second: '#F4ECDB', type: 'web', variant: 0 },
  { name: 'Authenticator', tag: 'one login across all our products', kind: 'SSO · OAuth', status: 'open source',
    tags: ['Open source', 'OAuth', '2FA'], href: 'https://github.com/UnlikeOtherAI/UnlikeOtherAuthenticator', linkLabel: 'github.com/UnlikeOtherAI', image: authenticatorScreen,
    bg: '#1F7A4D', accent: '#F4B53A', second: '#FF4FA3', type: 'web', variant: 3 },
  { name: 'DeepTest', tag: 'security audits that bring evidence', kind: 'Security', status: 'coming soon',
    tags: ['Security', 'AI', 'Pentesting'], href: 'https://deeptest.live', linkLabel: 'deeptest.live', image: deeptestScreen,
    bg: '#16140F', accent: '#FF5C39', second: '#F4ECDB', type: 'web', variant: 2 },
  { name: 'DeepWater', tag: 'deep research, cited claim by claim', kind: 'Research engine', status: 'coming soon',
    tags: ['AI', 'Research', 'API'], href: 'https://deepwater.live', linkLabel: 'deepwater.live', image: deepwaterScreen,
    bg: '#F4B53A', accent: '#2B4DD9', second: '#FF5C39', type: 'web', variant: 1 },
  { name: 'SalesNerd', tag: 'prospect research with a source for every finding', kind: 'Sales intelligence', status: 'coming soon',
    tags: ['SaaS', 'AI', 'Sales'], href: 'https://salesnerd.live', linkLabel: 'salesnerd.live', image: salesnerdScreen,
    bg: '#FF4FA3', accent: '#16140F', second: '#F4ECDB', type: 'web', variant: 0 },
  { name: 'Remember Ninja', tag: 'structured, searchable memory for AI agents', kind: 'Memory as a service', status: 'partly open source',
    tags: ['AI agents', 'MCP', 'API'], href: 'https://remember.ninja', linkLabel: 'remember.ninja', image: rememberNinjaScreen,
    bg: '#2B4DD9', accent: '#FF4FA3', second: '#F4B53A', type: 'web', variant: 3 },
  { name: 'MyRPG', tag: 'a living world the AI keeps writing', kind: 'Multiplayer RPG', status: 'coming soon',
    tags: ['Game', 'AI agents', 'Mobile'], href: 'https://myrpg.world', linkLabel: 'myrpg.world', image: myrpgScreen,
    bg: '#FF5C39', accent: '#F4B53A', second: '#1F7A4D', type: 'phone', variant: 3 },
  { name: 'Ledger', tag: 'our own AI inference proxy', kind: 'AI infrastructure', status: 'coming soon',
    tags: ['AI', 'Inference', 'Metering'],
    bg: '#F4ECDB', accent: '#FF5C39', second: '#2B4DD9', type: 'web', variant: 1 },
]

export const NAV_LINKS = [
  { label: 'work', href: '#work' },
  { label: 'services', href: '#services' },
  { label: 'contact', href: '#contact' },
]
