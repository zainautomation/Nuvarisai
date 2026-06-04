import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="section section-white" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <div className="eyebrow"><span className="eyebrow-dot" />Testimonials</div>
          <h2>Businesses Love Nuvaris AI</h2>
          <p>Don&apos;t just take our word for it — hear from the businesses that transformed their front desk.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(({ name, role, initials, avatarBg, quote, delay }) => (
            <div key={name} className={`testi-card reveal ${delay}`}>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">{quote}</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: avatarBg }}>{initials}</div>
                <div>
                  <div className="testi-name">{name}</div>
                  <div className="testi-role">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
