import authenticatorScreen from '../../assets/featured/authenticator.jpg'
import electroscopeScreen from '../../assets/labs/electroscope.jpg'
import ewpScreen from '../../assets/labs/ewp.jpg'
import kelpieScreen from '../../assets/labs/kelpie.jpg'
import wireframesScreen from '../../assets/labs/wireframes.jpg'

export interface LabsProject {
  id: string
  name: string
  status: 'released' | 'early access' | 'prototype' | 'experiment' | 'open source'
  color: string
  what: string
  why: string
  capabilities: string[]
  image?: string
  /** Additional screenshots for the detail page gallery. */
  images?: string[]
  href?: string
  linkLabel?: string
}

export const LABS_PROJECTS: LabsProject[] = [
  {
    id: 'kelpie',
    name: 'Kelpie',
    status: 'released',
    color: 'var(--c2)',
    image: kelpieScreen,
    href: 'https://unlikeotherai.github.io/kelpie',
    linkLabel: 'kelpie on GitHub',
    what: 'A browser built for language models: native iOS, Android, and macOS browser apps plus a Node CLI that let models control real browsers on real devices over HTTP and MCP.',
    why: 'Agent-driven web testing usually means an emulator or a headless browser pretending to be a phone. Kelpie drives the real thing — your actual iPhone, iPad, or Mac — including a whole group of devices at once.',
    capabilities: [
      'Navigate, screenshot, DOM, click, fill, scroll, and JavaScript over HTTP and MCP',
      'Annotated screenshots with numbered labels on clickable elements',
      'Network capture (XHR and fetch) and console output, with JS error stack traces',
      'Group commands that go to every connected device at once',
      'Published as @unlikeotherai/kelpie; iOS, Android, macOS, and CLI done',
    ],
  },
  {
    id: 'wireframes',
    name: 'Wireframes',
    status: 'experiment',
    color: 'var(--c5)',
    image: wireframesScreen,
    what: 'Wireframe prototypes written as YAML. A spec file becomes a clickable, deliberately unstyled prototype — same input, same output, every time. Comes with a CLI, an API, and an online editor with an AI chat panel.',
    why: 'Wireframes as text means wireframes you can diff, review, validate, and version like code — and that an LLM can generate or edit reliably. No more screenshots of whiteboards in your ticket history.',
    capabilities: [
      'wf CLI: init, build, serve, validate, lint, screenshots, export, and ~15 more',
      'Built-in elements: buttons, inputs, tables, charts, tab bars, modals',
      'wf llm prints a schema reference so your agent writes valid specs first try',
      'Shared previews: public, password-protected, or limited to specific emails',
    ],
  },
  {
    id: 'ewp',
    name: 'EWP — Expensive Wall of Phones',
    status: 'prototype',
    color: 'var(--c1)',
    image: ewpScreen,
    what: 'An ESP32 board that pairs with phones and tablets as a Bluetooth keyboard and mouse, controlled over MCP. A companion iOS app streams the screen back to the agent while other apps are in the foreground.',
    why: 'Real devices, real Bluetooth input, no jailbreak, no cloud device farm, no computer in the middle. An agent can drive any app or system screen on a physical phone — and with a rack of boards, a whole wall of them.',
    capabilities: [
      'Keyboard and pointer input over BLE to anything that accepts a Bluetooth keyboard',
      'Up to 8 saved pairings per board, strict one-device-at-a-time targeting',
      'iOS screen view at up to 1280px / 2fps while other apps are in front',
      'Fleet tooling: health checks across the wall, MCP config per row or group',
      '3D-printable enclosure, Wi-Fi setup over Bluetooth or USB',
    ],
  },
  {
    id: 'authenticator',
    name: 'UnlikeOther Authenticator',
    status: 'open source',
    color: 'var(--c4)',
    image: authenticatorScreen,
    href: 'https://github.com/UnlikeOtherAI/UnlikeOtherAuthenticator',
    linkLabel: 'github.com/UnlikeOtherAI',
    what: 'Our shared sign-in service: one login across all UnlikeOtherAI products, with OAuth and two-factor built in. It runs at authentication.unlikeotherai.com — and it’s open source, so it can run for your products too.',
    why: 'Every product needs sign-in; very few teams should be maintaining their own password database. Authenticator is the SSO layer we actually run in production, published for anyone to self-host.',
    capabilities: [
      'One account across connected products — profile and team access in one place',
      'OAuth sign-in flows and two-factor authentication',
      'Google sign-in with separate, scoped permissions per product connection',
      'Open source on GitHub — self-host it as the identity layer for your own products',
    ],
  },
  {
    id: 'electroscope',
    name: 'Electroscope',
    status: 'released',
    color: 'var(--c4)',
    image: electroscopeScreen,
    what: 'A desktop app for USB electronics microscopes with an MCP server built in. You see the live board; your AI agent sees the same image, takes full-resolution snapshots, and draws on the view you are both looking at.',
    why: 'Hardware debugging with an agent breaks down the moment it cannot see the board. Electroscope lets the agent point at the exact pin or test point — circle it, box it, label it — instead of describing it in prose while you squint.',
    capabilities: [
      'Snapshots and 2–6 frame sequences, cropped from the full-resolution camera frame',
      'Shared annotations: circles, crosshairs, boxes, arrows, text — both of you can draw',
      'Agent-controlled view: zoom 1–12×, pan, grid, rotation, mirroring, freeze',
      'Works with cheap cameras: software picture controls always, hardware when supported',
      'Signed and notarized builds for Windows 11 x64 and Apple Silicon Macs',
    ],
  },
]
