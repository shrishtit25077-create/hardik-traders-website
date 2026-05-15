import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield, Award, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Subtle top red line */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: '#C1121F' }} />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: Text */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-10" style={{ backgroundColor: '#C1121F' }} />
              <span className="font-semibold tracking-widest uppercase text-xs" style={{ color: '#C1121F' }}>
                Industrial Excellence Since 2014
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#111111', lineHeight: 1.15 }}
            >
              Trusted Name in<br />
              <span style={{ color: '#C1121F' }}>Engineering &amp; Industrial Tools</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: '#4B5563' }}
            >
              High-quality industrial products and reliable engineering solutions for industries across multiple sectors — backed by 25+ premium global brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#products"
                className="flex items-center justify-center gap-2 font-semibold px-8 py-3.5 rounded text-white transition-all group"
                style={{ backgroundColor: '#C1121F' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#A30F1A'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C1121F'}
              >
                Explore Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center font-semibold px-8 py-3.5 rounded transition-all"
                style={{ color: '#C1121F', border: '2px solid #C1121F', backgroundColor: 'transparent' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#C1121F'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#C1121F'; }}
              >
                Request a Quote
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-8 pt-8"
              style={{ borderTop: '1px solid #E5E7EB' }}
            >
              {[
                { val: '25+', label: 'Premium Brands' },
                { val: '15+', label: 'Product Categories' },
                { val: '10+', label: 'Years of Service' },
                { val: '1500+', label: 'Industrial Clients' },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold" style={{ color: '#111111' }}>{val}</div>
                  <div className="text-xs uppercase tracking-wide mt-0.5" style={{ color: '#9CA3AF' }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 relative h-[320px] sm:h-[400px] lg:h-[480px]">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="relative w-full h-full"
            >
              {/* Red decorative frame */}
              <div
                className="absolute rounded-xl"
                style={{
                  inset: 0,
                  border: '2px solid #C1121F',
                  opacity: 0.25,
                  transform: 'translate(10px, 10px)',
                }}
              />

              {/* Image */}
              <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                  alt="Industrial Engineering Facility"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.92) contrast(1.05)' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(17,17,17,0.35) 0%, transparent 60%)' }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 hidden md:flex items-center gap-3 rounded-xl p-4"
                style={{ backgroundColor: '#FFFFFF', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid #E5E7EB' }}
              >
                <div className="w-10 h-10 rounded flex items-center justify-center" style={{ backgroundColor: 'rgba(193,18,31,0.1)' }}>
                  <span style={{ color: '#C1121F', fontWeight: 800, fontSize: '14px' }}>#1</span>
                </div>
                <div>
                  <div className="font-bold text-xs uppercase tracking-wide" style={{ color: '#111111' }}>Industry Leader</div>
                  <div className="text-xs" style={{ color: '#9CA3AF' }}>Certified Quality Tools</div>
                </div>
              </motion.div>

              {/* Top right badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -top-4 -right-4 hidden md:flex items-center gap-2 rounded-xl px-4 py-3"
                style={{ backgroundColor: '#C1121F', boxShadow: '0 8px 24px rgba(193,18,31,0.3)' }}
              >
                <Shield size={16} className="text-white" />
                <span className="text-white text-xs font-bold uppercase tracking-wide">Authorized Dealer</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1"
        style={{ color: '#9CA3AF' }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
