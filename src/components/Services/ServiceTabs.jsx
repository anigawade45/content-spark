import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const ServiceTabs = ({ 
  tabs,
  activeTab,
  onTabChange,
  className
}) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
              activeTab === tab.id
                ? "bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] text-white"
                : "bg-white/5 text-white/70 hover:bg-white/10"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        {tabs.find(tab => tab.id === activeTab)?.content}
      </motion.div>
    </div>
  );
}; 