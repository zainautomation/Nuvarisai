import { showcaseCards } from '@/lib/data';

export default function Showcase() {
  return (
    <section className="section section-white">
      <div className="container">
        <div className="section-header reveal">
          <div className="eyebrow"><span className="eyebrow-dot" />The Experience</div>
          <h2>AI That Sounds Like Your Best Receptionist</h2>
          <p>
            Nuvaris AI delivers natural, human-like conversations that book appointments,
            capture leads, and serve your customers — 24 hours a day, in any language.
          </p>
        </div>

        <div className="showcase-grid">
          {showcaseCards.map(({ src, alt, tag, delay, title, body }) => (
            <div key={tag} className={`showcase-card reveal ${delay}`}>
              <div className="showcase-img-wrap">
                <img src={src} alt={alt} loading="lazy" />
                <div className="showcase-overlay" />
                <div className="showcase-img-tag">{tag}</div>
              </div>
              <div className="showcase-body">
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
