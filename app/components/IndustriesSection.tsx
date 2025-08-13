"use client"

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const IndustriesSection: React.FC = () => {
  const industries = [
    {
      name: "Aerospace",
      image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1200&h=800&fit=crop&crop=center&q=80"
    },
    {
      name: "Automotive", 
      image: "https://images.unsplash.com/photo-1563715656-f3b84bf6ad2b?w=1200&h=800&fit=crop&crop=center&q=80"
    },
    {
      name: "Industrial",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop&crop=center&q=80"
    },
    {
      name: "Medical",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop&crop=center&q=80"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-semibold"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            We Span Industries & Relish Complex Challenges
          </h2>
        </motion.div>

        {/* Industries Grid - Updated with larger images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              className="relative aspect-[3/2] rounded-2xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background Image - Updated with larger dimensions */}
              <ImageWithFallback
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover"
                width={1200}
                height={800}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex items-end justify-between p-6">
                {/* Industry Name */}
                <h3 
                  className="text-white text-xl md:text-2xl lg:text-3xl font-semibold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {industry.name}
                </h3>

                {/* Arrow Icon */}
                <motion.div
                  className="text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={24} className="lg:w-7 lg:h-7" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Industries Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button 
            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full hover:border-gray-400 hover:text-gray-800 transition-all duration-300 text-lg lg:px-10 lg:py-4 lg:text-xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            All Industries
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;