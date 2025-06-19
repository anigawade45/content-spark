import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionBackground } from '../components/Global/SectionBackground';
import { SectionTitle } from '../components/Global/SectionTitle';
import { CaseStudyCard } from '../components/CaseStudies/CaseStudyCard';
import { CaseStudyModal } from '../components/CaseStudies/CaseStudyModal';

const CaseStudies = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: "Fashion Brand's Social Media Transformation",
      client: "Luxury Fashion House",
      category: "Fashion & Lifestyle",
      thumbnail: "/images/case-studies/fashion-transformation.jpg",
      videoUrl: "https://example.com/video1",
      challenge: "A luxury fashion brand needed to modernize their social media presence and connect with younger audiences while maintaining their premium brand image.",
      strategy: [
        "Developed a content strategy focused on behind-the-scenes and lifestyle content",
        "Created a series of short-form videos showcasing the design process",
        "Implemented influencer collaborations with micro-influencers",
        "Launched a user-generated content campaign"
      ],
      results: [
        { icon: 'chart', value: "2.5M", label: "Total Views" },
        { icon: 'users', value: "45%", label: "Engagement Rate" },
        { icon: 'heart', value: "3x", label: "Sales Increase" },
        { icon: 'users', value: "500K", label: "New Followers" }
      ],
      testimonial: {
        quote: "The team's creative approach helped us connect with a new generation of customers while staying true to our brand heritage.",
        author: "Sarah Johnson",
        position: "Marketing Director"
      }
    },
    {
      id: 2,
      title: "Tech Startup's Product Launch Campaign",
      client: "Innovative Tech Company",
      category: "Technology",
      thumbnail: "/images/case-studies/tech-launch.jpg",
      challenge: "A tech startup needed to create buzz around their new product launch and educate potential customers about its unique features.",
      strategy: [
        "Created educational content series explaining key features",
        "Developed interactive product demos",
        "Launched a targeted social media campaign",
        "Organized virtual launch event"
      ],
      results: [
        { icon: 'chart', value: "1.2M", label: "Total Views" },
        { icon: 'users', value: "85%", label: "Watch Time" },
        { icon: 'heart', value: "40%", label: "Conversion Rate" },
        { icon: 'users', value: "200K", label: "Sign-ups" }
      ],
      testimonial: {
        quote: "The campaign exceeded our expectations in terms of engagement and conversions. The team's understanding of our product and target audience was impressive.",
        author: "Michael Chen",
        position: "CEO"
      }
    },
    {
      id: 3,
      title: "Restaurant Chain's Digital Presence",
      client: "Gourmet Restaurant Group",
      category: "Food & Beverage",
      thumbnail: "/images/case-studies/restaurant-digital.jpg",
      challenge: "A restaurant chain needed to increase their digital presence and drive more foot traffic to their locations.",
      strategy: [
        "Created mouthwatering food photography and videos",
        "Developed a series of chef's special content",
        "Implemented location-based social media campaigns",
        "Launched a customer loyalty program"
      ],
      results: [
        { icon: 'chart', value: "5M", label: "Total Views" },
        { icon: 'users', value: "2B", label: "Total Reach" },
        { icon: 'heart', value: "4x", label: "Foot Traffic" },
        { icon: 'users', value: "1M", label: "App Downloads" }
      ],
      testimonial: {
        quote: "The content strategy helped us showcase our culinary expertise and connect with food enthusiasts in a meaningful way.",
        author: "David Martinez",
        position: "Marketing Manager"
      }
    }
  ];

  return (
    <main className="relative min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative py-32">
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
              title="Case Studies"
              subtitle="Explore our successful campaigns and see how we've helped brands achieve their goals through strategic content creation and social media management."
            />
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid Section */}
      <section className="relative py-16">
        <SectionBackground 
          gradientFrom="[#4ee1a0]" 
          gradientTo="[#ffd93d]" 
          opacity="30"
          gridOpacity="15"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                title={caseStudy.title}
                client={caseStudy.client}
                thumbnail={caseStudy.thumbnail}
                category={caseStudy.category}
                metrics={caseStudy.results.slice(0, 3)}
                onClick={() => setSelectedCaseStudy(caseStudy)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        isOpen={!!selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </main>
  );
};

export default CaseStudies; 