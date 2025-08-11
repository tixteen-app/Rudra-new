"use client";

import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const MarqueeSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-3xl text-gray-600 leading-relaxed font-normal"
          style={{ fontFamily: 'var(--kohinoor-2)' }}
          
          >
            At Rudra Castings, our state-of-the-art manufacturing facilities in
            India operate round-the-clock, ensuring we deliver top-quality
            products that meet even the tightest deadlines with precision and
            reliability.
          </p>

          <p className="text-xl md:text-3xl text-gray-600 leading-relaxed font-normal"
          style={{ fontFamily: 'var(--kohinoor-2)' }}
          
          >
            Spanning over 75,000 sq. ft. and ISO-certified, our facilities are
            designed to not only exceed industry standards but also accommodate
            future expansions as demand grows. We take pride in our commitment
            to quality, continually refining our processes to remain a leader in
            the investment castings industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;