import Image from 'next/image';
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
          {showcaseCards.map(({ src, alt, tag, delay, title, body, external }) => (
            <div key={tag} className={`showcase-card reveal ${delay}`}>
              <div className="showcase-img-wrap">
                {external ? (
                  <img src={src} alt={alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} loading="lazy" unoptimized />
                )}
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
