import Navbar           from '@/components/layout/Navbar';
import Footer           from '@/components/layout/Footer';
import ScrollRevealInit from '@/components/ui/ScrollRevealInit';

import Hero         from '@/components/sections/Hero';
import TrustBar     from '@/components/sections/TrustBar';
import Problem      from '@/components/sections/Problem';
import Showcase     from '@/components/sections/Showcase';
import Features     from '@/components/sections/Features';
import HowItWorks   from '@/components/sections/HowItWorks';
import Industries   from '@/components/sections/Industries';
import Stats        from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';
import FAQ          from '@/components/sections/FAQ';
import CTA          from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Showcase />
        <Features />
        <HowItWorks />
        <Industries />
        <Stats />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
