// // "use client";

// // import React, { useState, useRef, useEffect } from "react";
// // import { Search, ArrowRight, Menu, X } from "lucide-react";
// // import Image from "next/image";
// // import { motion } from 'framer-motion';

// // const navItems = [
// //   {
// //     title: "Solutions",
// //     items: [
// //       "Investment Casting Process",
// //       "Machining & Finishing",
// //       "In-House Tooling",
// //       "Prototyping Services",
// //       "Material Options",
// //       "Quality Inspection & Testing",
// //       "Global Distribution Support",
// //     ],
// //   },
// //   {
// //     title: "Industries We Serve",
// //     items: [
// //       "Automotive",
// //       "Defense",
// //       "Medical",
// //       "Valves & Pumps",
// //       "Construction Equipment",
// //       "General Engineering",
// //     ],
// //   },
// //   {
// //     title: "Why Rudra",
// //     items: [
// //       "Fast Turnaround",
// //       "Reliable Delivery",
// //       "Superior Quality",
// //       "Advanced Production Facilities",
// //       "Comprehensive In-House Services",
// //       "Rapid Prototyping",
// //     ],
// //   },
// //   {
// //     title: "About Us",
// //     items: [
// //       "Our Story",
// //       "Vision & Mission",
// //       "Infrastructure",
// //       "Leadership",
// //       "Careers",
// //       "CSR & Sustainability",
// //     ],
// //   },
// //   {
// //     title: "Resources",
// //     items: [
// //       "FAQs",
// //       "Guides / Downloads",
// //       "Process Videos (future)",
// //       "Blog / Industry Insights",
// //       "Latest Updates / News",
// //     ],
// //   },
// //   {
// //     title: "Get in Touch",
// //     items: [
// //       "General Inquiry",
// //       "Request a Quote",
// //       "Map & Locations",
// //       "Vendor",
// //       "Career Enquiry (Optional)",
// //     ],
// //   },
// // ];

// // const Header: React.FC = () => {
// //   const [hoverIdx, setHoverIdx] = useState<number | null>(null);
// //   const [isVisible, setIsVisible] = useState(false);
// //   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

// //   const contentRef = useRef<HTMLDivElement>(null);
// //   const [contentHeight, setContentHeight] = useState(0);

// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const [mobileOpenIndices, setMobileOpenIndices] = useState<number[]>([]);

// //   // Handlers
// //   const handleMouseEnter = (idx: number) => {
// //     if (timeoutRef.current) clearTimeout(timeoutRef.current);
// //     setHoverIdx(idx);
// //     setIsVisible(true);
// //   };

// //   const handleMouseLeave = () => {
// //     if (timeoutRef.current) clearTimeout(timeoutRef.current);
// //     timeoutRef.current = setTimeout(() => {
// //       setIsVisible(false);
// //       setTimeout(() => setHoverIdx(null), 300);
// //     }, 150);
// //   };

// //   // Height adjust
// //   useEffect(() => {
// //     if (contentRef.current && hoverIdx !== null && isVisible) {
// //       setContentHeight(contentRef.current.scrollHeight);
// //     } else {
// //       setContentHeight(0);
// //     }
// //   }, [hoverIdx, isVisible]);

// //   // Mobile
// //   const toggleMobileAccordion = (idx: number) => {
// //     setMobileOpenIndices((prev) =>
// //       prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
// //     );
// //   };
// //   const closeMobileMenu = () => {
// //     setMobileMenuOpen(false);
// //     setMobileOpenIndices([]);
// //   };

// //   return (
// //     <>
// //       {/* Desktop blurred background */}
// //       {hoverIdx !== null && (
// //         <div
// //           className={`fixed inset-0 z-20 transition-opacity duration-300 ${
// //             isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
// //           }`}
// //           style={{ top: "72px" }}
// //         >
// //           <div className="absolute inset-0 backdrop-blur-md bg-black/10"></div>
// //         </div>
// //       )}

// //       {/* Desktop Mega Menu */}
// //       {hoverIdx !== null && (
// //         <div
// //           className="fixed inset-x-0 top-[72px] z-30 hidden md:block"
// //           onMouseEnter={() =>
// //             timeoutRef.current && clearTimeout(timeoutRef.current)
// //           }
// //           onMouseLeave={handleMouseLeave}
// //         >
// //           <div
// //             className="w-full border-t border-gray-100 bg-white shadow-lg overflow-hidden transition-all ease-in-out"
// //             style={{
// //               height: isVisible
// //                 ? Math.max(contentHeight, window.innerHeight * 0.4)
// //                 : 0,
// //               minHeight: isVisible ? "50vh" : 0,
// //               opacity: isVisible ? 1 : 0,
// //               transform: isVisible ? "translateY(0)" : "translateY(-10px)",
// //               transitionProperty: "height, opacity, transform",
// //               transitionDuration: "300ms",
// //               transitionTimingFunction: "ease-in-out",
// //             }}
// //             aria-expanded={isVisible}
// //           >
// //             <div
// //               ref={contentRef}
// //               className="max-w-screen-xxl mx-auto px-8 py-10 flex flex-row justify-center items-center"
// //               style={{ height: "100%" }}
// //             >
// //               {/* Left Side Menu - Centered */}
// //               <ul
// //                 key={`list-${hoverIdx}`}
// //                 className="grid grid-rows-4 grid-flow-col gap-x-12 gap-y-3 flex-1"
// //                 style={{ alignSelf: "center", justifyContent: "center", gap: "20px" }}
// //               >
// //                 {navItems[hoverIdx].items.map((sub, i) => (
// //                   <li
// //                     key={i}
// //                     className="transition-all duration-300 ease-out py-4 px-10"
// //                     style={{
// //                       transitionDelay: `${i * 60}ms`,
// //                       opacity: isVisible ? 1 : 0,
// //                       transform: isVisible ? "translateY(0)" : "translateY(12px)",
// //                     }}
// //                   >
// //                     <a
// //                       href={`#${sub.toLowerCase().replace(/ /g, "-")}`}
// //                       className="block text-gray-600 hover:text-gray-900 transition-colors text-left text-xl"
// //                       style={{
// //                         fontFamily: "var(--kohinoor-2)",
// //                         fontWeight: "300",
// //                       }}
// //                     >
// //                       {sub}
// //                     </a>
// //                   </li>
// //                 ))}
// //               </ul>

// //               {/* Right Side Boxes */}
// //               <div className="flex flex-col gap-6 w-80">
// //                 <a
// //                   href="#schedule-call"
// //                   className="flex flex-col justify-end bg-green-200 hover:bg-green-300 text-gray-800 rounded-xl p-6 transition-all h-40"
// //                 >
// //                   <div className="flex items-center justify-between">
// //                     <span className="text-lg font-medium leading-snug">
// //                       Schedule a New <br /> Business Call
// //                     </span>
// //                     <ArrowRight size={24} />
// //                   </div>
// //                 </a>
// //                 <a
// //                   href="#procurement-info"
// //                   className="flex flex-col justify-end border border-gray-300 hover:bg-gray-50 rounded-xl p-6 transition-all h-40"
// //                 >
// //                   <div className="flex items-center justify-between">
// //                     <span className="text-lg font-medium text-gray-300 ">
// //                       Procurement Information
// //                     </span>
// //                     <ArrowRight size={24} className="text-gray-300" />
// //                   </div>
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Header */}
// //       <motion.header
// //         className={`w-full bg-white fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
// //           isVisible ? "shadow-[0_1px_1px_rgba(0,0,0,0.15)]" : ""
// //         }`}
// //         onMouseLeave={handleMouseLeave}

// //         initial={{ opacity: 0, height: "50vh" }}
// //         animate={{ opacity: 1, height: "14vh" }}
// //         transition={{ duration: 3 }}
// //         viewport={{ once: true }}
// //         // style={{backgroundColor: "red"}}
// //       >
// //         <div className="max-w-screen-3xl mx-10 px-6 py-4 flex items-center justify-between relative">
// //           {/* Logo */}
// //           <motion.div className="flex items-center gap-2"
// //           initial={{ opacity: 0, y: 200 , x: 500 , scale: 2.8 }}
// //           animate={{ opacity: 1, y: 0 , x: 0 , scale: 1 }}
// //           transition={{ duration: 3 }}
// //           // style={{backgroundColor: "blue"}}
// //           >
// //             <Image
// //               src="/Rudra-Logo.png"
// //               alt="Rudra Logo"
// //               width={180}
// //               height={45}
// //               priority
// //             />
// //           </motion.div>

// //           {/* Desktop Navigation */}
// //           <nav className="hidden md:flex flex-1 justify-center mx-12 gap-1 relative z-50">
// //             {navItems.map((item, idx) => (
// //               <button
// //                 key={item.title}
// //                 onMouseEnter={() => handleMouseEnter(idx)}
// //                 onFocus={() => handleMouseEnter(idx)}
// //                 className={`transition-colors text-lg font-medium ${
// //                   hoverIdx === idx ? "text-gray-900 font-semibold" : ""
// //                 } px-3 py-2`}
// //                 type="button"
// //                 style={{
// //                   fontFamily: "var(--kohinoor-2)",
// //                   color: hoverIdx === idx ? "" : "#6a6c72",
// //                 }}
// //               >
// //                 {item.title}
// //               </button>
// //             ))}
// //           </nav>

// //           {/* Mobile Hamburger */}
// //           <div className="md:hidden flex items-center gap-4 relative z-50">
// //             <button
// //               type="button"
// //               onClick={() => setMobileMenuOpen(true)}
// //               aria-label="Open Menu"
// //               className="text-gray-700 hover:text-gray-900"
// //             >
// //               <Menu size={28} />
// //             </button>
// //           </div>

// //           {/* Desktop Right Actions */}
// //           <div className="hidden md:flex items-center gap-8 relative z-50">
// //             <Search
// //               size={24}
// //               className="text-gray-400 hover:text-gray-800 cursor-pointer"
// //             />
// //             <span className="text-gray-600 text-lg font-medium mx-4">EN</span>
// //             <button className="bg-[#3f4249] hover:bg-[#3a3d43] text-white rounded-2xl px-5 py-4 text-lg font-medium flex items-center gap-2 transition-all">
// //               Get started <ArrowRight size={24} />
// //             </button>
// //           </div>
// //         </div>
// //       </motion.header>

// //       {/* Mobile overlay */}
// //       <div
// //         className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
// //           mobileMenuOpen
// //             ? "opacity-100 pointer-events-auto"
// //             : "opacity-0 pointer-events-none"
// //         }`}
// //         onClick={closeMobileMenu}
// //       ></div>

// //       {/* Mobile Menu */}
// //       <aside
// //         className={`fixed top-0 left-0 bottom-0 z-50 w-4/5 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
// //           mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
// //         }`}
// //       >
// //         <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
// //           <Image
// //             src="/Rudra-Logo.png"
// //             alt="Rudra Logo"
// //             width={160}
// //             height={40}
// //             priority
// //           />
// //           <button
// //             type="button"
// //             onClick={closeMobileMenu}
// //             aria-label="Close Menu"
// //             className="text-gray-700 hover:text-gray-900"
// //           >
// //             <X size={28} />
// //           </button>
// //         </div>
// //         <nav className="px-6 py-4 overflow-y-auto h-[calc(100vh-72px)]">
// //           {navItems.map((section, idx) => {
// //             const isOpen = mobileOpenIndices.includes(idx);
// //             return (
// //               <div key={section.title} className="mb-4 border-b border-gray-200">
// //                 <button
// //                   type="button"
// //                   onClick={() => toggleMobileAccordion(idx)}
// //                   className="w-full flex justify-between items-center py-3 font-semibold text-gray-800 hover:text-gray-900"
// //                 >
// //                   {section.title}
// //                   <svg
// //                     className={`w-5 h-5 transform transition-transform duration-300 ${
// //                       isOpen ? "rotate-180" : ""
// //                     }`}
// //                     fill="none"
// //                     stroke="currentColor"
// //                     strokeWidth={2}
// //                     viewBox="0 0 24 24"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       d="M19 9l-7 7-7-7"
// //                     />
// //                   </svg>
// //                 </button>
// //                 {isOpen && (
// //                   <ul className="pl-4 pb-3 text-gray-600 space-y-2">
// //                     {section.items.map((item, idxSub) => (
// //                       <li key={idxSub}>
// //                         <a
// //                           href={`#${item.toLowerCase().replace(/ /g, "-")}`}
// //                           className="block hover:text-gray-900"
// //                           onClick={closeMobileMenu}
// //                         >
// //                           {item}
// //                         </a>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 )}
// //               </div>
// //             );
// //           })}
// //         </nav>
// //       </aside>

// //       {/* Custom animation */}
// //       <style jsx>{`
// //         .fade-slide-down {
// //           animation: fadeSlideDown 0.3s ease forwards;
// //         }
// //         @keyframes fadeSlideDown {
// //           from {
// //             opacity: 0;
// //             transform: translateY(-10px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
// //       `}</style>
// //     </>
// //   );
// // };

// // export default Header;

// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { Search, ArrowRight, Menu, X } from "lucide-react";
// import Image from "next/image";
// import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

// const navItems = [
//   {
//     title: "Solutions",
//     items: [
//       "Investment Casting Process",
//       "Machining & Finishing",
//       "In-House Tooling",
//       "Prototyping Services",
//       "Material Options",
//       "Quality Inspection & Testing",
//       "Global Distribution Support",
//     ],
//   },
//   {
//     title: "Industries We Serve",
//     items: [
//       "Automotive",
//       "Defense",
//       "Medical",
//       "Valves & Pumps",
//       "Construction Equipment",
//       "General Engineering",
//     ],
//   },
//   {
//     title: "Why Rudra",
//     items: [
//       "Fast Turnaround",
//       "Reliable Delivery",
//       "Superior Quality",
//       "Advanced Production Facilities",
//       "Comprehensive In-House Services",
//       "Rapid Prototyping",
//     ],
//   },
//   {
//     title: "About Us",
//     items: [
//       "Our Story",
//       "Vision & Mission",
//       "Infrastructure",
//       "Leadership",
//       "Careers",
//       "CSR & Sustainability",
//     ],
//   },
//   {
//     title: "Resources",
//     items: [
//       "FAQs",
//       "Guides / Downloads",
//       "Process Videos (future)",
//       "Blog / Industry Insights",
//       "Latest Updates / News",
//     ],
//   },
//   {
//     title: "Get in Touch",
//     items: [
//       "General Inquiry",
//       "Request a Quote",
//       "Map & Locations",
//       "Vendor",
//       "Career Enquiry (Optional)",
//     ],
//   },
// ];

// const Header: React.FC = () => {
//   const [hoverIdx, setHoverIdx] = useState<number | null>(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const [isInitialLoad, setIsInitialLoad] = useState(true);

//   const contentRef = useRef<HTMLDivElement>(null);
//   const [contentHeight, setContentHeight] = useState(0);

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileOpenIndices, setMobileOpenIndices] = useState<number[]>([]);
//   const [xValue, setXValue] = useState("330%");

//   // Scroll detection
//   const { scrollY } = useScroll();

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     if (latest > 10) {
//       setHasScrolled(true);
//       setIsInitialLoad(false);
//     } else if (latest <= 10) {
//       setHasScrolled(false);
//     }
//   });

//   // Handlers
//   const handleMouseEnter = (idx: number) => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setHoverIdx(idx);
//     setIsVisible(true);
//   };

//   const handleMouseLeave = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(() => {
//       setIsVisible(false);
//       setTimeout(() => setHoverIdx(null), 300);
//     }, 150);
//   };

//   // Height adjust
//   useEffect(() => {
//     if (contentRef.current && hoverIdx !== null && isVisible) {
//       setContentHeight(contentRef.current.scrollHeight);
//     } else {
//       setContentHeight(0);
//     }
//   }, [hoverIdx, isVisible]);

//   // Mobile
//   const toggleMobileAccordion = (idx: number) => {
//     setMobileOpenIndices((prev) =>
//       prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
//     );
//   };
//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//     setMobileOpenIndices([]);
//   };

//   return (
//     <>
//       {/* Desktop blurred background */}
//       {hoverIdx !== null && (
//         <div
//           className={`fixed inset-0 z-20 transition-opacity duration-300 ${
//             isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
//           }`}
//           style={{ top: "72px" }}
//         >
//           <div className="absolute inset-0 backdrop-blur-md bg-black/10"></div>
//         </div>
//       )}

//       {/* Desktop Mega Menu */}
//       {hoverIdx !== null && (
//         <div
//           className="fixed inset-x-0 top-[72px] z-30 hidden md:block"
//           onMouseEnter={() =>
//             timeoutRef.current && clearTimeout(timeoutRef.current)
//           }
//           onMouseLeave={handleMouseLeave}
//         >
//           <div
//             className="w-full border-t border-gray-100 bg-white shadow-lg overflow-hidden transition-all ease-in-out"
//             style={{
//               height: isVisible
//                 ? Math.max(contentHeight, window.innerHeight * 0.4)
//                 : 0,
//               minHeight: isVisible ? "50vh" : 0,
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? "translateY(0)" : "translateY(-10px)",
//               transitionProperty: "height, opacity, transform",
//               transitionDuration: "300ms",
//               transitionTimingFunction: "ease-in-out",
//             }}
//             aria-expanded={isVisible}
//           >
//             <div
//               ref={contentRef}
//               className="max-w-screen-xxl mx-auto px-8 py-10 flex flex-row justify-center items-center"
//               style={{ height: "100%" }}
//             >
//               {/* Left Side Menu - Centered */}
//               <ul
//                 key={`list-${hoverIdx}`}
//                 className="grid grid-rows-4 grid-flow-col gap-x-12 gap-y-3 flex-1"
//                 style={{ alignSelf: "center", justifyContent: "center", gap: "20px" }}
//               >
//                 {navItems[hoverIdx].items.map((sub, i) => (
//                   <li
//                     key={i}
//                     className="transition-all duration-300 ease-out py-4 px-10"
//                     style={{
//                       transitionDelay: `${i * 60}ms`,
//                       opacity: isVisible ? 1 : 0,
//                       transform: isVisible ? "translateY(0)" : "translateY(12px)",
//                     }}
//                   >
//                     <a
//                       href={`#${sub.toLowerCase().replace(/ /g, "-")}`}
//                       className="block text-gray-600 hover:text-gray-900 transition-colors text-left text-xl"
//                       style={{
//                         fontFamily: "var(--kohinoor-2)",
//                         fontWeight: "300",
//                       }}
//                     >
//                       {sub}
//                     </a>
//                   </li>
//                 ))}
//               </ul>

//               {/* Right Side Boxes */}
//               <div className="flex flex-col gap-6 w-80">
//                 <a
//                   href="#schedule-call"
//                   className="flex flex-col justify-end bg-green-200 hover:bg-green-300 text-gray-800 rounded-xl p-6 transition-all h-40"
//                 >
//                   <div className="flex items-center justify-between">
//                     <span className="text-lg font-medium leading-snug">
//                       Schedule a New <br /> Business Call
//                     </span>
//                     <ArrowRight size={24} />
//                   </div>
//                 </a>
//                 <a
//                   href="#procurement-info"
//                   className="flex flex-col justify-end border border-gray-300 hover:bg-gray-50 rounded-xl p-6 transition-all h-40"
//                 >
//                   <div className="flex items-center justify-between">
//                     <span className="text-lg font-medium text-gray-300 ">
//                       Procurement Information
//                     </span>
//                     <ArrowRight size={24} className="text-gray-300" />
//                   </div>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Header */}
//       <motion.header
//         className={`w-full bg-white fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
//           isVisible ? "shadow-[0_1px_1px_rgba(0,0,0,0.15)]" : ""
//         }`}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className="max-w-screen-3xl mx-10 px-6 py-4 flex items-center justify-between relative">
//           {/* Logo - Animated only on scroll */}
//           <motion.div className="flex items-center gap-2"
//             initial={{ opacity: 1, y: 200, x: "330%", scale: 1.8 }}
//             animate={
//               isInitialLoad
//                 ? { opacity: 1, y: 200, x: "330%", scale: 1.8 }
//                 : hasScrolled
//                   ? { opacity: 1, y: 0, x: 0, scale: 1 }
//                   : { opacity: 1, y: 200, x: "330%", scale: 1.8 }
//             }
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <Image
//               src="/Rudra-Logo.png"
//               alt="Rudra Logo"
//               width={180}
//               height={45}
//               priority
//             />
//           </motion.div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex flex-1 justify-center mx-12 gap-1 relative z-50">
//             {navItems.map((item, idx) => (
//               <button
//                 key={item.title}
//                 onMouseEnter={() => handleMouseEnter(idx)}
//                 onFocus={() => handleMouseEnter(idx)}
//                 className={`transition-colors text-lg font-medium ${
//                   hoverIdx === idx ? "text-gray-900 font-semibold" : ""
//                 } px-3 py-2`}
//                 type="button"
//                 style={{
//                   fontFamily: "var(--kohinoor-2)",
//                   color: hoverIdx === idx ? "" : "#6a6c72",
//                 }}
//               >
//                 {item.title}
//               </button>
//             ))}
//           </nav>

//           {/* Mobile Hamburger */}
//           <div className="md:hidden flex items-center gap-4 relative z-50">
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(true)}
//               aria-label="Open Menu"
//               className="text-gray-700 hover:text-gray-900"
//             >
//               <Menu size={28} />
//             </button>
//           </div>

//           {/* Desktop Right Actions */}
//           <div className="hidden md:flex items-center gap-8 relative z-50">
//             <Search
//               size={24}
//               className="text-gray-400 hover:text-gray-800 cursor-pointer"
//             />
//             <span className="text-gray-600 text-lg font-medium mx-4">EN</span>
//             <button className="bg-[#3f4249] hover:bg-[#3a3d43] text-white rounded-2xl px-5 py-4 text-lg font-medium flex items-center gap-2 transition-all">
//               Get started <ArrowRight size={24} />
//             </button>
//           </div>
//         </div>
//       </motion.header>

//       {/* Mobile overlay */}
//       <div
//         className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
//           mobileMenuOpen
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"
//         }`}
//         onClick={closeMobileMenu}
//       ></div>

//       {/* Mobile Menu */}
//       <aside
//         className={`fixed top-0 left-0 bottom-0 z-50 w-4/5 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
//           mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
//           <Image
//             src="/Rudra-Logo.png"
//             alt="Rudra Logo"
//             width={160}
//             height={40}
//             priority
//           />
//           <button
//             type="button"
//             onClick={closeMobileMenu}
//             aria-label="Close Menu"
//             className="text-gray-700 hover:text-gray-900"
//           >
//             <X size={28} />
//           </button>
//         </div>
//         <nav className="px-6 py-4 overflow-y-auto h-[calc(100vh-72px)]">
//           {navItems.map((section, idx) => {
//             const isOpen = mobileOpenIndices.includes(idx);
//             return (
//               <div key={section.title} className="mb-4 border-b border-gray-200">
//                 <button
//                   type="button"
//                   onClick={() => toggleMobileAccordion(idx)}
//                   className="w-full flex justify-between items-center py-3 font-semibold text-gray-800 hover:text-gray-900"
//                 >
//                   {section.title}
//                   <svg
//                     className={`w-5 h-5 transform transition-transform duration-300 ${
//                       isOpen ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>
//                 {isOpen && (
//                   <ul className="pl-4 pb-3 text-gray-600 space-y-2">
//                     {section.items.map((item, idxSub) => (
//                       <li key={idxSub}>
//                         <a
//                           href={`#${item.toLowerCase().replace(/ /g, "-")}`}
//                           className="block hover:text-gray-900"
//                           onClick={closeMobileMenu}
//                         >
//                           {item}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             );
//           })}
//         </nav>
//       </aside>

//       {/* Custom animation */}
//       <style jsx>{`
//         .fade-slide-down {
//           animation: fadeSlideDown 0.3s ease forwards;
//         }
//         @keyframes fadeSlideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Header;

"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navItems = [
  {
    title: "Solutions",
    items: [
      "Investment Casting Process",
      "Machining & Finishing",
      "In-House Tooling",
      "Prototyping Services",
      "Material Options",
      "Quality Inspection & Testing",
      "Global Distribution Support",
    ],
  },
  {
    title: "Industries We Serve",
    items: [
      "Automotive",
      "Defense",
      "Medical",
      "Valves & Pumps",
      "Construction Equipment",
      "General Engineering",
    ],
  },
  {
    title: "Why Rudra",
    items: [
      "Fast Turnaround",
      "Reliable Delivery",
      "Superior Quality",
      "Advanced Production Facilities",
      "Comprehensive In-House Services",
      "Rapid Prototyping",
    ],
  },
  {
    title: "About Us",
    items: [
      "Our Story",
      "Vision & Mission",
      "Infrastructure",
      "Leadership",
      "Careers",
      "CSR & Sustainability",
    ],
  },
  {
    title: "Resources",
    items: [
      "FAQs",
      "Guides / Downloads",
      "Process Videos (future)",
      "Blog / Industry Insights",
      "Latest Updates / News",
    ],
  },
  {
    title: "Get in Touch",
    items: [
      "General Inquiry",
      "Request a Quote",
      "Map & Locations",
      "Vendor",
      "Career Enquiry (Optional)",
    ],
  },
];

const useResponsiveX = () => {
  const [xValue, setXValue] = useState("330%");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1700) {
        setXValue("450%");
      } else if (window.innerWidth >= 1400) {
        setXValue("360%");
      } else if (window.innerWidth >= 1024) {
        setXValue("300%");
      } else {
        setXValue("30%");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return xValue;
};

const Header: React.FC = () => {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOpenIndices, setMobileOpenIndices] = useState<number[]>([]);
  const responsiveX = useResponsiveX();

  // Scroll detection
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setHasScrolled(true);
      setIsInitialLoad(false);
    } else if (latest <= 10) {
      setHasScrolled(false);
    }
  });

  // Handlers
  const handleMouseEnter = (idx: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoverIdx(idx);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setHoverIdx(null), 300);
    }, 150);
  };

  // Height adjust
  useEffect(() => {
    if (contentRef.current && hoverIdx !== null && isVisible) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [hoverIdx, isVisible]);

  // Mobile
  const toggleMobileAccordion = (idx: number) => {
    setMobileOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileOpenIndices([]);
  };

  return (
    <>
      {/* Desktop blurred background */}
      {hoverIdx !== null && (
        <div
          className={`fixed inset-0 z-20 transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ top: "72px" }}
        >
          <div className="absolute inset-0 backdrop-blur-md bg-black/10"></div>
        </div>
      )}

      {/* Desktop Mega Menu */}
      {hoverIdx !== null && (
        <div
          className="fixed inset-x-0 top-[100px] z-30 hidden md:block"
          onMouseEnter={() =>
            timeoutRef.current && clearTimeout(timeoutRef.current)
          }
          onMouseLeave={handleMouseLeave}
          style={{ zIndex: 1000 }}
        >
          <div
            className="w-full border-t border-gray-100 bg-white shadow-lg overflow-hidden transition-all ease-in-out"
            style={{
              height: isVisible
                ? Math.max(contentHeight, window.innerHeight * 0.4)
                : 0,
              minHeight: isVisible ? "50vh" : 0,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(-10px)",
              transitionProperty: "height, opacity, transform",
              transitionDuration: "300ms",
              transitionTimingFunction: "ease-in-out",
            }}
            aria-expanded={isVisible}
          >
            <div
              ref={contentRef}
              // className="max-w-screen-xxl mx-auto px-8 py-10 flex flex-row justify-center items-center bg-black ms-15"
              // className="max-w-screen-xxl mx-auto px-8 py-10 flex flex-row justify-center items-center bg-black ms-[15px] 2xl:ms-20px]"
              className="max-w-screen-xxl mx-auto px-8 py-10 flex flex-row justify-center items-center ms-[15px] 2xl:ms-[35px]"

              style={{ height: "100%" }}
            >
              {/* Left Side Menu - Centered */}
              <ul
                key={`list-${hoverIdx}`}
                className="grid grid-rows-4 grid-flow-col gap-x-12 gap-y-3 flex-1 ms-14 "
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                {navItems[hoverIdx].items.map((sub, i) => (
                  <li
                    key={i}
                    className="transition-all duration-300 ease-out py-4 px-10 "
                    style={{
                      transitionDelay: `${i * 60}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateY(0)"
                        : "translateY(12px)",
                    }}
                  >
                    <a
                      href={`#${sub.toLowerCase().replace(/ /g, "-")}`}
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-left text-xl"
                      style={{
                        fontFamily: "var(--kohinoor-2)",
                        fontWeight: "300",
                      }}
                    >
                      {sub}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Right Side Boxes */}
              <div className="flex flex-col gap-6 w-80">
                <a
                  href="#schedule-call"
                  className="flex flex-col justify-end bg-green-200 hover:bg-green-300 text-gray-800 rounded-xl p-6 transition-all h-40"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium leading-snug">
                      Schedule a New <br /> Business Call
                    </span>
                    <ArrowRight size={24} />
                  </div>
                </a>
                <a
                  href="#procurement-info"
                  className="flex flex-col justify-end border border-gray-300 hover:bg-gray-50 rounded-xl p-6 transition-all h-40"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-300 ">
                      Procurement Information
                    </span>
                    <ArrowRight size={24} className="text-gray-300" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <motion.header
        className={`w-full bg-white fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          isVisible ? "shadow-[0_1px_1px_rgba(0,0,0,0.15)]" : ""
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-screen-3xl mx-10 px-6 py-4 flex items-center justify-between relative ">
          {/* Logo - Animated only on scroll */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 1, y: 200, x: responsiveX, scale: 1.8 }}
            animate={
              isInitialLoad
                ? { opacity: 1, y: 200, x: responsiveX, scale: 1.8 }
                : hasScrolled
                ? { opacity: 1, y: 0, x: 0, scale: 1 }
                : { opacity: 1, y: 200, x: responsiveX, scale: 1.8 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/Rudra-Logo.png"
              alt="Rudra Logo"
              width={180}
              height={45}
              priority
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center mx-12 gap-1 relative z-50 [@media(min-width:1600px)]:ps-30  ">
            {navItems.map((item, idx) => (
              <button
                key={item.title}
                onMouseEnter={() => handleMouseEnter(idx)}
                onFocus={() => handleMouseEnter(idx)}
                className={`transition-colors text-lg font-medium ${
                  hoverIdx === idx ? "text-gray-900 font-semibold" : ""
                } px-3 py-2`}
                type="button"
                style={{
                  fontFamily: "var(--kohinoor-2)",
                  color: hoverIdx === idx ? "" : "#6a6c72",
                }}
              >
                {item.title}
              </button>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center gap-4 relative z-50">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
              className="text-gray-700 hover:text-gray-900"
            >
              <Menu size={28} />
            </button>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-8 relative z-50">
            <Search
              size={24}
              className="text-gray-400 hover:text-gray-800 cursor-pointer"
            />
            <span className="text-gray-600 text-lg font-medium mx-4">EN</span>
            <button className="bg-[#3f4249] hover:bg-[#3a3d43] text-white rounded-2xl px-5 py-4 text-lg font-medium flex items-center gap-2 transition-all">
              Get started <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-4/5 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <Image
            src="/Rudra-Logo.png"
            alt="Rudra Logo"
            width={160}
            height={40}
            priority
          />
          <button
            type="button"
            onClick={closeMobileMenu}
            aria-label="Close Menu"
            className="text-gray-700 hover:text-gray-900"
          >
            <X size={28} />
          </button>
        </div>
        <nav className="px-6 py-4 overflow-y-auto h-[calc(100vh-72px)]">
          {navItems.map((section, idx) => {
            const isOpen = mobileOpenIndices.includes(idx);
            return (
              <div
                key={section.title}
                className="mb-4 border-b border-gray-200"
              >
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion(idx)}
                  className="w-full flex justify-between items-center py-3 font-semibold text-gray-800 hover:text-gray-900"
                >
                  {section.title}
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <ul className="pl-4 pb-3 text-gray-600 space-y-2">
                    {section.items.map((item, idxSub) => (
                      <li key={idxSub}>
                        <a
                          href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                          className="block hover:text-gray-900"
                          onClick={closeMobileMenu}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Custom animation */}
      <style jsx>{`
        .fade-slide-down {
          animation: fadeSlideDown 0.3s ease forwards;
        }
        @keyframes fadeSlideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
