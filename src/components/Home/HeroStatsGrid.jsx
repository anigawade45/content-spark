import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { FaSmile, FaHeart, FaUsers, FaHeadset } from "react-icons/fa";

// Animated Counter Hook
function useCounter(target, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    let start = 0;
    let end = parseFloat(target.replace(/[^\d.]/g, ""));
    let isPercent = target.includes("%");
    let isPlus = target.includes("+");
    let isK = target.toLowerCase().includes("k");
    let isM = target.toLowerCase().includes("m");
    if (isK) end *= 1000;
    if (isM) end *= 1000000;
    let startTime = null;
    function animateCounter(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      let value = Math.floor(progress * (end - start) + start);
      if (isM) value = Math.floor(value / 1000000) + "M";
      else if (isK) value = Math.floor(value / 1000) + "K";
      else value = value;
      if (isPercent) value += "%";
      if (isPlus) value += "+";
      setCount(value);
      if (progress < 1) {
        ref.current = requestAnimationFrame(animateCounter);
      }
    }
    ref.current = requestAnimationFrame(animateCounter);
    return () => cancelAnimationFrame(ref.current);
  }, [target, duration]);
  return count;
}

export const HeroStatsGrid = () => {
  const stats = [
    {
      value: "58+",
      label: "Happy Clients",
      description: "Trusted by leading brands",
    },
    {
      value: "500M+",
      label: "Likes Gained",
      description: "Across all platforms",
    },
    {
      value: "20M+",
      label: "Audience Reach",
      description: "Across all platforms",
    },
    {
      value: "24/7",
      label: "Support",
      description: "Always here to help",
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "w-full max-w-md mx-auto bg-white/10 backdrop-blur-xl border border-purple-500/40 rounded-2xl p-10 shadow-lg transition-all duration-300 flex flex-col items-center justify-center group relative overflow-hidden",
                "hover:scale-105 hover:shadow-xl"
              )}
            >
              {/* Gradient Border/Glow on Hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm z-10 bg-gradient-to-r from-[#b370f1] via-[#ffd93d] to-[#4ee1a0]" />
              <div className="relative z-20">
                <div className="text-4xl font-extrabold text-purple-300 mb-2 transition-colors duration-300 group-hover:text-[#6d28d9]">
                  {index < 3 && typeof stat.value === "string" && /[\d]/.test(stat.value)
                    ? useCounter(stat.value)
                    : stat.value}
                </div>
                <div className="text-xl font-bold mb-1 transition-colors duration-300 group-hover:text-[#6d28d9]">{stat.label}</div>
                <div className="text-base text-gray-400 transition-colors duration-300 group-hover:text-[#6d28d9]">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
