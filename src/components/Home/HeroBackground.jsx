import React from "react";
import { cn } from "@/lib/utils";

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A511CE] via-[#A511CE]/80 to-[#FCEC01] opacity-90" />

      {/* Animated Blobs */}
      <div className="absolute -top-1/2 -left-1/2 w-full h-full">
        <div
          className={cn(
            "absolute w-[500px] h-[500px] rounded-full bg-[#A511CE]/30",
            "animate-blob blur-3xl",
            "top-1/4 left-1/4"
          )}
        />
        <div
          className={cn(
            "absolute w-[400px] h-[400px] rounded-full bg-[#FCEC01]/30",
            "animate-blob animation-delay-2000 blur-3xl",
            "top-1/3 right-1/4"
          )}
        />
        <div
          className={cn(
            "absolute w-[300px] h-[300px] rounded-full bg-[#A511CE]/20",
            "animate-blob animation-delay-4000 blur-3xl",
            "bottom-1/4 left-1/3"
          )}
        />
      </div>

      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 backdrop-blur-[100px] bg-white/5" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  );
};
