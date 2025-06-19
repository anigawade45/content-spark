import React from "react";
import { motion } from "framer-motion";
import { SectionBackground } from "../components/Global/SectionBackground";
import { SectionTitle } from "../components/Global/SectionTitle";
import { AboutBackground } from "../components/About/AboutBackground";
import {
  MissionVisionBlock,
  StoryTimeline,
  OurProcessStepper,
  AwardsMentionStrip,
  GlobalReachMap,
  FoundersTeamCards,
} from "../components/About";

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="relative min-h-screen text-white">
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
            <SectionTitle
              title="Crafting Digital Excellence"
              subtitle="We're more than just a creative agency. We're your partners in digital transformation, committed to elevating brands through innovative content and strategic thinking."
            />
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
      <section className="relative py-24">
        <SectionBackground
          gradientFrom="[#4ee1a0]"
          gradientTo="[#ffd93d]"
          opacity="30"
          gridOpacity="15"
        />
        <div className="relative z-10">
          <StoryTimeline />
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20">
        <SectionBackground
          gradientFrom="[#ffd93d]"
          gradientTo="[#b370f1]"
          opacity="30"
          gridOpacity="15"
        />
        <FoundersTeamCards />
      </section>

      {/* Global Reach Map */}
      <section className="relative py-24">
        <SectionBackground
          gradientFrom="[#b370f1]"
          gradientTo="[#4ee1a0]"
          opacity="30"
          gridOpacity="15"
        />
        <div className="relative z-10">
          <GlobalReachMap />
        </div>
      </section>

      {/* Our Process */}
      <motion.section variants={sectionVariants} className="relative py-24">
        <SectionBackground
          gradientFrom="[#4ee1a0]"
          gradientTo="[#ffd93d]"
          opacity="30"
          gridOpacity="15"
        />
        <div className="relative z-10">
          <OurProcessStepper />
        </div>
      </motion.section>

      {/* Awards & Recognition */}
      <section className="relative py-24">
        <SectionBackground
          gradientFrom="[#ffd93d]"
          gradientTo="[#b370f1]"
          opacity="20"
          gridOpacity="15"
        />
        <div className="relative z-10">
          <AwardsMentionStrip />
        </div>
      </section>
    </main>
  );
};

export default About;
