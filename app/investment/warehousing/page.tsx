import Header from '@/app/components/Header';
import HeroSection from '@/app/components/HeroSection';
import React from 'react';
import Footer from '@/app/components/Footer';
import Warehousing from './warehouse';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection heading="Warehousing & Distribution" message='Capabilities' />
      <Warehousing/>
      <Footer />
    </div>
  );
}