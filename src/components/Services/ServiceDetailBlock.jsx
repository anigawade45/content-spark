import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const ServiceDetailBlock = ({
  title,
  description,
  image,
  imageAlt,
  features,
  metrics,
  reverse = false,
  gradient,
  className
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: reverse ? 20 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        "container mx-auto px-4 py-16",
        className
      )}
    >
      <div className={cn(
        "flex flex-col gap-12 items-center",
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      )}>
        {/* Image Section */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-1/2"
        >
          <div className="relative group">
            <div className={cn(
              "absolute -inset-0.5 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:duration-200",
              gradient
            )} />
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-1/2"
        >
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent",
            gradient
          )}>
            {title}
          </h2>

          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            {description}
          </p>

          {/* Features */}
          {features && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Key Features:</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-center space-x-3 text-white/80"
                  >
                    <span className={cn("w-2 h-2 rounded-full", gradient)} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Metrics */}
          {metrics && (
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <div 
                  key={index}
                  className="bg-white/5 rounded-xl p-4 border border-white/10"
                >
                  <div className={cn(
                    "text-2xl font-bold mb-1 bg-clip-text text-transparent",
                    gradient
                  )}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-white/70">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}; 