import { steps } from '@/lib/data';

export default function HowItWorks() {
  return (
    <section className="section section-white" id="how-it-works">
      <div className="container">
        <div className="section-header reveal">
          <div className="eyebrow"><span className="eyebrow-dot" />How It Works</div>
          <h2>Up and Running in 48 Hours</h2>
          <p>We handle everything. You just forward your calls and watch your business run itself.</p>
        </div>

        <div className="steps">
          {steps.map(({ num, delay, title, body }) => (
            <div key={num} className={`step reveal ${delay}`}>
              <div className="step-num">{num}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
