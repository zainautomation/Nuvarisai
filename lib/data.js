// ─── Trust Bar ────────────────────────────────────────────────────────────────

export const trustLogos = [
  'Clearwater Auto Works',
  'Hargrove & Associates',
  'MedFirst Urgent Care',
  'Lumière Aesthetics',
  'Apex Fitness Club',
  'Serenity Senior Living',
  'ProFlow Plumbing Co.',
  'The Grand Meridian',
];

// ─── Showcase ─────────────────────────────────────────────────────────────────

export const showcaseCards = [
  {
    src: '/images/showcase-answering.png',
    alt: 'AI voice receptionist always answering calls',
    tag: 'Always Answering',
    delay: '',
    title: 'Every Call Answered on the First Ring',
    body: 'Your AI receptionist responds instantly with a warm, professional voice, indistinguishable from a real human, every single time.',
  },
  {
    src: '/images/showcase-booking.png',
    alt: 'AI smart appointment booking automatically',
    tag: 'Smart Booking',
    delay: 'd2',
    title: 'Appointments Booked Automatically',
    body: 'Callers book, reschedule, and confirm appointments in real time, synced directly to your calendar with zero manual effort.',
  },
  {
    src: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=700&q=80',
    alt: 'Premium AI robot representing intelligent automation',
    tag: 'Any Industry',
    delay: 'd4',
    external: true,
    title: 'Trained Specifically on Your Business',
    body: 'From law firms to auto shops, your AI learns your services, team, and FAQs, so every answer sounds like it came from you.',
  },
];

// ─── Features ─────────────────────────────────────────────────────────────────

export const featureCards = [
  { iconKey: 'Mic',      delay: '',   title: 'Human-Like Voice',     body: "Our AI sounds completely natural and warm. Callers won't know they're speaking to an AI unless you choose to tell them." },
  { iconKey: 'Calendar', delay: 'd1', title: 'Appointment Booking',  body: 'Integrates with your calendar to book, reschedule, and confirm appointments in real time, automatically.' },
  { iconKey: 'Bolt',     delay: 'd2', title: 'Instant Lead Capture', body: "Every caller's name, number, and intent is sent straight to your team. No warm lead slips through the cracks, ever." },
  { iconKey: 'Clock',    delay: '',   title: '24/7/365 Availability', body: 'Never closes. Never sleeps. Never calls in sick. On duty every hour of every day, including holidays and weekends.' },
  { iconKey: 'Globe',    delay: 'd1', title: 'Multilingual Support', body: 'Communicates fluently with callers in multiple languages, so you never lose a customer due to a language barrier.' },
  { iconKey: 'Link',     delay: 'd2', title: 'Seamless Integrations', body: 'Works with Google Calendar, Calendly, your CRM, and scheduling tools, syncing your bookings automatically in real time.' },
];

export const routingRows = [
  { label: 'Appointment booking request',   tag: 'Handled by AI',    tagClass: 'tag-handled' },
  { label: 'Billing enquiry, existing patient', tag: 'Routed to team',   tagClass: 'tag-routed'  },
  { label: 'Urgent medical concern',        tag: 'Priority transfer', tagClass: 'tag-urgent'  },
  { label: 'General FAQ',                   tag: 'Handled by AI',    tagClass: 'tag-handled' },
];

// ─── How It Works ─────────────────────────────────────────────────────────────

export const steps = [
  { num: 1, delay: '',   title: 'We Learn Your Business', body: 'We gather your FAQs, services, team structure, and calendar setup, everything your AI needs to represent you perfectly.' },
  { num: 2, delay: 'd2', title: 'We Build Your AI',        body: 'Your custom AI receptionist is built, trained, and tested, with the exact voice, tone, and knowledge your brand requires.' },
  { num: 3, delay: 'd4', title: 'Go Live & Grow',          body: "Forward your number and you're live. Calls answered, leads captured, appointments booked, completely on autopilot." },
];

// ─── Industries ───────────────────────────────────────────────────────────────

export const industries = [
  { delay: '',   title: 'Law Firms',                  alt: 'Law Firms',                  body: 'Qualify new client enquiries, schedule consultations, and capture case details around the clock, never miss a potential client again.',              img: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&w=600&q=80' },
  { delay: 'd1', title: 'Urgent Care & Medical Spas', alt: 'Urgent Care & Medical Spas', body: 'Book appointments, handle patient enquiries, and manage urgent call routing without overloading your front desk staff.',                             img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80' },
  { delay: 'd2', title: 'Plumbing & Home Services',   alt: 'Plumbing & Home Services',   body: 'Answer every service call, provide instant quotes, and book jobs while your crew is out on site getting work done.',                                img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80' },
  { delay: '',   title: 'Fitness & Gyms',             alt: 'Fitness & Gyms',             body: 'Handle membership enquiries, class bookings, and cancellations 24/7, keeping your front desk free for members in the building.',                    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80' },
  { delay: 'd1', title: 'Hotels & Hospitality',       alt: 'Hotels & Hospitality',       body: 'Manage reservations, guest enquiries, and overflow calls during peak periods without putting callers on hold.',                                     img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80' },
  { delay: 'd2', title: 'Senior Care Centres',        alt: 'Senior Care Centres',        body: 'Provide warm, patient communication for families and residents, ensuring no enquiry or concern ever goes unanswered.',                              img: 'https://images.unsplash.com/photo-1576765607924-3f7b8410a787?auto=format&fit=crop&w=600&q=80' },
];

// ─── Stats ────────────────────────────────────────────────────────────────────

export const stats = [
  { delay: '',   num: '98%',   lbl: 'Call Answer Rate' },
  { delay: 'd1', num: '3×',    lbl: 'More Leads Captured' },
  { delay: 'd2', num: '$50K+', lbl: 'Saved Per Year on Average' },
  { delay: 'd3', num: '+28%',  lbl: 'Avg. Booking Increase' },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials = [
  {
    delay: '',
    initials: 'CW',
    avatarBg: 'var(--dark)',
    name: 'Clearwater Auto Works',
    role: 'Auto Repair, Clearwater FL',
    quote: '"Since we brought on Nuvaris AI, missed calls dropped to nearly zero and appointment bookings rose 28%. It handles everything our front desk used to struggle with, and it never takes a day off."',
  },
  {
    delay: 'd2',
    initials: 'UC',
    avatarBg: '#2d3f5a',
    name: 'Urgent Care Centre',
    role: 'Medical, Florida',
    quote: '"Nuvaris AI handled overflow calls during our busiest shifts and freed up our staff to focus on the patients in front of them. The quality of the conversations is genuinely impressive."',
  },
  {
    delay: 'd4',
    initials: 'LF',
    avatarBg: '#3d526e',
    name: 'Law Firm Owner',
    role: 'Legal Practice, United States',
    quote: "\"As a solo attorney I couldn't justify hiring a full-time receptionist. Nuvaris qualifies every new enquiry, collects case details, and books consultations, around the clock for a fraction of the cost.\"",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faqs = [
  {
    delay: '',
    q: "Will callers know they're talking to an AI?",
    a: "Not unless you want them to. Our AI uses advanced voice technology that sounds completely natural. We can also configure the AI to disclose it's automated if your industry requires it or if you prefer transparency.",
  },
  {
    delay: 'd1',
    q: 'How long does setup take?',
    a: 'Most clients are live within 48 hours. We handle all the setup — you share your business info, FAQs, and calendar access, and we do the rest. Everything is tested before going live.',
  },
  {
    delay: 'd2',
    q: 'What happens with complex or sensitive calls?',
    a: 'Your AI is trained to recognise when a call needs human attention and will route it to the right team member instantly. You set the rules, we follow them precisely.',
  },
  {
    delay: 'd1',
    q: 'Can the AI handle multiple calls at the same time?',
    a: 'Yes — unlike a human receptionist, your AI handles unlimited simultaneous calls. No hold music, no "can I put you on hold?" — every caller gets immediate, full attention.',
  },
  {
    delay: 'd2',
    q: 'Does it integrate with my existing calendar or CRM?',
    a: 'Yes. Nuvaris AI integrates with Google Calendar, Calendly, HubSpot, Salesforce, and most major scheduling and CRM platforms. Ask us about a specific integration during your demo call.',
  },
  {
    delay: 'd3',
    q: 'Is there a long-term contract?',
    a: "No. We offer month-to-month plans with no lock-in. We believe in earning your business every month with results, not holding you hostage to a contract.",
  },
];
