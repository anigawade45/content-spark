import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaStar, FaAward, FaMedal } from "react-icons/fa6";

export const AwardsMentionStrip = () => {
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

  const awards = [
    {
      icon: FaTrophy,
      title: "Agency of the Year",
      organization: "Digital Excellence Awards",
      year: "2023",
      gradient: "from-[#b370f1] to-[#ffd93d]",
    },
    {
      icon: FaStar,
      title: "Best Creative Campaign",
      organization: "Content Marketing Institute",
      year: "2023",
      gradient: "from-[#ffd93d] to-[#4ee1a0]",
    },
    {
      icon: FaAward,
      title: "Innovation in Digital",
      organization: "Tech Innovators Summit",
      year: "2023",
      gradient: "from-[#4ee1a0] to-[#b370f1]",
    },
    {
      icon: FaMedal,
      title: "Client Satisfaction",
      organization: "Industry Excellence Awards",
      year: "2023",
      gradient: "from-[#b370f1] to-[#ffd93d]",
    },
  ];

  const pressMentions = [
    {
      title: "Featured in TechCrunch",
      description: "Revolutionizing Content Marketing with AI",
      logo: "https://placehold.co/200x100",
      link: "#",
    },
    {
      title: "Mentioned in Forbes",
      description: "Leading the Future of Content Creation",
      logo: "https://placehold.co/200x100",
      link: "#",
    },
    {
      title: "Covered by Business Insider",
      description: "Innovative Approach to Content Strategy",
      logo: "https://placehold.co/200x100",
      link: "#",
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
            Awards & Recognition
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our commitment to excellence has earned us recognition from leading
            industry organizations.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient border/glow effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-b ${award.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:duration-200`}
              />

              {/* Card Content */}
              <div className="relative bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full">
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`
                    w-16 h-16 
                    rounded-xl
                    bg-gradient-to-r ${award.gradient}
                    p-0.5
                    transform group-hover:scale-110 group-hover:rotate-6
                    transition-all duration-500
                    mx-auto
                  `}
                  >
                    <div className="w-full h-full rounded-xl bg-[#1a1a2e] flex items-center justify-center">
                      {React.createElement(award.icon, {
                        className: "w-8 h-8 text-white",
                      })}
                    </div>
                  </div>
                </div>

                {/* Award Details */}
                <div className="text-center">
                  <h3
                    className={`text-xl font-bold bg-gradient-to-r ${award.gradient} bg-clip-text text-transparent mb-2`}
                  >
                    {award.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-1">
                    {award.organization}
                  </p>
                  <p className="text-white/60 text-sm">{award.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
