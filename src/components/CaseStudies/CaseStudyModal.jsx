import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPlay, FaChartLine, FaUsers, FaHeart, FaQuoteLeft } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export const CaseStudyModal = ({
  caseStudy,
  isOpen,
  onClose,
  className
}) => {
  if (!isOpen) return null;

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",
          className
        )}
        onClick={onClose}
      >
        <motion.div
          variants={contentVariants}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1a1a2e] rounded-2xl"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
          >
            <FaTimes className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="relative">
            {/* Hero Image/Video */}
            <div className="relative aspect-video">
              {caseStudy.videoUrl ? (
                <div className="relative w-full h-full">
                  <img
                    src={caseStudy.thumbnail}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                    <FaPlay className="w-16 h-16 text-white" />
                  </button>
                </div>
              ) : (
                <img
                  src={caseStudy.thumbnail}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Case Study Details */}
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] bg-clip-text text-transparent mb-2">
                    {caseStudy.title}
                  </h2>
                  <p className="text-xl text-white/70">
                    {caseStudy.client}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <span className="px-3 py-1 text-sm font-medium bg-white/10 rounded-full">
                    {caseStudy.category}
                  </span>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">The Challenge</h3>
                <p className="text-white/80 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* Strategy */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Our Strategy</h3>
                <ul className="space-y-3">
                  {caseStudy.strategy.map((step, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] mt-2" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {caseStudy.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className="flex items-center justify-center mb-2">
                      {result.icon === 'chart' && <FaChartLine className="w-5 h-5 text-[#4ee1a0]" />}
                      {result.icon === 'users' && <FaUsers className="w-5 h-5 text-[#b370f1]" />}
                      {result.icon === 'heart' && <FaHeart className="w-5 h-5 text-[#ffd93d]" />}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {result.value}
                    </div>
                    <div className="text-sm text-white/60">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              {caseStudy.testimonial && (
                <div className="relative bg-white/5 rounded-xl p-6 border border-white/10">
                  <FaQuoteLeft className="w-8 h-8 text-white/20 absolute top-4 left-4" />
                  <div className="relative pl-12">
                    <p className="text-white/80 italic mb-4">
                      {caseStudy.testimonial.quote}
                    </p>
                    <div>
                      <p className="font-semibold text-white">
                        {caseStudy.testimonial.author}
                      </p>
                      <p className="text-sm text-white/60">
                        {caseStudy.testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}; 