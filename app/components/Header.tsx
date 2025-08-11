// "use client";

// import React, { useState } from "react";
// import { Search, ArrowRight } from "lucide-react";
// import Image from "next/image";

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

//   return (
//     <>
//       {/* Overlay + White Popup with Items */}
//       {hoverIdx !== null && (
//         <div
//           className="fixed inset-0 z-30"
//           onMouseLeave={() => setHoverIdx(null)}
//         >
//           {/* Blurred Background */}
//           <div className="absolute inset-0 bg-black/10 backdrop-blur-md transition-all duration-200"></div>

//           {/* White Box Content */}
//           {/* <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[830px] rounded-2xl shadow-xl border border-gray-100 bg-white p-8 transition-all duration-300">
         
//             <h2 className="text-xl font-semibold text-gray-900 mb-4">
//               {navItems[hoverIdx].title}
//             </h2>

//             <ul className="grid grid-cols-2 gap-y-3">
//               {navItems[hoverIdx].items.map((sub, i) => (
//                 <li key={i}>
//                   <a
//                     href={`#${sub.toLowerCase().replace(/ /g, "-")}`}
//                     className="block text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     {sub}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div> */}
//           <div className="absolute left-0 top-20 w-full rounded-none shadow-xl border border-gray-100 bg-white p-8 transition-all duration-300">
//   {/* Heading */}
//   <h2 className="text-xl font-semibold text-gray-900 mb-4">
//     {navItems[hoverIdx].title}
//   </h2>

//   {/* List of Items */}
//   <ul className="grid grid-cols-2 gap-y-3">
//     {navItems[hoverIdx].items.map((sub, i) => (
//       <li key={i}>
//         <a
//           href={`#${sub.toLowerCase().replace(/ /g, "-")}`}
//           className="block text-gray-600 hover:text-gray-900 transition-colors"
//         >
//           {sub}
//         </a>
//       </li>
//     ))}
//   </ul>
// </div>

//         </div>
//       )}

//       <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-40">
//         <div className="max-w-screen-2xl mx-auto px-6 py-4 flex items-center justify-between relative">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <Image
//               src="/Rudra-Logo.png"
//               alt="Rudra Logo"
//               width={140}
//               height={34}
//               priority
//             />
//           </div>

//           {/* Navigation Items */}
//           <nav className="hidden md:flex mx-12 gap-1 relative z-50">
//             {navItems.map((item, idx) => (
//               <button
//                 key={item.title}
//                 onMouseEnter={() => setHoverIdx(idx)}
//                 onFocus={() => setHoverIdx(idx)}
//                 className={`transition-colors text-base font-medium
//                   ${
//                     hoverIdx === idx
//                       ? "text-gray-900 font-semibold"
//                       : "text-gray-500"
//                   }
//                   relative z-50 px-3 py-2
//                 `}
//               >
//                 {item.title}
//               </button>
//             ))}
//           </nav>

//           {/* Actions */}
//           <div className="flex items-center gap-6 relative z-50">
//             <Search
//               size={24}
//               className="text-gray-400 hover:text-gray-800 cursor-pointer"
//             />
//             <span className="text-gray-600 text-lg font-medium">EN</span>
//             <button className="bg-[#3f4249] hover:bg-[#3a3d43] text-white rounded-2xl px-6 py-2.5 text-base font-semibold flex items-center gap-2 transition-all">
//               Get started <ArrowRight size={24} />
//             </button>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;


// "use client";

// import React, { useState, useRef } from "react";
// import { Search, ArrowRight } from "lucide-react";
// import Image from "next/image";

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

//   const handleMouseEnter = (idx: number) => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setHoverIdx(idx);
//     setIsVisible(true);
//   };

//   const handleMouseLeave = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(() => {
//       setIsVisible(false);
//       setTimeout(() => setHoverIdx(null), 300); // wait until animation finishes
//     }, 150);
//   };

//   return (
//     <>
//       {/* Blurred background below header */}
//       {hoverIdx !== null && (
//         <div
//           className={`fixed inset-0 z-20 transition-opacity duration-300 
//             ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
//           style={{ top: "72px" }}
//         >
//           <div className="absolute inset-0 backdrop-blur-md bg-black/10"></div>
//         </div>
//       )}

//       {/* Mega Menu */}
//       {hoverIdx !== null && (
//         <div
//           className="fixed inset-x-0 top-[72px] z-30"
//           onMouseEnter={() =>
//             timeoutRef.current && clearTimeout(timeoutRef.current)
//           }
//           onMouseLeave={handleMouseLeave}
//         >
//           <div
//             className={`w-full border-t border-gray-100 bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform
//               ${
//                 isVisible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 -translate-y-4 pointer-events-none"
//               }
//             `}
//             style={{ height: "320px" }}
//           >
//             <div className="max-w-screen-xl mx-auto px-8 py-6 h-full flex flex-col">
//               {/* Heading */}
//               <h2
//                 key={`heading-${hoverIdx}`}
//                 className="text-2xl font-semibold text-gray-900 text-center mb-4 fade-slide-down"
//               >
//                 {navItems[hoverIdx].title}
//               </h2>

//               {/* Tighter grid with less vertical space */}
//               <ul
//                 key={`list-${hoverIdx}`}
//                 className="grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-3 justify-items-center flex-1"
//               >
//                 {navItems[hoverIdx].items.map((sub, i) => (
//                   <li
//                     key={i}
//                     className="transition-all duration-300 ease-out"
//                     style={{
//                       transitionDelay: `${i * 60}ms`,
//                       opacity: isVisible ? 1 : 0,
//                       transform: isVisible
//                         ? "translateY(0)"
//                         : "translateY(12px)",
//                     }}
//                   >
//                     <a
//                       href={`#${sub.toLowerCase().replace(/ /g, "-")}`}
//                       className="block text-gray-600 hover:text-gray-900 transition-colors text-center"
//                     >
//                       {sub}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Header */}
//       <header
//         className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-40"
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className="max-w-screen-2xl mx-auto px-6 py-4 flex items-center justify-between relative">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <Image
//               src="/Rudra-Logo.png"
//               alt="Rudra Logo"
//               width={140}
//               height={34}
//               priority
//             />
//           </div>

//           {/* Navigation */}
//           <nav className="hidden md:flex mx-12 gap-1 relative z-50">
//             {navItems.map((item, idx) => (
//               <button
//                 key={item.title}
//                 onMouseEnter={() => handleMouseEnter(idx)}
//                 onFocus={() => handleMouseEnter(idx)}
//                 className={`transition-colors text-base font-medium
//                   ${
//                     hoverIdx === idx
//                       ? "text-gray-900 font-semibold"
//                       : "text-gray-500"
//                   }
//                   px-3 py-2
//                 `}
//               >
//                 {item.title}
//               </button>
//             ))}
//           </nav>

//           {/* Right Actions */}
//           <div className="flex items-center gap-6 relative z-50">
//             <Search
//               size={24}
//               className="text-gray-400 hover:text-gray-800 cursor-pointer"
//             />
//             <span className="text-gray-600 text-lg font-medium">EN</span>
// <button className="bg-[#3f4249] hover:bg-[#3a3d43] text-white rounded-2xl px-4 py-2.5 text-base font-medium flex items-center gap-2 transition-all">
//   Get started <ArrowRight size={22} />
// </button>

//           </div>
//         </div>
//       </header>

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

import React, { useState, useRef } from "react";
import { Search, ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";

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

const Header: React.FC = () => {
  // Desktop mega menu state
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Mobile accordion open sections state
  const [mobileOpenIndices, setMobileOpenIndices] = useState<number[]>([]);

  // Desktop handlers
  const handleMouseEnter = (idx: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoverIdx(idx);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setHoverIdx(null), 300); // wait until animation finishes
    }, 150);
  };

  // Mobile accordion toggle
  const toggleMobileAccordion = (idx: number) => {
    setMobileOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  // Close mobile menu and reset accordion
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileOpenIndices([]);
  };

  return (
    <>
      {/* ---------- Desktop blurred background below header ---------- */}
      {hoverIdx !== null && (
        <div
          className={`fixed inset-0 z-20 transition-opacity duration-300 
            ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          style={{ top: "72px" }}
        >
          <div className="absolute inset-0 backdrop-blur-md bg-black/10"></div>
        </div>
      )}

      {/* ---------- Desktop Mega Menu ---------- */}
      {hoverIdx !== null && (
        <div
          className="fixed inset-x-0 top-[72px] z-30 hidden md:block" // hidden on mobile
          onMouseEnter={() =>
            timeoutRef.current && clearTimeout(timeoutRef.current)
          }
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`w-full border-t border-gray-100 bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 pointer-events-none"
              }
            `}
            style={{ height: "320px" }}
          >
            <div className="max-w-screen-xl mx-auto px-8 py-6 h-full flex flex-col">
              {/* Heading with animation */}
              <h2
                key={`heading-${hoverIdx}`}
                className="text-2xl font-semibold text-gray-900 text-center mb-4 fade-slide-down"
              >
                {navItems[hoverIdx].title}
              </h2>

              {/* Tighter grid with less vertical space */}
              <ul
                key={`list-${hoverIdx}`}
                className="grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-3 justify-items-center flex-1"
              >
                {navItems[hoverIdx].items.map((sub, i) => (
                  <li
                    key={i}
                    className="transition-all duration-300 ease-out"
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
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-center"
                    >
                      {sub}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ---------- Header ---------- */}
      <header
        className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50"
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-screen-2xl mx-auto px-6 py-4 flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/Rudra-Logo.png"
              alt="Rudra Logo"
              width={140}
              height={34}
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex mx-12 gap-1 relative z-50">
            {navItems.map((item, idx) => (
              <button
                key={item.title}
                onMouseEnter={() => handleMouseEnter(idx)}
                onFocus={() => handleMouseEnter(idx)}
                className={`transition-colors text-base font-medium
                  ${
                    hoverIdx === idx
                      ? "text-gray-900 font-semibold"
                      : "text-gray-500"
                  }
                  px-3 py-2
                `}
                type="button"
              >
                {item.title}
              </button>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-4 relative z-50">
            <button
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
              type="button"
            >
              <Menu size={28} />
            </button>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-6 relative z-50">
            <Search
              size={24}
              className="text-gray-400 hover:text-gray-800 cursor-pointer"
            />
            <span className="text-gray-600 text-lg font-medium">EN</span>
            <button className="bg-[#3f4249] hover:bg-[#3a3d43] text-white rounded-2xl px-4 py-2.5 text-base font-medium flex items-center gap-2 transition-all">
              Get started <ArrowRight size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ---------- Mobile Menu Overlay ---------- */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* ---------- Mobile Slide-in Menu ---------- */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-4/5 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <Image src="/Rudra-Logo.png" alt="Rudra Logo" width={120} height={30} priority />
          <button
            className="text-gray-700 hover:text-gray-900"
            onClick={closeMobileMenu}
            aria-label="Close Menu"
            type="button"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="px-6 py-4 overflow-y-auto h-[calc(100vh-72px)]">
          {navItems.map((section, idx) => {
            const isOpen = mobileOpenIndices.includes(idx);
            return (
              <div key={section.title} className="mb-4 border-b border-gray-200">
                <button
                  className="w-full flex justify-between items-center py-3 font-semibold text-gray-800 hover:text-gray-900"
                  onClick={() => toggleMobileAccordion(idx)}
                  type="button"
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
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
