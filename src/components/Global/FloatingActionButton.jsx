import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

export const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/your-number',
      color: '#25D366'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      href: 'mailto:your@email.com',
      color: '#b370f1'
    },
    {
      icon: FaPhone,
      label: 'Call',
      href: 'tel:your-number',
      color: '#ffd93d'
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-20 right-0 flex flex-col gap-4"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 px-4 py-2 bg-[#1a1a2e] rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                style={{
                  border: `1px solid ${item.color}40`,
                  background: `linear-gradient(45deg, ${item.color}10, transparent)`
                }}
              >
                <span className="text-xl" style={{ color: item.color }}>
                  {React.createElement(item.icon)}
                </span>
                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-gradient-to-r from-[#b370f1] to-[#ffd93d] p-0.5 shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="w-full h-full rounded-full bg-[#1a1a2e] flex items-center justify-center">
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl text-white"
          >
            +
          </motion.div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#b370f1] to-[#ffd93d] opacity-0 hover:opacity-20 blur-xl transition-opacity duration-300" />
      </motion.button>
    </div>
  );
}; 