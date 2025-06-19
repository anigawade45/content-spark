import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const StatsOverviewBar = ({
  stats,
  className
}) => {
  return (
    <div className={cn("flex flex-wrap justify-center gap-8 py-8", className)}>
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="group relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-b from-[#b370f1] to-[#4ee1a0] rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:duration-200" />
          <div className="relative bg-[#1a1a2e]/80 backdrop-blur-xl rounded-xl px-8 py-6 border border-white/10 text-center min-w-[180px]">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <div className="text-white/70 text-sm">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}; 