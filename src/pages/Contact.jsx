import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react';

export default function Contact() {
  const location = useLocation();
  
  // Read service passed via Link state
  const preselected = location.state?.selectedService || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselected) {
      setFormData(prev => ({ ...prev, service: preselected }));
    }
  }, [preselected]);

  const serviceOptions = [
    'Wedding Plate Decoration',
    'Engagement Plate Decoration',
    'Baby Shower Decoration',
    'Festival Decoration',
    'Return Gift Decoration',
    'Housewarming Decoration',
    'Naming Ceremony Decoration',
    'Custom Event Decorations'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Event date is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleSendWhatsApp = () => {
    const textMessage = `Hello Sai Ram Plate Decoration!
I would like to book a plate decoration:
- *Name:* ${formData.name}
- *Phone:* ${formData.phone}
- *Email:* ${formData.email || 'N/A'}
- *Service:* ${formData.service}
- *Event Date:* ${formData.date}
- *Requirements:* ${formData.message || 'None'}`;

    const encoded = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/919999999999?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full flex flex-col items-center px-4 md:px-8 py-12 max-w-7xl mx-auto">
      
      {/* Header */}
      <section className="text-center flex flex-col items-center gap-3 mb-16">
        <span className="text-xs uppercase tracking-widest text-gold-default font-semibold">Get In Touch</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-maroon-default dark:text-gold-default">
          Contact Our Atelier
        </h2>
        <div className="w-16 h-0.5 bg-gold-default/70 mt-1" />
        <p className="text-sm sm:text-base text-maroon-dark/70 dark:text-cream/70 max-w-xl font-light">
          Have an upcoming celebration? Fill out our booking query form or message us directly on WhatsApp to coordinate with our design team.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full text-left items-start">
        
        {/* LEFT COLUMN: CONTACT DETAILS & GOOGLE MAPS */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full">
          
          {/* Atelier Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <a href="tel:+919999999999" className="p-5 rounded-2xl border border-white/40 dark:border-gold-default/10 bg-white/20 dark:bg-dark-card/25 backdrop-blur-md hover:border-gold-default/30 transition-all duration-300 flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-gold-default/10 text-gold-default flex items-center justify-center border border-gold-default/20 group-hover:bg-gold-default group-hover:text-white transition-colors duration-300">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-maroon-light dark:text-cream/50 font-medium">Call Us</span>
                <span className="text-sm font-semibold text-maroon-default dark:text-gold-default mt-0.5">+91 99999 99999</span>
              </div>
            </a>

            <a href="mailto:info@sairamplates.com" className="p-5 rounded-2xl border border-white/40 dark:border-gold-default/10 bg-white/20 dark:bg-dark-card/25 backdrop-blur-md hover:border-gold-default/30 transition-all duration-300 flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-gold-default/10 text-gold-default flex items-center justify-center border border-gold-default/20 group-hover:bg-gold-default group-hover:text-white transition-colors duration-300">
                <Mail size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-maroon-light dark:text-cream/50 font-medium">Email Us</span>
                <span className="text-sm font-semibold text-maroon-default dark:text-gold-default mt-0.5">info@sairamplates.com</span>
              </div>
            </a>

          </div>

          <div className="p-6 rounded-2xl border border-white/40 dark:border-gold-default/15 bg-white/30 dark:bg-dark-card/30 backdrop-blur-xl shadow-sm flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-gold-default/10 text-gold-default flex items-center justify-center border border-gold-default/20 shrink-0">
              <MapPin size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-maroon-light dark:text-cream/50 font-medium">Business Address</span>
              <span className="text-sm font-semibold text-maroon-default dark:text-gold-default mt-1 leading-relaxed">
                123, Palace Road, Vasanth Nagar, Bengaluru, Karnataka 560001
              </span>
            </div>
          </div>

          {/* Google Maps Embed iframe */}
          <div className="rounded-2xl border border-white/40 dark:border-gold-default/15 bg-white/10 dark:bg-dark-card/10 overflow-hidden shadow-sm h-64 relative">
            <iframe 
              title="Sai Ram Plate Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.643360057285!2d77.5878345759714!3d12.99465711438902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1642289659cd%3A0x6b4f74d0dbd44535!2sPalace%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1719200000000!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0 grayscale dark:invert-[0.9] dark:opacity-75 transition-all duration-500" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        {/* RIGHT COLUMN: GLASS CONTACT FORM */}
        <div className="lg:col-span-7 w-full">
          <div className="relative p-6 sm:p-8 rounded-3xl border border-white/45 dark:border-gold-default/20 bg-white/40 dark:bg-dark-card/45 backdrop-blur-2xl shadow-xl">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <h3 className="font-display font-semibold text-2xl text-maroon-default dark:text-gold-default mb-2">
                    Inquire Booking
                  </h3>
                  
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold text-maroon-dark/80 dark:text-cream/80">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Aditi Rao"
                      className="px-4 py-3 rounded-xl border border-maroon-default/10 dark:border-gold-default/10 bg-white/30 dark:bg-black/15 text-sm outline-none focus:border-gold-default transition-all duration-300 text-maroon-dark dark:text-cream placeholder-maroon-dark/45 dark:placeholder-cream/40"
                    />
                    {errors.name && <span className="text-xs text-red-500 font-medium">{errors.name}</span>}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs uppercase tracking-wider font-semibold text-maroon-dark/80 dark:text-cream/80">Phone Number *</label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 98765 43210"
                        className="px-4 py-3 rounded-xl border border-maroon-default/10 dark:border-gold-default/10 bg-white/30 dark:bg-black/15 text-sm outline-none focus:border-gold-default transition-all duration-300 text-maroon-dark dark:text-cream placeholder-maroon-dark/45 dark:placeholder-cream/40"
                      />
                      {errors.phone && <span className="text-xs text-red-500 font-medium">{errors.phone}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold text-maroon-dark/80 dark:text-cream/80">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. aditi@example.com"
                        className="px-4 py-3 rounded-xl border border-maroon-default/10 dark:border-gold-default/10 bg-white/30 dark:bg-black/15 text-sm outline-none focus:border-gold-default transition-all duration-300 text-maroon-dark dark:text-cream placeholder-maroon-dark/45 dark:placeholder-cream/40"
                      />
                    </div>

                  </div>

                  {/* Service dropdown & Date Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="service" className="text-xs uppercase tracking-wider font-semibold text-maroon-dark/80 dark:text-cream/80">Required Service *</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="px-4 py-3 rounded-xl border border-maroon-default/10 dark:border-gold-default/10 bg-white/30 dark:bg-black/15 text-sm outline-none focus:border-gold-default transition-all duration-300 text-maroon-dark dark:text-cream select-none cursor-pointer"
                      >
                        <option value="" disabled className="text-maroon-dark/50 dark:text-cream/40">Select a Service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="text-maroon-dark bg-white dark:bg-dark-card dark:text-cream">{opt}</option>
                        ))}
                      </select>
                      {errors.service && <span className="text-xs text-red-500 font-medium">{errors.service}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="date" className="text-xs uppercase tracking-wider font-semibold text-maroon-dark/80 dark:text-cream/80">Event Date *</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="px-4 py-3 rounded-xl border border-maroon-default/10 dark:border-gold-default/10 bg-white/30 dark:bg-black/15 text-sm outline-none focus:border-gold-default transition-all duration-300 text-maroon-dark dark:text-cream"
                      />
                      {errors.date && <span className="text-xs text-red-500 font-medium">{errors.date}</span>}
                    </div>

                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold text-maroon-dark/80 dark:text-cream/80">Special Requirements</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Enter custom themes, color choices, plate sizes or any queries..."
                      className="px-4 py-3 rounded-xl border border-maroon-default/10 dark:border-gold-default/10 bg-white/30 dark:bg-black/15 text-sm outline-none focus:border-gold-default transition-all duration-300 text-maroon-dark dark:text-cream placeholder-maroon-dark/45 dark:placeholder-cream/40 resize-none"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:flex-1 py-3.5 rounded-xl bg-gradient-to-r from-maroon-default to-maroon-light text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-md reflection-shine"
                    >
                      <Send size={14} />
                      <span>Submit Query</span>
                    </motion.button>
                  </div>

                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                    className="text-gold-default"
                  >
                    <CheckCircle size={64} className="fill-gold-default/10" />
                  </motion.div>
                  
                  <div>
                    <h3 className="font-display font-semibold text-2xl text-maroon-default dark:text-gold-default">
                      Query Submitted!
                    </h3>
                    <p className="text-sm text-maroon-dark/70 dark:text-cream/70 mt-2 max-w-sm leading-relaxed font-light">
                      Thank you for contacting us, {formData.name}. Our luxury event coordinators will review your design requirements and email you shortly.
                    </p>
                  </div>

                  <div className="w-full border-t border-maroon-default/5 dark:border-gold-default/10 my-2" />

                  <div className="flex flex-col gap-3.5 items-center w-full">
                    <p className="text-xs text-maroon-dark/65 dark:text-cream/55 font-medium">
                      Want immediate feedback? Forward these details to WhatsApp:
                    </p>
                    
                    <motion.button
                      onClick={handleSendWhatsApp}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3.5 rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 cursor-pointer shadow-lg hover:shadow-emerald-500/20"
                    >
                      <MessageSquare size={16} className="fill-current" />
                      <span>Share on WhatsApp</span>
                    </motion.button>
                    
                    <button
                      onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' }); }}
                      className="text-xs text-maroon-dark/50 dark:text-cream/40 underline hover:text-gold-default transition-colors duration-300 mt-2 cursor-pointer"
                    >
                      Fill another request
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>

    </div>
  );
}
