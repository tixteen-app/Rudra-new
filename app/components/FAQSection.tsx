"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ 
  faqs: initialFaqs, 
  title = "Frequently Asked Questions (FAQs)" 
}) => {
  const [faqs, setFaqs] = useState<FAQItem[]>(
    initialFaqs.map(faq => ({ ...faq, isOpen: faq.isOpen || false }))
  );

  const toggleFaq = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : false,
      }))
    );
  };

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
    <motion.section
      id="faqs"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="mt-16"
    >
      <motion.h2
        variants={itemVariants}
        className="text-2xl font-normal mb-8 text-gray-800 "
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {title}
      </motion.h2>

      <motion.div variants={containerVariants} className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50 "
          >
            <button
              className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-100 transition-colors py-4"
              onClick={() => toggleFaq(index)}
            >
              <span
                className="text-2xl font-medium text-gray-800 pr-10"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {faq.question}
              </span>
              <motion.div
                animate={{
                  rotate: faq.isOpen ? 45 : 0,
                  backgroundColor: faq.isOpen ? "#6B8887" : "#6B8887",
                }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <span className="text-white text-4xl font-300">+</span>
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {faq.isOpen && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={{
                          open: {
                            opacity: 1,
                            height: "auto",
                            transition: {
                              height: {
                                duration: 0.4,
                                ease: [0.4, 0, 0.2, 1], // Cubic bezier array
                              },
                              opacity: {
                                duration: 0.3,
                                ease: [0.4, 0, 0.2, 1],
                                delay: 0.1,
                              },
                            },
                          },
                          closed: {
                            opacity: 0,
                            height: 0,
                            transition: {
                              height: {
                                duration: 0.3,
                                ease: [0.4, 0, 0.2, 1],
                              },
                              opacity: {
                                duration: 0.2,
                                ease: [0.4, 0, 0.2, 1],
                              },
                            },
                          },
                        }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div
                      className="text-gray-700 leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {faq.answer.split("\n").map((paragraph, i) => (
                        <p key={i} className="mb-4 last:mb-0 text-lg pt-5">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FAQSection;