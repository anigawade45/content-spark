import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaClock, FaShare } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export const BlogPostLayout = ({
  title,
  content,
  thumbnail,
  category,
  author,
  date,
  readTime,
  className
}) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "max-w-4xl mx-auto",
        className
      )}
    >
      {/* Header */}
      <header className="mb-8">
        {/* Category */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-white/10 rounded-full text-white/70">
            {category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-white/60">
          <div className="flex items-center gap-2">
            <FaUser className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="w-4 h-4" />
            <span>{readTime} min read</span>
          </div>
          <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
            <FaShare className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative aspect-video mb-8 rounded-2xl overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        {content}
      </div>

      {/* Tags */}
      <div className="mt-12 pt-8 border-t border-white/10">
        <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
        <div className="flex flex-wrap gap-3">
          {['Social Media', 'Content Strategy', 'Digital Marketing', 'Trends'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm font-medium bg-white/10 rounded-full text-white/70 hover:bg-white/20 transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}; 