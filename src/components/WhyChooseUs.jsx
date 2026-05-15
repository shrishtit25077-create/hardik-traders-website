import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, ShieldCheck, Truck, HeadphonesIcon, Package, Star } from 'lucide-react';

const REASONS = [
  { Icon: BadgeCheck,     title: 'Genuine Products',    desc: '100% authentic tools sourced directly from authorized manufacturers.' },
  { Icon: ShieldCheck,    title: 'Authorized Dealer',   desc: 'Official dealer for 25+ global brands with full manufacturer warranties.' },
  { Icon: Package,        title: 'Bulk Orders',         desc: 'Flexible MOQs and competitive bulk pricing for industrial procurement.' },
  { Icon: Truck,          title: 'Fast Delivery',       desc: 'Pan-India logistics ensuring on-time delivery to your project site.' },
  { Icon: Star,           title: 'Industrial Expertise',desc: '10+ years helping industries find the right tools for every application.' },
  { Icon: HeadphonesIcon, title: 'Customer Support',    desc: 'Dedicated team for technical guidance and after-sales service.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container mx-auto px-6 lg:px-12">

        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-8" style={{ backgroundColor: 'var(--red)' }} />
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase" style={{ color: 'var(--red)' }}>Our Advantage</span>
            <div className="h-[2px] w-8" style={{ backgroundColor: 'var(--red)' }} />
          </div>
          <h2 className="text-3xl md:text-[2.1rem] font-black mb-3 text-[#111]">Why Partner With Us?</h2>
          <p className="text-[#666]">We don't just supply tools — we deliver reliability, expertise, and long-term industrial partnerships.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map(({ Icon, title, desc }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="p-7 rounded-xl bg-white card-lift group cursor-default"
              style={{ border: '1px solid var(--border)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--red)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: 'var(--red-tint)', color: 'var(--red)' }}>
                <Icon size={24} strokeWidth={1.8} />
              </div>
              <h3 className="text-[1.05rem] font-bold mb-2 text-[#111]">{title}</h3>
              <p className="text-sm leading-relaxed text-[#666]">{desc}</p>
              <div className="mt-5 h-[2px] w-0 group-hover:w-full rounded-full transition-all duration-500"
                style={{ backgroundColor: 'var(--red)' }} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
