"use client";

import React from "react";
import { motion } from "framer-motion";

const Industrydetails: React.FC = () => {
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
            We are a proud partner to hundreds of customers working across
            geographies and sectors. We have a deep and nuanced understanding of
            the needs and pain points of the industries we serve, to ensure the
            delivery of exceptional castings and an unparalleled service
            experience. We also support customers operating in a range of other
            sectors, from agriculture to energy, which you can find out more
            about by choosing the 'other' industries section.
          </p>

          
        </motion.div>
      </div>
    </section>
  );
};

export default Industrydetails;
