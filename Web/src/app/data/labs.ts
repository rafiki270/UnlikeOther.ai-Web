export interface LabsProject {
  id: string
  name: string
  status: 'released' | 'early access' | 'prototype' | 'experiment'
  color: string
  what: string
  why: string
  capabilities: string[]
}

export const LABS_PROJECTS: LabsProject[] = [
  {
    id: 'appreveal',
    name: 'AppReveal',
    status: 'early access',
    color: 'var(--c2)',
    what: 'A library you drop into debug builds of iOS, macOS, Android, Flutter, and React Native apps. It runs an MCP server inside the app, so coding agents can inspect and drive the real app over your local network — like Playwright, but for native.',
    why: 'Agents testing mobile apps usually work from screenshots and guesses. AppReveal gives them structure instead: which screen is up, which elements exist, current app state, navigation stack, and network traffic. Your agent stops poking at pixels and starts asserting on facts.',
    capabilities: [
      'UI control: get_screen, element trees, tap by ID/text/point, type, scroll, deeplinks',
      'App diagnostics: state, navigation stack, feature flags, network calls, logs, errors',
      'Web views inside apps: 20+ tools for reading and driving embedded pages',
      'Batch tool: several actions in one call, with delays and stop-on-error',
      'Safe by default: no-op in release builds; private APIs stripped from iOS releases',
    ],
  },
  {
    id: 'electroscope',
    name: 'Electroscope',
    status: 'released',
    color: 'var(--c4)',
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
  {
    id: 'wireframes',
    name: 'Wireframes',
    status: 'experiment',
    color: 'var(--c5)',
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
]
