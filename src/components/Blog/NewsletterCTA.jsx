import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaCheck } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export const NewsletterCTA = ({
  className
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the newsletter signup
    setIsSubscribed(true);
    setEmail('');
  };

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
      <div className="absolute -inset-0.5 bg-gradient-to-b from-[#b370f1] to-[#4ee1a0] rounded-2xl opacity-50 blur" />
      
      {/* Content */}
      <div className="relative bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Icon */}
          <div className="w-16 h-16 rounded-xl bg-gradient-to-b from-[#b370f1] to-[#4ee1a0] p-0.5">
            <div className="w-full h-full rounded-xl bg-[#1a1a2e] flex items-center justify-center">
              <FaEnvelope className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              Stay Updated
            </h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for the latest insights on social media trends, 
              content strategy, and digital marketing tips.
            </p>

            {/* Form */}
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#4ee1a0]"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#4ee1a0]">
                <FaCheck className="w-5 h-5" />
                <span>Thanks for subscribing!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 