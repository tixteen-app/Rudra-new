"use client"

import React from 'react';
import { motion } from 'motion/react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#7a9b9b]">
      <div className="max-w-4xl mx-auto px-8 text-center">
        {/* Section Title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-8"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Get In Touch
          </h2>
        </motion.div>

        {/* Content Text */}
        <motion.div
          className="space-y-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p 
            className="text-white text-lg md:text-xl leading-relaxed font-normal"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            At Rudra Castings, we combine our 75,000 sq. ft. ISO-certified manufacturing capabilities with personalized service to deliver investment castings that exceed expectations. Our team is ready to discuss how we can support your specific requirements with our round-the-clock production capacity and commitment to precision.
          </p>
          
          <p 
            className="text-white text-lg md:text-xl leading-relaxed font-normal"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Whether you're looking for a reliable long-term partner or need urgent casting solutions, we invite you to connect with our expert team. Let's explore how our state-of-the-art facilities and quality-driven approach can add value to your projects.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Schedule Call Button */}
          <motion.button
            className="px-8 py-3 bg-[#8bc34a] text-white rounded-full hover:bg-[#7cb342] transition-all duration-300 whitespace-nowrap font-medium"
            style={{ fontFamily: "Inter, sans-serif" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.button>

          {/* Procurement Information Button */}
          <motion.button
            className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#7a9b9b] transition-all duration-300 whitespace-nowrap font-medium"
            style={{ fontFamily: "Inter, sans-serif" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Technical Specifications
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;