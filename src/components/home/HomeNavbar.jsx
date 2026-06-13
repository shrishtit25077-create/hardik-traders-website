import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-primary/20' : 'bg-transparent border-b border-transparent'}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-[80px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="material-symbols-outlined text-primary text-[36px] group-hover:rotate-180 transition-transform duration-700">settings_input_component</span>
          <span className="font-headline-md text-on-surface uppercase tracking-tighter font-bold">Hardik <span className="text-primary">Traders</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Products', 'Contact'].map((item) => (
            <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-on-surface hover:text-primary transition-colors font-label-bold uppercase text-[13px] tracking-wider relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <button className="hidden lg:flex items-center gap-2 text-on-surface hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span className="font-label-bold uppercase tracking-wider text-[13px]">Call Now</span>
          </button>
          <button className="bg-primary hover:bg-brand-hover text-on-primary px-6 py-2.5 rounded font-label-bold uppercase tracking-wider text-[13px] transition-all shadow-[0_0_15px_rgba(225,6,0,0.3)] hover:shadow-[0_0_25px_rgba(225,6,0,0.5)]">
            Get Quote
          </button>
        </div>
      </div>
    </motion.header>
  );
};
export default HomeNavbar;
