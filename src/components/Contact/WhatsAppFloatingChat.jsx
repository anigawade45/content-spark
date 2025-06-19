import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

export const WhatsAppFloatingChat = ({
  phoneNumber,
  message = "Hello! I'd like to learn more about your services."
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-72 bg-[#1a1a2e] rounded-2xl p-4 shadow-lg border border-white/10"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-medium">Chat with us</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Click the button below to start a conversation on WhatsApp.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full px-4 py-2 bg-[#25D366] text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              Open WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      >
        <FaWhatsapp className="w-7 h-7" />
      </motion.button>
    </div>
  );
}; 