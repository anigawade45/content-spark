import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/Global";

export const GlobalReachMap = () => {
  const locations = [
    { city: "New York", country: "USA", clients: 25 },
    { city: "London", country: "UK", clients: 18 },
    { city: "Singapore", country: "Singapore", clients: 12 },
    { city: "Dubai", country: "UAE", clients: 15 },
    { city: "Sydney", country: "Australia", clients: 10 },
    { city: "Tokyo", country: "Japan", clients: 8 },
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-1">
      <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-400 to-indigo-400 text-transparent bg-clip-text text-center mb-10 drop-shadow-[0_0_15px_rgba(179,112,241,0.5)]">
        Global Presence
      </h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {locations.map((location, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
            variants={itemVariants}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {location.city}
                </h3>
                <p className="text-gray-400">{location.country}</p>
              </div>
              <div className="text-2xl font-bold text-[#4ee1a0]">
                {location.clients}+
              </div>
            </div>
            <div className="h-2 bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] rounded-full" />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 text-center">
        <p className="text-gray-400 max-w-2xl mx-auto">
          With a network of creative professionals and strategic partners across
          major global markets, we deliver culturally relevant content that
          resonates with local audiences while maintaining global brand
          consistency.
        </p>
      </div>
    </div>
  );
};
