import React from "react";
import { cn } from "@/lib/utils";
import { FaRegLightbulb, FaPenNib, FaChartLine } from "react-icons/fa";

export const HeroHeadline = () => {
  return (
    <div className="text-center max-w-4xl mx-auto mb-12">
      <h1
        className={cn(
          "text-4xl md:text-6xl font-extrabold mb-6",
          "bg-gradient-to-r from-[#A511CE] via-[#FCEC01] to-[#A511CE] bg-clip-text text-transparent",
          "animate-gradient-x animate-fade-in"
        )}
        style={{
          backgroundSize: "200% 200%",
          animation: "gradient-x 4s ease-in-out infinite, fade-in 1s both",
        }}
      >
        Igniting Your Brand's Digital Presence
      </h1>
      <p
        className={cn(
          "text-lg md:text-2xl text-gray-200 mb-8 font-medium",
          "animate-fade-in animation-delay-200"
        )}
        style={{
          animation: "fade-in 1s 0.3s both",
        }}
      >
        Unlock your brand's full potential with Content Spark, your premier
        partner for captivating reels and high-quality video content.
      </p>
      <div
        className={cn(
          "flex flex-wrap justify-center gap-4 mt-4",
          "animate-fade-in animation-delay-400"
        )}
        style={{
          animation: "fade-in 1s 0.6s both",
        }}
      >
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#23232a]/80 border border-[#ffffff] text-[#ffffff] font-semibold shadow-lg backdrop-blur-md hover:scale-105 transition-transform">
          <FaRegLightbulb className="text-xl" />
          Strategic Content Planning
        </span>
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#23232a]/80 border border-[#FCEC01] text-[#FCEC01] font-semibold shadow-lg backdrop-blur-md hover:scale-105 transition-transform">
          <FaPenNib className="text-xl" />
          Professional Content Creation
        </span>
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#23232a]/80 border border-[#A511CE] text-[#A511CE] font-semibold shadow-lg backdrop-blur-md hover:scale-105 transition-transform">
          <FaChartLine className="text-xl" />
          Data-Driven Optimization
        </span>
      </div>
    </div>
  );
};

// Add to your global CSS:
// @keyframes gradient-x {
//   0%, 100% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
// }
// .animate-gradient-x { animation: gradient-x 4s ease-in-out infinite; }
