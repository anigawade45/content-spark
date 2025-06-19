import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PricingCard } from '@/components/Pricing/PricingCard';
import { SectionBackground } from '@/components/Global/SectionBackground';
import { SectionTitle } from '@/components/Global/SectionTitle';

const SPARK_TRAIL = {
  title: 'Spark Trail Package',
  price: '5,000',
  description: 'Kickstart your content journey with our special trial package',
  features: [
    '2 Reels',
    'Personalized Branding',
    'Powerful Editing'
  ],
  isPopular: false
};

const FAQS = [
  {
    question: "What's included in the Spark Trail Package?",
    answer:
      'The Spark Trail Package includes 2 professionally crafted reels with personalized branding and powerful editing to showcase your brand in the best light.'
  },
  {
    question: 'How long does it take to get started?',
    answer:
      "Once you select the package, we'll have you set up within 24-48 hours. We'll schedule an onboarding call to understand your needs and get everything configured."
  },
  {
    question: 'What happens after the trial package?',
    answer:
      'After completing the trial package, we can discuss your experience and create a customized plan that best fits your ongoing content needs.'
  },
  {
    question: 'Do you offer custom packages?',
    answer:
      'Yes, we can create custom packages for businesses with specific needs. Contact us to discuss your requirements.'
  }
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    // Here you would typically handle the plan selection
    // e.g., redirect to contact form or checkout
    console.log('Selected plan:', plan);
  };

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <SectionBackground opacity="0" />
        
        <div className="container mx-auto px-5 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <SectionTitle
              title="Simple, Transparent Pricing"
              subtitle="Start your content journey with our special trial package. Experience the power of professional content creation."
            />
          </motion.div>
        </div>
      </section>

      {/* Spark Trail Package */}
      <section className="relative py-1 overflow-hidden">
        <SectionBackground opacity="0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-md mx-auto">
            <PricingCard
              {...SPARK_TRAIL}
              onSelect={() => handlePlanSelect(SPARK_TRAIL)}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 overflow-hidden">
        <SectionBackground opacity="0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Frequently Asked Questions"
            />
            
            <div className="space-y-6">
              {FAQS.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-white/70">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 