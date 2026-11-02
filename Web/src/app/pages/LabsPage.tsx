import { LABS_PROJECTS } from '../data/labs';

const STATUS_STYLES: Record<string, string> = {
  Released: 'border-[#C7D400]/40 text-[#C7D400]',
  'Early access': 'border-[#6FB7FF]/40 text-[#6FB7FF]',
  Prototype: 'border-[#B9A8FF]/40 text-[#B9A8FF]',
  Experiment: 'border-[#F3A6C8]/40 text-[#F3A6C8]',
};

export default function LabsPage() {
  return (
    <main>
      {/* Intro */}
      <section className="container mx-auto px-6 py-16 md:py-24 max-w-[1280px]">
        <div className="max-w-3xl space-y-6">
          <div className="uppercase tracking-widest text-[#9A9496] text-xs md:text-sm">Labs</div>
          <h1
            className="text-4xl md:text-6xl leading-[1.15] tracking-tight"
            style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Tools we built because <span className="text-[#6FB7FF]">we needed them.</span>
          </h1>
          <div className="text-[#CFC9CB] text-lg md:text-xl leading-relaxed space-y-4">
            <p>
              We build our products with AI agents in the loop — and kept hitting the same wall:
              agents that can write code but can't see a circuit board, drive a real phone, or test
              a native app beyond screenshots and hope.
            </p>
            <p>
              Labs is where we fix that. Everything here speaks{' '}
              <span className="text-white" style={{ fontWeight: 700 }}>
                MCP
              </span>
              , so it plugs straight into Claude Code, Codex, or whatever agent you run. Statuses are
              honest: some of this is signed and shipping, some of it is a soldering iron and a dream.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="container mx-auto px-6 pb-16 max-w-[1280px]">
        <div className="space-y-8">
          {LABS_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-white/10 bg-[#242021] p-8 md:p-12"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                <h2 className="text-2xl md:text-3xl" style={{ fontWeight: 700 }}>
                  {project.name}
                </h2>
                <span
                  className={`rounded-full border px-3 py-1 text-xs uppercase tracking-wider ${
                    STATUS_STYLES[project.status]
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-4 text-[#CFC9CB] text-lg leading-relaxed">
                  <p>{project.what}</p>
                  <p>
                    <span className="text-white" style={{ fontWeight: 700 }}>
                      Why it matters:{' '}
                    </span>
                    {project.why}
                  </p>
                </div>
                <ul className="space-y-3 text-[#CFC9CB]">
                  {project.capabilities.map((capability) => (
                    <li key={capability.slice(0, 32)} className="flex gap-3">
                      <span className="mt-[2px] flex-shrink-0" style={{ color: project.accent }}>
                        ▪
                      </span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-24 max-w-[1280px]">
        <div className="rounded-2xl border border-white/10 bg-[#1A1718] p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-4xl mb-4 tracking-tight" style={{ fontWeight: 800 }}>
            Want early access, or want one of these bent to your workflow?
          </h2>
          <p className="text-[#CFC9CB] text-lg mb-8 max-w-2xl mx-auto">
            Most Labs tools started as a client problem. If one of them is 80% of what you need,
            talk to us about the other 20%.
          </p>
          <a
            href="mailto:hello@unlikeotherai.com"
            className="inline-block px-8 py-4 bg-[#6FB7FF] text-[#1E1B1C] rounded-full hover:brightness-110 transition-all text-lg"
            style={{ fontWeight: 700 }}
          >
            hello@unlikeotherai.com
          </a>
        </div>
      </section>
    </main>
  );
}
