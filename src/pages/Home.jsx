import React from 'react';
import { 
  HeroSection,
  WhyChooseUs,
  ClientLogosScroller,
  PrimaryCTASection,
  FeaturedWorkCarousel
} from '../components/Home';
import Pricing from './Pricing';

export function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      <HeroSection />
      <ClientLogosScroller />
      <WhyChooseUs />
      <FeaturedWorkCarousel />
      <Pricing />
      <PrimaryCTASection />
    </div>
  );
}

export default Home; 