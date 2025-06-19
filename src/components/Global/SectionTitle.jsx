import React from 'react';
import { cn } from '@/lib/utils';

export const SectionTitle = ({ 
  title, 
  subtitle, 
  className,
  titleClassName,
  subtitleClassName 
}) => {
  return (
    <div className={cn("text-center", className)}>
      <h2 className={cn(
        "text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent text-center mb-10 drop-shadow-[0_0_15px_rgba(179,112,241,0.5)] transition-all duration-300 hover:drop-shadow-[0_0_25px_rgba(179,112,241,0.7)] hover:scale-[1.02]",
        titleClassName
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg md:text-xl text-gray-400 max-w-2xl mx-auto",
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}; 