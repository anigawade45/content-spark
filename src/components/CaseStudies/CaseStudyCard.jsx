import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaChartLine, FaUsers, FaHeart } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export const CaseStudyCard = ({
  title,
  client,
  thumbnail,
  category,
  metrics,
  onClick,
  className
}) => {
  const cardVariants = {
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
      variants={cardVariants}
      className={cn(
        "group relative cursor-pointer",
        className
      )}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient border/glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-b from-[#b370f1] to-[#4ee1a0] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:duration-200" />
      
      {/* Card Content */}
      <div className="relative h-full bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10">
        {/* Thumbnail */}
        <div className="relative aspect-video">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <FaPlay className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-white/10 rounded-full text-white/70">
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
            {title}
          </h3>

          {/* Client */}
          <p className="text-white/70 mb-4">
            {client}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-1">
                  {metric.icon === 'chart' && <FaChartLine className="w-4 h-4 text-[#4ee1a0]" />}
                  {metric.icon === 'users' && <FaUsers className="w-4 h-4 text-[#b370f1]" />}
                  {metric.icon === 'heart' && <FaHeart className="w-4 h-4 text-[#ffd93d]" />}
                </div>
                <div className="text-lg font-semibold text-white">
                  {metric.value}
                </div>
                <div className="text-xs text-white/50">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 