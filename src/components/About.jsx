import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

const scrollTo = (href, e) => {
  if (e) e.preventDefault();
  const el = document.getElementById(href.replace('#', ''));
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 78, behavior: 'smooth' });
};

const FEATURES = [
  { Icon: Award,       title: 'Premium Quality',   desc: 'Top-tier globally-certified industrial products only.' },
  { Icon: ShieldCheck, title: 'Authorized Dealer', desc: 'Official manufacturer partnerships and full warranties.' },
  { Icon: Clock,       title: 'Reliable Service',  desc: 'Timely delivery and dedicated technical support.' },
];

export default function About() {
  return (
    <section id="about" className="py-16" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=85&w=1400"
                alt="Industrial Workshop"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="absolute -bottom-5 -right-5 hidden md:block text-white p-5 rounded-2xl"
              style={{ backgroundColor: 'var(--red)', boxShadow: '0 8px 28px rgba(225,6,44,0.32)' }}
            >
              <div className="text-4xl font-black mb-0.5">24+</div>
              <div className="text-[11px] font-bold uppercase tracking-widest opacity-90">Years of<br />Excellence</div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8" style={{ backgroundColor: 'var(--red)' }} />
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase" style={{ color: 'var(--red)' }}>About Hardik Traders</span>
            </div>
            <h2 className="text-3xl md:text-[2.2rem] font-black mb-5 leading-tight text-[#111]">
              Your Reliable Partner in Industrial Development
            </h2>
            <p className="text-[1.05rem] leading-relaxed mb-4 text-[#555]">
              Hardik Traders is a trusted engineering and industrial tools trading company providing high-quality products and reliable solutions across multiple sectors.
            </p>
            <p className="leading-relaxed mb-9 text-[#666]">
              With an extensive inventory and strong global partnerships, we ensure clients receive the exact tools they need — enhancing productivity and maintaining the highest safety standards.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-9">
              {FEATURES.map(({ Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white card-lift border border-[#E8E8E8]"
                  style={{ '--hover-border': 'var(--red)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--red)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E8E8E8'}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: 'var(--red-tint)' }}>
                    <Icon size={18} style={{ color: 'var(--red)' }} />
                  </div>
                  <h4 className="text-[13px] font-bold mb-1 text-[#111]">{title}</h4>
                  <p className="text-[12px] leading-relaxed text-[#999]">{desc}</p>
                </div>
              ))}
            </div>

            <a href="#contact" onClick={e => scrollTo('#contact', e)}
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-[0.95rem] group">
              Get In Touch <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
