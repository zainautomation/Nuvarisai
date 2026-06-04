const STROKE = '#2B7AE8';
const SW = '1.8';

export function MicIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="7" y="2" width="8" height="12" rx="4" stroke={STROKE} strokeWidth={SW} />
      <path d="M3 11a8 8 0 0016 0" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <line x1="11" y1="19" x2="11" y2="22" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <line x1="8"  y1="22" x2="14" y2="22" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  );
}

export function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="4" width="18" height="16" rx="3" stroke={STROKE} strokeWidth={SW} />
      <path d="M2 9h18" stroke={STROKE} strokeWidth={SW} />
      <path d="M7 2v4M15 2v4" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <circle cx="7"  cy="14" r="1.2" fill={STROKE} />
      <circle cx="11" cy="14" r="1.2" fill={STROKE} />
      <circle cx="15" cy="14" r="1.2" fill={STROKE} />
    </svg>
  );
}

export function BoltIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M13 2L4 13h7l-2 7 9-11h-7l2-7z" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="9" stroke={STROKE} strokeWidth={SW} />
      <path d="M11 6v5l3 3" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="9" stroke={STROKE} strokeWidth={SW} />
      <ellipse cx="11" cy="11" rx="4" ry="9" stroke={STROKE} strokeWidth={SW} />
      <path d="M2 11h18" stroke={STROKE} strokeWidth={SW} />
    </svg>
  );
}

export function LinkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M9.5 13.5a5 5 0 007 0l2.5-2.5a5 5 0 00-7.07-7.07L10.5 5.5"  stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M12.5 8.5a5 5 0 00-7 0L3 11a5 5 0 007.07 7.07L11.5 16.5"    stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  );
}

export function NetworkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="4"  cy="11" r="2.5" stroke={STROKE} strokeWidth={SW} />
      <circle cx="18" cy="5"  r="2.5" stroke={STROKE} strokeWidth={SW} />
      <circle cx="18" cy="17" r="2.5" stroke={STROKE} strokeWidth={SW} />
      <path d="M6.5 11h2.5l2.5-5.5h4" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 11l2.5 5.5h4"       stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const iconMap = {
  Mic:      MicIcon,
  Calendar: CalendarIcon,
  Bolt:     BoltIcon,
  Clock:    ClockIcon,
  Globe:    GlobeIcon,
  Link:     LinkIcon,
  Network:  NetworkIcon,
};
