"use client";

import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const MarqueeSection: React.FC = () => {
  // Company logos data - using placeholder images that match common brand colors/styles
  const companies = [
    {
      name: "Continental",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop&crop=center",
    },
    {
      name: "BMW",
      logo: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=120&h=60&fit=crop&crop=center",
    },
    {
      name: "Stanley Black & Decker",
      logo: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=120&h=60&fit=crop&crop=center",
    },
    {
      name: "Porsche",
      logo: "https://images.unsplash.com/photo-1580414617778-d2bb9fa2366e?w=120&h=60&fit=crop&crop=center",
    },
    {
      name: "Mercedes-Benz",
      logo: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=120&h=60&fit=crop&crop=center",
    },
    {
      name: "Volvo",
      logo: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=120&h=60&fit=crop&crop=center",
    },
    {
      name: "TATA",
      logo: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=120&h=60&fit=crop&crop=center",
    },
    {
      name: "Stryker",
      logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=120&h=60&fit=crop&crop=center",
    },
    {
      name: "Volkswagen",
      logo: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=120&h=60&fit=crop&crop=center",
    },
  ];

  // Duplicate the array for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl text-gray-600 font-normal">
            A Trusted Investment Casting Supplier To:
          </h2>
        </motion.div>
        <div className="overflow-hidden mb-16">
          <motion.div
            className="flex items-center space-x-16"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: "calc(200% + 4rem)",
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <ImageWithFallback
                  src={company.logo}
                  alt={company.name}
                  className="h-12 w-auto object-contain filter brightness-0 opacity-60 hover:brightness-100 hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div> */}

        {/* Content Paragraphs */}
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-normal">
            At Rudra Castings, our state-of-the-art manufacturing facilities in
            India operate round-the-clock, ensuring we deliver top-quality
            products that meet even the tightest deadlines with precision and
            reliability.
          </p>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-normal">
            Spanning over 75,000 sq. ft. and ISO-certified, our facilities are
            designed to not only exceed industry standards but also accommodate
            future expansions as demand grows. We take pride in our commitment
            to quality, continually refining our processes to remain a leader in
            the investment castings industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;
