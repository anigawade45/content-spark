import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaBuilding, FaDollarSign, FaPaperPlane } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export const SmartContactForm = ({
  className,
  onSubmit
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Here you would typically make an API call to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', company: '', budget: '', message: '' });
      setErrors({});
    } catch (error) {
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

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
      
      {/* Form Content */}
      <div className="relative bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
        
        {submitSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-[#4ee1a0]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPaperPlane className="w-8 h-8 text-[#4ee1a0]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-white/70">
              Thank you for reaching out. We'll get back to you shortly.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-white/70 mb-2">Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="w-5 h-5 text-white/40" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={cn(
                    "w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border",
                    errors.name ? "border-red-500" : "border-white/20",
                    "text-white placeholder-white/50 focus:outline-none focus:border-[#4ee1a0]"
                  )}
                  placeholder="Your name"
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-white/70 mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="w-5 h-5 text-white/40" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={cn(
                    "w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border",
                    errors.email ? "border-red-500" : "border-white/20",
                    "text-white placeholder-white/50 focus:outline-none focus:border-[#4ee1a0]"
                  )}
                  placeholder="your@email.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Company Field */}
            <div>
              <label className="block text-white/70 mb-2">Company</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaBuilding className="w-5 h-5 text-white/40" />
                </div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#4ee1a0]"
                  placeholder="Your company name"
                />
              </div>
            </div>

            {/* Budget Field */}
            <div>
              <label className="block text-white/70 mb-2">Budget Range</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaDollarSign className="w-5 h-5 text-white/40" />
                </div>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#4ee1a0]"
                >
                  <option value="">Select budget range</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k+">$25,000+</option>
                </select>
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-white/70 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={cn(
                  "w-full px-4 py-3 rounded-xl bg-white/10 border",
                  errors.message ? "border-red-500" : "border-white/20",
                  "text-white placeholder-white/50 focus:outline-none focus:border-[#4ee1a0]"
                )}
                placeholder="Tell us about your project..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            {errors.submit && (
              <p className="text-sm text-red-500">{errors.submit}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#b370f1] to-[#4ee1a0]",
                "text-white font-medium hover:opacity-90 transition-opacity",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}; 