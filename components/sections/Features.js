'use client';
import { useEffect } from 'react';
import { featureCards, routingRows } from '@/lib/data';
import { iconMap, NetworkIcon } from '@/components/ui/Icons';

const TILT_OPTIONS = { speed: 600, glare: true, perspective: 1200, scale: 1.01 };

export default function Features() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.1/vanilla-tilt.min.js';
    script.onload = () => {
      window.VanillaTilt.init(document.querySelectorAll('.feat-card'),   { ...TILT_OPTIONS, max: 4, 'max-glare': 0.06 });
      window.VanillaTilt.init(document.querySelectorAll('.routing-row'), { ...TILT_OPTIONS, max: 3, 'max-glare': 0.04 });
    };
    document.head.appendChild(script);

    return () => {
      document.querySelectorAll('.feat-card[data-tilt], .routing-row[data-tilt]')
        .forEach((el) => el.vanillaTilt?.destroy());
    };
  }, []);

  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-header reveal">
          <div className="eyebrow"><span className="eyebrow-dot" />Features</div>
          <h2>Everything a Receptionist Does, Only Better</h2>
          <p>Nuvaris AI handles the full front-desk experience with the warmth of a human and the reliability of a machine.</p>
        </div>

        <div className="features-grid">
          {/* Standard feature cards */}
          {featureCards.map(({ iconKey, delay, title, body }) => {
            const Icon = iconMap[iconKey];
            return (
              <div key={title} className={`feat-card reveal ${delay}`}>
                <div className="feat-icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            );
          })}

          {/* Wide card – Intelligent Call Routing */}
          <div className="feat-card feat-card-wide reveal">
            <div>
              <div className="feat-icon"><NetworkIcon /></div>
              <h3>Intelligent Call Routing</h3>
              <p style={{ fontSize: '15px', color: 'rgba(245,244,239,.45)', lineHeight: '1.75', marginBottom: 0 }}>
                Your AI knows when a call needs a human touch. Complex questions, urgent issues,
                and VIP callers get routed to the right team member instantly — so nothing
                important slips through.
              </p>
            </div>

            <div className="feat-wide-visual">
              <div className="routing-rows">
                {routingRows.map(({ label, tag, tagClass }) => (
                  <div key={label} className="routing-row">
                    <div className="routing-dot" />
                    {label}
                    <span className={`routing-tag ${tagClass}`}>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
