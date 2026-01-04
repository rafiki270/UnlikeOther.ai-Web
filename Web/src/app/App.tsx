import { useState } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1E1B1C] text-white overflow-x-hidden">
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
          <div className="flex items-start gap-4 mb-6">
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
          
          <div className="bg-[#242021] rounded-2xl p-8 md:p-12 max-w-3xl">
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
  );
}