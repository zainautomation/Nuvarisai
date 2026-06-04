import { trustLogos } from '@/lib/data';

export default function TrustBar() {
  // Duplicate the list for a seamless infinite marquee
  const logos = [...trustLogos, ...trustLogos];

  return (
    <div className="trust-bar">
      <div className="container">
        <div className="trust-bar-inner">
          <p className="trust-label">Trusted by businesses across industries</p>
          <div className="trust-logos">
            <div className="trust-track">
              {logos.map((name, i) => (
                <span key={i} className="trust-logo">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
