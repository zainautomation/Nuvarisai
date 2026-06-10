const proofFaces = [
  { initials: 'JM', bg: '#162032' },
  { initials: 'SR', bg: '#2d3f5a' },
  { initials: 'DK', bg: '#3d526e' },
  { initials: 'AP', bg: '#243347' },
  { initials: 'LC', bg: '#1a2a3d' },
];

const mobileStats = [
  { val: '98%', lbl: 'Answer Rate' },
  { val: '3x',  lbl: 'More Leads' },
  { val: '24/7', lbl: 'Always On' },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">

          {/* ── Left: copy ── */}
          <div className="hero-content">
            <h1>Turning Every Ring<br /><em>Into Revenue</em></h1>

            <p className="hero-sub">
              Nuvaris AI answers every call instantly — booking appointments, routing
              enquiries, and handling customers in multiple languages, around the clock.
              No missed calls. No missed revenue. Ever.
            </p>

            <div className="hero-cta">
              <a href="https://calendly.com/maya-nuvarisai/30min" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                Book a Free Demo <span className="arrow">→</span>
              </a>
            </div>

            <div className="hero-proof">
              <div className="proof-faces">
                {proofFaces.map(({ initials, bg }) => (
                  <div key={initials} className="proof-face" style={{ background: bg }}>
                    {initials}
                  </div>
                ))}
              </div>
              <p className="proof-text">
                Trusted by <strong>clinics, law firms, auto shops &amp; more</strong> across the US
              </p>
            </div>
          </div>

          {/* ── Right: phone mockup ── */}
          <div className="hero-visual">
            {/* Floating stat chips (desktop) */}
            <div className="chip chip-1"><div className="chip-val">98%</div><div className="chip-lbl">Answer Rate</div></div>
            <div className="chip chip-2"><div className="chip-val">3x</div><div className="chip-lbl">More Leads</div></div>
            <div className="chip chip-3"><div className="chip-val">24/7</div><div className="chip-lbl">Always On</div></div>

            {/* Phone */}
            <div className="phone">
              <div className="phone-pill" />
              <div className="phone-screen">
                <div className="call-badge">
                  <span className="live-dot" />
                  Live Call
                </div>

                <div className="caller-block">
                  <div className="caller-icon">📞</div>
                  <div className="caller-name">Incoming Call</div>
                  <div className="caller-num">+1 (555) 847-2031</div>
                </div>

                <div className="waveform">
                  {Array.from({ length: 12 }, (_, i) => <div key={i} className="wave-bar" />)}
                </div>

                <div className="chat-bubbles">
                  <div className="bubble bubble-ai">
                    <div className="bubble-label">Nuvaris AI</div>
                    Hi! Thanks for calling. How can I help you today?
                  </div>
                  <div className="bubble bubble-caller">
                    <div className="bubble-label" style={{ color: 'var(--dark-45)' }}>Caller</div>
                    I&apos;d like to book an appointment.
                  </div>
                  <div className="bubble bubble-ai">
                    <div className="bubble-label">Nuvaris AI</div>
                    Of course — what time works best for you?
                  </div>
                </div>
              </div>
            </div>

            {/* Compact stats row (mobile only) */}
            <div className="stats-mini">
              {mobileStats.map(({ val, lbl }) => (
                <div key={lbl} className="stat-mini">
                  <div className="stat-mini-val">{val}</div>
                  <div className="stat-mini-lbl">{lbl}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
