import React from "react";
import { motion } from "framer-motion";
import {
  FaRegLightbulb,
  FaRocket,
  FaUsers,
  FaTrophy,
  FaGlobe,
} from "react-icons/fa6";

export const StoryTimeline = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const milestones = [
    {
      year: "2019",
      icon: FaRegLightbulb,
      title: "The Beginning",
      description:
        "Founded with a vision to revolutionize digital content creation",
      gradient: "from-[#b370f1] to-[#ffd93d]",
      achievement: "Launched with our first major client",
    },
    {
      year: "2020",
      icon: FaRocket,
      title: "Rapid Growth",
      description: "Expanded our services and team to meet growing demand",
      gradient: "from-[#ffd93d] to-[#4ee1a0]",
      achievement: "Reached 50+ satisfied clients",
    },
    {
      year: "2021",
      icon: FaUsers,
      title: "Team Expansion",
      description: "Built a world-class team of creative professionals",
      gradient: "from-[#4ee1a0] to-[#b370f1]",
      achievement: "Grew to 25+ team members",
    },
    {
      year: "2022",
      icon: FaTrophy,
      title: "Industry Recognition",
      description: "Received multiple awards for creative excellence",
      gradient: "from-[#b370f1] to-[#ffd93d]",
      achievement: "Won Best Creative Agency Award",
    },
    {
      year: "2023",
      icon: FaGlobe,
      title: "Global Reach",
      description: "Expanded operations to serve clients worldwide",
      gradient: "from-[#ffd93d] to-[#4ee1a0]",
      achievement: "Present in 10+ countries",
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
            Our Journey
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            From humble beginnings to industry leadership, our story is one of
            continuous innovation and growth.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-[#b370f1] via-[#ffd93d] to-[#4ee1a0]" />

          {/* Timeline Items */}
          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    {/* Gradient border/glow effect */}
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-b ${milestone.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:duration-200`}
                    />

                    {/* Card Content */}
                    <div className="relative bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                      <div
                        className={`text-2xl font-bold bg-gradient-to-r ${milestone.gradient} bg-clip-text text-transparent mb-2`}
                      >
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-3">
                        {milestone.description}
                      </p>
                      <div className="text-sm font-medium text-white/60">
                        {milestone.achievement}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`
                      w-12 h-12 
                      rounded-full
                      bg-gradient-to-r ${milestone.gradient}
                      p-0.5
                      z-10
                    `}
                  >
                    <div className="w-full h-full rounded-full bg-[#1a1a2e] flex items-center justify-center">
                      {React.createElement(milestone.icon, {
                        className: "w-5 h-5 text-white",
                      })}
                    </div>
                  </motion.div>
                </div>

                {/* Empty Space for Opposite Side */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
