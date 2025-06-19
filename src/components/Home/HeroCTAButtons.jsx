import { motion } from "framer-motion";
import { FaArrowRight, FaComments } from "react-icons/fa";
import { cn } from "@/lib/utils";

export const HeroCTAButtons = () => {
  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative flex flex-wrap gap-4 justify-center items-center mt-6">
      {/* Animated background effect */}
      <div className="absolute inset-0 blur-3xl opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-purple-400 to-indigo-400 animate-pulse" />
      </div>

      {/* Let's Talk Button */}
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        custom={1}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.98 }}
      >
        <button
          className={cn(
            "relative px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-3",
            "bg-gradient-to-r from-fuchsia-500 via-purple-400 to-indigo-400",
            "text-white shadow-xl transition-all duration-300",
            "hover:shadow-[0_0_30px_10px_rgba(179,112,241,0.4)] hover:scale-105",
            "focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2",
            "after:absolute after:inset-0 after:rounded-xl after:blur-xl after:opacity-0 hover:after:opacity-40 after:bg-gradient-to-r after:from-fuchsia-500 after:to-indigo-400 after:transition-opacity after:duration-300",
            "animate-pulse-slow"
          )}
        >
          <FaComments className="text-xl animate-bounce" />
          <span className="relative z-10">Let's Talk</span>
        </button>
      </motion.div>

      {/* View Our Work Button */}
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        custom={2}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.98 }}
      >
        <button
          className={cn(
            "relative px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-3",
            "bg-white/10 backdrop-blur-md border-2 border-transparent",
            "text-black transition-all duration-300",
            "hover:bg-gradient-to-r hover:from-[#b370f1]/20 hover:to-[#ffd93d]/20 hover:border-[#b370f1]",
            "hover:shadow-[0_0_30px_10px_rgba(255,217,61,0.2)] hover:scale-105",
            "focus:outline-none focus:ring-2 focus:ring-[#ffd93d] focus:ring-offset-2",
            "after:absolute after:inset-0 after:rounded-xl after:blur-xl after:opacity-0 hover:after:opacity-30 after:bg-gradient-to-r after:from-[#b370f1] after:to-[#ffd93d] after:transition-opacity after:duration-300"
          )}
        >
          <span className="relative z-10">View Our Work</span>
          <FaArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300 animate-float" />
        </button>
      </motion.div>
    </div>
  );
};

// Add this to your global CSS or tailwind.config.js
// @keyframes shimmer {
//   0% { transform: translateX(-200%); }
//   100% { transform: translateX(200%); }
// }
