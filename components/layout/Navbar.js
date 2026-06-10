'use client';
import { useState, useEffect } from 'react';
import NuvarisLogo from '@/components/ui/NuvarisLogo';

const navLinks = [
  { href: '#features',    label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#industries',  label: 'Industries' },
  { href: '#faq',         label: 'FAQ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* ── Mobile overlay menu ── */}
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        <button className="mobile-nav-close" onClick={closeMobile}>✕</button>

        {navLinks.map(({ href, label }) => (
          <a key={href} href={href} onClick={closeMobile}>{label}</a>
        ))}

        <a
          href="https://calendly.com/maya-nuvarisai/30min" target="_blank" rel="noopener noreferrer"
          className="btn btn-dark"
          onClick={closeMobile}
          style={{ marginTop: '8px' }}
        >
          Book a Demo
        </a>
      </div>

      {/* ── Top navigation bar ── */}
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="nav-logo">
            <NuvarisLogo />
          </a>

          <ul className="nav-links">
            {navLinks.map(({ href, label }) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>

          <div className="nav-actions">
            <
              href="https://calendly.com/maya-nuvarisai/30min" target="_blank" rel="noopener noreferrer"
              className="btn btn-dark"
              style={{ padding: '10px 22px', fontSize: '13px' }}
            >
              Book a Demo <span className="arrow">→</span>
            </a>
          </div>

          <button
            className="hamburger"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </>
  );
}
