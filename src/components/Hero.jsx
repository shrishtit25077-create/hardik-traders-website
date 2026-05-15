import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield, CheckCircle2 } from 'lucide-react';

const scrollTo = (href, e) => {
  if (e) e.preventDefault();
  const el = document.getElementById(href.replace('#', ''));
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 78, behavior: 'smooth' });
};

const useCounter = (end, duration = 1800, active = false) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let s;
    const raf = ts => {
      if (!s) s = ts;
      const p = Math.min((ts - s) / duration, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [active, end, duration]);
  return val;
};

const Stat = ({ end, suffix, label, active }) => {
  const v = useCounter(end, 1800, active);
  return (
    <div className="text-center">
      <div className="text-2xl lg:text-3xl font-black text-[#111]">{v.toLocaleString()}{suffix}</div>
      <div className="text-[11px] uppercase tracking-widest mt-1 font-semibold text-[#999]">{label}</div>
    </div>
  );
};

export default function Hero() {
  const statsRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.25 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="home" className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg)', paddingTop: 'var(--header-h)', paddingBottom: '56px' }}>
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      {/* Radial red glow — top right */}
      <div className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(215,38,61,0.05) 0%, transparent 65%)' }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Text */}
          <div className="w-full lg:w-[52%]">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
              className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-9" style={{ backgroundColor: 'var(--red)' }} />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: 'var(--red)' }}>
                Industrial Excellence Since 2014
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }}
              className="font-black leading-[1.1] mb-5 text-[#111]"
              style={{ fontSize: 'clamp(2rem, 4.2vw, 3.25rem)' }}
            >
              Trusted Partner for<br />
              <span style={{ color: 'var(--red)' }}>Engineering &amp; Industrial Tools</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }}
              className="text-[1.05rem] leading-relaxed mb-7 max-w-md text-[#555]"
            >
              Authorized dealer for 25+ premium global brands — supplying quality tools, equipment, and engineering solutions across India.
            </motion.p>

            {/* Trust pills */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.24 }} className="flex flex-wrap gap-2.5 mb-8">
              {['100% Genuine', 'Authorized Dealer', 'Pan-India Delivery'].map(t => (
                <span key={t} className="flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: 'var(--red-tint)', color: 'var(--red)', border: '1px solid rgba(225,6,44,0.15)' }}>
                  <CheckCircle2 size={12} /> {t}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-12">
              <a href="#products" onClick={e => scrollTo('#products', e)} className="btn-primary flex items-center justify-center gap-2 px-7 py-3.5 text-[0.95rem] group">
                Explore Products <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" onClick={e => scrollTo('#contact', e)} className="btn-ghost flex items-center justify-center px-7 py-3.5 text-[0.95rem]">
                Request a Quote
              </a>
            </motion.div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-4 gap-4 pt-7 border-t border-[#EDEDED]">
              <Stat end={25}   suffix="+" label="Brands"     active={started} />
              <Stat end={15}   suffix="+" label="Categories" active={started} />
              <Stat end={10}   suffix="+" label="Years"      active={started} />
              <Stat end={1500} suffix="+" label="Clients"    active={started} />
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.25 }}
            className="w-full lg:w-[48%] relative"
            style={{ height: '440px' }}
          >
            {/* Decorative frame */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ border: '1.5px solid rgba(225,6,44,0.18)', transform: 'translate(10px,10px)' }} />

            {/* Floating image */}
            <motion.div
              animate={{ y: [0, -7, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.13)]"
            >
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=85&w=1400"
                alt="Industrial Engineering" className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.9) contrast(1.04)' }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(17,17,17,0.38) 0%, transparent 55%)' }} />
            </motion.div>

            {/* Badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
              className="absolute -bottom-5 -left-5 hidden md:flex items-center gap-3 rounded-xl p-4 bg-white shadow-lg border border-[#EDEDED]"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--red-tint2)' }}>
                <span className="text-[13px] font-black" style={{ color: 'var(--red)' }}>#1</span>
              </div>
              <div>
                <div className="text-[12px] font-bold text-[#111]">Industry Leader</div>
                <div className="text-[11px] text-[#999]">Certified Quality Tools</div>
              </div>
            </motion.div>

            {/* Badge — top right */}
            <motion.div
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
              className="absolute -top-4 -right-4 hidden md:flex items-center gap-2 rounded-xl px-4 py-2.5"
              style={{ backgroundColor: 'var(--red)', boxShadow: '0 6px 24px rgba(225,6,44,0.32)' }}
            >
              <Shield size={14} className="text-white" />
              <span className="text-white text-[11px] font-bold tracking-wide">Authorized Dealer</span>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <motion.a
        href="#about" onClick={e => scrollTo('#about', e)}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 text-[#BBB]"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={15} />
        </motion.div>
      </motion.a>
    </section>
  );
}
