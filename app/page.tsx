'use client';

import Image from "next/image";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MomentsSection from './components/MomentsSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <MomentsSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
