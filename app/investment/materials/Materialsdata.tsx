"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LeftSidebar from "@/app/components/LeftSidebar";
import RightSidebar from "@/app/components/RightSidebar";
import FAQSection from "@/app/components/FAQSection";
import { warehousingFAQs } from "@/app/components/data/faqs";

const Materials: React.FC = () => {
  // Define sections for right sidebar navigation
  const pageSections = [
    { name: "Materials Expertise", anchor: "#expertise" },
    { name: "Alloy Capabilities", anchor: "#alloys" },
    { name: "Assembly Services", anchor: "#assembly" },
    { name: "Testing Capabilities", anchor: "#testing" },
        { name: "FAQs", anchor: "#faqs" },

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

  // Material data for the table
  const materialData = [
    {
      category: "Carbon Steels",
      grades: "WCB, WCC, LCB, LCC, 1020, 1030, 1045",
      applications: "General engineering, automotive, structural components",
      bgColor: "bg-blue-50",
    },
    {
      category: "Low Alloy Steels",
      grades: "4130, 4140, 8630, 8620",
      applications: "High-strength parts, shafts, gears, defence equipment",
      bgColor: "bg-green-50",
    },
    {
      category: "Stainless Steels – Austenitic",
      grades: "304, 304L, 316, 316L, CF8, CF8M",
      applications: "Food processing, chemical, marine, medical",
      bgColor: "bg-purple-50",
    },
    {
      category: "Stainless Steels – Martensitic",
      grades: "410, 420, CA15, CA6NM",
      applications: "Pump parts, valves, turbine blades",
      bgColor: "bg-yellow-50",
    },
    {
      category: "Stainless Steels – Duplex / Super Duplex",
      grades: "CD4MCu, CE8MN, 2205, 2507",
      applications: "Offshore, desalination, chemical plants",
      bgColor: "bg-pink-50",
    },
    {
      category: "Heat-Resistant Alloys",
      grades: "HK, HT, HH, HP grades",
      applications: "Furnace fixtures, petrochemical equipment",
      bgColor: "bg-red-50",
    },
    {
      category: "Tool Steels",
      grades: "H11, H13",
      applications: "Dies, tooling components",
      bgColor: "bg-indigo-50",
    },
    {
      category: "Non-Ferrous Alloys – Aluminium",
      grades: "LM4, LM6, LM25",
      applications: "Automotive, aerospace, lightweight applications",
      bgColor: "bg-teal-50",
    },
    {
      category: "Special Steels",
      grades: "Manganese steel (Hadfield), wear-resistant grades",
      applications: "Mining, earthmoving equipment",
      bgColor: "bg-orange-50",
    },
  ];

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
              className="text-3xl font-normal mb-8 text-gray-800"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              🧱 Materials & Alloy Expertise
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-gray-700 leading-relaxed text-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              At Rudra Castings, we serve industries where performance, durability, and precision are non-negotiable. Whether it's strength, wear resistance, or corrosion protection — the right alloy is critical to your component's success. We specialize in a wide range of investment casting alloys, including steel, stainless steel, nickel, cobalt, and aluminium alloys, to meet the most demanding specifications.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mb-10 text-gray-700 leading-relaxed text-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              With deep metallurgical expertise and proven process control, we work closely with clients to recommend the best-suited materials for their functional, environmental, and regulatory needs.
            </motion.p>
          </motion.div>

          {/* Alloy Capabilities */}
          <motion.section
            id="alloys"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-normal mb-8 text-gray-800"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              ⚙️ Extensive Alloy Casting Capability
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-gray-700 leading-relaxed text-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              We can cast 250+ grades of metals, including:
            </motion.p>

            <motion.div variants={itemVariants} className="overflow-x-auto mb-12">
              <table className="min-w-full border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Category</th>
                    <th className="py-3 px-4 border-b text-left">Examples / Grades</th>
                    <th className="py-3 px-4 border-b text-left">Applications</th>
                  </tr>
                </thead>
                <tbody>
                  {materialData.map((material, index) => (
                    <tr key={index} className={material.bgColor}>
                      <td className="py-3 px-4 border-b font-medium">{material.category}</td>
                      <td className="py-3 px-4 border-b">{material.grades}</td>
                      <td className="py-3 px-4 border-b">{material.applications}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.section>

          {/* Assembly Services */}
          <motion.section
            id="assembly"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16 bg-blue-50 p-8 rounded-lg"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-normal mb-6 text-gray-800"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              🔧 Assembly & Testing – Ensuring End-to-End Reliability
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-gray-700 leading-relaxed text-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              At Rudra Castings, we don't just manufacture components—we deliver ready-to-integrate solutions. By offering in-house assembly and testing, we accelerate project timelines while maintaining complete control over quality, fitment, and performance.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-xl font-normal mb-4 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                🔩 Assembly Services
              </h3>
              <p className="mb-4 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                We frequently work on complex projects involving multiple cast and machined parts. To streamline your supply chain, we offer sub-assembly and full assembly of components prior to dispatch. This ensures you receive fully integrated solutions that are ready for your production line.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                <li>Sub-component assembly</li>
                <li>Fitment validation</li>
                <li>Functional trials (where applicable)</li>
              </ul>
            </motion.div>
          </motion.section>

          {/* Testing Capabilities */}
          <motion.section
            id="testing"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-normal mb-8 text-gray-800"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              🧪 Testing Capabilities
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-gray-700 leading-relaxed text-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Quality is non-negotiable at Rudra Castings. Every component undergoes a rigorous inspection and testing regimen—either in-house or through certified laboratories—to guarantee reliability under real-world conditions.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-12">
              {/* Destructive Testing */}
              <motion.div
                variants={itemVariants}
                className="bg-red-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-normal mb-4 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  🔥 Destructive Testing Methods
                </h3>
                <p className="mb-4 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  These tests help us understand a component's strength and durability by pushing it to its limit. Destructive testing is essential for validating mechanical properties and material behavior.
                </p>
                <h4 className="font-medium mb-2 text-gray-800">Common Destructive Tests Include:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 leading-relaxed">
                    <li>Tensile Testing</li>
                    <li>Impact Testing</li>
                    <li>Bend Testing</li>
                    <li>Compression Testing</li>
                    <li>Hardness Testing</li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 leading-relaxed">
                    <li>Grain Etching</li>
                    <li>Corrosion Resistance Tests</li>
                    <li>Microstructural Analysis</li>
                    <li>Elongation Testing</li>
                    <li>Proof Stress Testing</li>
                  </ul>
                </div>
              </motion.div>

              {/* Non-Destructive Testing */}
              <motion.div
                variants={itemVariants}
                className="bg-green-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-normal mb-4 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  🔍 Non-Destructive Testing (NDT) Methods
                </h3>
                <p className="mb-4 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  To detect defects without harming the part, we employ advanced NDT techniques that ensure component integrity and fitness for use—especially for mission-critical applications.
                </p>
                <h4 className="font-medium mb-2 text-gray-800">NDT Methods Include:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 leading-relaxed">
                    <li>X-Ray Inspection (Radiography)</li>
                    <li>Magnetic Particle Testing (MPI)</li>
                    <li>Liquid Penetrant Testing (DPT)</li>
                    <li>Dimensional Inspection</li>
                    <li>3D Scanning & Profiling</li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 leading-relaxed">
                    <li>Spectrographic Analysis</li>
                    <li>Leakage Testing</li>
                    <li>Millipore Testing</li>
                    <li>Salt Spray Testing (SST)</li>
                  </ul>
                </div>
              </motion.div>

              {/* Metrology */}
              <motion.div
                variants={itemVariants}
                className="bg-blue-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-normal mb-4 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  🧰 Metrology & Instrumentation Facilities
                </h3>
                <p className="mb-4 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  Precision starts with accurate measurement. Our advanced metrology lab supports high-accuracy dimensional and surface inspection.
                </p>
                <h4 className="font-medium mb-2 text-gray-800">Available Equipment:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 leading-relaxed">
                    <li>CMM (Coordinate Measuring Machine)</li>
                    <li>White Light Scanner</li>
                    <li>Conturograph</li>
                    <li>Profile Projector</li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 leading-relaxed">
                    <li>Surface Roughness Tester</li>
                    <li>Microscope</li>
                    <li>Laser Pyrometer</li>
                  </ul>
                </div>
                <p className="mt-4 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  <span className="font-normal">⚖️ Calibration:</span> In-house calibration capabilities ensure the accuracy and consistency of our measurement instruments and testing equipment.
                </p>
              </motion.div>
            </motion.div>
          </motion.section>
          <FAQSection faqs={warehousingFAQs} />

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

export default Materials;