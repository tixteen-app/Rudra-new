import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import VideoSection from '../components/VideoSection';
import ProductSection from '../components/ProductSection';
import StatisticsSection from '../components/StatisticsSection';
import GlobalLocationsSection from '../components/GlobalLocationsSection';
import IndustriesSection from '../components/IndustriesSection';
import NewsSection from '../components/NewsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Contectdetails from './Contectdetails';
import ContactForm from './Formcontext';
import NewsletterForm from './NewsletterForm';


export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection heading="Contact"  />
      <Contectdetails />
      <ContactForm/>

      {/* <ProductSection /> */}
      {/* <StatisticsSection /> */}
      {/* <GlobalLocationsSection /> */}
      {/* <IndustriesSection /> */}
      <NewsletterForm/>
      {/* <NewsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}