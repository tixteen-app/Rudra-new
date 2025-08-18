import Header from '@/app/components/Header';
import HeroSection from '@/app/components/HeroSection';
import React from 'react';
import Footer from '@/app/components/Footer';
import Testing from './Assembly';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection heading="Investment Casting" message='Processes' />
      <Testing />
      <Footer />
    </div>
  );
}