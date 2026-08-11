import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { TrustIndicators } from '@/components/TrustIndicators';
import { WhyHireMe } from '@/components/WhyHireMe';
import { Experience } from '@/components/Experience';
import { FeaturedWork } from '@/components/FeaturedWork';
import { Education } from '@/components/Education';
import { Testimonials } from '@/components/Testimonials';
import { BeyondTheCode } from '@/components/BeyondTheCode';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark overflow-x-hidden">
      <Navigation />
      <Hero />
      <TrustIndicators />
      <WhyHireMe />
      <Experience />
      <FeaturedWork />
      <Education />
      <Testimonials />
      <BeyondTheCode />
      <FinalCTA />
      <Footer />
    </main>
  );
}
