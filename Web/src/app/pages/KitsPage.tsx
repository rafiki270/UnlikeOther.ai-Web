import { KIDS_APPS, KITS } from '../data/kits';

export default function KitsPage() {
  return (
    <main>
      {/* Intro */}
      <section className="container mx-auto px-6 py-16 md:py-24 max-w-[1280px]">
        <div className="max-w-3xl space-y-6">
          <div className="uppercase tracking-widest text-[#9A9496] text-xs md:text-sm">Kits</div>
          <h1
            className="text-4xl md:text-6xl leading-[1.15] tracking-tight"
            style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Small, finished tools. <span className="text-[#F3A6C8]">Shipped often.</span>
          </h1>
          <p className="text-[#CFC9CB] text-lg md:text-xl leading-relaxed">
            Kits are the smaller apps and utilities we release alongside our main products — each one
            built properly, signed, and maintained. No subscriptions bolted onto things that don't need
            them.
          </p>
        </div>
      </section>

      {/* Kits with write-ups */}
      <section className="container mx-auto px-6 pb-8 max-w-[1280px]">
        <div className="space-y-8">
          {KITS.map((kit) => (
            <article
              key={kit.id}
              className="rounded-2xl border border-white/10 bg-[#242021] p-8 md:p-10"
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-3">
                <h2 className="text-2xl md:text-3xl" style={{ fontWeight: 700 }}>
                  {kit.name}
                </h2>
                <span className="text-sm text-[#9A9496] uppercase tracking-wider">{kit.platform}</span>
              </div>
              <div className="space-y-3 text-[#CFC9CB] text-lg leading-relaxed max-w-3xl">
                {kit.description.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
              {kit.url && (
                <a
                  href={kit.url}
                  className="mt-5 inline-block text-[#6FB7FF] hover:text-white transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  {kit.url.replace(/^https?:\/\//, '')} →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Kids' apps — compact grid, no write-ups */}
      <section className="container mx-auto px-6 py-16 max-w-[1280px]">
        <div className="max-w-3xl space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl tracking-tight" style={{ fontWeight: 800 }}>
            For the small people
          </h2>
          <p className="text-[#CFC9CB] text-lg leading-relaxed">
            We also make a growing set of apps for kids — simple, ad‑free, and safe by design.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {KIDS_APPS.map((app) => (
            <div key={app.id} className="rounded-2xl border border-white/10 bg-[#242021] p-6">
              <h3 className="text-xl mb-1" style={{ fontWeight: 700 }}>
                {app.name}
              </h3>
              <p className="text-[#9A9496]">{app.blurb}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
