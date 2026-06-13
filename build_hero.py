with open("bearing_svg.txt", "r") as f:
    svg_code = f.read()

hero = """import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] bg-[#050505] flex items-center pt-24 pb-16 overflow-hidden" id="home">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(225,6,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(225,6,0,0.03)_1px,transparent_1px)] bg-[size:44px_44px]"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-[#E10600] rounded-full"></span>
            <span className="text-[#A1A1AA] font-bold uppercase tracking-[0.2em] text-[10px]">ISO 9001:2015 Certified Partner</span>
          </div>
          
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-black leading-[1.1] text-white tracking-tight mb-6">
            <span className="text-[#E10600] text-[18px] uppercase tracking-[0.14em] block mb-2">Authorized Distributor Of</span>
            Industrial Automation,<br/>Bearings, Pneumatics &<br/>Maintenance Solutions
            <span className="block text-[#A1A1AA] text-[24px] font-normal tracking-normal mt-2">Since 2001</span>
          </h1>

          <p className="text-[#A1A1AA] text-[16px] md:text-[18px] max-w-xl mb-10 leading-relaxed">
            Authorized dealer for 25+ premium global brands, supplying bearings, sensors, pneumatics, lubricants, industrial tools and engineering solutions across India.
          </p>

          <div className="flex flex-wrap gap-4">
            <button onClick={() => scrollTo('products')} className="bg-[#E10600] hover:bg-[#FF2D20] text-white px-8 py-4 rounded font-bold uppercase tracking-wider text-[13px] transition-all shadow-[0_4px_20px_rgba(225,6,0,0.3)] hover:translate-y-[-2px]">
              Browse Products
            </button>
            <a href="/public/catalog.pdf" target="_blank" rel="noopener noreferrer" className="bg-[#151515] border border-[#333333] hover:border-[#E10600] text-white px-8 py-4 rounded font-bold uppercase tracking-wider text-[13px] transition-all flex items-center gap-2 hover:translate-y-[-2px]">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Download Catalog
            </a>
            <button onClick={() => scrollTo('contact')} className="bg-transparent border-2 border-[#E10600] hover:bg-[#E10600] text-[#E10600] hover:text-white px-8 py-4 rounded font-bold uppercase tracking-wider text-[13px] transition-all hover:translate-y-[-2px]">
              Get Quote
            </button>
          </div>
        </motion.div>

        {/* Right Bearing Animation */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative hidden lg:flex items-center justify-center">
          <div className="w-[500px] h-[500px] relative">
            __SVG_CODE__
          </div>
        </motion.div>

      </div>
    </section>
  );
}
"""

hero = hero.replace("__SVG_CODE__", svg_code)

with open('src/components/Hero.jsx', 'w') as f:
    f.write(hero)
