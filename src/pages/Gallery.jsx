import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { galleryData } from '../data/mockData';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Wedding', 'Engagement', 'Baby Shower', 'Festivals', 'Custom Designs'];

  // Filter gallery items
  const filteredItems = filter === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category.toLowerCase() === filter.toLowerCase());

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col items-center px-4 md:px-8 py-12 max-w-7xl mx-auto">
      
      {/* Header */}
      <section className="text-center flex flex-col items-center gap-3 mb-12">
        <span className="text-xs uppercase tracking-widest text-gold-default font-semibold">Exquisite Portfolios</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-maroon-default dark:text-gold-default">
          Decorative Plate Gallery
        </h2>
        <div className="w-16 h-0.5 bg-gold-default/70 mt-1" />
        <p className="text-sm sm:text-base text-maroon-dark/70 dark:text-cream/70 max-w-xl font-light">
          Browse through our luxury designs. Filter by category to view our custom creations for weddings, engagements, and festive ceremonies.
        </p>
      </section>

      {/* Categories Tabs */}
      <section className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-4xl">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { setFilter(cat); setLightboxIndex(null); }}
            className={`px-5 py-2.5 rounded-full border text-xs sm:text-sm font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer ${
              filter === cat
                ? 'bg-gradient-to-r from-maroon-default to-maroon-light text-white border-maroon-default shadow-md'
                : 'border-maroon-default/15 dark:border-gold-default/20 bg-white/20 dark:bg-dark-card/25 backdrop-blur-md text-maroon-dark/75 dark:text-cream/70 hover:border-gold-default'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </section>

      {/* Masonry Columns Grid */}
      <section className="w-full">
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center text-maroon-dark/60 dark:text-cream/50">
            No items available in this category yet.
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 w-full [column-fill:_balance]">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                onClick={() => openLightbox(index)}
                className="break-inside-avoid mb-6 relative group rounded-2xl overflow-hidden border border-white/40 dark:border-gold-default/15 shadow bg-white/10 dark:bg-dark-card/20 backdrop-blur-xs cursor-pointer hover:shadow-lg hover:border-gold-default/30 transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Visual Hover details overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm shadow opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                    <ZoomIn size={16} />
                  </div>
                  <span className="text-[10px] text-gold-default uppercase tracking-widest font-semibold">{item.category}</span>
                  <h4 className="font-display text-lg text-white font-medium mt-1 leading-tight">{item.title}</h4>
                  <p className="text-xs text-cream/80 mt-1 font-light leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors duration-300 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>

            {/* Left/Right controls */}
            <button
              onClick={showPrev}
              className="absolute left-6 p-3 rounded-full bg-white/10 hover:bg-white/25 border border-white/10 text-white transition-colors duration-300 cursor-pointer z-10"
              aria-label="Previous Photo"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={showNext}
              className="absolute right-6 p-3 rounded-full bg-white/10 hover:bg-white/25 border border-white/10 text-white transition-colors duration-300 cursor-pointer z-10"
              aria-label="Next Photo"
            >
              <ChevronRight size={24} />
            </button>

            {/* Inner Content Card */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on card click
              className="relative max-w-4xl w-full rounded-2xl border border-white/20 bg-dark-card/90 overflow-hidden flex flex-col md:flex-row shadow-2xl max-h-[85vh]"
            >
              {/* Photo Area */}
              <div className="flex-1 bg-black flex items-center justify-center max-h-[50vh] md:max-h-none overflow-hidden">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="w-full h-full object-contain max-h-[50vh] md:max-h-[80vh]"
                />
              </div>

              {/* Text Info Area */}
              <div className="w-full md:w-80 p-6 flex flex-col justify-center text-left bg-dark-bg/95 border-t md:border-t-0 md:border-l border-white/10">
                <span className="text-[10px] text-gold-default uppercase tracking-widest font-semibold">
                  {filteredItems[lightboxIndex].category}
                </span>
                
                <h3 className="font-display font-semibold text-xl text-white mt-1">
                  {filteredItems[lightboxIndex].title}
                </h3>
                
                <p className="text-xs sm:text-sm text-cream/70 mt-3 font-light leading-relaxed">
                  {filteredItems[lightboxIndex].description}
                </p>

                <div className="mt-8">
                  <span className="text-[10px] text-gold-default/60 uppercase tracking-widest block font-medium">Design Code</span>
                  <span className="font-mono text-xs text-white font-bold block mt-0.5">SR-PL-{filteredItems[lightboxIndex].id}</span>
                </div>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
