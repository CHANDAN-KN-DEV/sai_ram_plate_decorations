import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.jpg';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto rounded-2xl border border-white/35 dark:border-gold-default/15 bg-white/30 dark:bg-dark-card/40 backdrop-blur-xl shadow-lg flex items-center justify-between px-5 py-2">
        
        {/* Brand Logo & Name */}
        <NavLink to="/" className="flex items-center gap-3 group select-none">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gold-default/20 blur-xs group-hover:blur-md transition-all duration-300" />
            <img 
              src={logo} 
              alt="Sai Ram Plate Decoration" 
              className="relative w-12 h-12 rounded-full border-2 border-gold-default object-cover shadow-md"
            />
          </motion.div>
          <div className="flex flex-col">
            <h1 className="font-display font-bold text-lg md:text-xl tracking-wide text-maroon-default dark:text-gold-default leading-none">
              Sai Ram
            </h1>
            <span className="text-[10px] uppercase tracking-widest text-maroon-light dark:text-cream/70 font-semibold mt-1">
              Plate Decoration
            </span>
          </div>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-sans font-medium tracking-wider text-xs uppercase relative py-1.5 transition-colors duration-300 ${
                  isActive
                    ? 'text-maroon-default dark:text-gold-default'
                    : 'text-maroon-dark/60 dark:text-cream/60 hover:text-maroon-default dark:hover:text-gold-default'
                }`
              }
            >
              {({ isActive }) => (
                <span className="flex items-center flex-col justify-center">
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-default to-gold-light rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* Mobile Menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-maroon-dark dark:text-cream hover:bg-white/20 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer"
            aria-label="Toggle Navigation Drawer"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-22 left-4 right-4 md:hidden rounded-2xl border border-white/40 dark:border-gold-default/15 bg-white/90 dark:bg-dark-bg/95 backdrop-blur-2xl shadow-2xl p-6 z-50"
          >
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-semibold tracking-wider uppercase py-3 px-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-maroon-default/10 text-maroon-default dark:bg-gold-default/10 dark:text-gold-default border-l-4 border-gold-default'
                        : 'text-maroon-dark/70 dark:text-cream/70 hover:bg-black/5 dark:hover:bg-white/5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
