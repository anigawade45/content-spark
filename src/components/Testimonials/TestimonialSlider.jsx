import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaPlay } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export const TestimonialSlider = ({
  testimonials,
  className
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  const handlePrevious = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className={cn("relative", className)}>
      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <FaChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <FaChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Testimonial Slides */}
      <div className="relative h-[400px] overflow-hidden">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0"
          >
            <div className="relative h-full bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <div className="flex flex-col md:flex-row gap-8 h-full">
                {/* Testimonial Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <FaQuoteLeft className="w-8 h-8 text-white/20 mb-6" />
                  <p className="text-xl text-white/80 mb-6 leading-relaxed">
                    {testimonials[currentIndex].quote}
                  </p>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-white/60">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>

                {/* Video Preview */}
                {testimonials[currentIndex].videoUrl && (
                  <div className="relative w-full md:w-1/2 aspect-video rounded-xl overflow-hidden">
                    <img
                      src={testimonials[currentIndex].thumbnail}
                      alt={testimonials[currentIndex].author}
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                      <FaPlay className="w-12 h-12 text-white" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsPlaying(false);
              setCurrentIndex(index);
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/30 hover:bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}; 