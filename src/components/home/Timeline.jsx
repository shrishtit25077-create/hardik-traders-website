import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const milestones = [
  {
    year: '2001',
    title: 'Founded',
    desc: 'Hardik Traders established in Ahmedabad with a focus on bearing distribution.',
  },
  {
    year: '2008',
    title: 'Expansion',
    desc: 'Expanded product portfolio to include pneumatics, hydraulics and automation components.',
  },
  {
    year: '2015',
    title: '1000+ Customers',
    desc: 'Crossed 1000 satisfied customers across manufacturing, automotive and textile sectors.',
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    desc: 'Launched online catalog and digital quotation systems for faster B2B procurement.',
  },
  {
    year: '2025',
    title: '35+ Global Brands',
    desc: 'Authorized distributor for over 35 globally recognized industrial brands.',
  },
];

export default function Timeline() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredIdx, setHoveredIdx] = useState(0); // Default active/hovered index is 0

  return (
    <section id="journey" className="relative bg-gradient-to-b from-[#05070A] via-[#0D1117] to-[#05070A] py-12 md:py-[90px] px-6 md:px-12 border-t border-white/[0.03] overflow-hidden">
      {/* Background blueprint elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header */}
        <div ref={ref} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Our Journey
            </p>
            <h2 className="text-[36px] sm:text-[46px] font-black tracking-tight leading-none text-white uppercase">
              Two Decades of<br />
              <span className="text-slate-400 font-light lowercase">Engineering trust</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md"
          >
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Since 2001, Hardik Traders has evolved from a local bearing merchant to a leading national supplier of integrated engineering, pneumatic, and automation solutions.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Timeline (Desktop & Tablet) */}
        <div className="hidden md:block relative py-20 min-h-[360px]">
          {/* Glowing central track line */}
          <div className="absolute top-1/2 left-[5%] right-[5%] -translate-y-1/2 h-[2px] bg-white/[0.06]" />
          
          {/* Animated active electric blue track line */}
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '90%' } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 left-[5%] h-[2px] bg-gradient-to-r from-blue-500 via-blue-400 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.6)]"
          />

          <div className="relative flex justify-between px-[5%]">
            {milestones.map((m, i) => {
              const isActive = hoveredIdx === i;
              return (
                <div 
                  key={m.year} 
                  className="flex flex-col items-center relative"
                  style={{ width: '120px' }}
                  onMouseEnter={() => setHoveredIdx(i)}
                >
                  {/* Floating Milestone Card that appears on node hover */}
                  <div className="absolute bottom-[calc(50%+24px)] w-[260px] pointer-events-none">
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="premium-glass-card p-4 border border-blue-400/25 bg-[#0B1525]/90 shadow-[0_15px_30px_rgba(0,0,0,0.4)] text-center flex flex-col items-center relative z-30"
                        >
                          {/* Triangle indicator pointing to node */}
                          <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0B1525] border-r border-b border-blue-400/20 rotate-45" />
                          
                          <span className="text-[10px] font-black text-blue-400 tracking-widest block mb-1 uppercase">
                            Milestone
                          </span>
                          <h4 className="text-white font-bold text-sm tracking-tight mb-1 uppercase">
                            {m.title}
                          </h4>
                          <p className="text-slate-400 text-[11px] leading-normal font-medium">
                            {m.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Interactive node dot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer">
                    <motion.div
                      animate={{
                        scale: isActive ? 1.25 : 1,
                      }}
                      className={`
                        w-5 h-5 rounded-full bg-[#05070A] border-2 flex items-center justify-center transition-all duration-300
                        ${isActive 
                          ? 'border-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.7)]' 
                          : 'border-white/20 hover:border-blue-400/50'
                        }
                      `}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isActive ? 'bg-blue-400' : 'bg-white/20'}`} />
                    </motion.div>
                    
                    {/* Ring animation */}
                    {isActive && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-blue-400/20 animate-ping pointer-events-none" />
                    )}
                  </div>

                  {/* Year Label below line */}
                  <div className="absolute top-[calc(50%+16px)] text-center">
                    <span 
                      className={`
                        text-sm font-black tracking-wider transition-colors duration-300 cursor-pointer
                        ${isActive ? 'text-blue-400 font-extrabold scale-110' : 'text-slate-400 hover:text-white'}
                      `}
                    >
                      {m.year}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline Layout */}
        <div className="md:hidden relative pl-8 max-w-md mx-auto py-4">
          <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-white/5" />
          <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500 via-blue-400 to-transparent shadow-[0_0_8px_rgba(59,130,246,0.4)]" />

          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div 
                key={m.year} 
                className="relative cursor-pointer"
                onClick={() => setHoveredIdx(i)}
              >
                {/* Node dot */}
                <div 
                  className={`
                    absolute -left-[27px] top-2 z-10 w-4 h-4 rounded-full bg-[#05070A] border-2 transition-all duration-300
                    ${hoveredIdx === i ? 'border-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.6)]' : 'border-white/20'}
                  `}
                />

                <motion.div
                  className={`
                    p-4 rounded-2xl border transition-all duration-300
                    ${hoveredIdx === i 
                      ? 'border-blue-400/30 bg-[#0B1525] shadow-lg' 
                      : 'border-white/[0.03] bg-white/[0.01]'
                    }
                  `}
                >
                  <span className={`text-[10px] font-bold tracking-wider block mb-0.5 ${hoveredIdx === i ? 'text-blue-400' : 'text-slate-500'}`}>
                    {m.year}
                  </span>
                  <h3 className="text-white font-bold text-xs sm:text-sm tracking-tight uppercase">
                    {m.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-normal mt-1 font-medium">
                    {m.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
