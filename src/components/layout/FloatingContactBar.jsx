import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, Download } from 'lucide-react';

const CONTACT_ITEMS = [
  {
    id: 'whatsapp',
    label: 'WhatsApp Us',
    Icon: MessageCircle,
    bg: '#25D366',
    glow: 'rgba(37, 211, 102, 0.45)',
    href: 'https://wa.me/919416215742',
    download: false
  },
  {
    id: 'call',
    label: 'Call Sales',
    Icon: Phone,
    bg: '#1E5AA8',
    glow: 'rgba(30, 90, 168, 0.45)',
    href: 'tel:+919416215742',
    download: false
  },
  {
    id: 'email',
    label: 'Email Us',
    Icon: Mail,
    bg: '#E31E24',
    glow: 'rgba(227, 30, 36, 0.45)',
    href: 'mailto:hardiktraders123@gmail.com',
    download: false
  },
  {
    id: 'catalog',
    label: 'Download Catalog',
    Icon: Download,
    bg: '#2B2B2B',
    glow: 'rgba(43, 43, 43, 0.5)',
    href: '/catalog.pdf',
    download: true
  }
];

export default function FloatingContactBar() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-[150] hidden md:flex flex-col gap-1.5"
      style={{ pointerEvents: 'none' }} // Ensure click-through on spacer areas
    >
      {CONTACT_ITEMS.map((item) => {
        const isHovered = hoveredId === item.id;

        return (
          <div
            key={item.id}
            className="relative flex items-center"
            style={{ pointerEvents: 'auto' }} // Re-enable pointer events for the buttons
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* The Main Square Button */}
            <motion.a
              href={item.href}
              target={item.download || item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.download || item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              download={item.download ? 'Hardik_Traders_Catalog.pdf' : undefined}
              className="flex items-center justify-center text-white transition-shadow duration-300 w-[56px] h-[56px] lg:w-[64px] lg:h-[64px] rounded-r-lg border-y border-r"
              style={{
                backgroundColor: item.bg,
                borderColor: 'rgba(255, 255, 255, 0.1)',
                boxShadow: isHovered 
                  ? `0 10px 25px ${item.glow}, inset 0 2px 8px rgba(255,255,255,0.2)`
                  : '0 4px 15px rgba(0,0,0,0.15)',
              }}
              whileHover={{ 
                scale: 1.08,
                zIndex: 10,
                transition: { duration: 0.2, ease: 'easeOut' }
              }}
            >
              <item.Icon 
                className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300" 
                strokeWidth={2}
                style={{
                  transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'none'
                }}
              />
            </motion.a>

            {/* Slide-out Label Container */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: -15, scaleX: 0.8 }}
                  animate={{ opacity: 1, x: 0, scaleX: 1 }}
                  exit={{ opacity: 0, x: -15, scaleX: 0.8 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute left-full ml-1 h-[56px] lg:h-[64px] flex items-center"
                  style={{ transformOrigin: 'left center' }}
                >
                  <div
                    className="h-full flex items-center px-5 bg-[#0c0c0c] text-white border-y border-r border-white/10 rounded-r-lg shadow-xl"
                    style={{
                      borderLeft: `3.5px solid ${item.bg}`,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                    }}
                  >
                    <span 
                      className="font-display font-extrabold uppercase tracking-widest text-[10.5px] lg:text-[11.5px] whitespace-nowrap text-white"
                      style={{ letterSpacing: '0.08em' }}
                    >
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </motion.div>
  );
}
