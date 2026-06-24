import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  // Direct Link with custom luxury message pre-filled
  const phoneNumber = '919999999999'; // Staging number
  const message = encodeURIComponent('Hello Sai Ram Plate Decoration, I would like to inquire about booking plate decorations for my upcoming event.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* Pulse rings */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute w-20 h-20 rounded-full bg-emerald-500/25 blur-sm"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute w-16 h-16 rounded-full bg-emerald-400/20 blur-xs"
      />
      
      {/* Main button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white rounded-full shadow-xl border border-emerald-400/30 hover:shadow-emerald-500/30 cursor-pointer"
        title="WhatsApp Us"
      >
        <MessageCircle size={28} className="fill-current" />
      </motion.a>
    </div>
  );
}
