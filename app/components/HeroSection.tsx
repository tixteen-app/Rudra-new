// "use client"

// import React from 'react';
// import { motion } from 'framer-motion';

// interface HeroSectionProps {
//   heading: string;
//   message?: string;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({ heading, message }) => {
//   return (
//     <motion.section className="min-h-screen flex items-center justify-center bg-white pt-20 px-4 sm:px-6">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <h1
//             className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#3f4249] mb-4 leading-tight font-normal tracking-tight"
//             style={{ fontFamily: 'var(--kohinoor-3)' }}
//           >
//             {heading}
//           </h1>

//           {message && (
//             <motion.p
//               className="text-xl sm:text-2xl md:text-4xl text-[#3f4249] font-normal"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               style={{ fontFamily: 'var(--kohinoor-3)' }}
//             >
//               {message}
//             </motion.p>
//           )}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default HeroSection;


"use client";

import React from "react";
import { motion } from "framer-motion";

// Props
interface HeroSectionProps {
  heading: string; // Company Name
  message?: string; // Tagline
}

const HeroSection: React.FC<HeroSectionProps> = ({ heading, message }) => {
  return (
    <motion.section className="min-h-screen flex items-center justify-center bg-white pt-28 px-6 sm:px-8">
      <div className="max-w-9xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Company Name (Biggest text) */}
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight text-gray-900 mb-6"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {heading}
          </h1>

          {/* Tagline (smaller below) */}
          {message && (
            <motion.p
              className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {message}
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
