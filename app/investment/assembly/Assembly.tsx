"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LeftSidebar from "@/app/components/LeftSidebar";
import RightSidebar from "@/app/components/RightSidebar";

const Testing: React.FC = () => {
  // Define sections for right sidebar navigation
  const pageSections = [
    { name: "Metrology & Testing", anchor: "#metrology" },
    { name: "Testing Methods", anchor: "#methods" },
    { name: "Assembly & Quality", anchor: "#assembly" },
    { name: "Leadership", anchor: "#leadership" },
    { name: "Careers", anchor: "#careers" },
    { name: "CSR & Sustainability", anchor: "#csr" },
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
              Metrology & Testing
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-10 text-gray-700 leading-relaxed text-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Our comprehensive quality control program ensures every component is inspected through a combination of in-house facilities and accredited external laboratories.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="my-12 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/testing.avif"
                alt="Quality Testing Equipment"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Testing Sections */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-16"
          >
            {/* Metrology Equipment */}
            <motion.div
              id="metrology"
              variants={itemVariants}
              className="bg-blue-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Metrology Equipment:
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  <li>Coordinate Measuring Machine (CMM)</li>
                  <li>Surface Roughness Tester</li>
                  <li>Profile Projector</li>
                </ul>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  <li>Laser Pyrometer</li>
                  <li>Metallurgical Microscope</li>
                  <li>Conturograph</li>
                  <li>White Light Scanner</li>
                </ul>
              </div>
            </motion.div>

            {/* Testing Methods */}
            <motion.div
              id="methods"
              variants={itemVariants}
              className="space-y-8"
            >
              <div className="bg-green-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Non-Destructive Testing (NDT):
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                    <li>Dye Penetration Testing (DPT)</li>
                    <li>Magnetic Particle Inspection (MPI)</li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                    <li>Radiography (via approved partners)</li>
                    <li>Air Pressure Leakage Testing</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Destructive Testing (DT):
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                    <li>Hardness Testing</li>
                    <li>Universal Testing Machine (UTM) for:
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Tensile Strength</li>
                        <li>Elongation</li>
                        <li>Proof Stress</li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                    <li>Millipore Cleanliness Testing</li>
                    <li>Salt Spray Testing (SST)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Calibration & Traceability:
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  All instruments are calibrated regularly and traceable to NABL-certified standards.
                </p>
              </div>
            </motion.div>

            {/* Assembly & Quality */}
            <motion.div
              id="assembly"
              variants={itemVariants}
              className="bg-yellow-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Assembly & Final Quality
              </h2>
              <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                <li>Dedicated assembly bays for sub-assemblies or integrated part delivery.</li>
                <li>100% final visual and functional inspection.</li>
                <li>Custom packing, labeling, and traceability as per customer specifications.</li>
              </ul>
            </motion.div>

            {/* Leadership */}
            <motion.div
              id="leadership"
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-200"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
                <span className="mr-3">👨‍💼</span> Leadership
              </h2>
              <p className="mb-6 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                Our leadership team brings together deep industry knowledge, ethical decision-making, and a future-ready mindset. Under the guidance of our founder directors and experienced professionals, Rudra Castings thrives on:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                <li>Strategic thinking with hands-on execution</li>
                <li>Focus on long-term value creation</li>
                <li>Strong governance and continuous improvement</li>
                <li>Empowerment of the next generation of leaders</li>
              </ul>
              <p className="mt-6 text-gray-700 leading-relaxed text-lg italic" style={{ fontFamily: "Inter, sans-serif" }}>
                We believe that good leadership builds not just great businesses — but great cultures.
              </p>
            </motion.div>

            {/* Careers */}
            <motion.div
              id="careers"
              variants={itemVariants}
              className="bg-blue-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
                <span className="mr-3">👷</span> Careers
              </h2>
              <p className="mb-6 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                At Rudra Castings, we are always looking for passionate individuals who want to make an impact. We offer:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  <li>A safe and respectful work environment</li>
                  <li>Opportunities for technical learning and upskilling</li>
                  <li>Structured onboarding and mentorship for new joiners</li>
                </ul>
                <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  <li>Recognition programs for outstanding contributions</li>
                  <li>Career growth based on merit and performance</li>
                </ul>
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                Whether you're on the shop floor or in the boardroom, we believe every role matters.
              </p>
            </motion.div>

            {/* CSR & Sustainability */}
            <motion.div
              id="csr"
              variants={itemVariants}
              className="bg-green-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
                <span className="mr-3">🌱</span> CSR & Sustainability
              </h2>
              <p className="mb-6 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                We believe that responsible growth must be inclusive and sustainable. Our CSR and environmental efforts include:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  <li>Regular Langar (community meals) and health camps for workers and locals</li>
                  <li>Tree plantation drives and reduction of our carbon footprint</li>
                  <li>Rainwater harvesting and proper waste disposal systems</li>
                </ul>
                <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  <li>Focus on safety, ethics, and compliance as part of daily work culture</li>
                  <li>Empowering youth through skill-building initiatives</li>
                </ul>
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed text-lg italic" style={{ fontFamily: "Inter, sans-serif" }}>
                Sustainability isn't a checkbox for us — it's a responsibility we carry forward with pride.
              </p>
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

export default Testing;