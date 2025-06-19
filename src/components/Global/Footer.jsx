import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaArrowRight
} from 'react-icons/fa6';
import { FloatingActionButton } from './FloatingActionButton';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: FaFacebookF, url: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: FaLinkedinIn, url: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-[#18181b] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#b370f1] to-[#ffd93d] bg-clip-text text-transparent">
                Content Spark
              </h2>
            </Link>
            <p className="text-white/70 leading-relaxed">
              Empowering brands with creative content solutions that drive growth and engagement.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#b370f1] hover:text-white transition-colors duration-300"
                  aria-label={social.label}
                >
                  {React.createElement(social.icon, { className: "w-4 h-4" })}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-[#b370f1] to-[#ffd93d] bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-[#b370f1] to-[#ffd93d] bg-clip-text text-transparent">
              Global Services
            </h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Serving clients worldwide with our premium content creation and marketing solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-[#b370f1]/10 text-[#b370f1] text-sm">
                Content Strategy
              </span>
              <span className="px-3 py-1 rounded-full bg-[#ffd93d]/10 text-[#ffd93d] text-sm">
                Video Production
              </span>
              <span className="px-3 py-1 rounded-full bg-[#ffffff]/10 text-[#ffffff] text-sm">
                Social Media
              </span>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-[#b370f1] to-[#ffd93d] bg-clip-text text-transparent">
              Stay Updated
            </h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for the latest content marketing insights and updates.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#b370f1] transition-colors duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-[#b370f1] to-[#ffd93d] text-white font-medium hover:opacity-90 transition-opacity duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Content Spark. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
        <FloatingActionButton />
      </div>
    </footer>
  );
};

export default Footer; 