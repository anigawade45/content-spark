import React from "react";
import { motion } from "framer-motion";
import { HeroCTAButtons } from "./HeroCTAButtons";
import { HeroStatsGrid } from "./HeroStatsGrid";
import { SectionBackground } from "../Global/SectionBackground";
import { FaRegLightbulb, FaPenNib, FaChartLine } from "react-icons/fa";

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      icon: FaRegLightbulb,
      text: "Strategic Content Planning",
      color: "white",
      hoverColor: "#ffd93d",
    },
    {
      icon: FaPenNib,
      text: "Professional Content Creation",
      color: "#ffd93d",
      hoverColor: "#fff",
    },
    {
      icon: FaChartLine,
      text: "Data-Driven Optimization",
      color: "#b370f1",
      hoverColor: "#b370f1",
    },
  ];

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center overflow-hidden pt-24 pb-12">
      <SectionBackground
        gradientFrom="[#b370f1]"
        gradientTo="[#ffd93d]"
        opacity="40"
        gridOpacity="15"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 relative"
          >
            <span className="inline-block bg-gradient-to-r from-[#b370f1] via-[#ffd93d] to-[#ffffff] bg-clip-text text-transparent pb-2 drop-shadow-[0_0_15px_rgba(179,112,241,0.5)]">
              Igniting Your Brand's
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-[#ffffff] via-[#ffd93d] to-[#b370f1] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,217,61,0.5)]">
              Digital Presence
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 font-medium leading-relaxed"
          >
            Unlock your brand's full potential with Content Spark, your premier
            partner for
            <span className="bg-gradient-to-r from-[#b370f1] to-[#ffd93d] bg-clip-text text-transparent font-semibold drop-shadow-[0_0_8px_rgba(179,112,241,0.3)]">
              {" "}
              captivating reels and high-quality video content
            </span>
          </motion.p>

          {/* Feature Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`
                  group feature-tag-${index} flex items-center gap-2 px-5 py-2 rounded-full
                  border-2 border-transparent
                  bg-gradient-to-r from-[#18181b]/80 to-[#23232a]/80
                  shadow-md
                  transition-all duration-300
                  hover:scale-105 hover:shadow-xl
                  cursor-pointer
                `}
                style={{
                  borderColor: 'transparent',
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
              >
                {React.createElement(feature.icon, {
                  className: `feature-icon-${index} text-xl transition-colors duration-300`,
                  style: {
                    color: feature.color,
                  },
                })}
                <span className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors duration-300">
                  {feature.text}
                </span>
                <style>{`
                  .feature-tag-${index}:hover {
                    border-color: ${feature.hoverColor} !important;
                  }
                  .feature-tag-${index}:hover .feature-icon-${index} {
                    color: ${feature.hoverColor} !important;
                  }
                `}</style>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants}>
            <HeroCTAButtons />
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="mt-16">
            <HeroStatsGrid />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#b370f1] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#ffd93d] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#b370f1] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
    </section>
  );
};
