import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaClock } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export const BlogCard = ({
  title,
  excerpt,
  thumbnail,
  category,
  author,
  date,
  readTime,
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
          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-white/70 mb-4 line-clamp-3">
            {excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm text-white/60">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FaUser className="w-4 h-4" />
                <span>{author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="w-4 h-4" />
                <span>{date}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="w-4 h-4" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 