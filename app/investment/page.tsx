import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection heading="Investment Casting" message='Processes' />
      <Footer />
    </div>
  );
}