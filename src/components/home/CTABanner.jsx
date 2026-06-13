import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Phone } from 'lucide-react';

function Particles() {
  const particles = Array.from({ length: 14 }, (_, i) => ({
    id: i, left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`, duration: `${4 + Math.random() * 4}s`,
    size: `${2 + Math.random() * 2}px`, opacity: 0.2 + Math.random() * 0.35,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <div key={p.id} className="absolute bottom-0 rounded-full"
          style={{ left: p.left, width: p.size, height: p.size, background: '#3B82F6', opacity: p.opacity, animation: `particle ${p.duration} ease-in-out ${p.delay} infinite` }} />
      ))}
    </div>
  );
}

export default function CTABanner() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="relative overflow-hidden py-12 px-6 md:px-12">
      {/* Backgrounds */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #04101E 0%, #08172B 40%, #0D1F3A 70%, #04101E 100%)' }} />
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1565793979728-c4b0c0f3ebb7?w=1400&q=60" alt="" className="w-full h-full object-cover" style={{ filter: 'brightness(0.07) contrast(1.2)', mixBlendMode: 'luminosity' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.1) 0%, transparent 60%)' }} />
      <div className="absolute inset-0 pointer-events-none opacity-25" style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      <Particles />
      <div className="absolute inset-x-0 top-0 h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.45) 50%, transparent)' }} />

      {/* Content card */}
      <div className="relative z-10 max-w-[1000px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 px-8 md:px-16 py-12 rounded-[32px]"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(8px)' }}
        >
          {/* Left */}
          <div className="text-center lg:text-left max-w-lg">
            <p className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">Ready to Partner?</p>
            <h2 className="text-[32px] sm:text-[44px] font-black leading-[0.93] tracking-tight text-white uppercase mb-4">
              Ready to Power<br />
              <span style={{ background: 'linear-gradient(135deg, #60A5FA, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Your Industry?
              </span>
            </h2>
            <p className="text-[#7A8999] text-sm leading-relaxed">
              Pricing, availability, and technical recommendations — within 2 hours.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 items-center lg:items-start flex-shrink-0">
            <Link to="/get-quote" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-black uppercase tracking-widest text-[12px] transition-all duration-300 text-white"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #2563EB)', boxShadow: '0 0 25px rgba(59,130,246,0.35)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 50px rgba(59,130,246,0.55)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 25px rgba(59,130,246,0.35)'}
            >
              Request Quote <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://wa.me/919416215742" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[12px] transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#E8EDF4', background: 'rgba(255,255,255,0.04)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'; e.currentTarget.style.color = '#60A5FA'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#E8EDF4'; }}
            >
              <MessageSquare size={14} /> WhatsApp Us
            </a>
            <a href="tel:+919416215742" className="flex items-center gap-2 text-[#4A5568] hover:text-blue-400 text-[12px] font-semibold transition-colors duration-300">
              <Phone size={12} /> +91 94162 15742
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.25) 50%, transparent)' }} />
    </section>
  );
}
