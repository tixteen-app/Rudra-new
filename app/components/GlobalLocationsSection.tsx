"use client"

import React from 'react';
import { motion } from 'motion/react';
import { Medal, Shield, Trophy } from 'lucide-react';

const GlobalLocationsSection: React.FC = () => {
  const awards = [
    {
      icon: <Medal className="w-12 h-12 text-gray-400 mb-4" />,
      title: "Hall of Fame Supplier",
      company: "John Deere",
      details: "Achieving Excellence Program, 2023"
    },
    {
      icon: <Shield className="w-12 h-12 text-gray-400 mb-4" />,
      title: "Special Effort Award", 
      company: "Endress + Hauser,",
      details: "2022, 2021"
    },
    {
      icon: <Trophy className="w-12 h-12 text-gray-400 mb-4" />,
      title: "Thinking Award",
      company: "Leichtbau BW, 2017",
      details: ""
    },
    {
      icon: <Medal className="w-12 h-12 text-gray-400 mb-4" />,
      title: "Achieving Excellence",
      company: "John Deere",
      details: "2023, 2022, 2021, 2020, 2019, 2015"
    },
    {
      icon: <Shield className="w-12 h-12 text-gray-400 mb-4" />,
      title: "Innovation Prize",
      company: "German Foundry Industry, 2022",
      details: ""
    },
    {
      icon: <Trophy className="w-12 h-12 text-gray-400 mb-4" />,
      title: "Newcast Award",
      company: "Newcast, 2019",
      details: ""
    }
  ];

  return (
    <section 
      className="py-24"
      style={{ backgroundColor: 'rgba(63,66,73,var(--tw-bg-opacity,1))' }}
    >
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
            className="text-3xl md:text-4xl lg:text-5xl text-gray-300 font-semibold"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            We Get it Right First Time
          </h2>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Award Icon */}
              <div className="flex justify-center">
                {award.icon}
              </div>

              {/* Award Title */}
              <h3 
                className="text-base text-white font-semibold mb-2"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {award.title}
              </h3>

              {/* Company Name */}
              <p 
                className="text-gray-300 text-sm mb-1 font-medium"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {award.company}
              </p>

              {/* Details */}
              {award.details && (
                <p 
                  className="text-gray-400 text-xs font-normal"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {award.details}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalLocationsSection;