// components/sidebars/RightSidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface RightSidebarProps {
  sections: {
    name: string;
    anchor: string;
  }[];
}

const RightSidebar = ({ sections }: RightSidebarProps) => {
  const pathname = usePathname();

  const handleSmoothScroll = (e: React.MouseEvent, anchor: string) => {
    e.preventDefault();
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Update URL without reloading
      window.history.pushState(null, '', `${pathname}${anchor}`);
    }
  };

  return (
    <aside className="w-80 h-screen sticky top-0 bg-gray-50 p-8 border-l border-gray-200">
      <h2
        className="font-bold text-2xl mb-8 text-gray-800"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        On this page
      </h2>
      <ul className="space-y-4" style={{ fontFamily: "Inter, sans-serif" }}>
        {sections.map((section) => (
          <motion.li 
            key={section.anchor} 
            className="text-gray-700 font-medium text-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={section.anchor}
              onClick={(e) => handleSmoothScroll(e, section.anchor)}
              className={`${pathname.includes(section.anchor) ? "text-blue-600" : ""}`}
              style={{ textDecoration: "underline" }}
            >
              {section.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </aside>
  );
};

export default RightSidebar;