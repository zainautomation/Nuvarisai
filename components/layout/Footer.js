import NuvarisLogo from '@/components/ui/NuvarisLogo';

const productLinks = [
  { href: '#features',    label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#industries',  label: 'Industries' },
];

const companyLinks = [
  { href: '#', label: 'About Us' },
  { href: '#', label: 'Blog' },
  { href: '#', label: 'Careers' },
  { href: '#', label: 'Contact' },
];

const supportLinks = [
  { href: '#faq', label: 'FAQ' },
  { href: '#',    label: 'Help Centre' },
  { href: '#',    label: 'Privacy Policy' },
  { href: '#',    label: 'Terms of Service' },
];

function LinkColumn({ title, links }) {
  return (
    <div className="footer-col">
      <h4>{title}</h4>
      <ul className="footer-links">
        {links.map(({ href, label }) => (
          <li key={label}><a href={href}>{label}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <div className="nav-logo">
              <NuvarisLogo footer />
            </div>
            <p>AI-powered voice receptionist that answers every call, books appointments, and captures leads — 24/7, on autopilot.</p>
          </div>

          <LinkColumn title="Product" links={productLinks} />
          <LinkColumn title="Company" links={companyLinks} />
          <LinkColumn title="Support" links={supportLinks} />
        </div>

        <div className="footer-bottom">
          <p>© 2026 Nuvaris AI. All rights reserved.</p>
          <div className="footer-btm-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
            <a
              href="https://www.linkedin.com/in/maya-magno-6a8942175/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social-icon"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
