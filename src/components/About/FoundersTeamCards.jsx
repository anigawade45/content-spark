import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa6";

export const FoundersTeamCards = () => {
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

  const team = [
    {
      name: "Sarah Anderson",
      role: "CEO & Creative Director",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Visionary leader with 15+ years of experience in digital marketing and creative direction.",
      gradient: "from-[#b370f1] to-[#ffd93d]",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "CTO & Technical Lead",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Tech innovator with a passion for building scalable solutions and driving digital transformation.",
      gradient: "from-[#ffd93d] to-[#4ee1a0]",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Strategy",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Strategic thinker specializing in brand development and market expansion strategies.",
      gradient: "from-[#4ee1a0] to-[#b370f1]",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
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
            Meet Our Team
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Passionate innovators dedicated to transforming your digital
            presence with creativity and expertise.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient border/glow effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-b ${member.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:duration-200`}
              />

              {/* Card Content */}
              <div className="relative bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                {/* Image Container */}
                <div className="relative mb-6">
                  <div
                    className={`
                    absolute -inset-1
                    bg-gradient-to-r ${member.gradient}
                    rounded-2xl
                    opacity-75
                    group-hover:opacity-100
                    blur
                    transition-opacity duration-500
                  `}
                  />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative rounded-xl w-full h-64 object-cover"
                  />
                </div>

                {/* Name & Role */}
                <div className="text-center mb-4">
                  <h3
                    className={`text-xl font-bold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-1`}
                  >
                    {member.name}
                  </h3>
                  <p className="text-white/60 text-sm">{member.role}</p>
                </div>

                {/* Bio */}
                <p className="text-white/80 text-center text-sm mb-6">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  {Object.entries(member.social).map(([platform, link]) => {
                    const Icon = {
                      linkedin: FaLinkedin,
                      twitter: FaTwitter,
                      github: FaGithub,
                    }[platform];

                    return (
                      <a
                        key={platform}
                        href={link}
                        className={`
                          w-10 h-10 rounded-lg
                          bg-gradient-to-r ${member.gradient}
                          p-0.5
                          transform hover:scale-110 hover:rotate-6
                          transition-all duration-300
                        `}
                      >
                        <div className="w-full h-full rounded-lg bg-[#1a1a2e] flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
