"use client"

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
    <h1
  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#3f4249] mb-4 leading-tight font-normal tracking-tight"
  style={{ fontFamily: 'var(--kohinoor-3)' }}
>
  Empowering Precision
</h1>

<h1
  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#3f4249] mb-8 sm:mb-12 md:mb-16 leading-tight font-normal tracking-tight"
  style={{ fontFamily: 'var(--kohinoor-3)' }}
>
  in Your Global
</h1>

          
          <motion.p 
            className="text-xl sm:text-2xl md:text-4xl text-[#3f4249] font-normal "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ fontFamily: 'var(--kohinoor-3)' }}
          >
            Since 2008
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;