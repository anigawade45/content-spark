import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export const PricingCard = ({
  title,
  price,
  description,
  features,
  isPopular,
  className,
  onSelect
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative",
        className
      )}
    >
      {/* Gradient border/glow effect */}
      <div className={cn(
        "absolute -inset-0.5 rounded-2xl opacity-50 blur",
        isPopular
          ? "bg-gradient-to-b from-[#b370f1] to-[#4ee1a0]"
          : "bg-white/10"
      )} />
      
      {/* Content */}
      <div className="relative bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        {/* Popular Badge */}
        {isPopular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="px-4 py-1 text-sm font-medium bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] rounded-full text-white">
              Most Popular
            </span>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/70">{description}</p>
        </div>

        {/* Price */}
        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-white mb-2">
            ${price}
            <span className="text-lg text-white/70">/month</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <FaCheck className="w-5 h-5 text-[#4ee1a0] mt-0.5" />
              <span className="text-white/70">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={onSelect}
          className={cn(
            "w-full px-6 py-3 rounded-xl font-medium transition-opacity",
            isPopular
              ? "bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] text-white hover:opacity-90"
              : "bg-white/10 text-white hover:bg-white/20"
          )}
        >
          Get Started
        </button>
      </div>
    </motion.div>
  );
}; 