import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionBackground } from '../components/Global/SectionBackground';
import { PortfolioFilterTabs } from '../components/Portfolio/PortfolioFilterTabs';
import { PortfolioItemCard } from '../components/Portfolio/PortfolioItemCard';
import { PortfolioModal } from '../components/Portfolio/PortfolioModal';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'instagram', label: 'Instagram' },
    { id: 'youtube', label: 'YouTube' },
    { id: 'tiktok', label: 'TikTok' },
    { id: 'brand', label: 'Brand Films' }
  ];

  const projects = [
    {
      id: 1,
      title: "Summer Collection Launch",
      brand: "Fashion Brand X",
      category: "instagram",
      platform: "Instagram",
      mediaType: "video",
      thumbnail: "/images/portfolio/fashion-launch.jpg",
      objective: "Launch the summer collection with maximum engagement and drive sales through social media.",
      approach: [
        "Developed a multi-platform content strategy",
        "Created engaging short-form videos",
        "Coordinated influencer partnerships",
        "Implemented targeted ad campaigns"
      ],
      results: [
        { value: "2.5M", label: "Total Views" },
        { value: "45%", label: "Engagement Rate" },
        { value: "3x", label: "Sales Increase" },
        { value: "500K", label: "New Followers" }
      ]
    },
    {
      id: 2,
      title: "Product Tutorial Series",
      brand: "Tech Company Y",
      category: "youtube",
      platform: "YouTube",
      mediaType: "video",
      thumbnail: "/images/portfolio/tech-tutorial.jpg",
      objective: "Create educational content that helps users understand and utilize the product features effectively.",
      approach: [
        "Researched common user pain points",
        "Developed step-by-step tutorials",
        "Created engaging visuals and animations",
        "Optimized for search and discovery"
      ],
      results: [
        { value: "1.2M", label: "Total Views" },
        { value: "85%", label: "Watch Time" },
        { value: "40%", label: "Support Tickets Reduced" },
        { value: "200K", label: "Subscribers" }
      ]
    },
    {
      id: 3,
      title: "Viral Dance Challenge",
      brand: "Music Artist Z",
      category: "tiktok",
      platform: "TikTok",
      mediaType: "video",
      thumbnail: "/images/portfolio/dance-challenge.jpg",
      objective: "Create a viral dance challenge to promote the new single and increase streaming numbers.",
      approach: [
        "Designed an easy-to-follow dance routine",
        "Created engaging tutorial content",
        "Partnered with dance influencers",
        "Launched a hashtag challenge"
      ],
      results: [
        { value: "5M", label: "Challenge Videos" },
        { value: "2B", label: "Total Views" },
        { value: "4x", label: "Streaming Increase" },
        { value: "1M", label: "New Followers" }
      ]
    },
    {
      id: 4,
      title: "Brand Story Film",
      brand: "Luxury Brand A",
      category: "brand",
      platform: "YouTube",
      mediaType: "video",
      thumbnail: "/images/portfolio/brand-story.jpg",
      objective: "Create an emotional brand story film that connects with the audience and strengthens brand identity.",
      approach: [
        "Developed a compelling narrative",
        "Shot in multiple locations",
        "Created custom music score",
        "Implemented multi-channel distribution"
      ],
      results: [
        { value: "10M", label: "Total Views" },
        { value: "95%", label: "Positive Sentiment" },
        { value: "2x", label: "Brand Recognition" },
        { value: "50%", label: "Sales Increase" }
      ]
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

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
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-400 to-indigo-400 text-transparent bg-clip-text text-center mb-10 drop-shadow-[0_0_15px_rgba(179,112,241,0.5)]">
              Our Work
            </h1>
            <p className="text-xl text-white/80">
              Explore our portfolio of successful content campaigns and creative projects 
              that have made an impact for brands across various platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-16">
        <SectionBackground 
          gradientFrom="[#4ee1a0]" 
          gradientTo="[#ffd93d]" 
          opacity="30"
          gridOpacity="15"
        />
        <div className="container mx-auto px-4 relative z-10">
          {/* Filter Tabs */}
          <PortfolioFilterTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            className="mb-12"
          />

          {/* Portfolio Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <PortfolioItemCard
                key={project.id}
                title={project.title}
                brand={project.brand}
                category={project.category}
                thumbnail={project.thumbnail}
                metrics={project.results.slice(0, 2)}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <PortfolioModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
};

export default Portfolio; 