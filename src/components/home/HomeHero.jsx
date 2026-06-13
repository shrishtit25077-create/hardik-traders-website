import React from 'react';
import { motion } from 'framer-motion';

const HomeHero = () => {
  return (
    <section className="relative min-h-[90vh] bg-background flex items-center pt-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-3 border-l-2 border-primary pl-3 mb-6">
            <span className="text-primary font-label-bold uppercase tracking-[0.2em] text-[12px]">Since 2001</span>
          </div>
          <h1 className="font-headline-xl text-[48px] lg:text-[64px] leading-[1.1] text-on-surface font-black mb-6 tracking-tight">
            Industrial Automation, Bearings, Pneumatics & Maintenance Solutions
          </h1>
          <p className="text-on-surface-variant text-[18px] max-w-[600px] mb-10 leading-relaxed">
            Your complete B2B industrial procurement partner. Supplying premium quality automation, pneumatics, tooling, and mechanical components with a seamless pan-India logistics network.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <button className="bg-primary-container text-on-primary-container hover:brightness-110 px-8 py-4 rounded font-bold uppercase tracking-wider text-[14px] transition-all shadow-[0_0_20px_rgba(225,6,0,0.4)]">
              Browse Product Catalog
            </button>
            <button className="border border-surface-container-highest bg-surface-container-lowest hover:bg-surface-container text-on-surface px-8 py-4 rounded font-bold uppercase tracking-wider text-[14px] transition-all">
              Get a Free Quote
            </button>
          </div>
          <div className="flex items-center gap-6 text-on-surface-variant text-[12px] font-label-bold uppercase tracking-wider">
            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[16px]">verified</span> Authorized Dealer</span>
            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[16px]">local_shipping</span> Pan India</span>
            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[16px]">workspace_premium</span> ISO 9001:2015</span>
          </div>
        </motion.div>

        {/* Right side animated graphics */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative h-[600px] hidden lg:block">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,6,0,0.15)_0%,transparent_70%)] animate-pulse-slow"></div>
           
           {/* Center Glowing Bearing Concept */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-surface-container-highest bg-surface-container flex items-center justify-center shadow-[0_0_50px_rgba(225,6,0,0.1)]">
              <div className="w-[300px] h-[300px] rounded-full border border-surface-container-highest bg-background flex items-center justify-center relative">
                 {[0,45,90,135,180,225,270,315].map(deg => (
                    <div key={deg} className="absolute w-8 h-8 rounded-full bg-primary/20 shadow-[0_0_15px_#E10600] border border-primary/50" style={{ transform: `rotate(${deg}deg) translateY(-110px)`}}></div>
                 ))}
                 <div className="w-[150px] h-[150px] rounded-full bg-surface-container-highest shadow-inner"></div>
              </div>
           </div>

           {/* Floating Tags */}
           <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[20%] left-0 bg-surface border border-surface-container-highest p-4 rounded-lg flex items-center gap-4 shadow-xl">
             <div className="bg-surface-container-highest w-10 h-10 rounded flex items-center justify-center text-on-surface font-bold text-[12px]">BB</div>
             <div><div className="text-on-surface font-bold text-[14px]">Bearings</div><div className="text-on-surface-variant text-[10px] tracking-widest uppercase">SKF • FAG • NSK</div></div>
           </motion.div>

           <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-[35%] -right-8 bg-surface border border-surface-container-highest p-4 rounded-lg flex items-center gap-4 shadow-xl">
             <div className="bg-surface-container-highest w-10 h-10 rounded flex items-center justify-center text-on-surface font-bold text-[12px]">SA</div>
             <div><div className="text-on-surface font-bold text-[14px]">Sensors & Auto</div><div className="text-on-surface-variant text-[10px] tracking-widest uppercase">OMRON • BALLUFF</div></div>
           </motion.div>

           <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 4.5, repeat: Infinity }} className="absolute bottom-[40%] left-[10%] bg-surface border border-surface-container-highest p-4 rounded-lg flex items-center gap-4 shadow-xl">
             <div className="bg-surface-container-highest w-10 h-10 rounded flex items-center justify-center text-on-surface font-bold text-[12px]">PH</div>
             <div><div className="text-on-surface font-bold text-[14px]">Pneumatics</div><div className="text-on-surface-variant text-[10px] tracking-widest uppercase">SMC • FESTO</div></div>
           </motion.div>

           <motion.div animate={{ y: [8, -8, 8] }} transition={{ duration: 5.5, repeat: Infinity }} className="absolute bottom-[20%] right-[10%] bg-surface border border-surface-container-highest p-4 rounded-lg flex items-center gap-4 shadow-xl">
             <div className="bg-surface-container-highest w-10 h-10 rounded flex items-center justify-center text-on-surface font-bold text-[12px]">LB</div>
             <div><div className="text-on-surface font-bold text-[14px]">Lubricants</div><div className="text-on-surface-variant text-[10px] tracking-widest uppercase">SHELL • MOBIL</div></div>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default HomeHero;
