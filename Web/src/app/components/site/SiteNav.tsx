import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/#products', label: 'Products', hash: true },
  { to: '/kits', label: 'Kits', hash: false },
  { to: '/labs', label: 'Labs', hash: false },
  { to: '/#contact', label: 'Contact', hash: true },
];

export default function SiteNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const linkClass = (active: boolean) =>
    `${active ? 'text-white' : 'text-[#CFC9CB]'} hover:text-white transition-colors`;

  return (
    <nav className="container mx-auto px-6 py-8 max-w-[1280px]">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="tracking-tight text-white"
          style={{ fontWeight: 700 }}
          onClick={() => setMobileMenuOpen(false)}
        >
          UnlikeOther AI
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.hash ? (
              <a
                key={link.to}
                href={link.to}
                className={linkClass(false)}
                onClick={(event) => {
                  if (pathname === '/') {
                    event.preventDefault();
                    const id = link.to.split('#')[1];
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {link.label}
              </a>
            ) : (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => linkClass(isActive)}>
                {link.label}
              </NavLink>
            ),
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-6 pb-4 space-y-4">
          {NAV_LINKS.map((link) =>
            link.hash ? (
              <a
                key={link.to}
                href={link.to}
                className={`block ${linkClass(false)}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `block ${linkClass(isActive)}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ),
          )}
        </div>
      )}
    </nav>
  );
}
