import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionBackground } from '../components/Global/SectionBackground';
import { TestimonialSlider } from '../components/Testimonials/TestimonialSlider';
import { ClientLogoWall } from '../components/Testimonials/ClientLogoWall';
import { VideoTestimonialPopup } from '../components/Testimonials/VideoTestimonialPopup';
import { StatsOverviewBar } from '../components/Testimonials/StatsOverviewBar';

const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const testimonials = [
    {
      quote: "Working with this team has transformed our social media presence. Their creative approach and strategic thinking have helped us connect with our audience in ways we never imagined possible.",
      author: "Sarah Johnson",
      position: "Marketing Director, Luxury Fashion House",
      videoUrl: "https://www.youtube.com/embed/example1",
      thumbnail: "/images/testimonials/sarah-testimonial.jpg"
    },
    {
      quote: "The results we've seen from our content strategy have exceeded our expectations. The team's understanding of our industry and target audience is impressive.",
      author: "Michael Chen",
      position: "CEO, Tech Startup",
      videoUrl: "https://www.youtube.com/embed/example2",
      thumbnail: "/images/testimonials/michael-testimonial.jpg"
    },
    {
      quote: "Their ability to create engaging content that resonates with our customers has been instrumental in our growth. The ROI has been outstanding.",
      author: "David Martinez",
      position: "Marketing Manager, Restaurant Chain",
      videoUrl: "https://www.youtube.com/embed/example3",
      thumbnail: "/images/testimonials/david-testimonial.jpg"
    }
  ];

  const clients = [
    {
      name: "Fashion Brand X",
      logo: "/images/clients/fashion-brand-x.png"
    },
    {
      name: "Tech Company Y",
      logo: "/images/clients/tech-company-y.png"
    },
    {
      name: "Restaurant Group Z",
      logo: "/images/clients/restaurant-group-z.png"
    },
    {
      name: "Fitness Brand A",
      logo: "/images/clients/fitness-brand-a.png"
    },
    {
      name: "Lifestyle Brand B",
      logo: "/images/clients/lifestyle-brand-b.png"
    },
    {
      name: "Food Company C",
      logo: "/images/clients/food-company-c.png"
    },
    {
      name: "Wellness Brand D",
      logo: "/images/clients/wellness-brand-d.png"
    },
    {
      name: "Tech Startup E",
      logo: "/images/clients/tech-startup-e.png"
    }
  ];

  const stats = [
    {
      value: "100M+",
      label: "Total Views"
    },
    {
      value: "500+",
      label: "Campaigns"
    },
    {
      value: "50+",
      label: "Brands Served"
    },
    {
      value: "95%",
      label: "Client Satisfaction"
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
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#b370f1] via-[#ffd93d] to-[#4ee1a0] bg-clip-text text-transparent mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-white/80">
              Hear from our clients about their experience working with us and see how 
              we've helped them achieve their goals through strategic content creation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16">
        <SectionBackground 
          gradientFrom="[#4ee1a0]" 
          gradientTo="[#ffd93d]" 
          opacity="30"
          gridOpacity="15"
        />
        <div className="container mx-auto px-4 relative z-10">
          <StatsOverviewBar stats={stats} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-16">
        <SectionBackground 
          gradientFrom="[#ffd93d]" 
          gradientTo="[#b370f1]" 
          opacity="30"
          gridOpacity="15"
        />
        <div className="container mx-auto px-4 relative z-10">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="relative py-16">
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] bg-clip-text text-transparent mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-white/80">
              We've had the privilege of working with amazing brands across various industries.
            </p>
          </motion.div>
          <ClientLogoWall clients={clients} />
        </div>
      </section>

      {/* Video Testimonial Popup */}
      <VideoTestimonialPopup
        videoUrl={selectedVideo?.videoUrl}
        title={selectedVideo?.title}
        author={selectedVideo?.author}
        position={selectedVideo?.position}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </main>
  );
};

export default Testimonials; 