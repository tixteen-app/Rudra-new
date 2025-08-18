// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import LeftSidebar from "@/app/components/LeftSidebar";
// import RightSidebar from "@/app/components/RightSidebar";

// const Warehousing: React.FC = () => {
//   // Define sections for right sidebar navigation
//   const pageSections = [
//     { name: "Warehousing Solutions", anchor: "#solutions" },
//     { name: "Our Services", anchor: "#services" },
//     { name: "FAQs", anchor: "#faqs" },
//   ];

//   // FAQ data
//   const [faqs, setFaqs] = useState([
//     {
//       question:
//         "What is the minimum and maximum weight of components you can manufacture?",
//       answer:
//         "We typically handle components ranging from 50 grams to 30 kilograms through the investment casting route, depending on complexity and material.",
//       isOpen: false,
//     },
//     {
//       question: "Which materials do you work with?",
//       answer:
//         "We work primarily with ferrous and non-ferrous alloys, including stainless steels, low alloy steels, carbon steels, and selected non-ferrous grades suitable for air melting. Exotic alloys like cobalt-based or titanium are not handled.",
//       isOpen: false,
//     },
//     {
//       question:
//         "What is your typical lead time for prototypes and production orders?",
//       answer:
//         "Prototypes: 2–4 weeks depending on tooling and material availability\nProduction orders: 4–8 weeks depending on volume and complexity",
//       isOpen: false,
//     },
//     {
//       question: "Can you handle machining in-house?",
//       answer:
//         "Yes, we offer complete in-house machining capabilities including CNC Turning, VMC, Broaching, Multi-head Drilling, SPM operations, and more.",
//       isOpen: false,
//     },
//     {
//       question: "Do you provide surface finishing or post-processing?",
//       answer:
//         "Yes, we offer several in-house finishing services such as shot blasting, electropolishing, passivation, pickling, buffing, and dye penetrant testing.",
//       isOpen: false,
//     },
//     {
//       question: "Do you carry out quality inspections before dispatch?",
//       answer:
//         "Absolutely. Every part goes through multiple Quality Gates (AGNI, VISHWAS, DRISHTI, TEJAS) covering visual inspection, dimensional checks, NDT, and destructive testing where required.",
//       isOpen: false,
//     },
//     {
//       question:
//         "What kind of certifications or quality standards do you follow?",
//       answer:
//         "We are certified to ISO 9001 and compliant with IATF 16949 standards. We also follow strict PPAP, FMEA, and control plan-based production processes as per customer requirements.",
//       isOpen: false,
//     },
//     {
//       question:
//         "Do you provide First Article Inspection (FAI) or PPAP documentation?",
//       answer:
//         "Yes, we provide full FAI reports and PPAP Level 3 documentation upon request.",
//       isOpen: false,
//     },
//     {
//       question: "Can you export globally?",
//       answer:
//         "Yes, we have experience in exporting precision components globally and are open to long-term collaborations with overseas customers.",
//       isOpen: false,
//     },
//     {
//       question: "Do you assist with design for manufacturability (DFM)?",
//       answer:
//         "Yes, our engineering team actively supports customers during the NPD (New Product Development) phase to optimize casting design for performance, cost, and manufacturability.",
//       isOpen: false,
//     },
//   ]);

//   const toggleFaq = (index: number) => {
//     setFaqs(
//       faqs.map((faq, i) => ({
//         ...faq,
//         isOpen: i === index ? !faq.isOpen : false,
//       }))
//     );
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//   };

//   const faqVariants = {
//     open: {
//       opacity: 1,
//       height: "auto",
//       transition: {
//         height: {
//           duration: 0.4,
//           ease: [0.4, 0, 0.2, 1], // Cubic bezier array
//         },
//         opacity: {
//           duration: 0.3,
//           ease: [0.4, 0, 0.2, 1],
//           delay: 0.1,
//         },
//       },
//     },
//     closed: {
//       opacity: 0,
//       height: 0,
//       transition: {
//         height: {
//           duration: 0.3,
//           ease: [0.4, 0, 0.2, 1],
//         },
//         opacity: {
//           duration: 0.2,
//           ease: [0.4, 0, 0.2, 1],
//         },
//       },
//     },
//   };

//   return (
//     <div className="flex min-h-screen bg-white h-100">
//       <LeftSidebar />

//       {/* Main Content Area */}
//       <main
//         className="flex-1 p-10 overflow-y-auto h-screen"
//         style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//       >
//         <div className="max-w-4xl m-auto">
//           {/* Hero Section */}
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={containerVariants}
//           >
//             <motion.h1
//               variants={itemVariants}
//               className="text-3xl font-normal mb-8 text-gray-800"
//               style={{ fontFamily: "Montserrat, sans-serif" }}
//             >
//               🚚 Warehousing & Distribution Solutions
//             </motion.h1>

//             <motion.p
//               variants={itemVariants}
//               className="mb-8 text-gray-700 leading-relaxed text-lg"
//               style={{ fontFamily: "Inter, sans-serif" }}
//             >
//               At Rudra Castings, we offer flexible, customer-focused warehousing
//               and distribution services to ensure that our castings are
//               available to you when and where you need them.
//             </motion.p>

//             <motion.p
//               variants={itemVariants}
//               className="mb-10 text-gray-700 leading-relaxed text-lg"
//               style={{ fontFamily: "Inter, sans-serif" }}
//             >
//               As a growing global supplier, our network and strategic logistics
//               enable faster delivery, reduced lead times, and inventory
//               solutions tailored to your production cycles. Whether it's bulk
//               orders, scheduled dispatches, or just-in-time delivery, we've got
//               you covered.
//             </motion.p>

//             <motion.div
//               variants={itemVariants}
//               className="my-12 rounded-lg overflow-hidden shadow-lg"
//             >
//               <Image
//                 src="/warehouse.avif"
//                 alt="Warehousing and Distribution Facility"
//                 width={1200}
//                 height={800}
//                 className="w-full h-auto object-cover"
//               />
//             </motion.div>
//           </motion.div>

//           {/* Services Section */}
//           <motion.section
//             id="services"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={containerVariants}
//             className="mb-16"
//           >
//             <motion.h2
//               variants={itemVariants}
//               className="text-2xl font-normal mb-8 text-gray-800"
//               style={{ fontFamily: "Montserrat, sans-serif" }}
//             >
//               🏢 What You Need, When You Need It
//             </motion.h2>

//             <motion.p
//               variants={itemVariants}
//               className="mb-8 text-gray-700 leading-relaxed text-lg"
//               style={{ fontFamily: "Inter, sans-serif" }}
//             >
//               We understand that customers may not always have space to store
//               their entire order or may prefer phased deliveries. That's why we
//               offer:
//             </motion.p>

//             <motion.div
//               variants={containerVariants}
//               className="grid md:grid-cols-2 gap-6 mb-12"
//             >
//               <motion.div
//                 variants={itemVariants}
//                 className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500"
//               >
//                 <h3
//                   className="text-xl font-normal mb-3 text-gray-800"
//                   style={{ fontFamily: "Montserrat, sans-serif" }}
//                 >
//                   On-demand Dispatch
//                 </h3>
//                 <p
//                   className="text-gray-700 leading-relaxed"
//                   style={{ fontFamily: "Inter, sans-serif" }}
//                 >
//                   Flexible dispatch of required quantities as per your
//                   production schedule and inventory needs.
//                 </p>
//               </motion.div>

//               <motion.div
//                 variants={itemVariants}
//                 className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500"
//               >
//                 <h3
//                   className="text-xl font-normal mb-3 text-gray-800"
//                   style={{ fontFamily: "Montserrat, sans-serif" }}
//                 >
//                   Strategic Storage
//                 </h3>
//                 <p
//                   className="text-gray-700 leading-relaxed"
//                   style={{ fontFamily: "Inter, sans-serif" }}
//                 >
//                   Access to strategically located storage facilities for optimal
//                   distribution efficiency.
//                 </p>
//               </motion.div>

//               <motion.div
//                 variants={itemVariants}
//                 className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500"
//               >
//                 <h3
//                   className="text-xl font-normal mb-3 text-gray-800"
//                   style={{ fontFamily: "Montserrat, sans-serif" }}
//                 >
//                   Inventory Management
//                 </h3>
//                 <p
//                   className="text-gray-700 leading-relaxed"
//                   style={{ fontFamily: "Inter, sans-serif" }}
//                 >
//                   Customized inventory solutions aligned with your demand
//                   patterns and production cycles.
//                 </p>
//               </motion.div>

//               <motion.div
//                 variants={itemVariants}
//                 className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500"
//               >
//                 <h3
//                   className="text-xl font-normal mb-3 text-gray-800"
//                   style={{ fontFamily: "Montserrat, sans-serif" }}
//                 >
//                   Dedicated Team
//                 </h3>
//                 <p
//                   className="text-gray-700 leading-relaxed"
//                   style={{ fontFamily: "Inter, sans-serif" }}
//                 >
//                   Expert dispatch planning team to coordinate and optimize your
//                   deliveries.
//                 </p>
//               </motion.div>
//             </motion.div>

//             <motion.div
//               variants={itemVariants}
//               className="bg-gray-50 p-8 rounded-lg"
//             >
//               <p
//                 className="text-gray-700 leading-relaxed text-lg"
//                 style={{ fontFamily: "Inter, sans-serif" }}
//               >
//                 By handling storage and logistics, we let you focus on what
//                 matters most — your operations, while we ensure timely,
//                 reliable, and safe delivery of your precision components.
//               </p>
//             </motion.div>
//           </motion.section>

//           {/* Value Proposition Section */}
//           <motion.section
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={containerVariants}
//             className="mt-16"
//           >
//             <motion.h2
//               variants={itemVariants}
//               className="text-2xl font-normal mb-8 text-gray-800"
//               style={{ fontFamily: "Montserrat, sans-serif" }}
//             >
//               Our Distribution Advantages
//             </motion.h2>

//             <motion.div
//               variants={containerVariants}
//               className="grid md:grid-cols-3 gap-6"
//             >
//               <motion.div
//                 variants={itemVariants}
//                 className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
//               >
//                 <div className="text-blue-600 text-2xl mb-3">🌐</div>
//                 <h3
//                   className="text-xl font-normal mb-3 text-gray-800"
//                   style={{ fontFamily: "Montserrat, sans-serif" }}
//                 >
//                   Global Network
//                 </h3>
//                 <p
//                   className="text-gray-700 leading-relaxed"
//                   style={{ fontFamily: "Inter, sans-serif" }}
//                 >
//                   Strategically located facilities enabling efficient
//                   distribution worldwide.
//                 </p>
//               </motion.div>

//               <motion.div
//                 variants={itemVariants}
//                 className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
//               >
//                 <div className="text-green-600 text-2xl mb-3">⏱️</div>
//                 <h3
//                   className="text-xl font-normal mb-3 text-gray-800"
//                   style={{ fontFamily: "Montserrat, sans-serif" }}
//                 >
//                   Reduced Lead Times
//                 </h3>
//                 <p
//                   className="text-gray-700 leading-relaxed"
//                   style={{ fontFamily: "Inter, sans-serif" }}
//                 >
//                   Optimized logistics for faster delivery when you need it.
//                 </p>
//               </motion.div>

//               <motion.div
//                 variants={itemVariants}
//                 className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
//               >
//                 <div className="text-purple-600 text-2xl mb-3">🔄</div>
//                 <h3
//                   className="text-xl font-normal mb-3 text-gray-800"
//                   style={{ fontFamily: "Montserrat, sans-serif" }}
//                 >
//                   Flexible Solutions
//                 </h3>
//                 <p
//                   className="text-gray-700 leading-relaxed"
//                   style={{ fontFamily: "Inter, sans-serif" }}
//                 >
//                   Customizable options from bulk shipping to JIT deliveries.
//                 </p>
//               </motion.div>
//             </motion.div>
//           </motion.section>

//           {/* FAQ Section */}
//           <motion.section
//             id="faqs"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={containerVariants}
//             className="mt-16"
//           >
//             <motion.h2
//               variants={itemVariants}
//               className="text-2xl font-normal mb-8 text-gray-800"
//               style={{ fontFamily: "Montserrat, sans-serif" }}
//             >
//               Frequently Asked Questions (FAQs)
//             </motion.h2>

//             <motion.div variants={containerVariants} className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <motion.div
//                   key={index}
//                   variants={itemVariants}
//                   className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50"
//                 >
//                   <button
//                     className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-100 transition-colors"
//                     onClick={() => toggleFaq(index)}
//                   >
//                     <span
//                       className="text-2xl font-medium text-gray-800 pr-10"
//                       style={{ fontFamily: "Inter, sans-serif" }}
//                     >
//                       {faq.question}
//                     </span>
//                     <motion.div
//                       animate={{
//                         rotate: faq.isOpen ? 45 : 0,
//                         backgroundColor: faq.isOpen ? "#6B8887" : "#6B8887",
//                       }}
//                       transition={{ duration: 0.3 }}
//                       className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
//                     >
//                       <span className="text-white text-4xl font-300">+</span>
//                     </motion.div>
//                   </button>

//                   <AnimatePresence initial={false}>
//                     {faq.isOpen && (
//                       <motion.div
//                         initial="closed"
//                         animate="open"
//                         exit="closed"
//                         variants={{
//                           open: {
//                             opacity: 1,
//                             height: "auto",
//                             transition: {
//                               height: {
//                                 duration: 0.4,
//                                 ease: [0.4, 0, 0.2, 1], // Cubic bezier array
//                               },
//                               opacity: {
//                                 duration: 0.3,
//                                 ease: [0.4, 0, 0.2, 1],
//                                 delay: 0.1,
//                               },
//                             },
//                           },
//                           closed: {
//                             opacity: 0,
//                             height: 0,
//                             transition: {
//                               height: {
//                                 duration: 0.3,
//                                 ease: [0.4, 0, 0.2, 1],
//                               },
//                               opacity: {
//                                 duration: 0.2,
//                                 ease: [0.4, 0, 0.2, 1],
//                               },
//                             },
//                           },
//                         }}
//                         className="overflow-hidden"
//                       >
//                         <div className="px-6 pb-6">
//                           <div
//                             className="text-gray-700 leading-relaxed"
//                             style={{ fontFamily: "Inter, sans-serif" }}
//                           >
//                             {faq.answer.split("\n").map((paragraph, i) => (
//                               <p key={i} className="mb-4 last:mb-0 text-lg pt-5">
//                                 {paragraph}
//                               </p>
//                             ))}
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.section>
//         </div>
//       </main>

//       <RightSidebar sections={pageSections} />

//       {/* Global Styles */}
//       <style jsx global>{`
//         ::-webkit-scrollbar {
//           display: none;
//         }
//         html {
//           scroll-behavior: smooth;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Warehousing;


"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LeftSidebar from "@/app/components/LeftSidebar";
import RightSidebar from "@/app/components/RightSidebar";
import FAQSection from "@/app/components/FAQSection";
import { warehousingFAQs } from "@/app/components/data/faqs";

const Warehousing: React.FC = () => {
  // Define sections for right sidebar navigation
  const pageSections = [
    { name: "Warehousing Solutions", anchor: "#solutions" },
    { name: "Our Services", anchor: "#services" },
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
              🚚 Warehousing & Distribution Solutions
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-gray-700 leading-relaxed text-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              At Rudra Castings, we offer flexible, customer-focused warehousing
              and distribution services to ensure that our castings are
              available to you when and where you need them.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mb-10 text-gray-700 leading-relaxed text-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              As a growing global supplier, our network and strategic logistics
              enable faster delivery, reduced lead times, and inventory
              solutions tailored to your production cycles. Whether it's bulk
              orders, scheduled dispatches, or just-in-time delivery, we've got
              you covered.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="my-12 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/warehouse.avif"
                alt="Warehousing and Distribution Facility"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Services Section */}
          <motion.section
            id="services"
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
              🏢 What You Need, When You Need It
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-gray-700 leading-relaxed text-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              We understand that customers may not always have space to store
              their entire order or may prefer phased deliveries. That's why we
              offer:
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6 mb-12"
            >
              <motion.div
                variants={itemVariants}
                className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500"
              >
                <h3
                  className="text-xl font-normal mb-3 text-gray-800"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  On-demand Dispatch
                </h3>
                <p
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Flexible dispatch of required quantities as per your
                  production schedule and inventory needs.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500"
              >
                <h3
                  className="text-xl font-normal mb-3 text-gray-800"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Strategic Storage
                </h3>
                <p
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Access to strategically located storage facilities for optimal
                  distribution efficiency.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500"
              >
                <h3
                  className="text-xl font-normal mb-3 text-gray-800"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Inventory Management
                </h3>
                <p
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Customized inventory solutions aligned with your demand
                  patterns and production cycles.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500"
              >
                <h3
                  className="text-xl font-normal mb-3 text-gray-800"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Dedicated Team
                </h3>
                <p
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Expert dispatch planning team to coordinate and optimize your
                  deliveries.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <p
                className="text-gray-700 leading-relaxed text-lg"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                By handling storage and logistics, we let you focus on what
                matters most — your operations, while we ensure timely,
                reliable, and safe delivery of your precision components.
              </p>
            </motion.div>
          </motion.section>

          {/* Value Proposition Section */}
          <motion.section
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
              Our Distribution Advantages
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-3 gap-6"
            >
              <motion.div
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <div className="text-blue-600 text-2xl mb-3">🌐</div>
                <h3
                  className="text-xl font-normal mb-3 text-gray-800"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Global Network
                </h3>
                <p
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Strategically located facilities enabling efficient
                  distribution worldwide.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <div className="text-green-600 text-2xl mb-3">⏱️</div>
                <h3
                  className="text-xl font-normal mb-3 text-gray-800"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Reduced Lead Times
                </h3>
                <p
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Optimized logistics for faster delivery when you need it.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <div className="text-purple-600 text-2xl mb-3">🔄</div>
                <h3
                  className="text-xl font-normal mb-3 text-gray-800"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Flexible Solutions
                </h3>
                <p
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Customizable options from bulk shipping to JIT deliveries.
                </p>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* FAQ Section - Now using the reusable component */}
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

export default Warehousing;