import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const IndustryCard = ({
  title,
  description,
  icon: Icon,
  features,
  useCases,
  gradient,
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
        "group relative",
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient border/glow effect */}
      <div className={cn(
        "absolute -inset-0.5 bg-gradient-to-b rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:duration-200",
        gradient
      )} />
      
      {/* Card Content */}
      <div className="relative h-full bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className={cn(
            "w-16 h-16 rounded-xl p-0.5 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500",
            gradient
          )}>
            <div className="w-full h-full rounded-xl bg-[#1a1a2e] flex items-center justify-center">
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className={cn(
          "text-2xl font-bold text-center mb-4 bg-clip-text text-transparent",
          gradient
        )}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/80 text-center mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-white/90 font-semibold mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li 
                key={index}
                className="flex items-center space-x-2 text-white/80"
              >
                <span className={cn("w-1.5 h-1.5 rounded-full", gradient)} />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Use Cases */}
        {useCases && (
          <div className="mt-6 pt-6 border-t border-white/10">
            <h4 className="text-white/90 font-semibold mb-3">Use Cases:</h4>
            <div className="grid grid-cols-2 gap-3">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-lg p-3 text-center"
                >
                  <span className="text-sm text-white/70">
                    {useCase}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}; 