'use client';
import { useState } from 'react';

const painPoints = [
  { stat: '62% of calls go unanswered after hours',    body: 'Most businesses bleed leads overnight and on weekends without realising it.' },
  { stat: 'Receptionists cost $35K–$60K per year',     body: "And they still can't handle every call simultaneously or work weekends." },
  { stat: "80% of callers won't leave a voicemail",    body: 'They simply call your competitor and book with them instead.' },
];

function sliderBackground(min, max, val) {
  const pct = ((val - min) / (max - min)) * 100;
  return `linear-gradient(to right, #2B7AE8 ${pct}%, rgba(22,32,50,.10) ${pct}%)`;
}

export default function Problem() {
  const [calls,  setCalls]  = useState(20);
  const [missed, setMissed] = useState(35);
  const [value,  setValue]  = useState(150);

  const annual  = Math.round(calls * (missed / 100) * 365 * value * 0.30);
  const monthly = Math.round(annual / 12);

  return (
    <section className="section section-white" id="problem">
      <div className="container">
        <div className="problem-grid">

          {/* ── Left: pain points ── */}
          <div className="problem-content reveal">
            <div className="eyebrow">
              <span className="eyebrow-dot" />The Problem
            </div>
            <h2>Every Missed Call is<br />Missed Revenue</h2>
            <p>
              Your front desk can&apos;t be everywhere. After-hours calls hit voicemail.
              Lunch breaks go unanswered. Every missed call is a potential client
              choosing your competitor.
            </p>
            <ul className="pain-list">
              {painPoints.map(({ stat, body }) => (
                <li key={stat} className="pain-item">
                  <div className="pain-x">✕</div>
                  <div className="pain-text">
                    <strong>{stat}</strong>
                    {body}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: revenue calculator ── */}
          <div className="reveal d2">
            <div className="calc-card">
              <div className="calc-head">
                <div className="calc-title">Revenue Loss Calculator</div>
                <div className="calc-subtitle">Drag the sliders to see what missed calls cost you</div>
              </div>

              <div className="calc-fields">
                <SliderField
                  label="Calls received per day"
                  display={calls}
                  min={5} max={150} value={calls}
                  onChange={(v) => setCalls(v)}
                />
                <SliderField
                  label="Calls missed (%)"
                  display={`${missed}%`}
                  min={5} max={80} value={missed}
                  onChange={(v) => setMissed(v)}
                />
                <SliderField
                  label="Avg. booking value"
                  display={`$${value}`}
                  min={50} max={2000} step={50} value={value}
                  onChange={(v) => setValue(v)}
                />
              </div>

              <div className="calc-result">
                <div className="calc-result-item">
                  <div className="calc-result-num">${monthly.toLocaleString()}</div>
                  <div className="calc-result-lbl">Lost per month</div>
                </div>
                <div className="calc-divider-v" />
                <div className="calc-result-item">
                  <div className="calc-result-num blue">${annual.toLocaleString()}</div>
                  <div className="calc-result-lbl">Lost per year</div>
                </div>
              </div>

              <div className="calc-cta">
                <a href="https://calendly.com" className="btn btn-dark btn-full">
                  Stop Losing Revenue <span className="arrow">→</span>
                </a>
              </div>
              <p className="calc-note">Based on 30% average caller conversion rate</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function SliderField({ label, display, min, max, step = 1, value, onChange }) {
  return (
    <div>
      <div className="calc-label-row">
        <label>{label}</label>
        <span className="calc-val">{display}</span>
      </div>
      <input
        type="range"
        className="calc-slider"
        min={min}
        max={max}
        step={step}
        value={value}
        style={{ background: sliderBackground(min, max, value) }}
        onChange={(e) => onChange(+e.target.value)}
      />
    </div>
  );
}
