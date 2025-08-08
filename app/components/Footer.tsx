// "use client"
// import React, { useState, useEffect } from 'react';
// import { motion } from 'motion/react';
// import { Clock, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

// const Footer: React.FC = () => {
//   const [times, setTimes] = useState({
//     uk: '',
//     us: '',
//     germany: '',
//     romania: '',
//     india: ''
//   });

//   // Update times every second
//   useEffect(() => {
//     const updateTimes = () => {
//       const now = new Date();

//       setTimes({
//         uk: now.toLocaleTimeString('en-GB', {
//           timeZone: 'Europe/London',
//           hour12: false,
//           hour: '2-digit',
//           minute: '2-digit'
//         }),
//         us: now.toLocaleTimeString('en-US', {
//           timeZone: 'America/New_York',
//           hour12: false,
//           hour: '2-digit',
//           minute: '2-digit'
//         }),
//         germany: now.toLocaleTimeString('de-DE', {
//           timeZone: 'Europe/Berlin',
//           hour12: false,
//           hour: '2-digit',
//           minute: '2-digit'
//         }),
//         romania: now.toLocaleTimeString('ro-RO', {
//           timeZone: 'Europe/Bucharest',
//           hour12: false,
//           hour: '2-digit',
//           minute: '2-digit'
//         }),
//         india: now.toLocaleTimeString('en-IN', {
//           timeZone: 'Asia/Kolkata',
//           hour12: false,
//           hour: '2-digit',
//           minute: '2-digit'
//         })
//       });
//     };

//     updateTimes();
//     const interval = setInterval(updateTimes, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const locations = [
//     {
//       country: 'United Kingdom',
//       time: times.uk,
//       phone: '+44 114 399 5710',
//       email: 'uk@texmoblank.com'
//     },
//     {
//       country: 'United States',
//       time: times.us,
//       phone: '+1 574 696 9990',
//       email: 'usa@texmoblank.com'
//     },
//     {
//       country: 'Germany',
//       time: times.germany,
//       phone: '+49 7371 1820',
//       email: 'germany@texmoblank.com'
//     },
//     {
//       country: 'Romania',
//       time: times.romania,
//       phone: '+40 256 22 7817',
//       email: 'romania@texmoblank.com'
//     },
//     {
//       country: 'India',
//       time: times.india,
//       phone: '+91 425 920 0500',
//       email: 'india@texmoblank.com'
//     }
//   ];

//   const socialLinks = [
//     { icon: Linkedin, href: '#', label: 'LinkedIn' },
//     { icon: Facebook, href: '#', label: 'Facebook' },
//     { icon: Instagram, href: '#', label: 'Instagram' },
//     { icon: Youtube, href: '#', label: 'YouTube' }
//   ];

//   const footerLinks = [
//     'Manage Cookies',
//     'Privacy Policy',
//     'Cookies Policy',
//     'Impressum',
//     'Terms of Use',
//     'Disclaimer'
//   ];

//   return (
//     <footer className="relative bg-black text-white overflow-hidden min-h-screen">
//       {/* Background Video */}
//       <div className="absolute inset-0 z-0">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="w-full h-full object-cover"
//           style={{ opacity: 1.0 }}
//         >
//           <source src="https://www.texmoblank.com/videos/footer-video.webm" type="video/webm" />
//         </video>
//         <div className="absolute inset-0 bg-black/10" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 py-24 md:py-32">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Logo */}
//           <motion.div
//             className="text-center mb-20 md:mb-24"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="inline-flex flex-col items-center">
//               <span className="text-6xl md:text-7xl lg:text-8xl font-bold">TB</span>
//               <span className="text-sm opacity-60">®</span>
//             </div>
//           </motion.div>

//           {/* Global Locations */}
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 mb-20 md:mb-24"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             {locations.map((location, index) => (
//               <motion.div
//                 key={location.country}
//                 className="text-center"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 {/* Clock and Time */}
//                 <div className="flex items-center justify-center mb-6">
//                   <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center mr-3">
//                     <Clock size={20} className="text-gray-300" />
//                   </div>
//                   <span className="text-lg font-mono">{location.time}</span>
//                 </div>

//                 {/* Country */}
//                 <h3 className="text-lg font-medium mb-4">{location.country}</h3>

//                 {/* Contact Info */}
//                 <div className="space-y-2 text-sm text-gray-300">
//                   <p>{location.phone}</p>
//                   <p className="break-all">{location.email}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Rudra Castings Information */}
//           <motion.div
//             className="text-center mb-12"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-lg font-medium mb-4">Rudra Castings</h3>
//             <div className="space-y-2 text-sm text-gray-300">
//               <p>info@rudracastings.com</p>
//               <p>+919524200019</p>
//               <p>Peer Gajju Shah Road, Badinpur, Mandi Gobindgarh 147301</p>
//             </div>
//           </motion.div>

//           {/* Social Media Icons */}
//           <motion.div
//             className="flex justify-center space-x-8 mb-16 md:mb-20"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             {socialLinks.map((social, index) => (
//               <motion.a
//                 key={social.label}
//                 href={social.href}
//                 className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center hover:border-white hover:text-white transition-all duration-300"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 aria-label={social.label}
//               >
//                 <social.icon size={20} />
//               </motion.a>
//             ))}
//           </motion.div>

//           {/* Footer Links */}
//           <motion.div
//             className="text-center pb-8"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm text-gray-400">
//               {footerLinks.map((link, index) => (
//                 <React.Fragment key={link}>
//                   <a
//                     href="#"
//                     className="hover:text-white transition-colors duration-300"
//                   >
//                     {link}
//                   </a>
//                   {index < footerLinks.length - 1 && (
//                     <span className="hidden sm:inline text-gray-600">•</span>
//                   )}
//                 </React.Fragment>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

const Footer: React.FC = () => {
  const [times, setTimes] = useState({
    uk: "",
    us: "",
    germany: "",
    romania: "",
    india: "",
  });

  // Update times every second
  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();

      setTimes({
        uk: now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
        us: now.toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
        germany: now.toLocaleTimeString("de-DE", {
          timeZone: "Europe/Berlin",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
        romania: now.toLocaleTimeString("ro-RO", {
          timeZone: "Europe/Bucharest",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
        india: now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const locations = [
    {
      country: "United Kingdom",
      time: times.uk,
      phone: "+44 114 399 5710",
      email: "uk@texmoblank.com",
    },
    {
      country: "United States",
      time: times.us,
      phone: "+1 574 696 9990",
      email: "usa@texmoblank.com",
    },
    {
      country: "Germany",
      time: times.germany,
      phone: "+49 7371 1820",
      email: "germany@texmoblank.com",
    },
    {
      country: "Romania",
      time: times.romania,
      phone: "+40 256 22 7817",
      email: "romania@texmoblank.com",
    },
    {
      country: "India",
      time: times.india,
      phone: "+91 425 920 0500",
      email: "india@texmoblank.com",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const footerLinks = [
    "Manage Cookies",
    "Privacy Policy",
    "Cookies Policy",
    "Impressum",
    "Terms of Use",
    "Disclaimer",
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden min-h-screen">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity: 1.0 }}
        >
          <source
            src="https://www.texmoblank.com/videos/footer-video.webm"
            type="video/webm"
          />
        </video>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Logo - Updated with Image component */}
          <motion.div
            className="text-center mb-20 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex flex-col items-center">
              <div className="w-80 h-50 relative">
                 <Image
                  src="/Rudra-Logo.png" // Changed to local path
                  alt="Rudra Logo"
                  width={300}
                  height={70}
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Global Locations */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 mb-20 md:mb-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {locations.map((location, index) => (
              <motion.div
                key={location.country}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Clock and Time */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center mr-3">
                    <Clock size={20} className="text-gray-300" />
                  </div>
                  <span className="text-lg font-mono">{location.time}</span>
                </div>

                {/* Country */}
                <h3 className="text-lg font-medium mb-4">{location.country}</h3>

                {/* Contact Info */}
                <div className="space-y-2 text-sm text-gray-300">
                  <p>{location.phone}</p>
                  <p className="break-all">{location.email}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Rudra Castings Information */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-medium mb-4">Rudra Castings</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>info@rudracastings.com</p>
              <p>+919524200019</p>
              <p>Peer Gajju Shah Road, Badinpur, Mandi Gobindgarh 147301</p>
            </div>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            className="flex justify-center space-x-8 mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center hover:border-white hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Footer Links */}
          <motion.div
            className="text-center pb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm text-gray-400">
              {footerLinks.map((link, index) => (
                <React.Fragment key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                  {index < footerLinks.length - 1 && (
                    <span className="hidden sm:inline text-gray-600">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
