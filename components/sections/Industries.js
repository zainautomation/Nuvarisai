import { industries } from '@/lib/data';

export default function Industries() {
  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="section-header reveal">
          <div className="eyebrow"><span className="eyebrow-dot" />Industries</div>
          <h2>Built for Businesses That Can&apos;t Miss a Call</h2>
          <p>From medical clinics to law firms, Nuvaris AI is built for businesses where every call counts.</p>
        </div>

        <div className="industries-grid">
          {industries.map(({ title, alt, img, body, delay }) => (
            <div key={title} className={`industry-card reveal ${delay}`}>
              <div className="industry-img-wrap">
                <img src={img} alt={alt} loading="lazy" />
              </div>
              <div className="industry-body">
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
