import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionBackground } from '../components/Global/SectionBackground';
import { BlogCard } from '@/components/Blog/BlogCard';
import { BlogCategoryTags } from '@/components/Blog/BlogCategoryTags';
import { NewsletterCTA } from '@/components/Blog/NewsletterCTA';

// Sample blog data
const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Future of Content Creation: AI and Human Collaboration',
    excerpt: 'Explore how artificial intelligence is transforming content creation while maintaining the human touch that makes content truly engaging.',
    thumbnail: '/images/blog/ai-content.jpg',
    category: 'Technology',
    date: 'March 15, 2024',
    readTime: '5 min read',
    author: {
      name: 'Sarah Johnson',
      avatar: '/images/team/sarah.jpg'
    }
  },
  {
    id: 2,
    title: '10 Social Media Trends That Will Dominate 2024',
    excerpt: 'Stay ahead of the curve with our analysis of the most impactful social media trends that will shape content strategy in 2024.',
    thumbnail: '/images/blog/social-trends.jpg',
    category: 'Social Media',
    date: 'March 10, 2024',
    readTime: '7 min read',
    author: {
      name: 'Michael Chen',
      avatar: '/images/team/michael.jpg'
    }
  },
  {
    id: 3,
    title: 'How to Create Viral Content: A Data-Driven Approach',
    excerpt: 'Learn the science behind viral content and how to apply data-driven strategies to increase your content reach.',
    thumbnail: '/images/blog/viral-content.jpg',
    category: 'Strategy',
    date: 'March 5, 2024',
    readTime: '6 min read',
    author: {
      name: 'Emily Rodriguez',
      avatar: '/images/team/emily.jpg'
    }
  },
  {
    id: 4,
    title: 'The Power of Storytelling in Brand Marketing',
    excerpt: 'Discover how compelling storytelling can transform your brand marketing and create deeper connections with your audience.',
    thumbnail: '/images/blog/storytelling.jpg',
    category: 'Marketing',
    date: 'February 28, 2024',
    readTime: '8 min read',
    author: {
      name: 'David Kim',
      avatar: '/images/team/david.jpg'
    }
  },
  {
    id: 5,
    title: 'Video Content Optimization: Best Practices for 2024',
    excerpt: 'Master the art of video content optimization with our comprehensive guide to creating engaging and effective video content.',
    thumbnail: '/images/blog/video-optimization.jpg',
    category: 'Video',
    date: 'February 20, 2024',
    readTime: '9 min read',
    author: {
      name: 'Lisa Patel',
      avatar: '/images/team/lisa.jpg'
    }
  },
  {
    id: 6,
    title: 'Content Strategy for E-commerce: Driving Sales Through Storytelling',
    excerpt: 'Learn how to leverage content strategy to boost your e-commerce sales and create memorable shopping experiences.',
    thumbnail: '/images/blog/ecommerce-content.jpg',
    category: 'E-commerce',
    date: 'February 15, 2024',
    readTime: '7 min read',
    author: {
      name: 'James Wilson',
      avatar: '/images/team/james.jpg'
    }
  }
];

const BLOG_CATEGORIES = [
  'All',
  'Technology',
  'Social Media',
  'Strategy',
  'Marketing',
  'Video',
  'E-commerce'
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
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
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent text-center mb-10 drop-shadow-[0_0_15px_rgba(179,112,241,0.5)] transition-all duration-300 hover:drop-shadow-[0_0_25px_rgba(179,112,241,0.7)] hover:scale-[1.02]">
              Insights & Resources
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Discover the latest trends, strategies, and insights in social media marketing
              and content creation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 relative">
        <SectionBackground 
          gradientFrom="[#4ee1a0]" 
          gradientTo="[#ffd93d]" 
          opacity="20"
          gridOpacity="10"
        />
        <div className="container mx-auto px-4 relative z-10">
          <BlogCategoryTags
            categories={BLOG_CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 relative">
        <SectionBackground 
          gradientFrom="[#ffd93d]" 
          gradientTo="[#b370f1]" 
          opacity="20"
          gridOpacity="10"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                {...post}
                onClick={() => {
                  // Handle navigation to blog post
                  console.log('Navigate to post:', post.id);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 relative">
        <SectionBackground 
          gradientFrom="[#b370f1]" 
          gradientTo="[#4ee1a0]" 
          opacity="30"
          gridOpacity="15"
        />
        <div className="container mx-auto px-4 relative z-10">
          <NewsletterCTA />
        </div>
      </section>
    </div>
  );
};

export default Blog; 