import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import LogoMarquee from '../components/site/LogoMarquee';
import type { Product } from '../data/products';

function StatusChip({ status, accent }: { status: string; accent: string }) {
  return (
    <span
      className="rounded-full border px-3 py-1 text-xs uppercase tracking-wider"
      style={{ borderColor: `${accent}66`, color: accent }}
    >
      {status}
    </span>
  );
}

function ProductLink({ product }: { product: Product }) {
  if (!product.url) return null;
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noreferrer"
      className="inline-block text-[#6FB7FF] hover:text-white transition-colors"
    >
      {product.domain} →
    </a>
  );
}

function FeaturedProduct({ product }: { product: Product }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-[#242021] p-8 md:p-14">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
        <h3 className="text-3xl md:text-5xl tracking-tight" style={{ fontWeight: 800 }}>
          {product.name}
        </h3>
        <StatusChip status={product.status} accent={product.accent} />
      </div>
      <p className="text-xl md:text-2xl mb-8" style={{ color: product.accent, fontWeight: 700 }}>
        {product.tagline}
      </p>
      <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
        <div className="space-y-4 text-[#CFC9CB] text-lg leading-relaxed">
          {product.description.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          <ProductLink product={product} />
        </div>
        <ul className="space-y-3 text-[#CFC9CB] self-start rounded-2xl border border-white/10 bg-[#1A1718] p-6">
          {product.highlights.map((highlight) => (
            <li key={highlight.slice(0, 32)} className="flex gap-3">
              <span className="mt-[2px] flex-shrink-0" style={{ color: product.accent }}>
                ▪
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ProductBlock({ product, flip }: { product: Product; flip: boolean }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[#242021] p-8 md:p-12">
      <div className={`grid gap-8 lg:grid-cols-2 ${flip ? 'lg:[direction:rtl]' : ''}`}>
        <div className="space-y-4 lg:[direction:ltr]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <h3 className="text-2xl md:text-4xl tracking-tight" style={{ fontWeight: 800 }}>
              {product.name}
            </h3>
            <StatusChip status={product.status} accent={product.accent} />
          </div>
          <p className="text-lg md:text-xl" style={{ color: product.accent, fontWeight: 700 }}>
            {product.tagline}
          </p>
          <div className="space-y-4 text-[#CFC9CB] text-lg leading-relaxed">
            {product.description.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <ProductLink product={product} />
        </div>
        <ul className="space-y-3 text-[#CFC9CB] self-center lg:[direction:ltr]">
          {product.highlights.map((highlight) => (
            <li key={highlight.slice(0, 32)} className="flex gap-3">
              <span className="mt-[2px] flex-shrink-0" style={{ color: product.accent }}>
                ▪
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function HomePage() {
  const featured = PRODUCTS.filter((product) => product.featured);
  const regular = PRODUCTS.filter((product) => !product.featured);

  return (
    <main>
      {/* Custom development banner */}
      <section className="container mx-auto px-6 pt-4 max-w-[1280px]">
        <div className="rounded-2xl border border-[#F3A6C8]/40 bg-[#2A1F2C] px-6 py-6 md:px-10 md:py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="flex-1">
            <p className="text-white text-lg md:text-xl" style={{ fontWeight: 700 }}>
              We build custom, tailored software for clients.
            </p>
            <p className="text-[#CFC9CB] mt-1">
              Everything below is ours — products we design, build, and run in-house. It’s also our
              portfolio: the same team is for hire.
            </p>
          </div>
          <a
            href="mailto:hello@unlikeotherai.com"
            className="inline-block whitespace-nowrap px-6 py-3 bg-[#F3A6C8] text-[#1E1B1C] rounded-full hover:brightness-110 transition-all"
            style={{ fontWeight: 700 }}
          >
            Talk to us
          </a>
        </div>
      </section>

      {/* Hero */}
      <section className="container mx-auto px-6 py-16 md:py-24 max-w-[1280px]">
        <div className="mb-8">
          <span className="uppercase tracking-widest text-[#9A9496] text-xs md:text-sm">
            Based in Scotland & the Czech Republic. Building global products.
          </span>
        </div>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl leading-[1.15] tracking-tight max-w-4xl"
          style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
        >
          We make <span className="text-[#F3A6C8]">products</span>. Here they are.
        </h1>
        <p className="text-[#CFC9CB] text-lg md:text-xl max-w-3xl mt-8">
          No pitch decks, no “coming soon” vapour. Workspaces, research engines, food references,
          games, and lab tools — designed, built, signed, and run by us.
        </p>
      </section>

      {/* Products */}
      <section id="products" className="container mx-auto px-6 pb-8 max-w-[1280px] scroll-mt-8">
        <h2 className="text-3xl md:text-5xl mb-12 tracking-tight" style={{ fontWeight: 800 }}>
          Our products
        </h2>
        <div className="space-y-8">
          {regular
            .filter((product) => product.id !== 'unlikeotherai')
            .map((product, index) => (
              <ProductBlock key={product.id} product={product} flip={index % 2 === 1} />
            ))}
          {featured.map((product) => (
            <FeaturedProduct key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Kits + Labs teasers */}
      <section className="container mx-auto px-6 py-8 max-w-[1280px]">
        <div className="grid gap-8 md:grid-cols-2">
          <Link
            to="/kits"
            className="group rounded-2xl border border-white/10 bg-[#242021] p-8 md:p-12 hover:border-[#F3A6C8]/50 transition-colors"
          >
            <h3 className="text-2xl md:text-4xl mb-4 tracking-tight" style={{ fontWeight: 800 }}>
              Kits <span className="text-[#F3A6C8] group-hover:translate-x-1 inline-block transition-transform">→</span>
            </h3>
            <p className="text-[#CFC9CB] text-lg leading-relaxed">
              The smaller apps and games we release alongside the main products — racing on breakfast
              tables, block building without the combat, pixel art without the ads. Signed, finished,
              free.
            </p>
          </Link>
          <Link
            to="/labs"
            className="group rounded-2xl border border-white/10 bg-[#242021] p-8 md:p-12 hover:border-[#6FB7FF]/50 transition-colors"
          >
            <h3 className="text-2xl md:text-4xl mb-4 tracking-tight" style={{ fontWeight: 800 }}>
              Labs <span className="text-[#6FB7FF] group-hover:translate-x-1 inline-block transition-transform">→</span>
            </h3>
            <p className="text-[#CFC9CB] text-lg leading-relaxed">
              Tools for people who build with AI agents: a microscope your agent can see through, a
              Bluetooth keyboard for walls of phones, native-app testing over MCP, wireframes as
              YAML. Honest statuses included.
            </p>
          </Link>
        </div>
      </section>

      {/* About / the studio */}
      <section id="about" className="container mx-auto px-6 py-16 md:py-24 max-w-[1280px] scroll-mt-8">
        {PRODUCTS.filter((product) => product.id === 'unlikeotherai').map((product) => (
          <div key={product.id} className="space-y-10">
            <div className="max-w-3xl space-y-6">
              <div className="uppercase tracking-widest text-[#9A9496] text-xs md:text-sm">
                The studio
              </div>
              <h2 className="text-3xl md:text-5xl tracking-tight" style={{ fontWeight: 800 }}>
                {product.tagline}
              </h2>
              {product.description.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-[#CFC9CB] text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#242021] px-4 py-2 text-sm text-[#CFC9CB]">
                <span className="text-white" style={{ fontWeight: 700 }}>
                  EU & UK based.
                </span>
                We operate under EU & UK law, including GDPR.
              </div>
            </div>
            <LogoMarquee />
            <p className="text-[#9A9496] max-w-3xl">
              Brands our team has shipped for over the last two decades — automotive, retail, media,
              health, and enterprise. UnlikeOther is new; the experience behind it isn’t.
            </p>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-6 py-16 md:py-24 max-w-[1280px] scroll-mt-8">
        <div className="text-center">
          <h2
            className="text-3xl md:text-5xl lg:text-6xl mb-10 tracking-tight max-w-4xl mx-auto leading-tight"
            style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Need something built that <span className="text-[#F3A6C8]">actually lasts?</span>
          </h2>
          <a
            href="mailto:hello@unlikeotherai.com"
            className="inline-block px-8 py-4 bg-[#F3A6C8] text-[#1E1B1C] rounded-full hover:brightness-110 transition-all text-lg"
            style={{ fontWeight: 700 }}
          >
            hello@unlikeotherai.com
          </a>
        </div>
      </section>
    </main>
  );
}
