"use client";

import { Navbar } from '@/components/ui/navbar';
import HeroSection from '@/components/hero-section';
import { ContractsSection } from '@/components/contracts-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <ContractsSection />
    </main>
  );
}