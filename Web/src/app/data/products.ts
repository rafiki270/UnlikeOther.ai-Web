import deepwaterArchiveScreen from '../../assets/featured/deepwater-archive.jpg'
import deepwaterScreen from '../../assets/featured/deepwater.jpg'
import fermenteaMapScreen from '../../assets/featured/fermentea-map.jpg'
import fermenteaRecipesScreen from '../../assets/featured/fermentea-recipes.jpg'
import fermenteaScreen from '../../assets/featured/fermentea.jpg'
import ledgerScreen from '../../assets/featured/ledger.jpg'
import nessieScreen from '../../assets/featured/nessie.jpg'

export interface Product {
  id: string
  name: string
  kind: string
  status: string
  statusColor: string
  color: string
  tagline: string
  description: string[]
  highlights: string[]
  tags: string[]
  href?: string
  linkLabel?: string
  image?: string
  /** Additional screenshots for the product page gallery. */
  images?: string[]
  /** Sketch colors used when there is no screenshot yet. */
  sketch?: { bg: string; accent: string; second: string; variant: number }
  featured?: boolean
}

export const PRODUCTS: Product[] = [
  {
    id: 'nessie',
    name: 'Nessie',
    kind: 'Team chat + agents',
    status: 'private beta',
    statusColor: 'var(--c2)',
    featured: true,
    color: 'var(--c2)',
    tagline: 'the European Slack alternative for an AI world',
    description: [
      'Nessie is a team workspace — channels, threads, DMs, projects — where AI agents sit alongside your people as actual teammates. Each agent has a role, instructions, knowledge, a model, tools, and its own email address. They hand work to specialists, show what they did, and show what it cost.',
      'Connect a real computer — Mac, Windows, or Linux — and agents use its tools under permissions you set on that machine, including full Claude Code and Codex sessions. Client work runs through a shared inbox with connected mailboxes and CRM. Run it on Nessie Cloud, or self-host it where your data should live.',
    ],
    highlights: [
      'Channels, threads, DMs, and projects with tickets, docs, dashboards, and workflows',
      'AI employees with versioned instructions, searchable knowledge, and delegation',
      'Connected computers: agents work on real machines through the Nessie executor',
      'Web, desktop (macOS, Windows, Linux), iOS, and Android — self-hosting documented',
    ],
    tags: ['Open source', 'Chat', 'Agents'],
    href: 'https://nessie.works',
    linkLabel: 'nessie.works',
    image: nessieScreen,
  },
  {
    id: 'deepwater',
    name: 'Deep Water',
    kind: 'Research engine',
    status: 'released',
    statusColor: 'var(--c4)',
    color: 'var(--c3)',
    tagline: 'deep research, cited claim by claim',
    description: [
      'Deep Water is deep-research infrastructure: a pipeline that scopes a question, gathers sources in 83 languages, synthesises a report, and then verifies it — every citation is read back against its source, and claims that don’t hold are dropped before you ever see them. Conflicting sources are reported, not averaged.',
      'Four depth tiers run from a quick answer to everything we can find, with a time estimate up front. Use it from the web workspace, the REST API with webhooks, the CLI, or as an MCP server your agents call directly. Published reports live in a free public archive; private research is yours alone.',
    ],
    highlights: [
      'Citation reverse-check: unsupported claims are dropped, conflicts are surfaced',
      'Sources in 83 languages, including scanned PDFs via OCR',
      'Seven writing styles — regenerate the same evidence as scientific, executive, or plain',
      'API, CLI, web workspace, and MCP server for agents',
      'Free public research archive — published reports are open to read',
    ],
    tags: ['AI', 'Research', 'API'],
    href: 'https://deepwater.live',
    linkLabel: 'deepwater.live',
    image: deepwaterScreen,
    images: [deepwaterArchiveScreen],
  },
  {
    id: 'ledger',
    name: 'Ledger',
    kind: 'AI infrastructure',
    status: 'coming soon',
    statusColor: 'var(--c3)',
    color: 'var(--c1)',
    tagline: 'our own AI inference proxy',
    description: [
      'Ledger is for any product that resells AI: a proxy router that sits between your app and the model providers. Every request flows through it, so you can see exactly which tokens each customer consumed — and, when your customers have customers of their own, meter those too.',
      'Instead of guessing what your AI features cost per account, you get accurate, per-customer token accounting you can bill against, with one place to monitor usage across providers and models.',
    ],
    highlights: [
      'Drop-in proxy between your product and AI model providers',
      'Token metering per customer — and per your customers’ customers',
      'Accurate consumption data to charge from, not estimates',
      'One view of AI usage across your products',
    ],
    tags: ['AI', 'Inference', 'Metering'],
    image: ledgerScreen,
  },
  {
    id: 'fermentea',
    name: 'Fermentea',
    kind: 'The big one',
    status: 'live',
    statusColor: 'var(--c4)',
    color: 'var(--c4)',
    tagline: 'where food goes to change',
    description: [
      'Fermentea is a free, source-linked reference to the world’s fermented, cured, and smoked foods — kombucha, yes, but also cheese, salami, garum, kimchi, koji, breads, beer, cider, and wine. Hundreds of recipes and articles, growing toward ten thousand, every one keeping its sources down to the exact YouTube timestamp.',
      'Reading is free, with no account and no paywall. Each recipe carries a 1–5 difficulty rating broken down by temperature control, monitoring, equipment, timing, and batch scaling, with food-safety warnings sitting next to the steps they belong to. Browse by search, filters, or a map that goes from world to locality using real boundaries — and never invents a precise “birthplace” pin.',
      'Beyond the library: seventeen DIY equipment build plans with 3D models, bills of materials, and cut lists in metric and imperial — biltong box, cider press, koji incubator, curing chamber, smokehouses modelled on historical designs. A moderated community for batch photos, ratings, and corrections. Translation into 39 languages for signed-in readers, free.',
    ],
    highlights: [
      'Web, iPhone & iPad, and Android — apps on their way to the stores',
      'Every claim sourced; no recipe pretends to be professionally reviewed',
      'Map browsing with real country and regional boundaries',
      '17 DIY build plans: 3D models, BOMs, cut lists, metric & imperial',
      'Free to read — no account, no paywall, no ads',
    ],
    tags: ['Food', 'Reference', 'iOS', 'Android', 'Web'],
    href: 'https://fermentea.live',
    linkLabel: 'fermentea.live',
    image: fermenteaScreen,
    images: [fermenteaRecipesScreen, fermenteaMapScreen],
  },
]

