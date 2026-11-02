import { Link } from 'react-router-dom';

export default function SiteFooter() {
  return (
    <footer className="container mx-auto px-6 py-12 max-w-[1280px] border-t border-white/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#9A9496]">
        <div style={{ fontWeight: 700 }}>UnlikeOther AI © 2026</div>
        <div className="flex items-center gap-6">
          <Link to="/kits" className="hover:text-white transition-colors">
            Kits
          </Link>
          <Link to="/labs" className="hover:text-white transition-colors">
            Labs
          </Link>
          <a href="mailto:hello@unlikeotherai.com" className="hover:text-white transition-colors">
            hello@unlikeotherai.com
          </a>
        </div>
        <div>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland & Czech Republic 🇨🇿</div>
      </div>
    </footer>
  );
}
