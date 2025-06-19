import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export const IndustryIntroText = ({ className }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const features = [
    {
      icon: FaRocket,
      title: "Growth-Focused",
      description: "Strategies designed to accelerate your business growth"
    },
    {
      icon: FaChartLine,
      title: "Data-Driven",
      description: "Decisions backed by analytics and market insights"
    },
    {
      icon: FaUsers,
      title: "Audience-Centric",
      description: "Content that resonates with your target audience"
    },
    {
      icon: FaLightbulb,
      title: "Innovative",
      description: "Creative solutions for modern challenges"
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "max-w-4xl mx-auto text-center",
        className
      )}
    >
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-400 to-indigo-400 text-transparent bg-clip-text text-center mb-10 drop-shadow-[0_0_15px_rgba(179,112,241,0.5)]"
      >
        Industries We Serve
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-xl text-white/80 mb-12 leading-relaxed"
      >
        We specialize in creating impactful content strategies for diverse industries, 
        helping brands connect with their audience and achieve their business goals.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-b from-[#b370f1] to-[#4ee1a0] rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:duration-200" />
            <div className="relative bg-[#1a1a2e]/80 backdrop-blur-xl rounded-xl p-6 border border-white/10">
              <feature.icon className="w-8 h-8 text-white mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-white/70">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}; 