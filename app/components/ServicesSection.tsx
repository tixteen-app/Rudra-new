"use client"

import React from 'react';
import { motion } from 'motion/react';
import { Cog, Settings, Wrench, Cpu, Zap, Shield } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Cog,
      title: "Precision Components",
      description: "High-tolerance casting for critical applications"
    },
    {
      icon: Settings,
      title: "Custom Tooling",
      description: "Specialized tooling design and manufacturing"
    },
    {
      icon: Wrench,
      title: "Assembly Services",
      description: "Complete component assembly and testing"
    },
    {
      icon: Cpu,
      title: "Advanced Materials",
      description: "Cutting-edge alloys and material science"
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Fast turnaround for prototype development"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive testing and certification"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Our Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to delivery, we provide comprehensive investment casting 
            solutions tailored to your specific requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={32} className="text-white" />
                </motion.div>
                <h3 className="text-xl mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;