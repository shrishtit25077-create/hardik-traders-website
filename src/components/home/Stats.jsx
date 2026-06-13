import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { prefix: '', value: 25, suffix: '+', label: 'YEARS', sub: 'of Excellence' },
  { prefix: '', value: 1000, suffix: '+', label: 'CUSTOMERS', sub: 'Served Across India' },
  { prefix: '', value: 500, suffix: '+', label: 'PRODUCTS', sub: 'In Our Catalog' },
  { prefix: '', value: 35, suffix: '+', label: 'BRANDS', sub: 'Global Partners' },
  { prefix: '', value: null, suffix: '', label: 'PAN INDIA', sub: 'Supply Network' },
];

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative bg-bg-800 border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`
                py-12 px-6 flex flex-col justify-center items-start
                ${i < stats.length - 1 ? 'border-r border-white/5' : ''}
                group hover:bg-white/[0.02] transition-colors duration-300
              `}
            >
              {/* Value */}
              <div className="flex items-end gap-1 mb-2">
                {stat.value !== null ? (
                  <span className="text-[56px] lg:text-[64px] font-black leading-none text-white tracking-tighter group-hover:text-[#60A5FA] transition-colors duration-300">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        delay={i * 0.1}
                        separator=","
                      />
                    ) : (
                      stat.value
                    )}
                    {stat.suffix}
                  </span>
                ) : (
                  <span className="text-[40px] lg:text-[48px] font-black leading-none text-white tracking-tighter group-hover:text-[#60A5FA] transition-colors duration-300">
                    Pan India
                  </span>
                )}
              </div>

              {/* Label */}
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#60A5FA] mb-1">
                {stat.label}
              </span>
              <span className="text-text-secondary text-[12px]">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
