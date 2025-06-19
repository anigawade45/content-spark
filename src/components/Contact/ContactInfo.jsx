import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export const ContactInfo = () => {
  const contactDetails = [
    {
      icon: FaMapMarkerAlt,
      title: 'Our Location',
      content: '123 Content Street, Digital City, 12345',
      link: 'https://maps.google.com'
    },
    {
      icon: FaPhone,
      title: 'Phone Number',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: FaEnvelope,
      title: 'Email Address',
      content: 'hello@contentspark.com',
      link: 'mailto:hello@contentspark.com'
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: null
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-8"
    >
      <div className="bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
        
        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] flex items-center justify-center text-white">
                <detail.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">{detail.title}</h4>
                {detail.link ? (
                  <a
                    href={detail.link}
                    target={detail.link.startsWith('http') ? '_blank' : undefined}
                    rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {detail.content}
                  </a>
                ) : (
                  <p className="text-white/70">{detail.content}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
        
        <div className="flex gap-4">
          {['Instagram', 'TikTok', 'YouTube'].map((platform, index) => (
            <motion.a
              key={platform}
              href={`https://${platform.toLowerCase()}.com`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-center hover:bg-white/10 transition-colors"
            >
              {platform}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}; 