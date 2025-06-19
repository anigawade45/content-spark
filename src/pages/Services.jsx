import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionBackground } from '../components/Global/SectionBackground';
import { SectionTitle } from '../components/Global/SectionTitle';
import { ServiceTabs } from '../components/Services/ServiceTabs';
import { ServiceCard } from '../components/Services/ServiceCard';
import { ServiceDetailBlock } from '../components/Services/ServiceDetailBlock';
import { 
  FaLightbulb, 
  FaVideo, 
  FaCamera, 
  FaChartLine,
  FaInstagram,
  FaTiktok,
  FaYoutube
} from 'react-icons/fa6';

const Services = () => {
  const [activeTab, setActiveTab] = useState('strategy');

  const tabs = [
    {
      id: 'strategy',
      label: 'Content Strategy',
      content: (
        <div className="space-y-16">
          <ServiceDetailBlock
            title="Strategic Content Planning"
            description="We develop comprehensive content strategies that align with your brand goals and resonate with your target audience. Our data-driven approach ensures maximum impact and ROI."
            image="/images/services/strategy.jpg"
            imageAlt="Content Strategy Planning"
            features={[
              "Brand voice development and guidelines",
              "Content calendar planning and management",
              "Campaign strategy and execution",
              "Audience research and analysis",
              "Performance tracking and optimization"
            ]}
            metrics={[
              { value: "45%", label: "Average Engagement Increase" },
              { value: "3x", label: "Content ROI" }
            ]}
            gradient="from-[#b370f1] to-[#4ee1a0]"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={FaLightbulb}
              title="Brand Voice Development"
              description="Create a unique and consistent brand voice that resonates with your audience."
              benefits={[
                "Consistent messaging across platforms",
                "Enhanced brand recognition",
                "Stronger audience connection"
              ]}
              caseStudy="Helped a tech startup increase brand recognition by 60% through consistent voice development."
              gradient="from-[#b370f1] to-[#ffd93d]"
            />
            <ServiceCard
              icon={FaChartLine}
              title="Campaign Planning"
              description="Strategic campaign development that drives results and engagement."
              benefits={[
                "Data-driven strategy",
                "Multi-channel approach",
                "Measurable results"
              ]}
              caseStudy="Generated 2.5M views for a product launch campaign."
              gradient="from-[#4ee1a0] to-[#ffd93d]"
            />
            <ServiceCard
              icon={FaInstagram}
              title="Content Calendars"
              description="Organized and strategic content planning for consistent delivery."
              benefits={[
                "Regular content delivery",
                "Platform optimization",
                "Engagement tracking"
              ]}
              caseStudy="Increased posting consistency by 85% for a fashion brand."
              gradient="from-[#ffd93d] to-[#b370f1]"
            />
          </div>
        </div>
      )
    },
    {
      id: 'production',
      label: 'Content Production',
      content: (
        <div className="space-y-16">
          <ServiceDetailBlock
            title="Professional Content Creation"
            description="Our team of creative professionals produces high-quality content that captures attention and drives engagement across all platforms."
            image="/images/services/production.jpg"
            imageAlt="Content Production"
            features={[
              "High-quality video production",
              "Professional editing and post-production",
              "Platform-specific optimization",
              "Trend-aware content creation",
              "Brand-aligned visuals"
            ]}
            metrics={[
              { value: "2.5x", label: "Average Engagement Rate" },
              { value: "1M+", label: "Views per Campaign" }
            ]}
            gradient="from-[#4ee1a0] to-[#ffd93d]"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={FaVideo}
              title="Short-Form Content"
              description="Engaging reels and shorts optimized for each platform."
              benefits={[
                "Platform-specific optimization",
                "Trend-aware content",
                "High engagement rates"
              ]}
              caseStudy="Achieved 1M+ views on a single reel for a beauty brand."
              gradient="from-[#4ee1a0] to-[#b370f1]"
            />
            <ServiceCard
              icon={FaTiktok}
              title="Commercial Production"
              description="Professional commercial content that converts."
              benefits={[
                "High production quality",
                "Strategic messaging",
                "Conversion-focused"
              ]}
              caseStudy="Increased sales by 40% for a product launch video."
              gradient="from-[#b370f1] to-[#ffd93d]"
            />
            <ServiceCard
              icon={FaYoutube}
              title="Motion Graphics"
              description="Eye-catching animations and visual effects."
              benefits={[
                "Custom animations",
                "Brand-aligned design",
                "Engaging visuals"
              ]}
              caseStudy="Created viral motion graphics for a tech company."
              gradient="from-[#ffd93d] to-[#4ee1a0]"
            />
          </div>
        </div>
      )
    },
    {
      id: 'management',
      label: 'Content Management',
      content: (
        <div className="space-y-16">
          <ServiceDetailBlock
            title="Comprehensive Content Management"
            description="We handle all aspects of your content management, from creation to distribution and optimization."
            image="/images/services/management.jpg"
            imageAlt="Content Management"
            features={[
              "Content scheduling and publishing",
              "Community management",
              "Performance analytics",
              "Content optimization",
              "Regular reporting"
            ]}
            metrics={[
              { value: "85%", label: "Content Consistency" },
              { value: "2x", label: "Audience Growth" }
            ]}
            gradient="from-[#ffd93d] to-[#b370f1]"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={FaCamera}
              title="On-Site Production"
              description="Professional on-location content creation."
              benefits={[
                "High-quality production",
                "Professional equipment",
                "Expert direction"
              ]}
              caseStudy="Produced 100+ product videos for an e-commerce brand."
              gradient="from-[#b370f1] to-[#4ee1a0]"
            />
            <ServiceCard
              icon={FaInstagram}
              title="UGC Content"
              description="Authentic user-generated style content."
              benefits={[
                "Authentic feel",
                "High engagement",
                "Cost-effective"
              ]}
              caseStudy="Generated 3x engagement with UGC-style content."
              gradient="from-[#4ee1a0] to-[#ffd93d]"
            />
            <ServiceCard
              icon={FaChartLine}
              title="Influencer Content"
              description="Strategic influencer collaborations."
              benefits={[
                "Reach expansion",
                "Authentic promotion",
                "Measurable results"
              ]}
              caseStudy="Achieved 2M+ reach through influencer partnerships."
              gradient="from-[#ffd93d] to-[#b370f1]"
            />
          </div>
        </div>
      )
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
              title="Our Services"
              subtitle="Comprehensive content solutions tailored to your brand's needs. From strategy to production and management, we've got you covered."
            />
          </motion.div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 relative">
        <SectionBackground 
          gradientFrom="[#4ee1a0]" 
          gradientTo="[#ffd93d]" 
          opacity="20"
          gridOpacity="10"
        />
        <div className="container mx-auto px-4 relative z-10">
          <ServiceTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </section>
    </div>
  );
};

export default Services; 