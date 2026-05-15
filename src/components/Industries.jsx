import React from 'react';
import { motion } from 'framer-motion';
import { Settings, HardHat, Wrench, Zap, Truck, Factory } from 'lucide-react';

const INDUSTRIES = [
  {
    Icon: Factory,
    title: 'Manufacturing',
    desc: 'Power tools, fasteners, and precision instruments for production floors.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80',
  },
  {
    Icon: HardHat,
    title: 'Construction',
    desc: 'Heavy-duty tools, safety equipment, and site supplies for contractors.',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80',
  },
  {
    Icon: Wrench,
    title: 'Fabrication',
    desc: 'Welding equipment, cutting tools, and grinding solutions for fabricators.',
    img: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80',
  },
  {
    Icon: Settings,
    title: 'Automotive',
    desc: 'Workshop tools, diagnostic equipment, and maintenance supplies.',
    img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80',
  },
  {
    Icon: Zap,
    title: 'Heavy Engineering',
    desc: 'Hydraulic tools, bearings, and industrial-grade fasteners for heavy plant.',
    img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80',
  },
  {
    Icon: Truck,
    title: 'Maintenance & MRO',
    desc: 'Comprehensive MRO supply for planned maintenance and emergency repairs.',
    img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80',
  },
];

const scrollTo = (href, e) => {
  if (e) e.preventDefault();
  const el = document.getElementById(href.replace('#', ''));
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 78, behavior: 'smooth' });
};

export default function Industries() {
  return (
    <section className="py-16" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container mx-auto px-6 lg:px-12">

        <div className="text-center max-w-lg mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-6" style={{ backgroundColor: 'var(--red)' }} />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--red)' }}>
              Industry Expertise
            </span>
            <div className="h-px w-6" style={{ backgroundColor: 'var(--red)' }} />
          </div>
          <h2 className="text-[1.75rem] font-black mb-2" style={{ color: 'var(--text)' }}>
            Industries We Serve
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '14px' }}>
            Supplying precision tools and equipment to every major industrial sector across India.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {INDUSTRIES.map(({ Icon, title, desc, img }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.32, delay: i * 0.06 }}
              className="group relative rounded-xl overflow-hidden cursor-default"
              style={{
                border: '1px solid var(--border)',
                transition: 'box-shadow 0.22s ease, transform 0.22s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.10)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
            >
              {/* Image */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(28,28,28,0.72) 0%, rgba(0,0,0,0.1) 60%)' }}
                />
                {/* Icon badge */}
                <div
                  className="absolute top-3 left-3 w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--red)' }}
                >
                  <Icon size={16} color="white" strokeWidth={1.8} />
                </div>
                {/* Title on image */}
                <h3
                  className="absolute bottom-3 left-3 text-white font-bold text-[15px] leading-tight"
                >
                  {title}
                </h3>
              </div>

              {/* Description */}
              <div
                className="p-4"
                style={{ backgroundColor: 'var(--card)' }}
              >
                <p className="text-[12.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>{desc}</p>
                <a
                  href="#contact"
                  onClick={(e) => scrollTo('#contact', e)}
                  className="inline-flex items-center gap-1 text-[11.5px] font-bold mt-3 transition-colors"
                  style={{ color: 'var(--red)' }}
                >
                  Get a Quote →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
