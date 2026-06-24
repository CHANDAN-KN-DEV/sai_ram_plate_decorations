import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Heart } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/25 dark:border-gold-default/15 bg-white/10 dark:bg-dark-card/25 backdrop-blur-lg">
      
      {/* Light glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 -translate-y-1/2 bg-maroon-default/5 dark:bg-maroon-default/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 -translate-y-1/2 bg-gold-default/5 dark:bg-gold-default/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Sai Ram Logo" 
                className="w-12 h-12 rounded-full border border-gold-default object-cover shadow" 
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-maroon-default dark:text-gold-default leading-none">
                  Sai Ram
                </span>
                <span className="text-[9px] uppercase tracking-widest text-maroon-light dark:text-cream/70 font-semibold mt-1">
                  Plate Decoration
                </span>
              </div>
            </div>
            <p className="text-sm text-maroon-dark/70 dark:text-cream/70 mt-2 font-light leading-relaxed">
              Transforming your sacred wedding and family events into beautiful memories with bespoke, handcrafted plate decoration.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3.5 mt-3">
              {[
                { icon: <Facebook size={18} />, href: 'https://facebook.com' },
                { icon: <Instagram size={18} />, href: 'https://instagram.com' },
                { icon: <Youtube size={18} />, href: 'https://youtube.com' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/20 dark:bg-white/5 border border-maroon-default/15 dark:border-gold-default/15 hover:border-gold-default dark:hover:border-gold-default text-maroon-default dark:text-gold-default hover:text-gold-light transition-all duration-300 hover:scale-105 flex items-center justify-center cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-maroon-default dark:text-gold-default tracking-wider">
              Quick Navigation
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Gallery Showcase', path: '/gallery' },
                { name: 'Get In Touch', path: '/contact' }
              ].map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="text-maroon-dark/75 dark:text-cream/75 hover:text-gold-default dark:hover:text-gold-default transition-colors duration-300 w-fit"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Specialities Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-maroon-default dark:text-gold-default tracking-wider">
              Our Specialities
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-maroon-dark/75 dark:text-cream/75">
              <span className="hover:text-gold-default transition-colors duration-300 cursor-pointer">Wedding Coco Platters</span>
              <span className="hover:text-gold-default transition-colors duration-300 cursor-pointer">Engagement Ring Platters</span>
              <span className="hover:text-gold-default transition-colors duration-300 cursor-pointer">Baby Shower Flower Cradles</span>
              <span className="hover:text-gold-default transition-colors duration-300 cursor-pointer">Diwali Pooja Plates</span>
              <span className="hover:text-gold-default transition-colors duration-300 cursor-pointer">Custom Sacred Designs</span>
            </div>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-maroon-default dark:text-gold-default tracking-wider">
              Luxury Atelier
            </h4>
            <div className="flex flex-col gap-3.5 text-sm text-maroon-dark/75 dark:text-cream/75">
              <a href="tel:+919999999999" className="flex items-center gap-3 hover:text-gold-default transition-colors duration-300">
                <Phone size={16} className="text-gold-default shrink-0" />
                <span>+91 99999 99999</span>
              </a>
              <a href="mailto:info@sairamplates.com" className="flex items-center gap-3 hover:text-gold-default transition-colors duration-300">
                <Mail size={16} className="text-gold-default shrink-0" />
                <span>info@sairamplates.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-default shrink-0 mt-1" />
                <span className="leading-relaxed">123, Palace Road, Vasanth Nagar, Bengaluru, Karnataka 560001</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-16 pt-8 border-t border-maroon-default/10 dark:border-gold-default/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-maroon-dark/60 dark:text-cream/50">
          <p>© {year} Sai Ram Plate Decoration. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart size={12} className="fill-maroon-default text-maroon-default dark:fill-gold-default dark:text-gold-default animate-pulse" /> for elite celebrations.
          </p>
        </div>
      </div>
    </footer>
  );
}
