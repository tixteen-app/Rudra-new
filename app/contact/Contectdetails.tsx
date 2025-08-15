"use client";

import React from "react";
import { motion } from "framer-motion";

const Contectdetails: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="max-w-6xl mx-auto text-center space-y-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p
            className="text-xl md:text-3xl text-gray-700 leading-relaxed font-normal"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Whether it's an idea, a technical drawing, or a fully realised part
            ready to produce, we are here to help progress your project. Our
            team operate across 5 countries and speak multiple languages so
            there is always someone on hand to help fulfil your project.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contectdetails;
