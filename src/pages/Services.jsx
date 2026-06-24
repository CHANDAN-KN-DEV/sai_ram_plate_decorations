import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/mockData';

export default function Services() {
  
  return (
    <div className="w-full flex flex-col items-center px-4 md:px-8 py-12 max-w-7xl mx-auto">
      
      {/* Page Header */}
      <section className="text-center flex flex-col items-center gap-3 mb-16">
        <span className="text-xs uppercase tracking-widest text-gold-default font-semibold">Exquisite Creations</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-maroon-default dark:text-gold-default">
          Our Speciality Services
        </h2>
        <div className="w-16 h-0.5 bg-gold-default/70 mt-1" />
        <p className="text-sm sm:text-base text-maroon-dark/70 dark:text-cream/70 max-w-xl font-light leading-relaxed">
          From sacred weddings and baby showers to customized festival arrangements, explore our high-end artisanal plate decoration packages.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-16">
        {servicesData.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-3xl border border-white/40 dark:border-gold-default/15 bg-white/40 dark:bg-dark-card/40 backdrop-blur-xl shadow-md overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:border-gold-default/35"
          >
            {/* Image Overlay Header */}
            <div className="relative h-64 overflow-hidden border-b border-white/20 dark:border-gold-default/10">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 bg-maroon-default/95 text-gold-default border border-gold-default/20 text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1 shadow-sm">
                <span>{service.rating}</span>
                <Star size={12} className="fill-gold-default" />
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex flex-col flex-grow text-left">
              <h3 className="font-display font-semibold text-xl text-maroon-default dark:text-gold-default group-hover:text-gold-default transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-maroon-dark/75 dark:text-cream/75 mt-3 font-light leading-relaxed">
                {service.longDescription || service.description}
              </p>

              {/* Bullet details */}
              <div className="mt-5 flex flex-col gap-2.5 flex-grow">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-maroon-dark/80 dark:text-cream/70">
                    <Check size={14} className="text-gold-default shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Price & Booking Button */}
              <div className="mt-8 pt-5 border-t border-maroon-default/5 dark:border-gold-default/10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-maroon-light dark:text-cream/60 font-medium">Estimated Pricing</span>
                  <span className="font-bold text-sm text-maroon-default dark:text-gold-default font-mono">{service.priceRange}</span>
                </div>
                
                {/* Book link passing active service name in react router state */}
                <Link to="/contact" state={{ selectedService: service.title }}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-maroon-default to-maroon-light text-white text-xs uppercase tracking-widest font-semibold text-center hover:from-maroon-light hover:to-maroon-default transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer reflection-shine"
                  >
                    <span>Book Service</span>
                    <ArrowRight size={14} />
                  </motion.div>
                </Link>
              </div>

            </div>
          </motion.div>
        ))}
      </section>

      {/* Trust banner */}
      <section className="w-full p-8 md:p-12 rounded-3xl border border-white/40 dark:border-gold-default/15 bg-white/30 dark:bg-dark-card/35 backdrop-blur-xl shadow-lg text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h4 className="font-display font-semibold text-xl md:text-2xl text-maroon-default dark:text-gold-default">
            Looking for something fully customized?
          </h4>
          <p className="text-xs sm:text-sm text-maroon-dark/70 dark:text-cream/70 font-light leading-relaxed">
            Collaborate directly with our master design team. We create entirely custom arrangements, matching your family heritage emblems and exact flower colors.
          </p>
        </div>
        <Link to="/contact" state={{ selectedService: 'Custom Event Decorations' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl border border-gold-default/30 text-maroon-default dark:text-gold-default bg-white/30 dark:bg-white/5 font-semibold text-xs uppercase tracking-widest cursor-pointer shadow reflection-shine whitespace-nowrap"
          >
            Inquire Custom Layout
          </motion.div>
        </Link>
      </section>

    </div>
  );
}
