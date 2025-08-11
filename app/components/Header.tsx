
// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { Search, ArrowRight, Menu, X } from "lucide-react";
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
//   // Desktop mega menu state
//   const [hoverIdx, setHoverIdx] = useState<number | null>(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   // For height animation on desktop
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [contentHeight, setContentHeight] = useState(0);

//   // Mobile menu state
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileOpenIndices, setMobileOpenIndices] = useState<number[]>([]);

//   // Desktop handlers
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

//   // Update content height on hoverIdx or content changes
//   useEffect(() => {
//     if (contentRef.current && hoverIdx !== null && isVisible) {
//       setContentHeight(contentRef.current.scrollHeight);
//     } else {
//       setContentHeight(0);
//     }
//   }, [hoverIdx, isVisible]);

//   // Mobile accordion toggle
//   const toggleMobileAccordion = (idx: number) => {
//     setMobileOpenIndices((prev) =>
//       prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
//     );
//   };

//   // Close mobile menu and reset accordion
//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//     setMobileOpenIndices([]);
//   };

//   return (
//     <>
//       {/* Desktop blurred background */}
//       {hoverIdx !== null && (
//         <div
//           className={`fixed inset-0 z-20 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
//             }`}
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
//               height: isVisible ? Math.max(contentHeight, window.innerHeight * 0.4) : 0,
//               minHeight: isVisible ? '50vh' : 0,
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
//               className="max-w-screen-xl mx-auto px-8 py-6 flex flex-col"
//               style={{ height: "auto" }}
//             >

          
//               <ul
//                 key={`list-${hoverIdx}`}
//                 className="grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-3 justify-items-center flex-1 pt-10"
//               >
//                 {navItems[hoverIdx].items.map((sub, i) => (
//                   <li
//                     key={i}
//                     className="transition-all duration-300 ease-out py-4"
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
//                       className="block text-gray-600 hover:text-gray-900 transition-colors text-center text-xl" // Increase font size here
//                       style={{ fontFamily: 'var(--kohinoor-1)' }}
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
//         // className="w-full bg-white fixed top-0 left-0 right-0 z-50"
//         // onMouseLeave={handleMouseLeave}

//         className={`w-full bg-white fixed top-0 left-0 right-0 z-50 transition-shadow duration-300
//     ${isVisible ? "shadow-[0_1px_1px_rgba(0,0,0,0.1)]" : ""}
//   `}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className="max-w-screen-3xl mx-10 px-6 py-4 flex items-center justify-between relative">
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

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex mx-12 gap-1 relative z-50">
//             {navItems.map((item, idx) => (
//               <button
//                 key={item.title}
//                 onMouseEnter={() => handleMouseEnter(idx)}
//                 onFocus={() => handleMouseEnter(idx)}
//                 className={`transition-colors text-base font-medium
//                   ${hoverIdx === idx
//                     ? "text-gray-900 font-semibold"
//                     : "text-gray-500"
//                   }
//                   px-3 py-2
//                 `}
//                 type="button"
//                 style={{ fontFamily: 'var(--kohinoor-1)' }}

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
//           {/* <div className="hidden md:flex items-center gap-6 relative z-50">
//             <Search
//               size={24}
//               className="text-gray-400 hover:text-gray-800 cursor-pointer"
//             />
//             <span className="text-gray-600 text-lg font-medium">EN</span>
//             <button className="bg-[#3f4249] hover:bg-[#3a3d43] text-white rounded-2xl px-4 py-2.5 text-base font-medium flex items-center gap-2 transition-all">
//               Get started <ArrowRight size={22} />
//             </button>
//           </div> */}
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
//       </header>

//       {/* Mobile overlay */}
//       <div
//         className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen
//           ? "opacity-100 pointer-events-auto"
//           : "opacity-0 pointer-events-none"
//           }`}
//         onClick={closeMobileMenu}
//       ></div>

//       {/* Mobile slide-in menu */}
//       <aside
//         className={`fixed top-0 left-0 bottom-0 z-50 w-4/5 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out
//           ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
//         `}
//       >
//         <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
//           <Image src="/Rudra-Logo.png" alt="Rudra Logo" width={120} height={30} priority />
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
//                     className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
//                       }`}
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                     aria-hidden="true"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOpenIndices, setMobileOpenIndices] = useState<number[]>([]);

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
          className="fixed inset-x-0 top-[72px] z-30 hidden md:block"
          onMouseEnter={() =>
            timeoutRef.current && clearTimeout(timeoutRef.current)
          }
          onMouseLeave={handleMouseLeave}
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
              className="max-w-screen-xl mx-auto px-8 py-10 flex flex-col"
              style={{ height: "auto" }}
            >
           
              {/* Items: 4 per column */}
              <ul
                key={`list-${hoverIdx}`}
                className="grid grid-rows-4 grid-flow-col gap-x-12 gap-y-3 justify-items-center flex-1 pt-2"
              >
                {navItems[hoverIdx].items.map((sub, i) => (
                  <li
                    key={i}
                    className="transition-all duration-300 ease-out py-4"
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
                      style={{ fontFamily: "var(--kohinoor-2)" }}
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

      {/* Header */}
      <header
        className={`w-full bg-white fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          isVisible ? "shadow-[0_1px_1px_rgba(0,0,0,0.15)]" : ""
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-screen-3xl mx-10 px-6 py-4 flex items-center justify-between relative">
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
                className={`transition-colors text-base font-medium ${
                  hoverIdx === idx
                    ? "text-gray-900 font-semibold"
                    : "text-gray-500"
                } px-3 py-2`}
                type="button"
                style={{ fontFamily: "var(--kohinoor-2)" }}
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
      </header>

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
            width={120}
            height={30}
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
              <div key={section.title} className="mb-4 border-b border-gray-200">
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
