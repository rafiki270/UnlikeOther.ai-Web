export type Kit = {
  id: string;
  name: string;
  platform: string;
  url?: string;
  description: string[];
};

export type KidsApp = {
  id: string;
  name: string;
  blurb: string;
};

export const KITS: Kit[] = [
  {
    id: 'pixel-paint',
    name: 'Pixel Paint',
    platform: 'iOS · Android · Mac · Windows',
    url: 'https://pixelpaint.unlikeotherai.com',
    description: [
      'A colour-by-number pixel-art app, built because the one our founder’s daughter used was wall-to-wall ads. Pixel Paint has none: no ads, no accounts, no in-app purchases, no tracking. Pick a picture, fill it in square by square, feel good.',
      'It’s the simplest thing we ship, and that’s the point — a finished, signed app that does one thing and respects whoever is holding the device.',
    ],
  },
  {
    id: 'micro-racers',
    name: 'Micro Racers',
    platform: 'Mac · Windows · Android · iOS (TestFlight)',
    description: [
      'Tabletop racing in the spirit of Micro Machines: tiny cars against three rivals across twenty courses set on breakfast tables, billiards tables, workbenches, and gardens — plus truck, boat, and helicopter courses, randomly generated surprise tracks, and local leaderboards.',
      'Built in Godot, playable by anyone whose thumbs still work after seeing the price: free.',
    ],
  },
  {
    id: 'blockity-block',
    name: 'Blockity Block',
    platform: 'Mac · Windows · Android · Browser · iOS (TestFlight)',
    description: [
      'A creative block-building game with all-original art: five themed worlds, flying, a fifteen-category building catalogue, and animals wandering through whatever you make. No combat, no survival mode, no ads, no accounts.',
      'Saves are local and exportable — your builds are files you own, not entries in someone’s database.',
    ],
  },
];

export const KIDS_APPS: KidsApp[] = [
  {
    id: 'little-island',
    name: 'Little Island',
    blurb: 'Sixty small games on a 3D island, for ages 3–7. Fully offline.',
  },
  {
    id: 'beautyblox',
    name: 'BeautyBlox',
    blurb: 'A 3D beauty-salon game for ages 4–9 — sixteen salons, up to four kids per device.',
  },
  {
    id: 'rockblox',
    name: 'RockBlox',
    blurb: 'A music-village game for ages 7–11, from punk garage to K-pop studio.',
  },
  {
    id: 'kidstore',
    name: 'KidStore',
    blurb: 'The Android catalogue app for all our kids’ games. Free, no ads.',
  },
];
