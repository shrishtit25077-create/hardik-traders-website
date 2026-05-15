import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Package, ShieldCheck, Users, Clock } from 'lucide-react';

const useCounter = (end, active = false) => {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    let s;
    const raf = ts => {
      if (!s) s = ts;
      const p = Math.min((ts - s) / 1800, 1);
      setV(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [active, end]);
  return v;
};

const STATS = [
  { end: 50000, suffix: '+', label: 'Products Supplied',  Icon: Package },
  { end: 25,    suffix: '+', label: 'Premium Brands',     Icon: ShieldCheck },
  { end: 1500,  suffix: '+', label: 'Industrial Clients', Icon: Users },
  { end: 10,    suffix: '+', label: 'Years of Service',   Icon: Clock },
];

const Item = ({ s, active, i, isLast }) => {
  const v = useCounter(s.end, active);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.08 }}
      className="flex-1 flex flex-col items-center text-center py-8 px-6"
      style={{ borderRight: isLast ? 'none' : '1px solid var(--border)' }}
    >
      {/* Icon circle */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: 'var(--red-tint)', color: 'var(--red)' }}
      >
        <s.Icon size={22} strokeWidth={1.8} />
      </div>
      {/* Number */}
      <div className="text-[2.2rem] font-black leading-none mb-1.5" style={{ color: 'var(--text)' }}>
        {v.toLocaleString()}{s.suffix}
      </div>
      {/* Label */}
      <div className="text-[12px] font-semibold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
        {s.label}
      </div>
    </motion.div>
  );
};

export default function Stats() {
  const ref = useRef(null);
  const [go, setGo] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setGo(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ backgroundColor: 'var(--card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap divide-x divide-[var(--border)] md:flex-nowrap">
          {STATS.map((s, i) => (
            <Item key={i} s={s} active={go} i={i} isLast={i === STATS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
