import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaEye, FaStar } from "react-icons/fa6";

export const MissionVisionBlock = () => {
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

  const blocks = [
    {
      icon: FaLightbulb,
      title: "Our Mission",
      description:
        "To empower brands with innovative digital content that drives engagement, growth, and lasting impact in the digital landscape.",
      gradient: "from-[#b370f1] to-[#ffd93d]",
      points: [
        "Create compelling content that resonates",
        "Drive measurable business results",
        "Foster authentic connections",
      ],
    },
    {
      icon: FaEye,
      title: "Our Vision",
      description:
        "To be the leading force in digital content creation, setting new standards for creativity, quality, and strategic innovation.",
      gradient: "from-[#4ee1a0] to-[#ffd93d]",
      points: [
        "Pioneer creative excellence",
        "Shape digital narratives",
        "Lead industry innovation",
      ],
    },
    {
      icon: FaStar,
      title: "Core Values",
      description:
        "Our foundation is built on creativity, integrity, and an unwavering commitment to delivering exceptional results for our clients.",
      gradient: "from-[#b370f1] to-[#4ee1a0]",
      points: [
        "Creative excellence",
        "Strategic thinking",
        "Client success focus",
      ],
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
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-400 to-indigo-400 text-transparent bg-clip-text text-center mb-10 drop-shadow-[0_0_15px_rgba(179,112,241,0.5)]">
            Who We Are
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Driven by passion, guided by innovation, and committed to excellence
            in everything we do.
          </p>
        </motion.div>

        {/* Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blocks.map((block, index) => (
            <motion.div
              key={block.title}
              variants={itemVariants}
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient border/glow effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-b ${block.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:duration-200`}
              />

              {/* Card Content */}
              <div className="relative h-full bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`
                    w-16 h-16 
                    rounded-xl
                    bg-gradient-to-r ${block.gradient}
                    p-0.5
                    transform group-hover:scale-110 group-hover:rotate-6
                    transition-all duration-500
                  `}
                  >
                    <div className="w-full h-full rounded-xl bg-[#1a1a2e] flex items-center justify-center">
                      {React.createElement(block.icon, {
                        className: "w-8 h-8 text-white",
                      })}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`
                  text-2xl font-bold text-center mb-4
                  bg-gradient-to-r ${block.gradient} bg-clip-text text-transparent
                `}
                >
                  {block.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-center mb-6 leading-relaxed">
                  {block.description}
                </p>

                {/* Points */}
                <ul className="space-y-3">
                  {block.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-center space-x-2 text-white/90 transition-all duration-300 group-hover:translate-x-1"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${block.gradient}`}
                      />
                      <span className="text-sm font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
