"use client";

import React from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const MarqueeSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          className="max-w-6xl mx-auto text-center space-y-8"  
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p
            className="text-xl md:text-3xl text-gray-600 leading-relaxed font-normal"
            style={{ fontFamily: "var(--kohinoor-2)" }}
          >
            Since 2008, Rudra Castings has grown from a humble beginning into a
            trusted manufacturer of precision Investment Castings — serving
            critical needs in Automotive, Defense, Medical, Valves & Pumps,
            Construction Equipment and General Engineering sectors.
          </p>

          <p
            className="text-xl md:text-3xl text-gray-600 leading-relaxed font-normal"
            style={{ fontFamily: "var(--kohinoor-2)" }}
          >
            Operating from our 75,000 sq. ft., ISO-certified facility in Punjab,
            we produce long-lifespan steel, aluminium and nickel-based castings,
            known for their dimensional accuracy, durability, and finish. Backed
            by a skilled team, stringent multi-stage quality gates, and a
            commitment to delivery timelines, we solve complex manufacturing
            challenges with confidence — while continually refining our
            processes to exceed customer expectations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;