import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

// Custom Animated Counter
const AnimatedCounter = ({ target, suffix = "", delay = 0 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        setTimeout(() => {
          let start = 0;
          const end = parseFloat(target);
          if (isNaN(end)) return;
          const startTime = performance.now();
          const duration = 1800; // 1.8 seconds

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            const currentCount = start + easeProgress * (end - start);

            if (target.toString().includes('.')) {
              setCount(currentCount.toFixed(1));
            } else {
              setCount(Math.floor(currentCount));
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };
          requestAnimationFrame(animate);
        }, delay * 1000);
      }
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [target, delay]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

const stats = [
  { value: '1000', suffix: '+', label: 'Active B2B Clients' },
  { value: '25', suffix: '+', label: 'Years of Service' },
  { value: '35', suffix: '+', label: 'Authorized Brands' },
  { value: '4.9', suffix: '★', label: 'Satisfaction Rating' },
];

const clientLogos = [
  'L&T',
  'Tata Motors',
  'Amul',
  'Maruti',
  'Jindal',
  'Hero',
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="testimonials" className="bg-[#05070A] py-12 md:py-[90px] px-6 md:px-12 overflow-hidden border-t border-white/[0.03]">
      <div ref={ref} className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Column: Heading & Client Log Tiles Grid (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5"
          >
            <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Market Authority
            </p>
            <h2 className="text-[32px] sm:text-[42px] font-black tracking-tight leading-[1.1] text-white uppercase mb-4">
              Trusted By<br />
              <span className="text-slate-400 font-light lowercase font-sans">industry leaders</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md font-medium">
              Hardik Traders supplies premium mechanical, hydraulic, pneumatic and electrical components to tier-1 manufacturing, processing and packaging plants across India.
            </p>
          </motion.div>

          {/* Premium Static Client Tiles Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
            {clientLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="
                  flex items-center justify-center py-4 px-3 rounded-[16px] border border-white/[0.03]
                  bg-white/[0.015] text-slate-500 hover:text-white hover:border-blue-400/30 hover:bg-[#0B1525]/30
                  text-[11px] font-extrabold uppercase tracking-widest text-center transition-all duration-300 select-none
                  shadow-md hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]
                "
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Bento Statistics Grid (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="premium-glass-card p-5 border border-white/[0.04] hover:border-blue-400/20 hover:bg-slate-900/40 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />

              <span className="block text-[48px] md:text-[56px] font-black text-white leading-none tracking-tight">
                {stat.suffix === '★' ? (
                  <span className="flex items-center gap-1">
                    <AnimatedCounter target={stat.value} delay={i * 0.1} />
                    <Star className="w-8 h-8 text-blue-400 fill-blue-400 inline-block align-middle" />
                  </span>
                ) : (
                  <span className="flex items-center">
                    <AnimatedCounter target={stat.value} delay={i * 0.1} />
                    <span className="text-blue-400 ml-0.5">{stat.suffix}</span>
                  </span>
                )}
              </span>

              <span className="block text-xs text-slate-400 uppercase tracking-widest font-semibold mt-2.5">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
