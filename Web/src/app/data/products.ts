export type Product = {
  id: string;
  name: string;
  domain?: string;
  url?: string;
  status: string;
  accent: string;
  tagline: string;
  description: string[];
  highlights: string[];
  featured?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: 'nessie',
    name: 'Nessie',
    domain: 'nessie.works',
    url: 'https://nessie.works',
    status: 'Early access',
    accent: '#6FB7FF',
    tagline: 'The workspace where your team and AI agents get work done.',
    description: [
      'Nessie is a team workspace — channels, threads, DMs, projects — where AI agents sit alongside your people as actual teammates. Each agent has a role, instructions, knowledge, a model, tools, and its own email address. They hand work to specialists, show what they did, and show what it cost.',
      'Connect a real computer — Mac, Windows, or Linux — and agents use its tools under permissions you set on that machine, including full Claude Code and Codex sessions. Client work runs through a shared inbox with connected mailboxes and CRM. Run it on Nessie Cloud, or self-host it where your data should live.',
    ],
    highlights: [
      'Channels, threads, DMs, and projects with tickets, docs, dashboards, schedules, and workflows',
      'AI employees with versioned instructions, searchable knowledge, and delegation between agents',
      'Connected computers: agents work on real machines through the Nessie executor',
      'Web, desktop (macOS, Windows, Linux), iOS, and Android — self-hosting documented',
      'Built in Europe. €3 per person/month on Cloud; AI employees don’t take a seat',
    ],
  },
  {
    id: 'deepwater',
    name: 'Deep Water',
    domain: 'deepwater.live',
    url: 'https://deepwater.live',
    status: 'Live',
    accent: '#B9A8FF',
    tagline: 'Research you can prove. Every cited claim shows where it came from.',
    description: [
      'Deep Water is deep-research infrastructure: a pipeline that scopes a question, gathers sources in 83 languages, synthesises a report, and then verifies it — every citation is read back against its source, and claims that don’t hold are dropped before you ever see them. Conflicting sources are reported, not averaged.',
      'Four depth tiers run from a quick answer to everything we can find, with a time estimate up front. Use it from the web workspace, the REST API with webhooks, the CLI, or as an MCP server your agents call directly. Published reports live in a free public archive; private research is yours alone.',
    ],
    highlights: [
      'Citation reverse-check: unsupported claims are dropped, conflicts are surfaced',
      'Sources in 83 languages, including scanned PDFs via OCR',
      'Reports in seven writing styles — regenerate the same evidence as scientific, executive, or plain',
      'API, CLI, web workspace, and MCP server for agents',
      'Pay per run from a shared team credit pot — no seats',
    ],
  },
  {
    id: 'fermentea',
    name: 'Fermentea',
    domain: 'fermentea.live',
    url: 'https://fermentea.live',
    status: 'Live',
    accent: '#C7D400',
    featured: true,
    tagline: 'Where food goes to change.',
    description: [
      'Fermentea is a free, source-linked reference to the world’s fermented, cured, and smoked foods — kombucha, yes, but also cheese, salami, garum, kimchi, koji, breads, beer, cider, and wine. Hundreds of recipes and articles, growing toward ten thousand, every one keeping its sources down to the exact YouTube timestamp.',
      'Reading is free, with no account and no paywall. Each recipe carries a 1–5 difficulty rating broken down by temperature control, monitoring, equipment, timing, and batch scaling, with food-safety warnings sitting next to the steps they belong to. Browse by search, filters, or a map that goes from world to locality using real boundaries — and never invents a precise “birthplace” pin.',
      'Beyond the library: seventeen DIY equipment build plans with 3D models, bills of materials, and cut lists in metric and imperial — biltong box, cider press, koji incubator, curing chamber, smokehouses modelled on historical designs. A moderated community for batch photos, ratings, and corrections. Translation into 39 languages for signed-in readers, free.',
    ],
    highlights: [
      'Web, iPhone & iPad, and Android — apps coming to the stores',
      'Every claim sourced; no recipe pretends to be professionally reviewed',
      'Map browsing with real country and regional boundaries',
      '17 DIY build plans: 3D models, BOMs, cut lists, metric & imperial',
      'Supporter tier at £2/€2/$2 a month — all published content stays free',
    ],
  },
  {
    id: 'unlikeotherai',
    name: 'unlikeotherai.com',
    domain: 'unlikeotherai.com',
    status: 'You are here',
    accent: '#F3A6C8',
    tagline: 'The studio itself: two decades of shipping, now building its own products.',
    description: [
      'UnlikeOther AI is a product studio based in Scotland and the Czech Republic. We’ve spent 20+ years building software for global brands — automotive, retail, media, health, enterprise — and now we put that experience into products we own, end to end: design, engineering, infrastructure, and support.',
      'We use AI as a force multiplier, not a crutch: rapid prototyping and fast iteration, with senior-level architecture, testing, and decision-making kept firmly human. Fewer products, built properly, for the long term.',
    ],
    highlights: [
      'EU & UK based — we operate under EU & UK law, including GDPR',
      'Everything we ship is signed, maintained, and run by the people who built it',
      'The same team is available for custom client work',
    ],
  },
];
