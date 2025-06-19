import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaArrowRight, FaCalendarAlt, FaRocket } from "react-icons/fa";

export const PrimaryCTASection = () => {
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

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#18181b]">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <motion.div
        className="container mx-auto px-4 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-400 to-indigo-400 text-transparent bg-clip-text text-center mb-10 drop-shadow-[0_0_15px_rgba(179,112,241,0.5)]">
              Ready to Transform Your Content Strategy?
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed"
          >
            Let's work together to create content that drives real business
            results. Schedule a free consultation with our team today.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                icon: FaRocket,
                title: "Fast Onboarding",
                description: "Get started in minutes",
              },
              {
                icon: FaCalendarAlt,
                title: "Free Consultation",
                description: "Expert strategy session",
              },
              {
                icon: FaArrowRight,
                title: "Quick Results",
                description: "See impact within weeks",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#b370f1]/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#b370f1] to-[#ffd93d] p-0.5">
                    <div className="w-full h-full rounded-full bg-[#18181b] flex items-center justify-center">
                      {React.createElement(feature.icon, {
                        className: "w-5 h-5 text-[#ffd93d]",
                      })}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "group relative px-8 py-4 rounded-xl",
                "bg-gradient-to-r from-[#b370f1] to-[#ffd93d]",
                "text-white font-medium text-lg",
                "transition-all duration-300",
                "hover:shadow-lg hover:shadow-[#b370f1]/20",
                "focus:outline-none focus:ring-2 focus:ring-[#b370f1] focus:ring-offset-2 focus:ring-offset-[#18181b]"
              )}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ffd93d] to-[#b370f1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "group relative px-8 py-4 rounded-xl",
                "bg-transparent",
                "text-white font-medium text-lg",
                "border-2 border-white/20",
                "hover:border-[#b370f1]/50",
                "transition-all duration-300",
                "focus:outline-none focus:ring-2 focus:ring-[#b370f1] focus:ring-offset-2 focus:ring-offset-[#18181b]"
              )}
            >
              <span className="relative z-10 flex items-center gap-2">
                Learn More
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-white/60 text-sm mt-8"
          >
            No credit card required • 14-day free trial • Cancel anytime
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};
