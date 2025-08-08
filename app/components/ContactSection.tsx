"use client"

import React from 'react';
import { motion } from 'motion/react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#7a9b9b]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-normal mb-8">
            Get In Touch
          </h2>
        </motion.div>

        {/* Content Text */}
        <motion.div
          className="space-y-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-white text-lg md:text-xl leading-relaxed">
            We take pride in building successful, long-term relationships with our clients, because their reputation is our priority.
          </p>
          
          <p className="text-white text-lg md:text-xl leading-relaxed">
            If that sounds like an investment castings partner you'd like to work with, you can book an introduction call with our friendly and knowledgeable New Relations Team — in a language and time zone to suit you.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Schedule Call Button */}
          <motion.button
            className="px-8 py-3 bg-[#8bc34a] text-white rounded-full hover:bg-[#7cb342] transition-all duration-300 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a New Business Call
          </motion.button>

          {/* Procurement Information Button */}
          <motion.button
            className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#7a9b9b] transition-all duration-300 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Procurement Information
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;