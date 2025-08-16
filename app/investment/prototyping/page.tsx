import Header from '@/app/components/Header';
import HeroSection from '@/app/components/HeroSection';
import React from 'react';
import Footer from '@/app/components/Footer';
import Prototyping from './prototyping';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection heading="Prototyping" message='Capabilities' />
      <Prototyping />
      <Footer />
    </div>
  );
}