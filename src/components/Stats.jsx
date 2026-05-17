import React, { useEffect, useRef, useState } from 'react';
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
  { end: 30,   suffix: '+', label: 'Premium Brands',     Icon: ShieldCheck },
  { end: 19,   suffix: '+', label: 'Product Categories', Icon: Package },
  { end: 24,   suffix: '+', label: 'Years Experience',   Icon: Clock },
  { end: 5000, suffix: '+', label: 'Industrial Clients', Icon: Users },
];

function StatItem({ s, active, i }) {
  const v = useCounter(s.end, active);
  return (
    <div className="flex flex-col items-center text-center py-8 px-4">
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center mb-3"
        style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
      >
        <s.Icon size={20} color="white" strokeWidth={1.6} />
      </div>
      <div className="text-[2rem] md:text-[2.4rem] font-black leading-none mb-1 text-white">
        {v.toLocaleString()}{s.suffix}
      </div>
      <div className="text-[10px] font-semibold uppercase tracking-widest text-white/70">
        {s.label}
      </div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [go, setGo] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setGo(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{ backgroundColor: 'var(--red)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Subtle dot grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-white/15">
          {STATS.map((s, i) => (
            <StatItem key={i} s={s} active={go} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
