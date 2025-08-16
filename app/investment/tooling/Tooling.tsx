"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LeftSidebar from "@/app/components/LeftSidebar";
import RightSidebar from "@/app/components/RightSidebar";

const Tooling: React.FC = () => {
  // Define sections for right sidebar navigation
  const pageSections = [
    { name: "CNC Turning Centres", anchor: "#turning" },
    { name: "Vertical Machining Centres", anchor: "#vmc" },
    { name: "Multi-Axis Machining", anchor: "#multi-axis" },
    { name: "Specialized Operations", anchor: "#specialized" },
    { name: "What Sets Us Apart", anchor: "#advantages" },
    { name: "In-House Tooling", anchor: "#in-house" },
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
              Machining & Finishing
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-gray-700 leading-relaxed text-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              At Rudra Castings, we deliver more than castings — we deliver precision-finished, ready-to-fit components. Our in-house machining setup is equipped to handle a wide range of operations from high-precision CNC machining to high-productivity special-purpose solutions.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="my-12 rounded-lg overflow-hidden"
            >
              <Image
                src="/tooling.avif"
                alt="Precision Machining Equipment"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Machining Capabilities */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* CNC Turning Centres */}
            <motion.div
              id="turning"
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-lg mb-8"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                CNC Turning Centres
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                <li>High-speed, high-accuracy turning for complex geometries</li>
                <li>Ideal for precision round parts with tight tolerances</li>
                <li>Automated systems for consistency and repeatability</li>
              </ul>
            </motion.div>

            {/* Vertical Machining Centres */}
            <motion.div
              id="vmc"
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-lg mb-8"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Vertical Machining Centres (VMC)
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                <li>Efficient machining of flat surfaces, pockets, and 3D profiles</li>
                <li>Rigid fixturing and high-speed spindles for reliable performance</li>
              </ul>
            </motion.div>

            {/* 4-Axis & 5-Axis VMCs */}
            <motion.div
              id="multi-axis"
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-lg mb-8"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                4-Axis & 5-Axis VMCs
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                <li>Advanced machining for multi-face and angular features</li>
                <li>Fewer setups, higher accuracy, faster cycle times</li>
                <li>Perfect for aerospace-grade and high-complexity components</li>
              </ul>
            </motion.div>

            {/* Specialized Operations */}
            <motion.div
              id="specialized"
              variants={itemVariants}
              className="space-y-8"
            >
              {/* Broaching */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Broaching
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  <li>Ideal for internal and external keyways, splines, and custom profiles</li>
                  <li>Maintains tight tolerances in hard-to-machine features</li>
                </ul>
              </div>

              {/* Special Purpose Machines */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Special Purpose Machines (SPMs)
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  <li>Custom-built solutions for high-volume operations</li>
                  <li>Increases productivity with consistent output and minimal variation</li>
                </ul>
              </div>

              {/* Multi-Head Drilling */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Multi-Head Drilling Machines
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  <li>Enables simultaneous drilling of multiple holes with precise spacing</li>
                  <li>Reduces operation time for batch processing</li>
                  <li>Excellent for flanges, manifolds, and mounting plates</li>
                </ul>
              </div>
            </motion.div>
          </motion.section>

          {/* Advantages Section */}
          <motion.section
            id="advantages"
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
              What Sets Our Machining Apart?
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-3 gap-6 mb-12"
            >
              <motion.div
                variants={itemVariants}
                className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Integrated Cast-to-Finish Workflow
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  Reduces handling and lead times with seamless processing from raw casting to finished part.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  High Precision, Tight Tolerances
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  Maintained across all operations with rigorous quality control measures.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Custom Finishing Options
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  Including shot blasting, grinding, polishing, and specialized surface treatments.
                </p>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* In-House Tooling Section */}
          <motion.section
            id="in-house"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mt-16 bg-gray-50 p-8 rounded-lg"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold mb-6 text-gray-800"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              In-House Tooling
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-6 text-gray-700 leading-relaxed text-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              At Rudra Castings, we offer complete in-house tooling solutions, making us a true one-stop partner for precision castings — from concept design to final production.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-gray-700 leading-relaxed text-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Tooling is the foundation of investment casting. It defines the quality, repeatability, and speed with which parts are produced. Our dedicated tool room is equipped with advanced machines and managed by a skilled team capable of developing single cavity to multi-cavity tools that cater to simple as well as highly complex geometries.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                With in-house tooling, we ensure:
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                <li>Complete control over quality and timelines</li>
                <li>Rapid response to design changes</li>
                <li>Seamless integration between design, tooling, and casting</li>
                <li>Faster development cycles and prototype sampling</li>
                <li>Consistent accuracy and repeatability</li>
              </ul>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-700 leading-relaxed text-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Whether it's for high-volume production or development of critical components, our tooling capability enhances flexibility, reduces downtime, and helps us deliver with unmatched efficiency.
            </motion.p>
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

export default Tooling;