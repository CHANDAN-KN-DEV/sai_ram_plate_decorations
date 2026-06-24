import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      className="p-2.5 rounded-full border border-maroon-default/10 dark:border-gold-default/20 bg-white/25 dark:bg-black/25 backdrop-blur-md shadow-sm text-maroon-default dark:text-gold-default hover:border-gold-default hover:shadow-md transition-all duration-300 cursor-pointer flex items-center justify-center"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <Moon size={18} className="transition-transform duration-300" />
      ) : (
        <Sun size={18} className="transition-transform duration-300" />
      )}
    </motion.button>
  );
}
