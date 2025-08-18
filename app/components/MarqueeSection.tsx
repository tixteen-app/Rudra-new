"use client";

import React from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const MarqueeSection: React.FC = () => {
  return (
    <section className="py-24 bg-paper" style={{backgroundColor: "rgba(248,247,247,255)"}} >
      <div className="max-w-7xl mx-auto px-8 bg-paper" style={{backgroundColor: "rgba(248,247,247,255)"}}>
        <motion.div
          className="max-w-6xl mx-auto text-center space-y-12"  
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl md:text-5xl text-gray-800 leading-tight font-normal mb-8"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Crafted in India. Trusted for Precision.
          </h2>

          <p
            className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Since 2008, Rudra Castings has grown from a humble beginning into a
            trusted manufacturer of precision Investment Castings — serving
            critical needs in Automotive, Defense, Medical, Valves & Pumps,
            Construction Equipment and General Engineering sectors.
          </p>

          <p
            className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light"
            style={{ fontFamily: "Inter, sans-serif" }}
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