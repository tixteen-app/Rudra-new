"use client"

import React from 'react';
import { motion } from 'motion/react';

const ManufacturingSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            We proudly manufacture long-lifespan steel, aluminium, cobalt and nickel based 
            precision castings in air and vacuum at our state-of-the-art factories in 
            North America, Europe and Asia.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ManufacturingSection;