import os

# 2. Navbar.jsx
navbar = """import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenu(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f] shadow-lg' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 h-[80px] flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
          <div className="w-10 h-10 bg-[#E10600]/10 border border-[#E10600]/30 rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-[#E10600] text-[24px]">settings_input_component</span>
          </div>
          <div>
            <div className="font-black text-white text-[20px] tracking-tight uppercase leading-none">Hardik</div>
            <div className="font-bold text-[#E10600] text-[12px] tracking-[0.2em] uppercase">Traders</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Products', 'Contact'].map(item => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-[#A1A1AA] hover:text-white transition-colors font-bold uppercase text-[12px] tracking-wider relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#E10600] transition-all group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:+919416215742" className="flex items-center gap-2 text-white hover:text-[#E10600] transition-colors font-bold uppercase text-[12px] tracking-wider">
            <span className="material-symbols-outlined text-[18px]">call</span>
            Call Now
          </a>
          <button onClick={() => scrollTo('contact')} className="bg-[#E10600] hover:bg-[#FF2D20] text-white px-6 py-2.5 rounded font-bold uppercase tracking-wider text-[12px] transition-all">
            Get Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenu && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#1f1f1f] absolute top-[80px] w-full left-0 px-6 py-6 flex flex-col gap-6 shadow-2xl">
          {['Home', 'Products', 'Contact'].map(item => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-left text-white font-bold uppercase tracking-wider text-[14px]">
              {item}
            </button>
          ))}
          <a href="tel:+919416215742" className="flex items-center gap-2 text-white font-bold uppercase text-[14px] tracking-wider">
            <span className="material-symbols-outlined text-[#E10600]">call</span> Call Now
          </a>
          <button onClick={() => scrollTo('contact')} className="bg-[#E10600] text-white py-3 rounded font-bold uppercase tracking-wider text-[14px]">
            Get Quote
          </button>
        </div>
      )}
    </header>
  );
}
"""

with open('src/components/Navbar.jsx', 'w') as f:
    f.write(navbar)
