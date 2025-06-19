import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const PortfolioItemCard = ({
  title,
  brand,
  category,
  thumbnail,
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
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:duration-200" />
      
      {/* Card Content */}
      <div className="relative h-full bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full text-white">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">
            {title}
          </h3>
          <p className="text-white/70 text-sm mb-4">
            {brand}
          </p>

          {/* Metrics */}
          {metrics && (
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-bold text-[#4ee1a0]">
                    {metric.value}
                  </div>
                  <div className="text-xs text-white/60">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}; 