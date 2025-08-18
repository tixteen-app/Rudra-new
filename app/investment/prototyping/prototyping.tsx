"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LeftSidebar from "@/app/components/LeftSidebar";
import RightSidebar from "@/app/components/RightSidebar";
import FAQSection from "@/app/components/FAQSection";
import { warehousingFAQs } from "@/app/components/data/faqs";

const Prototyping: React.FC = () => {
  // Define sections for right sidebar navigation
  const pageSections = [
    { name: "Why Prototyping Matters", anchor: "#why-matters" },
    { name: "Rapid Prototyping", anchor: "#rapid-prototyping" },
    { name: "Wax Die Prototyping", anchor: "#wax-die" },
    { name: "Machined Prototypes", anchor: "#machined" },
    { name: "Which Option Is Right?", anchor: "#comparison" },
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
              Prototyping – From Concept to Confidence
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-gray-700 leading-relaxed text-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              At Rudra Castings, prototyping is a core part of our investment casting process — helping you validate your design before committing to production. It saves time, reduces risk, and avoids unnecessary costs by identifying design or performance issues early.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mb-10 text-gray-700 leading-relaxed text-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Whether you're developing a new product or refining an existing one, our rapid and cost-effective prototyping options give you the flexibility to test fit, function, manufacturability, and more.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="my-12 rounded-lg overflow-hidden"
            >
              <Image
                src="/prototyping.avif"
                alt="Prototyping Process"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Why Prototyping Matters */}
          <motion.section
            id="why-matters"
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
              Why Prototyping Matters
            </motion.h2>

            <motion.ul 
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6 mb-12 list-disc pl-5"
            >
              <motion.li variants={itemVariants} className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                <strong>Design Validation:</strong> Catch and correct flaws early
              </motion.li>
              <motion.li variants={itemVariants} className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                <strong>Cost Optimization:</strong> Avoid premature investment in full tooling
              </motion.li>
              <motion.li variants={itemVariants} className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                <strong>Speed to Market:</strong> Rapid feedback loops for iterative development
              </motion.li>
              <motion.li variants={itemVariants} className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                <strong>DFM Testing:</strong> Trial suggested design-for-manufacture improvements
              </motion.li>
              <motion.li variants={itemVariants} className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                <strong>Real-World Testing:</strong> Evaluate components under actual use conditions
              </motion.li>
            </motion.ul>
          </motion.section>

          {/* Our Prototyping Methods */}
          <motion.section
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
              Our Prototyping Methods
            </motion.h2>

            <div className="space-y-12">
              {/* Rapid Prototyping */}
              <motion.div
                id="rapid-prototyping"
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-normal mb-4 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  1. Rapid Prototyping (3D Printed Wax Patterns)
                </h3>
                <p className="mb-4 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  We use 3D printing to quickly create intricate wax or plastic patterns directly from CAD data, skipping the need for tooling altogether.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  <li>Perfect for fit-and-function testing</li>
                  <li>Great for short runs and early-stage development</li>
                  <li>Fully compatible with the investment casting process</li>
                  <li>Enables fast iterations without tooling lead times</li>
                  <li>Results in castings that are mechanically similar to production-grade parts</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                  <span className="font-normal">✅ Ideal for:</span> Low-volume trials, early-stage validation, frequent design changes
                </div>
              </motion.div>

              {/* Wax Die Prototyping */}
              <motion.div
                id="wax-die"
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-normal mb-4 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  2. Wax Die Prototyping
                </h3>
                <p className="mb-4 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  In this method, we develop simplified aluminium tooling to inject wax and produce prototype patterns.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  <li>Closer to actual production conditions</li>
                  <li>More accurate dimensional results</li>
                  <li>Cost-effective for mid-volume prototyping</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                  <span className="font-normal">✅ Ideal for:</span> Mid-volume runs, design freeze stages, or more representative castings
                </div>
              </motion.div>

              {/* Machined Prototypes */}
              <motion.div
                id="machined"
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-normal mb-4 text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  3. Machined or Metal Prototypes
                </h3>
                <p className="mb-4 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  When speed is critical and casting is not required, we offer machining from solid metal or metal 3D printing (DMLS) for prototypes.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  <li>Fastest turnaround time</li>
                  <li>Not suitable for mechanical property testing (due to differences in microstructure)</li>
                  <li>Ideal for visual inspection, assembly trials, or basic fit tests</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                  <span className="font-normal">✅ Ideal for:</span> Urgent sample needs, simple prototypes, or physical mock-ups
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Comparison Table */}
          <motion.section
            id="comparison"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mt-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-normal mb-8 text-gray-800"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Which Option Is Right For You?
            </motion.h2>

            <motion.div variants={itemVariants} className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Method</th>
                    <th className="py-3 px-4 border-b text-left">Speed</th>
                    <th className="py-3 px-4 border-b text-left">Cost</th>
                    <th className="py-3 px-4 border-b text-left">Mechanical Accuracy</th>
                    <th className="py-3 px-4 border-b text-left">Ideal For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">Rapid Prototyping</td>
                    <td className="py-3 px-4 border-b">⭐⭐⭐⭐</td>
                    <td className="py-3 px-4 border-b">💰</td>
                    <td className="py-3 px-4 border-b">✅ (Same as cast parts)</td>
                    <td className="py-3 px-4 border-b">Early-stage, small batches</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Wax Die Prototyping</td>
                    <td className="py-3 px-4 border-b">⭐⭐</td>
                    <td className="py-3 px-4 border-b">💰💰</td>
                    <td className="py-3 px-4 border-b">✅✅ (Closer to production)</td>
                    <td className="py-3 px-4 border-b">Mid-volume prototyping</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Machined/Metal Parts</td>
                    <td className="py-3 px-4 border-b">⭐⭐⭐⭐⭐</td>
                    <td className="py-3 px-4 border-b">💰💰💰</td>
                    <td className="py-3 px-4 border-b">❌ (Not cast-like)</td>
                    <td className="py-3 px-4 border-b">Visual/fit testing</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mt-16 bg-blue-50 p-8 rounded-lg"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-normal mb-4 text-gray-800"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Let's Build It Better, Faster
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mb-6 text-gray-700 leading-relaxed text-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Our engineering team works closely with you to recommend the most suitable prototyping path, based on your design, volume, budget, and performance needs.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-gray-700 leading-relaxed text-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Get in touch to explore the best way to bring your component from idea to reality.
            </motion.p>
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

export default Prototyping;