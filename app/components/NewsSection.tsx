"use client"

import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const NewsSection: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      date: "25/09/2023",
      title: "Successful Kaizen Event Drives Global Sales Process Improvement",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center&q=80"
    },
    {
      id: 2,
      date: "19/09/2023", 
      title: "Team Spirit Meets Lean Thinking: Success Stories from Germany's Kaizen Week",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=center&q=80"
    },
    {
      id: 3,
      date: "05/06/2022",
      title: "Inside Texmo Blank: A Factory Visit for Paul Maschinenfabrik Apprentices", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center&q=80"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-8xl mx-auto px-10">
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
            Latest News Articles
          </h2>
        </motion.div>

        {/* News Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsArticles.map((article, index) => (
            <motion.div
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Article Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Article Content */}
              <div className="p-8">
                {/* Date */}
                <p 
                  className="text-gray-600 text-sm mb-4 font-medium"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {article.date}
                </p>

                {/* Title */}
                <h3 
                  className="text-gray-800 text-lg font-normal leading-tight"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {article.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All News Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button 
            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full hover:border-gray-400 hover:text-gray-800 transition-all duration-300 font-medium"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            View All News
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;