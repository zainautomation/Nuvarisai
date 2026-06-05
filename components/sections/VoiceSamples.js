'use client';
import { useState, useRef } from 'react';
import { voiceSamples } from '@/lib/data';

const BAR_HEIGHTS = [30, 55, 75, 45, 90, 60, 35, 80, 50, 70, 40, 85, 55, 65, 45, 75, 30, 60, 80, 50];

function PlayIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M3 1.5L13.5 7.5 3 13.5V1.5z" fill="white" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <rect x="2"   y="1.5" width="4" height="12" rx="1.5" fill="white" />
      <rect x="9"   y="1.5" width="4" height="12" rx="1.5" fill="white" />
    </svg>
  );
}

function AudioCard({ sample }) {
  const [playing, setPlaying]   = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const toggle = () => {
    if (!sample.src) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const onTimeUpdate = () => {
    if (!audioRef.current) return;
    const pct = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(pct || 0);
  };

  const onEnded = () => { setPlaying(false); setProgress(0); };

  return (
    <div className={`voice-card reveal ${sample.delay}`}>
      <div className="voice-card-header">
        <span className="voice-industry-tag">{sample.industry}</span>
      </div>

      <p className="voice-scenario">{sample.scenario}</p>

      <div className="voice-player">
        <button
          className="voice-play-btn"
          onClick={toggle}
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>

        <div className="voice-waveform">
          {BAR_HEIGHTS.map((h, i) => (
            <div
              key={i}
              className={`voice-bar${playing ? ' voice-bar-playing' : ''}`}
              style={{
                height: playing ? undefined : `${h}%`,
                animationDelay: `${(i * 0.065).toFixed(3)}s`,
              }}
            />
          ))}
        </div>

        <span className="voice-duration">{sample.duration}</span>
      </div>

      <div className="voice-progress-track">
        <div className="voice-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {sample.src && (
        <audio ref={audioRef} src={sample.src} onTimeUpdate={onTimeUpdate} onEnded={onEnded} />
      )}
    </div>
  );
}

export default function VoiceSamples() {
  return (
    <section className="section section-white" id="voice-samples">
      <div className="container">
        <div className="section-header reveal">
          <div className="eyebrow"><span className="eyebrow-dot" />Hear It For Yourself</div>
          <h2>Real AI Calls. Real Conversations.</h2>
          <p>
            Press play and hear exactly how Nuvaris AI sounds on the phone — natural, warm,
            and indistinguishable from a human receptionist.
          </p>
        </div>

        <div className="voice-grid">
          {voiceSamples.map((sample) => (
            <AudioCard key={sample.id} sample={sample} />
          ))}
        </div>
      </div>
    </section>
  );
}
