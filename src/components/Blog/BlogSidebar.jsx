import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaTag, FaClock, FaEnvelope } from 'react-icons/fa';

export const BlogSidebar = () => {
  const categories = [
    { name: 'Content Strategy', count: 12 },
    { name: 'Social Media', count: 8 },
    { name: 'Video Production', count: 6 },
    { name: 'Digital Marketing', count: 10 },
    { name: 'Industry Trends', count: 7 }
  ];

  const recentPosts = [
    {
      title: 'The Future of Content Creation',
      date: 'March 15, 2024',
      image: '/images/blog/ai-content.jpg'
    },
    {
      title: '10 Social Media Trends for 2024',
      date: 'March 10, 2024',
      image: '/images/blog/social-trends.jpg'
    },
    {
      title: 'How to Create Viral Content',
      date: 'March 5, 2024',
      image: '/images/blog/viral-content.jpg'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Search Bar */}
      <div className="bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-4 py-3 pl-12 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#b370f1] focus:border-transparent transition-all"
          />
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <FaTag className="text-[#b370f1]" />
          Categories
        </h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#"
              className="flex items-center justify-between text-white/70 hover:text-white transition-colors"
            >
              <span>{category.name}</span>
              <span className="bg-white/10 px-2 py-1 rounded-full text-sm">
                {category.count}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <FaClock className="text-[#4ee1a0]" />
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <a
              key={post.title}
              href="#"
              className="flex items-start gap-4 group"
            >
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="text-white group-hover:text-[#b370f1] transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-white/50 text-sm mt-1">{post.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <FaEnvelope className="text-[#ffd93d]" />
          Newsletter
        </h3>
        <p className="text-white/70 mb-4">
          Subscribe to our newsletter for the latest content insights and updates.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#b370f1] focus:border-transparent transition-all"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </form>
      </div>
    </motion.div>
  );
}; 