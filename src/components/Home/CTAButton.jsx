import React from "react";
import { motion } from "framer-motion";

export const CTAButton = ({ text, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="px-8 py-4 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {text}
    </motion.button>
  );
};
