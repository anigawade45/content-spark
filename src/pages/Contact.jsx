import React from 'react';
import { motion } from 'framer-motion';
import { SectionBackground } from '../components/Global/SectionBackground';
import { SectionTitle } from '../components/Global/SectionTitle';
import { ContactForm } from '../components/Contact/ContactForm';
import { ContactInfo } from '../components/Contact/ContactInfo';
import { CalendlyEmbed } from '@/components/Contact/CalendlyEmbed';
import { WhatsAppFloatingChat } from '@/components/Contact/WhatsAppFloatingChat';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
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
            <SectionTitle
              title="Get in Touch"
              subtitle="Ready to transform your content strategy? Let's discuss how we can help you achieve your goals."
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <SectionBackground 
          gradientFrom="[#4ee1a0]" 
          gradientTo="[#ffd93d]" 
          opacity="20"
          gridOpacity="10"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Schedule a Meeting Section */}
      <section className="py-20 relative">
        <SectionBackground 
          gradientFrom="[#ffd93d]" 
          gradientTo="[#b370f1]" 
          opacity="20"
          gridOpacity="10"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent text-center mb-10 drop-shadow-[0_0_15px_rgba(179,112,241,0.5)] transition-all duration-300 hover:drop-shadow-[0_0_25px_rgba(179,112,241,0.7)] hover:scale-[1.02]">
              Schedule a Meeting
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Book a call with our team to discuss your content needs and discover how we can help you achieve your goals.
            </p>
            <motion.a
              href="https://calendly.com/your-link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Book a Call
            </motion.a>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <CalendlyEmbed
            calendlyUrl="https://calendly.com/your-username/30min"
          />
        </div>
      </section>

      {/* WhatsApp Floating Chat */}
      <WhatsAppFloatingChat
        phoneNumber="1234567890"
        message="Hello! I'd like to learn more about Content Spark's services."
      />
    </div>
  );
} 