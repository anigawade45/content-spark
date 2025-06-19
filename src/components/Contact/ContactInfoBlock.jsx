import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGlobe } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export const ContactInfoBlock = ({
  email,
  phone,
  address,
  website,
  className
}) => {
  const contactItems = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: email,
      link: `mailto:${email}`
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: phone,
      link: `tel:${phone}`
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: address,
      link: `https://maps.google.com/?q=${encodeURIComponent(address)}`
    },
    {
      icon: FaGlobe,
      label: 'Website',
      value: website,
      link: website
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative",
        className
      )}
    >
      {/* Gradient border/glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-b from-[#b370f1] to-[#4ee1a0] rounded-2xl opacity-50 blur" />
      
      {/* Content */}
      <div className="relative bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
        
        <div className="grid gap-6">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.link}
              target={item.label === 'Website' ? '_blank' : undefined}
              rel={item.label === 'Website' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#b370f1] to-[#4ee1a0] p-0.5">
                <div className="w-full h-full rounded-xl bg-[#1a1a2e] flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white/70">{item.label}</h3>
                <p className="text-white group-hover:text-[#4ee1a0] transition-colors">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}; 