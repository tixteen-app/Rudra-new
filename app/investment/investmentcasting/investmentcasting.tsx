"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LeftSidebar from "@/app/components/LeftSidebar";
import RightSidebar from "@/app/components/RightSidebar";

const Invesmentcasting: React.FC = () => {
  // Define sections for right sidebar navigation
  const pageSections = [
    { name: "Our Investment Casting Methods", anchor: "#methods" },
    { name: "Tilt Pouring", anchor: "#tilt-pouring" },
    { name: "Ladle Pouring", anchor: "#ladle-pouring" },
    { name: "Roll-Over Pouring", anchor: "#roll-over" },
    { name: "Low-Pressure Aluminum Casting", anchor: "#low-pressure" },
    { name: "Why These Methods Matter", anchor: "#benefits" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="flex min-h-screen bg-white h-100">
      <LeftSidebar />

      {/* Main Content Area */}
      <main
        className="flex-1 p-10 overflow-y-auto h-screen"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="max-w-4xl m-auto">
          {/* Hero Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl font-bold mb-8 text-gray-800"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Our Investment Casting Process
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-gray-700 leading-relaxed text-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              At Rudra Castings, we harness a range of advanced investment casting techniques, carefully matched to your production needs—whether that's detailed prototyping or large-scale manufacturing. Here's how our methods deliver precision, efficiency, and quality:
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="my-12 rounded-lg overflow-hidden"
            >
              <Image
                src="/inverstament.avif"
                alt="Investment Casting Process"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Methods Section */}
          <motion.section
            id="methods"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-gray-800"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Our Investment Casting Methods
            </motion.h2>

            <div className="space-y-12">
              {/* Tilt Pouring */}
              <motion.div
                id="tilt-pouring"
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  1. Tilt Pouring
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  <li>The alloy is melted in an induction furnace, then poured into molds by tilting.</li>
                  <li>Minimizes impurities by reducing exposure to the atmosphere.</li>
                  <li>Ideal for steel, nickel, and cobalt alloys when purity is critical.</li>
                </ul>
              </motion.div>

              {/* Ladle Pouring */}
              <motion.div
                id="ladle-pouring"
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  2. Ladle Pouring
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  <li>Molten metal is transferred into a ladle before being poured into molds.</li>
                  <li>Enhances throughput and efficiency for higher-volume production.</li>
                  <li>Effective for steel, nickel and aluminium alloys.</li>
                </ul>
              </motion.div>

              {/* Roll-Over Pouring */}
              <motion.div
                id="roll-over"
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  3. Roll-Over Pouring
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  <li>The mold is mounted above the furnace and rotated to pour molten metal.</li>
                  <li>Provides clean fills with minimal turbulence, improving casting quality.</li>
                  <li>Suitable for detailed components in steel and nickel alloys.</li>
                </ul>
              </motion.div>

              {/* Low-Pressure Aluminum Casting */}
              <motion.div
                id="low-pressure"
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  4. Low-Pressure Aluminum Casting
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  <li>Uses controlled pressure to draw molten aluminum into the mold.</li>
                  <li>Reduces dross formation and allows for fine-detail reproduction.</li>
                  <li>Delivers superior surface finish, especially for intricate aluminum parts.</li>
                </ul>
              </motion.div>
            </div>
          </motion.section>

          {/* Benefits Section */}
          <motion.section
            id="benefits"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mt-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-gray-800"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Why These Methods Matter to You
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-3 gap-6 mb-12"
            >
              {/* Optimized for Your Needs */}
              <motion.div
                variants={itemVariants}
                className="bg-blue-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Optimized for Your Needs
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  From one-off prototypes to full-scale production, we apply the method that ensures the best accuracy, finish, and value.
                </p>
              </motion.div>

              {/* Enhanced Quality */}
              <motion.div
                variants={itemVariants}
                className="bg-blue-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Enhanced Quality
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  Each technique is selected to reduce porosity, improve surface finish, and ensure dimensional accuracy.
                </p>
              </motion.div>

              {/* Efficiency in Production */}
              <motion.div
                variants={itemVariants}
                className="bg-blue-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Efficiency in Production
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  Whether your priority is speed, precision, or cost-efficiency, we tailor the process to suit your goals.
                </p>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </main>

      <RightSidebar sections={pageSections} />

      {/* Global Styles */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          display: none;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Invesmentcasting;