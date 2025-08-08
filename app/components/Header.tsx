"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);

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
        "Global Distribution Support"
      ]
    },
    {
      title: "Industries We Serve",
      items: [
        "Automotive",
        "Defense",
        "Medical",
        "Valves & Pumps",
        "Construction Equipment",
        "General Engineering"
      ]
    },
    {
      title: "Why Rudra",
      items: [
        "Fast Turnaround",
        "Reliable Delivery",
        "Superior Quality",
        "Advanced Production Facilities",
        "Comprehensive In-House Services",
        "Rapid Prototyping"
      ]
    },
    {
      title: "About Us",
      items: [
        "Our Story",
        "Vision & Mission",
        "Infrastructure",
        "Leadership",
        "Careers",
        "CSR & Sustainability"
      ]
    },
    {
      title: "Resources",
      items: [
        "FAQs",
        "Guides / Downloads",
        "Process Videos (future)",
        "Blog / Industry Insights",
        "Latest Updates / News"
      ]
    },
    {
      title: "Get in Touch",
      items: [
        "General Inquiry",
        "Request a Quote",
        "Map & Locations",
        "Vendor",
        "Career Enquiry (Optional)"
      ]
    }
  ];

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-2 md:px-5 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 bg-gray-800 rounded-sm flex items-center justify-center">
              <span className="text-white text-lg font-medium">R</span>
            </div>
            <span className="text-xl text-gray-800 font-medium">Rudra </span>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div 
                key={item.title} 
                className="relative"
                onMouseEnter={() => setHoverDropdown(item.title)}
                onMouseLeave={() => setHoverDropdown(null)}
              >
                <motion.button
                  className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors text-base font-medium py-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span>{item.title}</span>
                  <ChevronDown size={18} className="transition-transform duration-200" />
                </motion.button>

                <AnimatePresence>
                  {(hoverDropdown === item.title) && (
                    <motion.div
                      className="absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg z-50 border border-gray-100"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="py-2">
                        {item.items.map((subItem, subIndex) => (
                          <motion.a
                            key={subItem}
                            href={`#${subItem.toLowerCase().replace(/ /g, '-')}`}
                            className={`block px-4 py-3 text-base ${subItem === "Request a Quote" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"}`}
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                          >
                            {subItem}
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="hidden lg:flex items-center space-x-6">
            <Search size={20} className="text-gray-600 cursor-pointer hover:text-gray-900 transition-colors" />
            <span className="text-base text-gray-600 font-medium">EN</span>
            <motion.button
              className="bg-gray-800 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-gray-700 transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get started</span>
              <ArrowRight size={16} />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="lg:hidden mt-6 pb-6 border-t border-gray-100 pt-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <div key={item.title} className="mb-2">
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className="w-full flex justify-between items-center py-4 text-gray-700 hover:text-gray-900 transition-colors text-lg font-medium"
                  >
                    <span>{item.title}</span>
                    {activeDropdown === item.title ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.title && (
                      <motion.div
                        className="pl-4 overflow-hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.items.map((subItem) => (
                          <motion.a
                            key={subItem}
                            href={`#${subItem.toLowerCase().replace(/ /g, '-')}`}
                            className={`block py-3 text-base ${subItem === "Request a Quote" ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="bg-gray-800 text-white px-6 py-3 rounded-md text-base font-medium w-full flex items-center justify-center space-x-2">
                  <span>Get started</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;