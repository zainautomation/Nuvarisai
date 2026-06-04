'use client';
import { useState } from 'react';
import { faqs } from '@/lib/data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="section section-white" id="faq">
      <div className="container">
        <div className="section-header reveal">
          <div className="eyebrow"><span className="eyebrow-dot" />FAQ</div>
          <h2>Got Questions? We&apos;ve Got Answers.</h2>
          <p>Everything you need to know about Nuvaris AI before getting started.</p>
        </div>

        <div className="faq-list">
          {faqs.map(({ q, a, delay }, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={q} className={`faq-item reveal ${delay}${isOpen ? ' open' : ''}`}>
                <div className="faq-q" onClick={() => toggle(i)}>
                  <span className="faq-q-text">{q}</span>
                  <div className="faq-toggle">+</div>
                </div>
                <div className="faq-body" style={{ maxHeight: isOpen ? '400px' : '0' }}>
                  <div className="faq-body-inner">{a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
