// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { Search, ArrowRight, Menu, X } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, useScroll, useMotionValueEvent } from "framer-motion";

// const navItems = [
//   {
//     title: "Solutions",
//     href: "/",
//     items: [
//       {
//         name: "Investment Casting Process",
//         href: "/solutions/investment-casting",
//       },
//       { name: "Machining & Finishing", href: "/solutions/machining-finishing" },
//       { name: "In-House Tooling", href: "/solutions/in-house-tooling" },
//       { name: "Prototyping Services", href: "/solutions/prototyping" },
//       { name: "Material Options", href: "/solutions/materials" },
//       { name: "Quality Inspection & Testing", href: "/solutions/quality" },
//       { name: "Global Distribution Support", href: "/solutions/distribution" },
//     ],
//   },
//   {
//     title: "Industries We Serve",
//     href: "/industries",
//     items: [
//       { name: "Automotive", href: "/industries/automotive" },
//       { name: "Defense", href: "/industries/defense" },
//       { name: "Medical", href: "/industries/medical" },
//       { name: "Valves & Pumps", href: "/industries/valves-pumps" },
//       { name: "Construction Equipment", href: "/industries/construction" },
//       { name: "General Engineering", href: "/industries/engineering" },
//     ],
//   },
//   {
//     title: "Why Rudra",
//     href: "/why-rudra",
//     items: [
//       { name: "Fast Turnaround", href: "/why-rudra/fast-turnaround" },
//       { name: "Reliable Delivery", href: "/why-rudra/reliable-delivery" },
//       { name: "Superior Quality", href: "/why-rudra/quality" },
//       { name: "Advanced Production Facilities", href: "/why-rudra/facilities" },
//       { name: "Comprehensive In-House Services", href: "/why-rudra/services" },
//       { name: "Rapid Prototyping", href: "/why-rudra/prototyping" },
//     ],
//   },
//   {
//     title: "About Us",
//     href: "/about",
//     items: [
//       { name: "Our Story", href: "/about/story" },
//       { name: "Vision & Mission", href: "/about/vision" },
//       { name: "Infrastructure", href: "/about/infrastructure" },
//       { name: "Leadership", href: "/about/leadership" },
//       { name: "Careers", href: "/about/careers" },
//       { name: "CSR & Sustainability", href: "/about/csr" },
//     ],
//   },
//   {
//     title: "Resources",
//     href: "/resources",
//     items: [
//       { name: "FAQs", href: "/resources/faqs" },
//       { name: "Guides / Downloads", href: "/resources/guides" },
//       { name: "Process Videos", href: "/resources/videos" },
//       { name: "Blog / Industry Insights", href: "/resources/blog" },
//       { name: "Latest Updates / News", href: "/resources/news" },
//     ],
//   },
//   {
//     title: "Get in Touch",
//     href: "/contact",
//     items: [
//       { name: "General Inquiry", href: "/contact/inquiry" },
//       { name: "Request a Quote", href: "/contact/quote" },
//       { name: "Map & Locations", href: "/contact/locations" },
//       { name: "Vendor", href: "/contact/vendor" },
//       { name: "Career Enquiry", href: "/contact/careers" },
//     ],
//   },
// ];

// const useResponsiveValues = () => {
//   const [xValue, setXValue] = useState("330%");
//   const [spadding, setSpadding] = useState("10px");

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1700) {
//         setXValue("440%");
//         setSpadding("115px");
//       } else if (window.innerWidth >= 1400) {
//         setXValue("325%");
//         setSpadding("8px");
//       } else if (window.innerWidth >= 1024) {
//         setXValue("240%");
//         setSpadding("20px");
//       } else {
//         setXValue("30%");
//         setSpadding("10px");
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return { xValue, spadding };
// };

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
//   const { xValue, spadding } = useResponsiveValues();

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
//           className="fixed inset-x-0 top-[100px] z-30 hidden md:block"
//           onMouseEnter={() =>
//             timeoutRef.current && clearTimeout(timeoutRef.current)
//           }
//           onMouseLeave={handleMouseLeave}
//           style={{ zIndex: 1000 }}
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
//               className="max-w-screen-xxl mx-auto px-8 py-10 flex flex-row justify-center items-center ms-[15px] 2xl:ms-[45px]"
//               style={{ height: "100%" }}
//             >
//               {/* Left Side Menu - Centered */}
//               <ul
//                 key={`list-${hoverIdx}`}
//                 className={`grid grid-rows-4 grid-flow-col gap-x-12 gap-y-3 flex-1 ms-14`}
//                 style={{
//                   alignSelf: "center",
//                   justifyContent: "center",
//                   gap: "20px",
//                   paddingLeft: spadding,
//                 }}
//               >
//                 {navItems[hoverIdx].items.map((sub, i) => (
//                   <li
//                     key={i}
//                     className="transition-all duration-300 ease-out py-4 px-10"
//                     style={{
//                       transitionDelay: `${i * 60}ms`,
//                       opacity: isVisible ? 1 : 0,
//                       transform: isVisible
//                         ? "translateY(0)"
//                         : "translateY(12px)",
//                     }}
//                   >
//                     <Link
//                       href={sub.href}
//                       className="block text-gray-600 hover:text-gray-900 transition-colors text-left text-xl"
//                       style={{
//                         fontFamily: "var(--kohinoor-2)",
//                         fontWeight: "300",
//                       }}
//                     >
//                       {sub.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>

//               {/* Right Side Boxes */}
//               <div className="flex flex-col gap-6 w-80">
//                 <Link
//                   href="/contact/quote"
//                   className="flex flex-col justify-end bg-green-200 hover:bg-green-300 text-gray-800 rounded-xl p-6 transition-all h-40"
//                 >
//                   <div className="flex items-center justify-between">
//                     <span className="text-lg font-medium leading-snug">
//                       Schedule a New <br /> Business Call
//                     </span>
//                     <ArrowRight size={24} />
//                   </div>
//                 </Link>
//                 <Link
//                   href="/resources/procurement"
//                   className="flex flex-col justify-end border border-gray-300 hover:bg-gray-50 rounded-xl p-6 transition-all h-40"
//                 >
//                   <div className="flex items-center justify-between">
//                     <span className="text-lg font-medium text-gray-300">
//                       Procurement Information
//                     </span>
//                     <ArrowRight size={24} className="text-gray-300" />
//                   </div>
//                 </Link>
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
//           {/* <motion.div
//             className="flex items-center gap-2"
//             initial={{ opacity: 1, y: 200, x: xValue, scale: 1.8 }}
//             animate={
//               isInitialLoad
//                 ? { opacity: 1, y: 200, x: xValue, scale: 1.8 }
//                 : hasScrolled
//                 ? { opacity: 1, y: 0, x: 0, scale: 1 }
//                 : { opacity: 1, y: 200, x: xValue, scale: 1.8 }
//             }
//             transition={{ duration: 0.6, ease: "easeOut" }}
//           >
//             <Link href="/">
//               <Image
//                 src="/Rudra-Logo.png"
//                 alt="Rudra Logo"
//                 width={180}
//                 height={45}
//                 priority
//               />
//             </Link>
//           </motion.div> */}
//           <motion.div
//             className="flex items-center gap-2 absolute"
//             style={{
//               top: hasScrolled ? 0 : "30vh",
//               left: hasScrolled ? 0 : "50%",
//               transform: hasScrolled ? "translateX(0%)" : "translateX(-50%)",
//             }}
//             initial={{ opacity: 1, scale: 1.8 }}
//             animate={{
//               opacity: 1,
//               scale: hasScrolled ? 1 : 1.8,
//               top: hasScrolled ? 0 : "30vh",
//               left: hasScrolled ? 0 : "50%",
//               transform: hasScrolled ? "translateX(0%)" : "translateX(-50%)",
//             }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <Link href="/">
//               <Image
//                 src="/Rudra-Logo.png"
//                 alt="Rudra Logo"
//                 width={180}
//                 height={45}
//                 priority
//               />
//             </Link>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex flex-1 justify-center mx-12 gap-1 relative z-50 [@media(min-width:1600px)]:ps-30">
//             {navItems.map((item, idx) => (
//               <div key={item.title} className="relative">
//                 <Link
//                   href={item.href}
//                   onMouseEnter={() => handleMouseEnter(idx)}
//                   onFocus={() => handleMouseEnter(idx)}
//                   className={`transition-colors text-lg font-medium px-3 py-2 ${
//                     hoverIdx === idx
//                       ? "text-gray-900 font-semibold"
//                       : "text-[#6a6c72]"
//                   }`}
//                   style={{ fontFamily: "var(--kohinoor-2)" }}
//                 >
//                   {item.title}
//                 </Link>
//               </div>
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
//             <Link href="/search">
//               <Search
//                 size={24}
//                 className="text-gray-400 hover:text-gray-800 cursor-pointer"
//               />
//             </Link>
//             <span className="text-gray-600 text-lg font-medium mx-4">EN</span>
//             <Link
//               href="/contact"
//               className="bg-[#3f4249] hover:bg-[#3a3d43] text-white rounded-2xl px-5 py-4 text-lg font-medium flex items-center gap-2 transition-all"
//             >
//               Get started <ArrowRight size={24} />
//             </Link>
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
//           <Link href="/" onClick={closeMobileMenu}>
//             <Image
//               src="/Rudra-Logo.png"
//               alt="Rudra Logo"
//               width={160}
//               height={40}
//               priority
//             />
//           </Link>
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
//               <div
//                 key={section.title}
//                 className="mb-4 border-b border-gray-200"
//               >
//                 <Link
//                   href={section.href}
//                   className="w-full flex justify-between items-center py-3 font-semibold text-gray-800 hover:text-gray-900"
//                   onClick={closeMobileMenu}
//                 >
//                   {section.title}
//                 </Link>
//                 {isOpen && (
//                   <ul className="pl-4 pb-3 text-gray-600 space-y-2">
//                     {section.items.map((item, idxSub) => (
//                       <li key={idxSub}>
//                         <Link
//                           href={item.href}
//                           className="block hover:text-gray-900"
//                           onClick={closeMobileMenu}
//                         >
//                           {item.name}
//                         </Link>
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


// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { Search, ArrowRight, Menu, X } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, useScroll, useMotionValueEvent } from "framer-motion";

// const navItems = [
//   {
//     title: "Solutions",
//     href: "/",
//     items: [
//       {
//         name: "Investment Casting Process",
//         href: "/solutions/investment-casting",
//       },
//       { name: "Machining & Finishing", href: "/solutions/machining-finishing" },
//       { name: "In-House Tooling", href: "/solutions/in-house-tooling" },
//       { name: "Prototyping Services", href: "/solutions/prototyping" },
//       { name: "Material Options", href: "/solutions/materials" },
//       { name: "Quality Inspection & Testing", href: "/solutions/quality" },
//       { name: "Global Distribution Support", href: "/solutions/distribution" },
//     ],
//   },
//   {
//     title: "Industries We Serve",
//     href: "/industries",
//     items: [
//       { name: "Automotive", href: "/industries/automotive" },
//       { name: "Defense", href: "/industries/defense" },
//       { name: "Medical", href: "/industries/medical" },
//       { name: "Valves & Pumps", href: "/industries/valves-pumps" },
//       { name: "Construction Equipment", href: "/industries/construction" },
//       { name: "General Engineering", href: "/industries/engineering" },
//     ],
//   },
//   {
//     title: "Why Rudra",
//     href: "/why-rudra",
//     items: [
//       { name: "Fast Turnaround", href: "/why-rudra/fast-turnaround" },
//       { name: "Reliable Delivery", href: "/why-rudra/reliable-delivery" },
//       { name: "Superior Quality", href: "/why-rudra/quality" },
//       { name: "Advanced Production Facilities", href: "/why-rudra/facilities" },
//       { name: "Comprehensive In-House Services", href: "/why-rudra/services" },
//       { name: "Rapid Prototyping", href: "/why-rudra/prototyping" },
//     ],
//   },
//   {
//     title: "About Us",
//     href: "/about",
//     items: [
//       { name: "Our Story", href: "/about/story" },
//       { name: "Vision & Mission", href: "/about/vision" },
//       { name: "Infrastructure", href: "/about/infrastructure" },
//       { name: "Leadership", href: "/about/leadership" },
//       { name: "Careers", href: "/about/careers" },
//       { name: "CSR & Sustainability", href: "/about/csr" },
//     ],
//   },
//   {
//     title: "Resources",
//     href: "/resources",
//     items: [
//       { name: "FAQs", href: "/resources/faqs" },
//       { name: "Guides / Downloads", href: "/resources/guides" },
//       { name: "Process Videos", href: "/resources/videos" },
//       { name: "Blog / Industry Insights", href: "/resources/blog" },
//       { name: "Latest Updates / News", href: "/resources/news" },
//     ],
//   },
//   {
//     title: "Get in Touch",
//     href: "/contact",
//     items: [
//       { name: "General Inquiry", href: "/contact/inquiry" },
//       { name: "Request a Quote", href: "/contact/quote" },
//       { name: "Map & Locations", href: "/contact/locations" },
//       { name: "Vendor", href: "/contact/vendor" },
//       { name: "Career Enquiry", href: "/contact/careers" },
//     ],
//   },
// ];

// const useResponsiveValues = () => {
//   const [xValue, setXValue] = useState("330%");
//   const [spadding, setSpadding] = useState("10px");

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1700) {
//         setXValue("440%");
//         setSpadding("115px");
//       } else if (window.innerWidth >= 1400) {
//         setXValue("325%");
//         setSpadding("8px");
//       } else if (window.innerWidth >= 1024) {
//         setXValue("240%");
//         setSpadding("20px");
//       } else {
//         setXValue("30%");
//         setSpadding("10px");
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return { xValue, spadding };
// };

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
//   const { xValue, spadding } = useResponsiveValues();

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
//           className="fixed inset-x-0 top-[80px] z-30 hidden md:block"
//           onMouseEnter={() =>
//             timeoutRef.current && clearTimeout(timeoutRef.current)
//           }
//           onMouseLeave={handleMouseLeave}
//           style={{ zIndex: 1000 }}
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
//               className="max-w-screen-xxl mx-auto px-8 py-10 flex flex-row justify-center items-center ms-[15px] 2xl:ms-[45px]"
//               style={{ height: "100%" }}
//             >
//               {/* Left Side Menu - Centered */}
//               <ul
//                 key={`list-${hoverIdx}`}
//                 className={`grid grid-rows-4 grid-flow-col gap-x-12 gap-y-3 flex-1 ms-14`}
//                 style={{
//                   alignSelf: "center",
//                   justifyContent: "center",
//                   gap: "20px",
//                   paddingLeft: spadding,
//                 }}
//               >
//                 {navItems[hoverIdx].items.map((sub, i) => (
//                   <li
//                     key={i}
//                     className="transition-all duration-300 ease-out py-4 px-10"
//                     style={{
//                       transitionDelay: `${i * 60}ms`,
//                       opacity: isVisible ? 1 : 0,
//                       transform: isVisible
//                         ? "translateY(0)"
//                         : "translateY(12px)",
//                     }}
//                   >
//                     <Link
//                       href={sub.href}
//                       className="block text-gray-600 hover:text-gray-900 transition-colors text-left text-xl"
//                       style={{
//                         fontFamily: "var(--kohinoor-2)",
//                         fontWeight: "300",
//                       }}
//                     >
//                       {sub.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>

//               {/* Right Side Boxes */}
//               <div className="flex flex-col gap-6 w-80">
//                 <Link
//                   href="/contact/quote"
//                   className="flex flex-col justify-end bg-green-200 hover:bg-green-300 text-gray-800 rounded-xl p-6 transition-all h-40"
//                 >
//                   <div className="flex items-center justify-between">
//                     <span className="text-lg font-medium leading-snug">
//                       Schedule a New <br /> Business Call
//                     </span>
//                     <ArrowRight size={24} />
//                   </div>
//                 </Link>
//                 <Link
//                   href="/resources/procurement"
//                   className="flex flex-col justify-end border border-gray-300 hover:bg-gray-50 rounded-xl p-6 transition-all h-40"
//                 >
//                   <div className="flex items-center justify-between">
//                     <span className="text-lg font-medium text-gray-300">
//                       Procurement Information
//                     </span>
//                     <ArrowRight size={24} className="text-gray-300" />
//                   </div>
//                 </Link>
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
//           <div className="w-75">

//           <motion.div
//             className="flex items-center gap-2 absolute"
//             style={{
//               top: hasScrolled ? 0 : "30vh",
//               left: hasScrolled ? 0 : "50%",
//               transform: hasScrolled ? "translateX(0%)" : "translateX(-50%)",
//             }}
//             initial={{ opacity: 1, scale: 1.8 }}
//             animate={{
//               opacity: 1,
//               scale: hasScrolled ? 1 : 1.8,
//               top: hasScrolled ? 0 : "30vh",
//               left: hasScrolled ? 0 : "50%",
//               transform: hasScrolled ? "translateX(0%)" : "translateX(-50%)",
//             }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <Link href="/">
//               <Image
//                 src="/Rudra-Logo.png"
//                 alt="Rudra Logo"
//                 width={180}
//                 height={45}
//                 priority
//               />
//             </Link>
//           </motion.div>
//           </div>


//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex flex-1 justify-center  mx-12 gap-1 relative z-50 w-100  ">
//             {navItems.map((item, idx) => (
//               <div key={item.title} className="relative">
//                 <Link
//                   href={item.href}
//                   onMouseEnter={() => handleMouseEnter(idx)}
//                   onFocus={() => handleMouseEnter(idx)}
//                   className={`transition-colors text-lg font-medium px-3 py-2 ${
//                     hoverIdx === idx
//                       ? "text-gray-900 font-semibold"
//                       : "text-[#6a6c72]"
//                   }`}
//                   style={{ fontFamily: "var(--kohinoor-2)" }}
//                 >
//                   {item.title}
//                 </Link>
//               </div>
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
//             <Link href="/search">
//               <Search
//                 size={24}
//                 className="text-gray-400 hover:text-gray-800 cursor-pointer"
//               />
//             </Link>
//             <span className="text-gray-600 text-lg font-medium mx-4">EN</span>
//             <Link
//               href="/contact"
//               className="bg-[#3f4249] hover:bg-[#3a3d43] text-white rounded-2xl px-5 py-4 text-lg font-medium flex items-center gap-2 transition-all"
//             >
//               Get started <ArrowRight size={24} />
//             </Link>
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
//           <Link href="/" onClick={closeMobileMenu}>
//             <Image
//               src="/Rudra-Logo.png"
//               alt="Rudra Logo"
//               width={160}
//               height={40}
//               priority
//             />
//           </Link>
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
//               <div
//                 key={section.title}
//                 className="mb-4 border-b border-gray-200"
//               >
//                 <Link
//                   href={section.href}
//                   className="w-full flex justify-between items-center py-3 font-semibold text-gray-800 hover:text-gray-900"
//                   onClick={closeMobileMenu}
//                 >
//                   {section.title}
//                 </Link>
//                 {isOpen && (
//                   <ul className="pl-4 pb-3 text-gray-600 space-y-2">
//                     {section.items.map((item, idxSub) => (
//                       <li key={idxSub}>
//                         <Link
//                           href={item.href}
//                           className="block hover:text-gray-900"
//                           onClick={closeMobileMenu}
//                         >
//                           {item.name}
//                         </Link>
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
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navItems = [
  {
    title: "Solutions",
    href: "/",
    items: [
      { name: "Investment Casting Process", href: "/solutions/investment-casting" },
      { name: "Machining & Finishing", href: "/solutions/machining-finishing" },
      { name: "In-House Tooling", href: "/solutions/in-house-tooling" },
      { name: "Prototyping Services", href: "/solutions/prototyping" },
      { name: "Material Options", href: "/solutions/materials" },
      { name: "Quality Inspection & Testing", href: "/solutions/quality" },
      { name: "Global Distribution Support", href: "/solutions/distribution" },
    ],
  },
  {
    title: "Industries We Serve",
    href: "/industries",
    items: [
      { name: "Automotive", href: "/industries/automotive" },
      { name: "Defense", href: "/industries/defense" },
      { name: "Medical", href: "/industries/medical" },
      { name: "Valves & Pumps", href: "/industries/valves-pumps" },
      { name: "Construction Equipment", href: "/industries/construction" },
      { name: "General Engineering", href: "/industries/engineering" },
    ],
  },
  {
    title: "Why Rudra",
    href: "/why-rudra",
    items: [
      { name: "Fast Turnaround", href: "/why-rudra/fast-turnaround" },
      { name: "Reliable Delivery", href: "/why-rudra/reliable-delivery" },
      { name: "Superior Quality", href: "/why-rudra/quality" },
      { name: "Advanced Production Facilities", href: "/why-rudra/facilities" },
      { name: "Comprehensive In-House Services", href: "/why-rudra/services" },
      { name: "Rapid Prototyping", href: "/why-rudra/prototyping" },
    ],
  },
  {
    title: "About Us",
    href: "/about",
    items: [
      { name: "Our Story", href: "/about/story" },
      { name: "Vision & Mission", href: "/about/vision" },
      { name: "Infrastructure", href: "/about/infrastructure" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "Careers", href: "/about/careers" },
      { name: "CSR & Sustainability", href: "/about/csr" },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    items: [
      { name: "FAQs", href: "/resources/faqs" },
      { name: "Guides / Downloads", href: "/resources/guides" },
      { name: "Process Videos", href: "/resources/videos" },
      { name: "Blog / Industry Insights", href: "/resources/blog" },
      { name: "Latest Updates / News", href: "/resources/news" },
    ],
  },
  {
    title: "Get in Touch",
    href: "/contact",
    items: [
      { name: "General Inquiry", href: "/contact/inquiry" },
      { name: "Request a Quote", href: "/contact/quote" },
      { name: "Map & Locations", href: "/contact/locations" },
      { name: "Vendor", href: "/contact/vendor" },
      { name: "Career Enquiry", href: "/contact/careers" },
    ],
  },
];

const Header: React.FC = () => {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOpenIndices, setMobileOpenIndices] = useState<number[]>([]);

  // *** Ref only for SOLUTIONS nav ***
  const solutionsRef = useRef<HTMLDivElement | null>(null);
  const [solutionsLeft, setSolutionsLeft] = useState<number>(0);

  // Scroll detection
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setHasScrolled(latest > 10);
  });

  // On load + resize, recalc Solutions left
  useEffect(() => {
    function updateLeft() {
      if (solutionsRef.current) {
        const rect = solutionsRef.current.getBoundingClientRect();
        setSolutionsLeft(rect.left);
      }
    }
    updateLeft();
    window.addEventListener("resize", updateLeft);
    return () => window.removeEventListener("resize", updateLeft);
  }, []);

  const handleMouseEnter = (idx: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoverIdx(idx);
    setIsVisible(true);
    // recalc each time in case layout shifts
    if (solutionsRef.current) {
      const rect = solutionsRef.current.getBoundingClientRect();
      setSolutionsLeft(rect.left);
    }
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

  // Mobile menu toggles
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
          className="fixed inset-x-0 top-[80px] z-30 hidden md:block "
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
              transition: "all 300ms ease-in-out",
            }}
            aria-expanded={isVisible}
          >
            <div
              ref={contentRef}
              className="max-w-screen-xxl mx-auto py-10 flex flex-row items-center"
              style={{ height: "100%", position: "relative" }}
            >
              {/* Items always start under Solutions */}
              <ul
                key={`list-${hoverIdx}`}
                className="grid grid-rows-4 grid-flow-col gap-x-12 gap-y-3  "
                style={{
                  position: "absolute",
                  left: solutionsLeft,
                  top: 0,
                  gap: "20px",
                  marginLeft:"-20px"
                }}
              >
                {navItems[hoverIdx].items.map((sub, i) => (
                  <li
                    key={i}
                    className="transition-all duration-300 ease-out py-4 px-10"
                    style={{
                      transitionDelay: `${i * 60}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateY(0)"
                        : "translateY(12px)",
                    }}
                  >
                    <Link
                      href={sub.href}
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-left text-xl"
                      style={{
                        fontFamily: "var(--kohinoor-2)",
                        fontWeight: "300",
                      }}
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Right Side Boxes */}
              <div className="flex flex-col gap-6 w-80 ms-auto pe-5">
                <Link
                  href="/contact/quote"
                  className="flex flex-col justify-end bg-green-200 hover:bg-green-300 text-gray-800 rounded-xl p-6 transition-all h-40"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium leading-snug">
                      Schedule a New <br /> Business Call
                    </span>
                    <ArrowRight size={24} />
                  </div>
                </Link>
                <Link
                  href="/resources/procurement"
                  className="flex flex-col justify-end border border-gray-300 hover:bg-gray-50 rounded-xl p-6 transition-all h-40"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-300">
                      Procurement Information
                    </span>
                    <ArrowRight size={24} className="text-gray-300" />
                  </div>
                </Link>
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
        <div className="max-w-screen-3xl mx-10 px-6 py-4 flex items-center justify-between relative">
          {/* Logo */}
          <div className="w-75">
          <motion.div
            className="flex items-center gap-2 absolute"
            style={{
              top: hasScrolled ? 0 : "30vh",
              left: hasScrolled ? 0 : "50%",
              transform: hasScrolled ? "translateX(0%)" : "translateX(-50%)",
            }}
            initial={{ opacity: 1, scale: 1.8 }}
            animate={{
              opacity: 1,
              scale: hasScrolled ? 1 : 1.8,
              top: hasScrolled ? 0 : "30vh",
              left: hasScrolled ? 0 : "50%",
              transform: hasScrolled
                ? "translateX(0%)"
                : "translateX(-50%)",
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link href="/">
              <Image
                src="/Rudra-Logo.png"
                alt="Rudra Logo"
                width={180}
                height={45}
                priority
              />
            </Link>
          </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center mx-12 gap-1 relative z-50 w-100">
            {navItems.map((item, idx) => (
              <div
                key={item.title}
                className="relative"
                // ref only for Solutions
                ref={idx === 0 ? solutionsRef : undefined}
              >
                <Link
                  href={item.href}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onFocus={() => handleMouseEnter(idx)}
                  className={`transition-colors text-lg font-medium px-3 py-2 ${
                    hoverIdx === idx
                      ? "text-gray-900 font-semibold"
                      : "text-[#6a6c72]"
                  }`}
                  style={{ fontFamily: "var(--kohinoor-2)" }}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-8 relative z-50">
            <Link href="/search">
              <Search
                size={24}
                className="text-gray-400 hover:text-gray-800 cursor-pointer"
              />
            </Link>
            <span className="text-gray-600 text-lg font-medium mx-4">EN</span>
            <Link
              href="/contact"
              className="bg-[#3f4249] hover:bg-[#3a3d43] text-white rounded-2xl px-5 py-4 text-lg font-medium flex items-center gap-2 transition-all"
            >
              Get started <ArrowRight size={24} />
            </Link>
          </div>

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
          <Link href="/" onClick={closeMobileMenu}>
            <Image
              src="/Rudra-Logo.png"
              alt="Rudra Logo"
              width={160}
              height={40}
              priority
            />
          </Link>
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
                <Link
                  href={section.href}
                  className="w-full flex justify-between items-center py-3 font-semibold text-gray-800 hover:text-gray-900"
                  onClick={closeMobileMenu}
                >
                  {section.title}
                </Link>
                {isOpen && (
                  <ul className="pl-4 pb-3 text-gray-600 space-y-2">
                    {section.items.map((item, idxSub) => (
                      <li key={idxSub}>
                        <Link
                          href={item.href}
                          className="block hover:text-gray-900"
                          onClick={closeMobileMenu}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Header;
