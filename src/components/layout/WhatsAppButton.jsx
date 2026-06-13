import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

/*
  On-brand WhatsApp: muted sage green palette — recognizable but not jarring.
  Background: #EAF7EF  Border: #CFE9D8  Icon: #2E8B57
  Hover: brand red accent instead of green intensify.
*/
export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919416215742"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5, ease: 'easeOut' }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-250 shadow-sm"
      style={{
        backgroundColor: '#EAF7EF',
        border: '1px solid #CFE9D8',
        color: '#1A4A2C',
      }}
      aria-label="Chat on WhatsApp"
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--red)';
        e.currentTarget.style.backgroundColor = 'var(--red-tint)';
        e.currentTarget.style.color = 'var(--red)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(215,38,61,0.15)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#CFE9D8';
        e.currentTarget.style.backgroundColor = '#EAF7EF';
        e.currentTarget.style.color = '#1A4A2C';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      <MessageCircle size={17} style={{ color: '#2E8B57', flexShrink: 0 }} />
      <span className="text-[13px] font-semibold hidden sm:inline">WhatsApp</span>
    </motion.a>
  );
}
