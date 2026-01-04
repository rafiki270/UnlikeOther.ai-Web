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
              Based in Scotland — Building Global Products
            </span>
          </div>

          {/* Main Headline */}
          <div className="mb-8 md:mb-12 relative">
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              <div>WE BUILD</div>
              <div className="text-[#F3A6C8]">UNLIKE</div>
              <div>OTHER</div>
              <div>PRODUCTS</div>
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
              className="absolute -left-4 bottom-8 w-6 h-6 md:w-8 md:h-8 opacity-70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F3A6C8"
              strokeWidth="2"
            >
              <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
            </svg>
          </div>

          {/* Sub-text */}
          <p className="text-[#CFC9CB] text-lg md:text-xl max-w-2xl mb-12">
            We design and build SaaS products for B2C and B2B teams worldwide.
          </p>

          {/* CTA */}
          <a 
            href="#contact"
            className="inline-block px-8 py-4 bg-[#F3A6C8] text-[#1E1B1C] rounded-full hover:brightness-110 transition-all"
            style={{ fontWeight: 700 }}
          >
            Get in touch →
          </a>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 max-w-[1280px]">
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
              <p className="text-[#9A9496]">Turning ideas into products that matter</p>
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
              <p className="text-[#9A9496]">Beautiful, scalable products built to last</p>
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
              <p className="text-[#9A9496]">Intelligent systems that create real value</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 max-w-[1280px]">
        <div className="bg-[#242021] rounded-3xl p-8 md:p-16 relative overflow-hidden">
          {/* Decorative squiggle */}
          <svg 
            className="absolute top-8 right-8 w-16 h-16 opacity-30"
            viewBox="0 0 64 64"
            fill="none"
            stroke="#C7D400"
            strokeWidth="2"
          >
            <path d="M 10 32 Q 20 10, 32 32 T 54 32" strokeLinecap="round" />
          </svg>

          <div className="relative z-10">
            <h2 
              className="text-3xl md:text-5xl mb-6 tracking-tight"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              EARLY, BUT SERIOUS
            </h2>
            <p className="text-[#CFC9CB] text-lg md:text-xl max-w-2xl leading-relaxed">
              We're a new agency built on senior experience. We believe in building fewer, better products—things that solve real problems and stand the test of time. No shortcuts, no vanity metrics. Just thoughtful product development from strategy to launch.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20 md:py-32 max-w-[1280px]">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-6xl mb-8 tracking-tight"
            style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            LET'S BUILD SOMETHING <span className="text-[#F3A6C8]">UNLIKE OTHER</span>
          </h2>
          <a 
            href="mailto:hello@unlikeother.ai"
            className="inline-block px-8 py-4 bg-[#F3A6C8] text-[#1E1B1C] rounded-full hover:brightness-110 transition-all"
            style={{ fontWeight: 700 }}
          >
            hello@unlikeother.ai
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 max-w-[1280px] border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#9A9496]">
          <div style={{ fontWeight: 700 }}>UnlikeOther.ai</div>
          <div>Scotland</div>
          <div>© 2026 UnlikeOther.ai</div>
        </div>
      </footer>
    </div>
  );
}
