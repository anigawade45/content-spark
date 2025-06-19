import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPlay, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export const PortfolioModal = ({
  project,
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

  const getPlatformIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <FaInstagram className="w-5 h-5" />;
      case 'youtube':
        return <FaYoutube className="w-5 h-5" />;
      case 'tiktok':
        return <FaTiktok className="w-5 h-5" />;
      default:
        return null;
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
              {project.mediaType === 'video' ? (
                <div className="relative w-full h-full">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                    <FaPlay className="w-16 h-16 text-white" />
                  </button>
                </div>
              ) : (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Project Details */}
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] bg-clip-text text-transparent mb-2">
                    {project.title}
                  </h2>
                  <p className="text-xl text-white/70">
                    {project.brand}
                  </p>
                </div>
                {project.platform && (
                  <div className="flex items-center gap-2 text-white/70">
                    {getPlatformIcon(project.platform)}
                    <span className="text-sm font-medium">
                      {project.platform}
                    </span>
                  </div>
                )}
              </div>

              {/* Objective */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Objective</h3>
                <p className="text-white/80 leading-relaxed">
                  {project.objective}
                </p>
              </div>

              {/* Approach */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Our Approach</h3>
                <ul className="space-y-3">
                  {project.approach.map((step, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] mt-2" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {project.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] bg-clip-text text-transparent mb-1">
                      {result.value}
                    </div>
                    <div className="text-sm text-white/60">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}; 