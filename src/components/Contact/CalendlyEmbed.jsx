import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export const CalendlyEmbed = ({
  calendlyUrl,
  className
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative",
        className
      )}
    >
      {/* Gradient border/glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-b from-[#b370f1] to-[#4ee1a0] rounded-2xl opacity-50 blur" />
      
      {/* Content */}
      <div className="relative bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#b370f1] to-[#4ee1a0] p-0.5">
            <div className="w-full h-full rounded-xl bg-[#1a1a2e] flex items-center justify-center">
              <FaCalendarAlt className="w-6 h-6 text-white" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Schedule a Meeting</h2>
            <p className="text-white/70">Book a time that works for you</p>
          </div>
        </div>

        {/* Calendly Embed */}
        <div className="relative w-full" style={{ height: '600px' }}>
          <iframe
            src={calendlyUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a meeting"
            className="rounded-xl"
          />
        </div>
      </div>
    </motion.div>
  );
}; 