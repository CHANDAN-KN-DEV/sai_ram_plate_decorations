import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import useTheme from '../hooks/useTheme';
import logo from '../assets/logo.jpg';
import { setFavicon } from '../utils/favicon';

export default function RootLayout() {
  const [theme, toggleTheme] = useTheme();
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Dynamically inject uploaded logo as browser favicon
    setFavicon();
    
    // Simulate loading screen time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col transition-colors duration-500 font-sans selection:bg-gold-default selection:text-white">
      
      {/* Full-screen Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ivory dark:bg-dark-bg transition-colors duration-500"
          >
            <div className="relative flex flex-col items-center gap-6">
              
              {/* Rotating Gold Accent Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
                className="w-32 h-32 rounded-full border-2 border-transparent border-t-gold-default border-b-gold-default absolute"
              />
              
              {/* Pulsing Logo */}
              <motion.img
                src={logo}
                alt="Sai Ram Plate Decoration"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: [0.95, 1.05, 0.95], opacity: 1 }}
                transition={{
                  scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                  opacity: { duration: 0.5 }
                }}
                className="w-24 h-24 rounded-full border-2 border-gold-default object-cover shadow-2xl z-10"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-center z-10"
              >
                <h2 className="font-display font-bold text-2xl text-maroon-default dark:text-gold-default tracking-wide">
                  Sai Ram
                </h2>
                <p className="text-xs uppercase tracking-widest text-maroon-light dark:text-cream/60 font-semibold mt-1">
                  Plate Decoration
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dynamic Background Reflections & Drift Balls */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* Soft Maroon Glow */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-maroon-default/5 dark:bg-maroon-default/8 blur-[160px] opacity-70 animate-pulse-slow" />
        
        {/* Soft Gold Glow */}
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-gold-default/3 dark:bg-gold-default/4 blur-[130px] opacity-75" />
        
        {/* Small floating lights */}
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, 15, 0]
          }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          className="absolute top-1/4 right-[12%] w-20 h-20 rounded-full bg-gold-default/8 blur-xl"
        />
        
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0]
          }}
          transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-[8%] w-28 h-28 rounded-full bg-maroon-default/5 blur-2xl"
        />
      </div>

      {/* Navbar Header */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* App Main Body Outlet */}
      <main className="flex-grow pt-20 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
            className="w-full flex flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Navigation */}
      <Footer />

      {/* WhatsApp FAB */}
      <WhatsAppButton />
    </div>
  );
}
