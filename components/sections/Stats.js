import { stats } from '@/lib/data';

export default function Stats() {
  return (
    <div className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map(({ num, lbl, delay }) => (
            <div key={lbl} className={`stat-item reveal ${delay}`}>
              <div className="stat-num">{num}</div>
              <div className="stat-lbl">{lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
