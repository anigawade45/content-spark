import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export const VideoTestimonialPopup = ({
  videoUrl,
  title,
  author,
  position,
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
          className="relative w-full max-w-4xl bg-[#1a1a2e] rounded-2xl overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
          >
            <FaTimes className="w-6 h-6" />
          </button>

          {/* Video Container */}
          <div className="relative aspect-video">
            <iframe
              src={videoUrl}
              title={title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video Info */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              {title}
            </h3>
            <div>
              <p className="text-white/80 font-medium">
                {author}
              </p>
              <p className="text-white/60 text-sm">
                {position}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}; 