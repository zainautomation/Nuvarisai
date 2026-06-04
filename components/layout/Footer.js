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
          </div>
        </div>
      </div>
    </footer>
  );
}
