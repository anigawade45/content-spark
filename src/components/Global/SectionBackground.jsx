import React from 'react';
import { cn } from "@/lib/utils";

export const SectionBackground = ({ 
  className,
  gradientFrom = "b370f1",
  gradientTo = "ffd93d",
  opacity = "30",
  gridOpacity = "12",
  animate = true
}) => {
  return (
    <div className={cn("absolute inset-0 bg-[#18181b]", className)}>
      {/* Animated gradient background */}
      <div className={cn("absolute inset-0", `opacity-${opacity}`)}>
        <div 
          className={cn(
            "absolute inset-0",
            "bg-gradient-to-r",
            `from-[#${gradientFrom}]`,
            `to-[#${gradientTo}]`,
            animate && "animate-pulse",
            "blur-3xl"
          )}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `linear-gradient(to right, #808080${gridOpacity} 1px, transparent 1px), 
                           linear-gradient(to bottom, #808080${gridOpacity} 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );
}; 