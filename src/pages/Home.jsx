import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Star, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.jpg';
import { servicesData, testimonialsData, statsData, galleryData } from '../data/mockData';

export default function Home() {
  const whatsappUrl = 'https://wa.me/919999999999?text=Hello%20Sai%20Ram%20Plate%20Decoration%2C%20I%20would%20like%20to%20inquire%20about%20booking%20plate%20decorations.';
  
  // Get first 3 services for features
  const featuredServices = servicesData.slice(0, 3);
  // Get first 4 gallery items for preview
  const galleryPreview = galleryData.slice(0, 4);

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center px-4 md:px-8 overflow-hidden py-12">
        {/* Floating background decorative plate elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 left-6 md:left-20 w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-gold-default/30 overflow-hidden shadow-xl hidden sm:block"
        >
          <img 
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=300&auto=format&fit=crop" 
            alt="Decorative Plate" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 right-6 md:right-20 w-28 h-28 md:w-40 md:h-40 rounded-full border-2 border-gold-default/30 overflow-hidden shadow-xl hidden sm:block"
        >
          <img 
            src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=300&auto=format&fit=crop" 
            alt="Custom Plate Decor" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hero Card */}
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Slogan & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col text-left gap-6 px-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-default/20 bg-gold-default/5 text-gold-default text-xs uppercase tracking-widest font-semibold w-fit">
              ✦ Luxury Plate Artistry ✦
            </div>
            
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-maroon-default dark:text-gold-default leading-tight">
              Transforming Celebrations <br className="hidden sm:inline" />
              <span className="text-maroon-light dark:text-cream font-medium italic">into Beautiful Memories</span>
            </h1>
            
            <p className="text-base sm:text-lg text-maroon-dark/80 dark:text-cream/80 max-w-xl font-light leading-relaxed">
              Elevate your sacred moments with bespoke handcrafted thalis, coconut platters, ring trays, and custom event displays designed with royalty in mind.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-maroon-default to-maroon-light text-white font-medium shadow-lg hover:shadow-maroon-default/20 border border-maroon-light/20 transition-all duration-300 reflection-shine"
                >
                  <Calendar size={18} />
                  <span>Book Now</span>
                </motion.div>
              </Link>
              
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-gold-default/30 dark:border-gold-default/40 text-maroon-default dark:text-gold-default bg-white/20 dark:bg-white/5 backdrop-blur-md font-medium shadow hover:bg-gold-default/5 transition-all duration-300 reflection-shine"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Hero Rotating Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group cursor-default">
              
              {/* Liquid glass frame border backdrop */}
              <div className="absolute inset-[-15px] rounded-3xl bg-gradient-to-tr from-gold-default/20 via-transparent to-maroon-default/10 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Hero Logo Card */}
              <div className="relative p-6 rounded-3xl border border-white/40 dark:border-gold-default/20 bg-white/40 dark:bg-dark-card/40 backdrop-blur-2xl shadow-2xl flex flex-col items-center gap-6 max-w-sm sm:max-w-md w-full transition-transform duration-500 group-hover:scale-102">
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    className="absolute inset-[-8px] rounded-full border border-dashed border-gold-default/40"
                  />
                  <img
                    src={logo}
                    alt="Sai Ram Official Logo"
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-gold-default shadow-xl object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-display font-semibold text-xl text-maroon-default dark:text-gold-default">
                    Sai Ram Plate Decoration
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-maroon-light dark:text-cream/60 font-medium mt-1">
                    Signature Handcrafted Artistry
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="w-full py-16 px-4 md:px-8 bg-gradient-to-b from-transparent via-gold-default/3 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {statsData.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/40 dark:border-gold-default/10 bg-white/30 dark:bg-dark-card/30 backdrop-blur-lg shadow-sm text-center flex flex-col justify-center"
              >
                <span className="font-display font-bold text-3xl sm:text-4xl text-maroon-default dark:text-gold-default text-glow-gold">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-maroon-dark dark:text-cream mt-1 tracking-wide">
                  {stat.label}
                </span>
                <span className="text-xs text-maroon-dark/60 dark:text-cream/50 mt-2 leading-relaxed">
                  {stat.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES */}
      <section className="w-full py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-gold-default font-semibold">Exquisite Offerings</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-maroon-default dark:text-gold-default">
            Featured Plate Decorations
          </h2>
          <div className="w-16 h-0.5 bg-gold-default/70 mt-1" />
          <p className="text-sm sm:text-base text-maroon-dark/75 dark:text-cream/75 max-w-xl font-light">
            Each creation is handcrafted, incorporating premium fabrics, pearls, rotating structures, and lights tailored to your celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl border border-white/40 dark:border-gold-default/15 bg-white/40 dark:bg-dark-card/40 backdrop-blur-xl shadow-md overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:border-gold-default/30"
            >
              {/* Service image container */}
              <div className="relative h-64 overflow-hidden border-b border-white/20 dark:border-gold-default/10">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-maroon-default/90 text-gold-default border border-gold-default/20 text-xs px-3 py-1.5 rounded-full font-semibold">
                  {service.rating} ★
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className="font-display font-semibold text-xl text-maroon-default dark:text-gold-default group-hover:text-gold-default transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-maroon-dark/70 dark:text-cream/70 mt-3 font-light leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="mt-6 pt-4 border-t border-maroon-default/5 dark:border-gold-default/10 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-maroon-light dark:text-cream/60">Starts from</span>
                  <span className="font-bold text-sm text-maroon-default dark:text-gold-default font-mono">{service.priceRange}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link to="/services">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-maroon-default dark:text-gold-default hover:text-gold-dark transition-colors duration-300 border-b border-gold-default pb-1 cursor-pointer"
            >
              <span>Explore All Services</span>
              <ArrowRight size={14} />
            </motion.div>
          </Link>
        </div>
      </section>

      {/* 4. GALLERY PREVIEW */}
      <section className="w-full py-20 px-4 md:px-8 bg-white/20 dark:bg-dark-card/20 backdrop-blur-xs border-y border-white/10 dark:border-gold-default/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-default font-semibold">Visual Splendor</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-maroon-default dark:text-gold-default mt-2">
                Our Showcase Preview
              </h2>
              <div className="w-12 h-0.5 bg-gold-default/70 mt-3" />
            </div>
            <Link to="/gallery">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-2.5 rounded-xl border border-maroon-default/20 dark:border-gold-default/30 text-maroon-default dark:text-gold-default hover:bg-gold-default/5 transition-colors duration-300 text-sm font-semibold cursor-pointer reflection-shine"
              >
                View Full Gallery
              </motion.div>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryPreview.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative h-80 rounded-2xl overflow-hidden border border-white/20 dark:border-gold-default/10 shadow hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/90 via-maroon-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left" >
                  <span className="text-[10px] text-gold-default uppercase tracking-widest font-semibold">{item.category}</span>
                  <h4 className="font-display text-lg text-white font-medium mt-1">{item.title}</h4>
                  <p className="text-xs text-cream/80 mt-1 font-light leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CUSTOMER REVIEWS */}
      <section className="w-full py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-gold-default font-semibold">Testimonials</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-maroon-default dark:text-gold-default">
            What Our Clients Say
          </h2>
          <div className="w-16 h-0.5 bg-gold-default/70 mt-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((test, i) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/40 dark:border-gold-default/10 bg-white/30 dark:bg-dark-card/30 backdrop-blur-lg shadow-sm text-left flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-gold-default mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      size={15} 
                      className={starIndex < Math.floor(test.rating) ? "fill-gold-default" : "text-gold-default/30"} 
                    />
                  ))}
                </div>
                <p className="text-sm italic text-maroon-dark/80 dark:text-cream/80 leading-relaxed font-light">
                  "{test.review}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-maroon-default/5 dark:border-gold-default/10 flex items-center justify-between">
                <div>
                  <h5 className="font-semibold text-sm text-maroon-default dark:text-gold-default">
                    {test.name}
                  </h5>
                  <span className="text-[10px] text-maroon-light dark:text-cream/60 font-medium">
                    {test.role}
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-gold-default/20 bg-gold-default/5 text-gold-default font-semibold uppercase tracking-wider">
                  {test.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
