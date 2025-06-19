import React from "react";
import { motion } from "framer-motion";
import {
  FaRegLightbulb,
  FaRegCompass,
  FaPencil,
  FaGears,
  FaRocket,
} from "react-icons/fa6";

export const OurProcessStepper = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const steps = [
    {
      icon: FaRegLightbulb,
      title: "Discovery",
      description:
        "We dive deep into understanding your brand, goals, and target audience to create a tailored strategy.",
      gradient: "from-[#b370f1] to-[#ffd93d]",
      points: ["Brand Analysis", "Goal Setting", "Audience Research"],
    },
    {
      icon: FaRegCompass,
      title: "Strategy",
      description:
        "Develop a comprehensive content strategy aligned with your business objectives and market positioning.",
      gradient: "from-[#ffd93d] to-[#4ee1a0]",
      points: ["Content Planning", "Channel Strategy", "KPI Definition"],
    },
    {
      icon: FaPencil,
      title: "Creation",
      description:
        "Our creative team brings your vision to life through compelling content that resonates with your audience.",
      gradient: "from-[#4ee1a0] to-[#b370f1]",
      points: ["Content Production", "Design & Copy", "Quality Assurance"],
    },
    {
      icon: FaGears,
      title: "Optimization",
      description:
        "Continuous refinement of content based on performance data and audience engagement metrics.",
      gradient: "from-[#b370f1] to-[#ffd93d]",
      points: ["Performance Analysis", "A/B Testing", "Content Refinement"],
    },
    {
      icon: FaRocket,
      title: "Growth",
      description:
        "Scale successful content strategies while exploring new opportunities for brand expansion.",
      gradient: "from-[#ffd93d] to-[#4ee1a0]",
      points: ["Scale Strategy", "Market Expansion", "ROI Maximization"],
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-400 to-indigo-400 text-transparent bg-clip-text text-center mb-10 drop-shadow-[0_0_15px_rgba(179,112,241,0.5)]">
            Our Process
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A systematic approach to delivering exceptional results through
            proven methodologies and creative excellence.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-[#b370f1] via-[#ffd93d] to-[#4ee1a0] transform -translate-y-1/2 hidden md:block" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 right-4 text-6xl font-bold opacity-10 text-white">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="relative group">
                  {/* Gradient border/glow effect */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-b ${step.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:duration-200`}
                  />

                  {/* Card Content */}
                  <div className="relative bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full">
                    {/* Icon */}
                    <div className="mb-6">
                      <div
                        className={`
                        w-14 h-14 
                        rounded-xl
                        bg-gradient-to-r ${step.gradient}
                        p-0.5
                        transform group-hover:scale-110 group-hover:rotate-6
                        transition-all duration-500
                        mx-auto
                      `}
                      >
                        <div className="w-full h-full rounded-xl bg-[#1a1a2e] flex items-center justify-center">
                          {React.createElement(step.icon, {
                            className: "w-6 h-6 text-white",
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`
                      text-xl font-bold text-center mb-3
                      bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent
                    `}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 text-center text-sm mb-4">
                      {step.description}
                    </p>

                    {/* Points */}
                    <ul className="space-y-2">
                      {step.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-center space-x-2 text-white/90 text-sm"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.gradient}`}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
