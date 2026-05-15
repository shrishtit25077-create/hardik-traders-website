import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919876543210" // Placeholder number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      
      {/* Ping animation effect */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping -z-10"></span>
    </motion.a>
  );
};

export default WhatsAppButton;
