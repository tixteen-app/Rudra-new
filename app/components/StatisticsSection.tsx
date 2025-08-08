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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-400 font-normal">
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
                className="text-5xl md:text-6xl lg:text-7xl text-green-400 mb-4"
                style={{ fontFamily: 'kohinoorTexmoBlack, sans-serif' }}
              >
                {stat.number}
              </div>
              
              {/* Label */}
              <p className="text-lg md:text-xl text-gray-500 font-normal">
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