import './globals.css';

export const metadata = {
  title: 'Nuvaris AI | AI Voice Receptionist',
  description: 'AI-powered voice receptionist that answers every call, books appointments, and captures leads 24/7.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
