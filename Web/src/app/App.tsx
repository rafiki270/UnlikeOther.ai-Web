import { useState } from 'react';
import appleLogo from '../assets/logos/apple.svg';
import jackWillsLogo from '../assets/logos/jack-wills.svg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoItems = [
    { name: 'Apple', src: appleLogo },
    { name: 'BMW', src: 'https://www.bmwgroup.com/etc.clientlibs/grpw-web/clientlibs/grpw-base/resources/images/logo/BMW_dark.svg' },
    { name: 'Ford', src: 'https://brand.ford.com/content/dam/brand_ford/brand-assets/logos/ford-logo.svg' },
    {
      name: 'McNeil Healthcare',
      title: 'McNeil Healthcare (Lucozade owner)',
      src: 'https://www.suntorybeverageandfood.com/common/img/logo.svg',
    },
    { name: 'Warner Music', src: 'https://www.wmg.com/sites/g/files/g2000012851/files/2020-09/warnermusicgroup-logo.svg' },
    { name: 'Audi', src: 'https://www.audi.com/content/dam/gbp2/brand/logos/audi-rings.svg' },
    { name: 'IKEA', src: 'https://www.ikea.com/global/en/images/IKEA-logo.svg' },
    { name: 'BP', src: 'https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/pdfs/who-we-are/brand/bp-logo.svg' },
    { name: 'Deloitte', src: 'https://www2.deloitte.com/content/dam/Deloitte/global/Images/promo_images/gx-deloitte-logo.svg' },
    { name: 'Carphone Warehouse', src: 'https://www.currysplc.com/~/media/Files/C/Currys-PLC/brands/carphone-warehouse-logo.svg' },
    { name: 'Mercedes', src: 'https://brand.mercedes-benz.com/content/dam/brandhub/assets/logo/mercedes-benz-star.svg' },
    { name: 'Renault', src: 'https://www.renaultgroup.com/wp-content/uploads/2021/03/renault-logo.svg' },
    { name: 'The Sun', src: 'https://www.news.co.uk/wp-content/uploads/2019/05/the-sun-logo.svg' },
    { name: 'Toyota', src: 'https://www.toyota.co.uk/content/dam/toyota/nmsc/united-kingdom/brand/logo/toyota-logo.svg' },
    { name: 'Skoda', src: 'https://www.skoda-storyboard.com/content/uploads/2019/01/skoda-logo.svg' },
    { name: 'Visa', src: 'https://brand.visa.com/dam/VCOM/brand-assets/logos/visa/blue/logo.svg' },
    { name: 'Chevrolet', src: 'https://www.gm.com/content/dam/company/brand/Chevrolet-logo.svg' },
    { name: 'Jack Wills', src: jackWillsLogo },
    { name: 'JWT', src: 'https://media.licdn.com/dms/image/C4D0BAQHjwtlogo/company-logo_200_200' },
    { name: 'Iconmobile', src: 'https://media.licdn.com/dms/image/C4D0BAQHiconmobile/company-logo_200_200' },
    { name: 'Somo', src: 'https://media.licdn.com/dms/image/C4D0BAQHsomo/company-logo_200_200' },
    { name: 'UBM', src: 'https://www.informamarkets.com/globalassets/logos/ubm-logo.svg' },
    { name: 'Incisive Media', src: 'https://www.incisivemedia.com/wp-content/uploads/2020/03/incisive-media-logo.svg' },
    { name: 'Ceska Televize', src: 'https://img.ceskatelevize.cz/logo/ct-logo.svg' },
    { name: 'Meteopress', src: 'https://media.licdn.com/dms/image/C4D0BAQHmeteopress/company-logo_200_200' },
  ];

  const LogoTile = ({
    name,
    src,
    title,
  }: {
    name: string;
    src?: string;
    title?: string;
  }) => {
    const [failed, setFailed] = useState(false);
    const showImage = Boolean(src) && !failed;

    return (
      <div className="logo-item" title={title ?? name}>
        {showImage ? (
          <img
            className="logo-image"
            src={src}
            alt={`${name} logo`}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="logo-text">{name}</span>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#1E1B1C] text-white overflow-x-hidden relative">
      <div className="doodle-layer" aria-hidden="true">
        <span className="doodle doodle-star" />
        <span className="doodle doodle-fox" />
        <span className="doodle doodle-skier" />
        <span className="doodle doodle-bulb" />
        <span className="doodle doodle-sun" />
        <span className="doodle doodle-megaphone" />
        <span className="doodle doodle-laptop" />
        <span className="doodle doodle-chat" />
        <span className="doodle doodle-rocket" />
        <span className="doodle doodle-alt doodle-alt-1" />
        <span className="doodle doodle-alt doodle-alt-2" />
        <span className="doodle doodle-alt doodle-alt-3" />
        <span className="doodle doodle-alt doodle-alt-4" />
        <span className="doodle doodle-alt doodle-alt-5" />
        <span className="doodle doodle-alt doodle-alt-6" />
        <span className="doodle doodle-alt doodle-alt-7" />
        <span className="doodle doodle-alt doodle-alt-8" />
        <span className="doodle doodle-alt doodle-alt-9" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-8 max-w-[1280px]">
        <div className="flex items-center justify-between">
          <div className="tracking-tight" style={{ fontWeight: 700 }}>
            UnlikeOther.ai
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-[#CFC9CB] hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="text-[#CFC9CB] hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-4">
            <a href="#about" className="block text-[#CFC9CB] hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="block text-[#CFC9CB] hover:text-white transition-colors">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-32 max-w-[1280px] relative">
        {/* Decorative Orbital Curve - Background */}
        <svg 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none opacity-20 hidden md:block"
          viewBox="0 0 800 600"
        >
          <path
            d="M 100 300 Q 250 100, 400 300 T 700 300"
            stroke="#B9A8FF"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
        </svg>

        <div className="relative z-10">
          {/* Small Label */}
          <div className="mb-8 md:mb-12">
            <span className="uppercase tracking-widest text-[#9A9496] text-xs md:text-sm">
              Based in Scotland & the Czech Republic. Building global products.
            </span>
          </div>

          {/* Main Headline */}
          <div className="mb-8 md:mb-12 relative">
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl leading-[1.15] tracking-tight max-w-4xl"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              We build software that ships <span className="text-[#F3A6C8]">faster</span> — and still holds up years later.
            </h1>

            {/* Decorative Stars */}
            <svg 
              className="absolute -right-8 top-12 w-8 h-8 md:w-12 md:h-12 opacity-70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6FB7FF"
              strokeWidth="2"
            >
              <path d="M12 2 L13 11 L22 12 L13 13 L12 22 L11 13 L2 12 L11 11 Z" />
            </svg>

            <svg 
              className="absolute -left-4 md:-left-8 bottom-8 w-6 h-6 md:w-8 md:h-8 opacity-70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F3A6C8"
              strokeWidth="2"
            >
              <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
            </svg>
          </div>

          {/* Sub-text */}
          <div className="text-[#CFC9CB] text-lg md:text-xl max-w-3xl mb-12 space-y-4">
            <p>Most teams either move fast and break things,</p>
            <p>or build "properly" and ship too late.</p>
            <p className="text-white" style={{ fontWeight: 700 }}>We don't accept that trade-off.</p>
          </div>
        </div>
      </section>

      {/* Experience + Trust Section */}
      <section id="about" className="container mx-auto px-6 py-20 md:py-32 max-w-[1280px]">
        <div className="space-y-10">
          <div className="max-w-3xl space-y-6">
            <div className="uppercase tracking-widest text-[#9A9496] text-xs md:text-sm">
              Experience you can trust
            </div>
            <h2
              className="text-3xl md:text-5xl tracking-tight"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Built by people who have shipped for <span className="text-[#F3A6C8]">global brands</span>.
            </h2>
            <p className="text-[#CFC9CB] text-lg leading-relaxed">
              Our team has led and delivered products across automotive, retail, media, health,
              and enterprise — the kind of environments where quality and reliability are non‑negotiable.
            </p>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#242021] px-4 py-2 text-sm text-[#CFC9CB]">
              <span className="text-white" style={{ fontWeight: 700 }}>EU & UK based.</span>
              We operate under EU & UK law, including GDPR.
            </div>
          </div>

          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
            <div className="overflow-hidden border-y border-white/10 bg-[#1A1718]/60 py-6">
              <div className="logo-marquee">
                <div className="logo-track">
                  {logoItems.map((item) => (
                    <LogoTile key={`logo-${item.name}`} {...item} />
                  ))}
                </div>
                <div className="logo-track" aria-hidden="true">
                  {logoItems.map((item) => (
                    <LogoTile key={`logo-dup-${item.name}`} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#2A1F2C] p-6">
            <p className="text-white text-lg leading-relaxed">
              “They delivered at startup speed without cutting corners on architecture or quality.”
            </p>
            <p className="mt-4 text-[#CFC9CB] text-sm">Product Lead, Automotive</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#1E2A2B] p-6">
            <p className="text-white text-lg leading-relaxed">
              “Clear thinking, fast iteration, and no drama. Exactly what we needed.”
            </p>
            <p className="mt-4 text-[#CFC9CB] text-sm">Head of Digital, Retail</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#2A251E] p-6">
            <p className="text-white text-lg leading-relaxed">
              “Handled regulated workflows carefully and still shipped on time.”
            </p>
            <p className="mt-4 text-[#CFC9CB] text-sm">Ops Director, Healthcare</p>
          </div>
        </div>
      </section>

      {/* What Makes Us Unlike Other Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 max-w-[1280px]">
        <h2 
          className="text-3xl md:text-5xl mb-16 tracking-tight"
          style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
        >
          What makes us <span className="text-[#F3A6C8]">unlike other</span> agencies
        </h2>

        {/* Speed Without Shortcuts */}
        <div className="mb-20 md:mb-32">
          <div className="flex items-start gap-4 mb-6">
            <svg 
              className="w-5 h-5 mt-1 flex-shrink-0 opacity-70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F3A6C8"
              strokeWidth="2"
            >
              <path d="M12 2 L13 11 L22 12 L13 13 L12 22 L11 13 L2 12 L11 11 Z" />
            </svg>
            <h3 className="text-2xl md:text-4xl" style={{ fontWeight: 700 }}>
              Speed without shortcuts.
            </h3>
          </div>
          
          <div className="bg-[#242021] rounded-2xl p-8 md:p-12 max-w-3xl">
            <div className="space-y-4 text-[#CFC9CB] text-lg">
              <p>Most agencies hand-code everything.</p>
              <p>A feature takes weeks. Iterations are slow. Costs climb.</p>
              <p className="pt-4 text-white">We use AI as a force multiplier, not a crutch:</p>
              <ul className="list-none space-y-2 pl-4">
                <li>• rapid prototyping,</li>
                <li>• fast iteration,</li>
                <li>• automated analysis,</li>
              </ul>
              <p>while keeping senior-level architecture, testing, and decision-making.</p>
              <p className="pt-4 text-white" style={{ fontWeight: 700 }}>
                The result: ~10× faster delivery without fragile systems.
              </p>
            </div>
          </div>
        </div>

        {/* AI Where It Makes Sense */}
        <div className="mb-20 md:mb-32">
          <div className="flex items-start gap-4 mb-6 justify-end text-right">
            <svg 
              className="w-5 h-5 mt-1 flex-shrink-0 opacity-70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6FB7FF"
              strokeWidth="2"
            >
              <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
            </svg>
            <h3 className="text-2xl md:text-4xl" style={{ fontWeight: 700 }}>
              AI where it makes sense. Engineering where it matters.
            </h3>
          </div>
          
          <div className="bg-[#242021] rounded-2xl p-8 md:p-12 max-w-3xl ml-auto text-right">
            <div className="space-y-4 text-[#CFC9CB] text-lg">
              <p>We don't use AI to generate disposable code.</p>
              <p className="pt-4">We use it to:</p>
              <ul className="list-none space-y-2 pl-4">
                <li>• explore solutions faster,</li>
                <li>• test assumptions early,</li>
                <li>• reduce waste,</li>
                <li>• and free senior engineers to focus on system design.</li>
              </ul>
              <p className="pt-4">Every product is still built on:</p>
              <ul className="list-none space-y-2 pl-4">
                <li>• proven architectures,</li>
                <li>• scalable infrastructure,</li>
                <li>• and experience from two decades of real production systems.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Machine Learning Section */}
        <div className="mb-20 md:mb-32">
          <div className="flex items-start gap-4 mb-6">
            <svg 
              className="w-5 h-5 mt-1 flex-shrink-0 opacity-70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B9A8FF"
              strokeWidth="2"
            >
              <path d="M12 2 L13 11 L22 12 L13 13 L12 22 L11 13 L2 12 L11 11 Z" />
            </svg>
            <h3 className="text-2xl md:text-4xl" style={{ fontWeight: 700 }}>
              Machine Learning, not buzzwords
            </h3>
          </div>
          
          <div className="bg-[#242021] rounded-2xl p-8 md:p-12 max-w-3xl">
            <div className="space-y-4 text-[#CFC9CB] text-lg">
              <p>Most "AI products" stop at chatbots and wrappers.</p>
              <p className="text-white" style={{ fontWeight: 700 }}>We go further.</p>
              <p className="pt-4">We use Machine Learning to:</p>
              <ul className="list-none space-y-2 pl-4">
                <li>• analyse real data,</li>
                <li>• find patterns,</li>
                <li>• predict demand,</li>
                <li>• reduce operational costs,</li>
                <li>• and support better decisions.</li>
              </ul>
              <p className="pt-4 text-white">This is not hype.</p>
              <p>It's maths, data, and engineering — applied where it creates measurable value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 max-w-[1280px] bg-[#242021] -mx-6 px-6 md:mx-auto md:rounded-3xl md:px-16">
        <h2 
          className="text-3xl md:text-5xl mb-12 tracking-tight"
          style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
        >
          What we do
        </h2>
        
        <div className="space-y-12 md:space-y-16">
          <div className="flex items-start gap-4 group">
            <svg 
              className="w-5 h-5 mt-1 flex-shrink-0 opacity-70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F3A6C8"
              strokeWidth="2"
            >
              <path d="M12 2 L13 11 L22 12 L13 13 L12 22 L11 13 L2 12 L11 11 Z" />
            </svg>
            <div>
              <h3 className="text-2xl md:text-3xl mb-2" style={{ fontWeight: 700 }}>
                Strategy & Product Thinking
              </h3>
              <p className="text-[#9A9496] text-lg">Turning vague ideas into products worth building.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <svg 
              className="w-5 h-5 mt-1 flex-shrink-0 opacity-70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6FB7FF"
              strokeWidth="2"
            >
              <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
            </svg>
            <div>
              <h3 className="text-2xl md:text-3xl mb-2" style={{ fontWeight: 700 }}>
                SaaS Design & Engineering
              </h3>
              <p className="text-[#9A9496] text-lg">Clean, scalable systems designed to survive growth.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <svg 
              className="w-5 h-5 mt-1 flex-shrink-0 opacity-70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B9A8FF"
              strokeWidth="2"
            >
              <path d="M12 2 L13 11 L22 12 L13 13 L12 22 L11 13 L2 12 L11 11 Z" />
            </svg>
            <div>
              <h3 className="text-2xl md:text-3xl mb-2" style={{ fontWeight: 700 }}>
                AI-First Product Development
              </h3>
              <p className="text-[#9A9496] text-lg">Faster iteration, smarter tooling, better outcomes — without technical debt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Early But Serious Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 max-w-[1280px]">
        <div className="relative overflow-hidden">
          {/* Decorative squiggle */}
          <svg 
            className="absolute -top-8 -right-8 w-24 h-24 opacity-30 hidden md:block"
            viewBox="0 0 64 64"
            fill="none"
            stroke="#C7D400"
            strokeWidth="2"
          >
            <path d="M 10 32 Q 20 10, 32 32 T 54 32" strokeLinecap="round" />
          </svg>

          <div className="relative z-10 max-w-3xl">
            <h2 
              className="text-3xl md:text-5xl mb-8 tracking-tight"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Early, but serious
            </h2>
            <div className="bg-[#242021] rounded-2xl p-8 md:p-12">
              <div className="text-[#CFC9CB] text-lg md:text-xl space-y-4 leading-relaxed">
                <p>UnlikeOther is new.</p>
                <p>The experience behind it isn't.</p>
                <p className="pt-4">
                  We've spent 20+ years building digital products — seeing what scales, what fails, 
                  and what quietly costs companies millions later.
                </p>
                <p className="pt-4 text-white" style={{ fontWeight: 700 }}>We believe in:</p>
                <ul className="list-none space-y-2 pl-4">
                  <li>• fewer products,</li>
                  <li>• built properly,</li>
                  <li>• for the long term.</li>
                </ul>
                <p className="pt-4">No vanity metrics.</p>
                <p>No rushed shortcuts.</p>
                <p>No AI theatre.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20 md:py-32 max-w-[1280px]">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl mb-12 tracking-tight max-w-4xl mx-auto leading-tight"
            style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Let's build something that <span className="text-[#F3A6C8]">actually lasts.</span>
          </h2>
          <a 
            href="mailto:hello@unlikeother.ai"
            className="inline-block px-8 py-4 bg-[#F3A6C8] text-[#1E1B1C] rounded-full hover:brightness-110 transition-all text-lg"
            style={{ fontWeight: 700 }}
          >
            hello@unlikeother.ai
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 max-w-[1280px] border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#9A9496]">
          <div style={{ fontWeight: 700 }}>UnlikeOther.ai © 2026</div>
          <div>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland & Czech Republic 🇨🇿</div>
        </div>
      </footer>
    </div>
    </div>
  );
}
