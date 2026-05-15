import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TESTIMONIALS = [
  {
    name: 'Rajesh Kumar', company: 'Kumar Engineering Works', role: 'Production Manager', rating: 5,
    text: 'Hardik Traders has been our go-to supplier for over five years. Quality is consistently excellent and delivery is always on time. Highly recommended for any serious industrial buyer.',
    initials: 'RK',
  },
  {
    name: 'Priya Mehta', company: 'Mehta Fabrication Pvt. Ltd.', role: 'Procurement Head', rating: 5,
    text: 'We procure welding and hydraulic tools in bulk regularly. Competitive pricing, 100% genuine products, and a responsive support team. A truly trustworthy authorized dealer.',
    initials: 'PM',
  },
  {
    name: 'Suresh Patel', company: 'Patel Machining Solutions', role: 'Owner', rating: 5,
    text: 'The team helped us select the right Mitutoyo and Insize precision instruments for our quality lab. Excellent product knowledge and professional service. Will definitely continue buying.',
    initials: 'SP',
  },
  {
    name: 'Anil Sharma', company: 'Sharma Auto Industries', role: 'Maintenance Head', rating: 5,
    text: 'From hand tools to power tools — everything is 100% genuine. We have never received a substandard product. Great service and professional approach throughout our partnership.',
    initials: 'AS',
  },
];

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(1);
  const timer = useRef(null);

  const go = (n) => {
    const next = (n + TESTIMONIALS.length) % TESTIMONIALS.length;
    setDir(n > cur ? 1 : -1);
    setCur(next);
  };

  useEffect(() => {
    timer.current = setInterval(() => { setDir(1); setCur(c => (c + 1) % TESTIMONIALS.length); }, 5500);
    return () => clearInterval(timer.current);
  }, []);

  const t = TESTIMONIALS[cur];
  const variants = {
    enter:  d => ({ opacity: 0, x: d > 0 ? 32 : -32 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    exit:   d => ({ opacity: 0, x: d > 0 ? -32 : 32, transition: { duration: 0.2 } }),
  };

  return (
    <section className="py-16" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1.5px] w-8" style={{ backgroundColor: 'var(--red)' }} />
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase" style={{ color: 'var(--red)' }}>Client Reviews</span>
            <div className="h-[1.5px] w-8" style={{ backgroundColor: 'var(--red)' }} />
          </div>
          <h2 className="text-3xl md:text-[2.1rem] font-black mb-2" style={{ color: 'var(--text)' }}>What Our Clients Say</h2>
          <p style={{ color: 'var(--muted)' }}>Trusted by 1,500+ industrial buyers across India</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={cur}
              custom={dir}
              variants={variants}
              initial="enter" animate="center" exit="exit"
              className="rounded-2xl p-8 md:p-10 relative"
              style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', boxShadow: '0 2px 20px rgba(0,0,0,0.05)' }}
            >
              {/* Quotation mark */}
              <div className="mb-5">
                <Quote size={30} strokeWidth={1.5} style={{ color: 'var(--red)', opacity: 0.55 }} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="var(--red)" color="var(--red)" />
                ))}
              </div>

              <blockquote className="text-[1.02rem] leading-[1.75] mb-7 font-medium" style={{ color: 'var(--sub)' }}>
                {t.text}
              </blockquote>

              {/* Red bottom accent */}
              <div className="h-[1.5px] w-10 mb-6 rounded-full" style={{ backgroundColor: 'var(--red)', opacity: 0.5 }} />

              <div className="flex items-center gap-3.5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-[12px] shrink-0"
                  style={{ backgroundColor: 'var(--red)' }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[14px] font-bold" style={{ color: 'var(--text)' }}>{t.name}</div>
                  <div className="text-[12px]" style={{ color: 'var(--muted)' }}>{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => go(cur - 1)}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
              style={{ border: '1px solid var(--border)', color: 'var(--muted)', backgroundColor: 'var(--card)' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--red)'; e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--card)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
            >
              <ChevronLeft size={15} />
            </button>

            <div className="flex gap-1.5 items-center">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i} onClick={() => go(i)}
                  className="h-[3px] rounded-full transition-all duration-300"
                  style={{ width: i === cur ? '20px' : '7px', backgroundColor: i === cur ? 'var(--red)' : 'var(--border)' }}
                />
              ))}
            </div>

            <button
              onClick={() => go(cur + 1)}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
              style={{ border: '1px solid var(--border)', color: 'var(--muted)', backgroundColor: 'var(--card)' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--red)'; e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--card)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
