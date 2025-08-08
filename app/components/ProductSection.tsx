"use client"

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

const ProductSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const initializedRef = useRef(false);

  // 16 products using the same Texmo Blank video
  const products = Array.from({ length: 16 }, (_, index) => ({
    id: index + 1,
    videoUrl: 'https://cdn.sanity.io/files/226cdrrp/production/070c4f7eef28e06c2fb7086554f4fdd5ed6f82d8.mp4',
    posterUrl: `https://images.unsplash.com/photo-${1563715656 + index}f3b84bf6ad2b?w=400&h=400&fit=crop&crop=center&q=80`
  }));

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    // Play all videos for 1 second on initial load
    videoRefs.current.forEach((video) => {
      if (video) {
        video.currentTime = 0;
        video.play().catch(e => console.error("Video play failed:", e));
      }
    });

    // Pause all videos after 1 second
    const timer = setTimeout(() => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0;
      video.play().catch(e => console.error("Video play failed:", e));
    }
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section className="py-20 bg-white">
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
            Your Purpose, Our Priority
          </h2>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative aspect-square cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 8) * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Video Container */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100">
                <video
                  ref={(el) => { videoRefs.current[index] = el; }}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  poster={product.posterUrl}
                  preload="auto"
                  playsInline
                >
                  <source src={product.videoUrl} type="video/mp4" />
                </video>

                {/* Plus Icon */}
                <motion.div
                  className="absolute top-3 right-3 w-6 h-6 md:w-8 md:h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus size={14} className="md:size-4 text-gray-700" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;