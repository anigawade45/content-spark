import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Industries', path: '/industries' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const logoVariants = {
    normal: { scale: 1 },
    hover: { 
      scale: 1.05,
      rotate: [0, -5, 5, -5, 0],
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 10
      }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={cn(
        'fixed w-full z-50 transition-all duration-500',
        isScrolled
          ? 'bg-[#18181b]/95 backdrop-blur-md shadow-lg'
          : 'bg-[#18181b]'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="normal"
            whileHover="hover"
          >
            <Link 
              to="/" 
              className={cn(
                'transition-colors duration-300 flex items-center group',
                isScrolled ? 'text-[#FCEC01]' : 'text-[#FCEC01]'
              )}
            >
              <img
                src="images/logo.png"
                alt="ContentSpark Logo"
                className="h-14 w-auto object-contain transition-all duration-300 drop-shadow-[0_0_16px_#FCEC01] group-hover:scale-110 group-hover:drop-shadow-[0_0_32px_#A511CE,0_0_48px_#FCEC01] drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                custom={i}
                variants={itemVariants}
                onHoverStart={() => setHoveredItem(item.path)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <Link
                  to={item.path}
                  className={cn(
                    'relative px-2 py-1 transition-colors duration-300 group',
                    isScrolled
                      ? 'text-gray-200 hover:text-[#FCEC01]'
                      : 'text-gray-200 hover:text-[#FCEC01]',
                    location.pathname === item.path && 'font-semibold'
                  )}
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#A511CE]"
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: hoveredItem === item.path || location.pathname === item.path ? 1 : 0 
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  {hoveredItem === item.path && (
                    <motion.span
                      className="absolute -inset-1 bg-[#A511CE]/5 rounded-lg z-[-1]"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={cn(
              'md:hidden transition-colors duration-300',
              isScrolled ? 'text-gray-600' : 'text-white'
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              className="w-6 h-6 flex items-center justify-center"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: "auto", 
                opacity: 1,
                transition: {
                  height: {
                    duration: 0.4,
                    ease: "easeOut"
                  },
                  opacity: {
                    duration: 0.3,
                    delay: 0.1
                  }
                }
              }}
              exit={{ 
                height: 0, 
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.4,
                    ease: "easeIn"
                  },
                  opacity: {
                    duration: 0.3
                  }
                }
              }}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                className="flex flex-col space-y-4 py-4"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.07,
                      delayChildren: 0.2
                    }
                  }
                }}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 }
                        }
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 }
                        }
                      }
                    }}
                  >
                    <Link
                      to={item.path}
                      className={cn(
                        'block px-4 py-2 transition-colors duration-300 rounded-lg',
                        isScrolled
                          ? 'text-gray-600 hover:text-[#A511CE] hover:bg-[#A511CE]/5'
                          : 'text-white/90 hover:text-white hover:bg-white/5',
                        location.pathname === item.path && 'font-semibold'
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'w-full px-6 py-3 rounded-full transition-all duration-300',
                    isScrolled
                      ? 'bg-gradient-to-r from-[#A511CE] to-[#FCEC01] text-[#18181b] hover:shadow-lg hover:shadow-[#A511CE]/20'
                      : 'bg-gradient-to-r from-[#A511CE] to-[#FCEC01] text-[#18181b] hover:shadow-lg hover:shadow-[#A511CE]/20'
                  )}
                >
                  Get Started
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 