import React from 'react';
import { motion } from 'framer-motion';
import { FaTshirt, FaLaptopCode, FaUtensils, FaDumbbell, FaUserTie } from 'react-icons/fa';
import { SectionBackground } from '../components/Global/SectionBackground';
import { SectionTitle } from '../components/Global/SectionTitle';
import { IndustryCard } from '../components/Industries/IndustryCard';

const Industries = () => {
  const industries = [
    {
      title: "Fashion and Lifestyle",
      description: "Elevate your brand with trendsetting content that captures the essence of modern fashion and lifestyle.",
      icon: FaTshirt,
      gradient: "bg-gradient-to-b from-[#b370f1] to-[#4ee1a0]",
      features: [
        "Trend Analysis & Forecasting",
        "Visual Storytelling",
        "Influencer Collaborations",
        "Brand Identity Development"
      ],
      useCases: [
        "Collection Launches",
        "Style Guides",
        "Behind-the-Scenes",
        "Fashion Shows"
      ]
    },
    {
      title: "Technology and Startups",
      description: "Showcase your innovation with compelling content that explains complex concepts in engaging ways.",
      icon: FaLaptopCode,
      gradient: "bg-gradient-to-b from-[#4ee1a0] to-[#ffd93d]",
      features: [
        "Product Demos",
        "Technical Tutorials",
        "Industry Insights",
        "Startup Stories"
      ],
      useCases: [
        "Product Launches",
        "Feature Updates",
        "Tech Reviews",
        "Industry Events"
      ]
    },
    {
      title: "Food and Beverage",
      description: "Create mouthwatering content that showcases your culinary expertise and builds customer loyalty.",
      icon: FaUtensils,
      gradient: "bg-gradient-to-b from-[#ffd93d] to-[#b370f1]",
      features: [
        "Recipe Content",
        "Behind-the-Scenes",
        "Menu Showcases",
        "Customer Stories"
      ],
      useCases: [
        "New Dishes",
        "Cooking Tips",
        "Restaurant Tours",
        "Special Events"
      ]
    },
    {
      title: "Fitness and Wellness",
      description: "Inspire and motivate your audience with content that promotes health, wellness, and personal growth.",
      icon: FaDumbbell,
      gradient: "bg-gradient-to-b from-[#b370f1] to-[#ffd93d]",
      features: [
        "Workout Routines",
        "Nutrition Tips",
        "Wellness Guides",
        "Transformation Stories"
      ],
      useCases: [
        "Class Previews",
        "Expert Tips",
        "Success Stories",
        "Wellness Events"
      ]
    },
    {
      title: "Coaches and Personal Brands",
      description: "Build your personal brand and connect with your audience through authentic, value-driven content.",
      icon: FaUserTie,
      gradient: "bg-gradient-to-b from-[#4ee1a0] to-[#b370f1]",
      features: [
        "Personal Branding",
        "Expert Content",
        "Client Success Stories",
        "Community Building"
      ],
      useCases: [
        "Course Launches",
        "Coaching Tips",
        "Client Testimonials",
        "Live Events"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <SectionBackground 
          gradientFrom="[#b370f1]" 
          gradientTo="[#4ee1a0]" 
          opacity="30"
          gridOpacity="15"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <SectionTitle
              title="Industries We Serve"
              subtitle="We specialize in creating impactful content strategies for diverse industries, helping brands connect with their audience and achieve their business goals."
            />
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 relative">
        <SectionBackground 
          gradientFrom="[#4ee1a0]" 
          gradientTo="[#ffd93d]" 
          opacity="20"
          gridOpacity="10"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <IndustryCard
                  icon={industry.icon}
                  title={industry.title}
                  description={industry.description}
                  features={industry.features}
                  gradient={industry.gradient}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries; 