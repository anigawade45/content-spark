import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const ClientLogoWall = ({
  clients,
  className
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8",
        className
      )}
    >
      {clients.map((client, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="group relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-b from-[#b370f1] to-[#4ee1a0] rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:duration-200" />
          <div className="relative h-24 bg-[#1a1a2e]/80 backdrop-blur-xl rounded-xl p-6 border border-white/10 flex items-center justify-center">
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}; 