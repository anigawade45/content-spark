import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const PortfolioFilterTabs = ({
  categories,
  activeCategory,
  onCategoryChange,
  className
}) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => onCategoryChange('all')}
          className={cn(
            "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
            activeCategory === 'all'
              ? "bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] text-white"
              : "bg-white/5 text-white/70 hover:bg-white/10"
          )}
        >
          All Work
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
              activeCategory === category.id
                ? "bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] text-white"
                : "bg-white/5 text-white/70 hover:bg-white/10"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}; 