"use client"

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Pause } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background Image - shown when video is not playing */}
          {!isPlaying && (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://www.texmoblank.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F226cdrrp%2Fproduction%2Fc09e1b6b62a6df68bb8191d1c9c768c6f6215221-4608x2590.png%3Fq%3D100%26fit%3Dmin%26auto%3Dformat&w=3840&q=75')`
              }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* Heading positioned on the image */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-normal text-center px-4">
                  Adding Value To Customers
                </h2>
              </motion.div>
            </div>
          )}

          {/* Video Element */}
          <video
            ref={videoRef}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isPlaying ? 'opacity-100' : 'opacity-0'
            }`}
            onEnded={() => setIsPlaying(false)}
            controls={isPlaying}
          >
            <source 
              src="https://cdn.sanity.io/files/226cdrrp/production/71c24536dbe236e6fd78676265f75818c53f5521.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>

          {/* Custom Play Button - only shown when video is not playing */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                onClick={toggleVideo}
                className="bg-white/90 hover:bg-white rounded-full p-6 shadow-lg backdrop-blur-sm transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Play size={40} className="text-gray-900 ml-2" />
              </motion.button>
            </div>
          )}

          {/* Pause button overlay when video is playing */}
          {isPlaying && (
            <motion.button
              onClick={toggleVideo}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-3 text-white backdrop-blur-sm transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
            >
              <Pause size={24} />
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;