import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, ShieldCheck, Heart } from 'lucide-react';
import { timelineData, teamData } from '../data/mockData';

export default function About() {
  
  const choices = [
    {
      icon: <Award className="text-gold-default" size={24} />,
      title: 'Handcrafted Heritage',
      desc: 'Every decorative platter and thali is individually crafted by expert traditional artisans, preserving ancient craftsmanship.'
    },
    {
      icon: <Compass className="text-gold-default" size={24} />,
      title: 'Bespoke Customization',
      desc: 'Collaborate with our lead designers to tailor fabrics, colors, fresh floral patterns, and mechanical elements to your exact theme.'
    },
    {
      icon: <ShieldCheck className="text-gold-default" size={24} />,
      title: 'Heirloom Quality',
      desc: 'We source high-grade brass, velvet, pearls, and materials to ensure your ceremonial platters remain pristine and reusable.'
    },
    {
      icon: <Heart className="text-gold-default" size={24} />,
      title: 'Customer Devotion',
      desc: 'With a 99.8% satisfaction rate, we ensure punctual delivery and pristine on-site setup for your peace of mind.'
    }
  ];

  return (
    <div className="w-full flex flex-col items-center px-4 md:px-8 py-12 max-w-7xl mx-auto">
      
      {/* 1. BRAND STORY HEADER */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 text-left">
        
        {/* Story Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <span className="text-xs uppercase tracking-widest text-gold-default font-semibold">Our Origin Story</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-maroon-default dark:text-gold-default leading-tight">
            Preserving Tradition Through <br />
            <span className="italic text-maroon-light dark:text-cream font-medium">Luxury Craftsmanship</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-default/70 mt-1" />
          
          <p className="text-sm sm:text-base text-maroon-dark/80 dark:text-cream/80 leading-relaxed font-light mt-2">
            Sai Ram Plate Decoration was founded with a singular, passionate vision: to transform standard wedding and ceremonial rituals into breathtaking, visual narratives. Our custom-designed plates serve as magnificent canvases representing your devotion, family values, and unique style.
          </p>
          
          <p className="text-sm sm:text-base text-maroon-dark/80 dark:text-cream/80 leading-relaxed font-light">
            Every thread of velvet, crystal border, and miniature floral arrangement is applied by hand. By blending timeless cultural motifs with modern luxuries (such as floating platforms, glass domes, and subtle LED outlines), we elevate your auspicious ceremonies into premium experiences that live on in memory.
          </p>
        </motion.div>

        {/* Story Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group cursor-default">
            {/* Glass glow backdrop */}
            <div className="absolute inset-[-10px] rounded-3xl bg-gradient-to-tr from-gold-default/20 to-maroon-default/15 blur-md" />
            
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-gold-default/30 shadow-2xl w-full max-w-sm sm:max-w-md h-96">
              <img
                src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=600&auto=format&fit=crop"
                alt="Craftsmanship Art"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-gold-default text-[10px] uppercase tracking-widest font-semibold">Signature Atelier</span>
                <h4 className="text-white font-display text-lg font-medium mt-1">Hand-Embroidery Detailing</h4>
              </div>
            </div>
          </div>
        </motion.div>

      </section>

      {/* 2. MISSION & VISION */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 text-left">
        
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl border border-white/40 dark:border-gold-default/15 bg-white/40 dark:bg-dark-card/40 backdrop-blur-xl shadow-sm flex flex-col gap-4"
        >
          <h3 className="font-display font-semibold text-2xl text-maroon-default dark:text-gold-default">Our Mission</h3>
          <p className="text-sm sm:text-base text-maroon-dark/70 dark:text-cream/70 font-light leading-relaxed">
            To curate and design premium, hand-crafted decorative items that embody the spiritual and celebratory essence of traditional Indian ceremonies, delivering exceptional luxury and artistic distinction to every household.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="p-8 rounded-3xl border border-white/40 dark:border-gold-default/15 bg-white/40 dark:bg-dark-card/40 backdrop-blur-xl shadow-sm flex flex-col gap-4"
        >
          <h3 className="font-display font-semibold text-2xl text-maroon-default dark:text-gold-default">Our Vision</h3>
          <p className="text-sm sm:text-base text-maroon-dark/70 dark:text-cream/70 font-light leading-relaxed">
            To establish Sai Ram Plate Decoration as the globally recognized gold standard for premium ceremonial design, pioneering sustainable luxury crafts while empowering and nurturing local artisanal communities.
          </p>
        </motion.div>

      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="w-full mb-24">
        <div className="text-center flex flex-col items-center gap-2 mb-16">
          <span className="text-xs uppercase tracking-widest text-gold-default font-semibold">Excellence Defined</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-maroon-default dark:text-gold-default">
            Why Partner With Us
          </h2>
          <div className="w-16 h-0.5 bg-gold-default/70 mt-1" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {choices.map((choice, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/30 dark:border-gold-default/10 bg-white/20 dark:bg-dark-card/25 backdrop-blur-md shadow-xs flex flex-col gap-4 hover:border-gold-default/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-default/10 flex items-center justify-center border border-gold-default/20">
                {choice.icon}
              </div>
              <h4 className="font-display font-semibold text-lg text-maroon-default dark:text-gold-default">
                {choice.title}
              </h4>
              <p className="text-xs sm:text-sm text-maroon-dark/70 dark:text-cream/60 leading-relaxed font-light">
                {choice.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. EXPERIENCE TIMELINE */}
      <section className="w-full mb-24">
        <div className="text-center flex flex-col items-center gap-2 mb-16">
          <span className="text-xs uppercase tracking-widest text-gold-default font-semibold">Our Evolution</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-maroon-default dark:text-gold-default">
            Experience Timeline
          </h2>
          <div className="w-16 h-0.5 bg-gold-default/70 mt-1" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gold-default/20 hidden md:block" />

          <div className="flex flex-col gap-12 relative z-10">
            {timelineData.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`flex flex-col md:flex-row items-center md:justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Empty block for layout spacer */}
                  <div className="w-full md:w-[45%] hidden md:block" />

                  {/* Dot */}
                  <div className="w-10 h-10 rounded-full border-4 border-ivory dark:border-dark-bg bg-gold-default flex items-center justify-center text-xs font-bold text-white shadow relative z-20">
                    ✦
                  </div>

                  {/* Content card */}
                  <div className="w-full md:w-[45%] p-6 rounded-2xl border border-white/40 dark:border-gold-default/10 bg-white/30 dark:bg-dark-card/30 backdrop-blur-lg shadow-sm text-left">
                    <span className="font-mono font-bold text-gold-default text-lg">{item.year}</span>
                    <h4 className="font-display font-semibold text-lg text-maroon-default dark:text-gold-default mt-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-maroon-dark/70 dark:text-cream/60 mt-2 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. TEAM SHOWCASE */}
      <section className="w-full">
        <div className="text-center flex flex-col items-center gap-2 mb-16">
          <span className="text-xs uppercase tracking-widest text-gold-default font-semibold">Behind The Designs</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-maroon-default dark:text-gold-default">
            Meet Our Creative Team
          </h2>
          <div className="w-16 h-0.5 bg-gold-default/70 mt-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl border border-white/40 dark:border-gold-default/10 bg-white/35 dark:bg-dark-card/35 backdrop-blur-xl shadow-md text-left flex flex-col items-center text-center transition-all duration-300 hover:border-gold-default/20 hover:shadow-lg"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gold-default mb-5 shadow-inner">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h4 className="font-display font-semibold text-lg text-maroon-default dark:text-gold-default">
                {member.name}
              </h4>
              <span className="text-[11px] font-semibold tracking-wider text-maroon-light dark:text-cream/70 uppercase mt-0.5">
                {member.role}
              </span>
              <p className="text-xs sm:text-sm text-maroon-dark/70 dark:text-cream/60 mt-3 font-light leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
