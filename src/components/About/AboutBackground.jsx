import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const AboutBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#b370f1] via-[#b370f1]/80 to-[#ffd93d] opacity-40" />

      {/* Animated Blobs */}
      <div className="absolute inset-0">
        <div
          className={cn(
            "absolute w-[600px] h-[600px] rounded-full",
            "bg-gradient-to-br from-[#b370f1] to-[#ffd93d]/50",
            "animate-blob blur-[100px]",
            "top-[20%] -left-[10%]"
          )}
        />
        <div
          className={cn(
            "absolute w-[500px] h-[500px] rounded-full",
            "bg-gradient-to-br from-[#ffd93d] to-[#b370f1]/50",
            "animate-blob animation-delay-2000 blur-[100px]",
            "top-[40%] -right-[10%]"
          )}
        />
        <div
          className={cn(
            "absolute w-[400px] h-[400px] rounded-full",
            "bg-gradient-to-br from-[#b370f1] to-[#ffd93d]/50",
            "animate-blob animation-delay-4000 blur-[100px]",
            "bottom-[10%] left-[30%]"
          )}
        />
      </div>

      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 backdrop-blur-[100px] bg-black/20" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
    </motion.div>
  );
};
