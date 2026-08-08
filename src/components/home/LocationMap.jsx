import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function LocationMap() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-gradient-to-b from-[#f8fafc] to-[#f5f7fb] pt-[40px] md:pt-[40px] lg:pt-[40px] pb-[60px] md:pb-[80px] lg:pb-[100px] border-t border-black/[0.04]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="max-w-[1320px] mx-auto w-full">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-[#ececec] rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] w-full"
          >
            {/* Header Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between px-6 py-4 md:px-8 md:h-[70px] border-b border-[#ececec] gap-4 md:gap-6 bg-white">
              {/* Left side: Address Info */}
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                <span className="text-[15px] md:text-[16px] font-black text-[#081120] tracking-wide flex items-center gap-1.5">
                  <span>📍</span> Hardik Traders — Rewari, Haryana
                </span>
                <span className="hidden md:inline text-slate-300">|</span>
                <span className="text-[12px] md:text-[13px] font-bold text-slate-500 uppercase tracking-wider">
                  Shop No. 1740/4, Near SBI Bank, Circular Road, Rewari - 123401
                </span>
              </div>

              {/* Right side: Open Maps Blue CTA Button */}
              <div className="flex-shrink-0">
                <a
                  href="https://www.google.com/maps?q=Hardik+Traders+Rewari+Haryana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[12px] font-black uppercase tracking-wider rounded-[20px] transition-colors shadow-[0_4px_12px_rgba(59,130,246,0.15)]"
                >
                  Open Maps <span className="text-[14px]">↗</span>
                </a>
              </div>
            </div>

            {/* Map Area */}
            <div className="h-[350px] md:h-[450px] w-full bg-slate-50 relative">
              <iframe
                title="Hardik Traders Google Maps Location"
                src="https://www.google.com/maps?q=Hardik+Traders+Rewari+Haryana&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
