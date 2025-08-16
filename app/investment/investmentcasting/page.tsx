import Header from '@/app/components/Header';
import HeroSection from '@/app/components/HeroSection';
import React from 'react';
import Invesmentcasting from './investmentcasting';
import Footer from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection heading="Investment Casting" message='Processes' />
      <Invesmentcasting />
      <Footer />
    </div>
  );
}