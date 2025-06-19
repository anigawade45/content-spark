import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const BlogCategoryTags = ({
  categories,
  activeCategory,
  onCategoryChange,
  className
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "flex flex-wrap gap-4 justify-center",
        className
      )}
    >
      <button
        onClick={() => onCategoryChange('all')}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
          activeCategory === 'all'
            ? "bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] text-white"
            : "bg-white/10 text-white/70 hover:bg-white/20"
        )}
      >
        All Posts
      </button>
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
            activeCategory === category.id
              ? "bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] text-white"
              : "bg-white/10 text-white/70 hover:bg-white/20"
          )}
        >
          {category.name}
        </motion.button>
      ))}
    </motion.div>
  );
}; 