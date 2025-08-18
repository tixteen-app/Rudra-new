"use client"

import React from 'react';
import { motion } from 'motion/react';

const StatisticsSection: React.FC = () => {
  const statistics = [
    {
      number: '1,750',
      label: 'Passionate People'
    },
    {
      number: '65',
      label: 'Years of Experience'
    },
    {
      number: '850k',
      label: 'Sq Ft. of Manufacturing'
    },
    {
      number: '5',
      label: 'Global Locations'
    },
    {
      number: '35m',
      label: 'Parts Made Per Year'
    },
    {
      number: '710',
      label: 'Number of Products'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-normal"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            We're Backed by Numbers
          </h2>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Number */}
              <div 
                className="text-5xl md:text-6xl lg:text-7xl text-green-600 mb-6"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {stat.number}
              </div>
              
              {/* Label */}
              <p 
                className="text-xl md:text-2xl text-gray-700 font-normal"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;