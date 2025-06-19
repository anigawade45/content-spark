import React from "react";
import { motion } from "framer-motion";
import { SectionBackground } from "../Global/SectionBackground";
import { MissionVisionBlock } from "./MissionVisionBlock";
import { StoryTimeline } from "./StoryTimeline";
import { OurProcessStepper } from "./OurProcessStepper";
import { FoundersTeamCards } from "./FoundersTeamCards";
import { AwardsMentionStrip } from "./AwardsMentionStrip";
import { AboutBackground } from "./AboutBackground";

export const AboutPage = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const sectionVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="relative min-h-screen text-white"
    >
      {/* Global Background */}
      <AboutBackground />

      {/* Hero Section */}
      <motion.section
        variants={sectionVariants}
        className="relative py-32 overflow-hidden"
      >
        <SectionBackground
          gradientFrom="[#b370f1]"
          gradientTo="[#ffd93d]"
          opacity="30"
          gridOpacity="15"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6"
              variants={sectionVariants}
            >
              <span className="inline-block bg-gradient-to-r from-[#b370f1] via-[#ffd93d] to-[#ffffff] bg-clip-text text-transparent pb-2">
                Crafting Digital
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-[#ffffff] via-[#ffd93d] to-[#b370f1] bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
              variants={sectionVariants}
            >
              We're more than just a creative agency. We're your partners in
              digital transformation, committed to elevating brands through
              innovative content and strategic thinking.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section variants={sectionVariants} className="relative py-24">
        <SectionBackground
          gradientFrom="[#b370f1]"
          gradientTo="[#4ee1a0]"
          opacity="30"
          gridOpacity="15"
        />
        <div className="relative z-10">
          <MissionVisionBlock />
        </div>
      </motion.section>

      {/* Our Story Timeline */}
      <motion.section variants={sectionVariants} className="relative py-24">
        <SectionBackground
          gradientFrom="[#4ee1a0]"
          gradientTo="[#ffd93d]"
          opacity="30"
          gridOpacity="15"
        />
        <div className="relative z-10">
          <StoryTimeline />
        </div>
      </motion.section>

      {/* Our Process */}
      <motion.section variants={sectionVariants} className="relative py-24">
        <SectionBackground
          gradientFrom="[#ffd93d]"
          gradientTo="[#b370f1]"
          opacity="30"
          gridOpacity="15"
        />
        <div className="relative z-10">
          <OurProcessStepper />
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section variants={sectionVariants} className="relative py-24">
        <SectionBackground
          gradientFrom="[#b370f1]"
          gradientTo="[#4ee1a0]"
          opacity="30"
          gridOpacity="15"
        />
        <div className="relative z-10">
          <FoundersTeamCards />
        </div>
      </motion.section>

      {/* Awards & Recognition */}
      <motion.section variants={sectionVariants} className="relative py-24">
        <SectionBackground
          gradientFrom="[#4ee1a0]"
          gradientTo="[#ffd93d]"
          opacity="20"
          gridOpacity="15"
        />
        <div className="relative z-10">
          <AwardsMentionStrip />
        </div>
      </motion.section>
    </motion.div>
  );
};
