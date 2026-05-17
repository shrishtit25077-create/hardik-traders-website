import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Zap, Wrench, Flame, Wind, Cog, Ruler, Droplets, Activity,
  Cpu, Thermometer, Filter, Box, ArrowRight, Phone,
  Gauge, CircuitBoard, Layers, Package,
} from 'lucide-react';

const scrollTo = (href, e) => {
  if (e) e.preventDefault();
  const el = document.getElementById(href.replace('#', ''));
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 78, behavior: 'smooth' });
};

const CATEGORIES = [
  // ── Row 1 featured ───────────────────────────────────────────────
  {
    name: 'Sensors & Automation',
    icon: <Cpu size={18} />,
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    desc: 'Proximity sensors, photoelectric sensors, PLCs, HMI & motion control systems from Balluff, Pepperl+Fuchs, Mitsubishi & Yaskawa.',
    tag: 'Premium',
    featured: true,
  },
  // ── Regular cards ────────────────────────────────────────────────
  {
    name: 'Industrial Tools',
    icon: <Wrench size={16} />,
    img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=800',
    desc: 'Power tools, hand tools, cutting tools & abrasives from Bosch, DeWalt, Stanley & Makita.',
  },
  {
    name: 'Bearings',
    icon: <Cog size={16} />,
    img: 'https://images.unsplash.com/photo-1621905252507-b35492d90986?auto=format&fit=crop&q=80&w=800',
    desc: 'Ball, roller, taper & thrust bearings from SKF, NSK, NTN, FAG & Timken.',
  },
  {
    name: 'Pneumatics',
    icon: <Wind size={16} />,
    img: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=800',
    desc: 'Cylinders, valves, FRL units & fittings from Festo, SMC, Parker & AirTAC.',
  },
  {
    name: 'Hydraulics',
    icon: <Activity size={16} />,
    img: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=800',
    desc: 'Hydraulic pumps, cylinders, hoses & manifolds from Bosch Rexroth & Parker.',
  },
  {
    name: 'Measuring Instruments',
    icon: <Ruler size={16} />,
    img: 'https://images.unsplash.com/photo-1582214400328-44fb74b0c609?auto=format&fit=crop&q=80&w=800',
    desc: 'Vernier calipers, micrometers, gauges & digital instruments from Mitutoyo, Fluke & Hioki.',
  },
  {
    name: 'Welding Equipment',
    icon: <Flame size={16} />,
    img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    desc: 'Welding machines, electrodes, MIG/TIG sets & safety accessories.',
  },
  {
    name: 'Lubricants',
    icon: <Droplets size={16} />,
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
    desc: 'Industrial greases, gear oils & specialty lubricants from Shell, Castrol, Mobil & Servo.',
  },
  {
    name: 'Electricals & Electronics',
    icon: <CircuitBoard size={16} />,
    img: 'https://images.unsplash.com/photo-1625014618427-fbc980b974f5?auto=format&fit=crop&q=80&w=800',
    desc: 'MCBs, contactors, relays, drives & switchgear from Schneider Electric, Siemens & Fuji Electric.',
  },
  {
    name: 'Belts & Belting',
    icon: <Layers size={16} />,
    img: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&q=80&w=800',
    desc: 'V-belts, flat belts, timing belts & conveyor belting for all industrial applications.',
  },
  {
    name: 'Torque Tools',
    icon: <Gauge size={16} />,
    img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800',
    desc: 'Torque wrenches, multipliers & calibration tools from Tohnichi & leading manufacturers.',
  },
  {
    name: 'Temperature Control',
    icon: <Thermometer size={16} />,
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    desc: 'Temperature controllers, sensors, thermocouples & industrial heating solutions.',
  },
  {
    name: 'Filter & Cloth Products',
    icon: <Filter size={16} />,
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
    desc: 'Industrial filter cloth, air filters, oil filters & filtration system components.',
  },
  {
    name: 'Tsubaki Components',
    icon: <Package size={16} />,
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    desc: 'Roller chains, cam clutches, shaft couplings & power transmission components.',
  },
  {
    name: 'Moulding Components',
    icon: <Box size={16} />,
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    desc: 'Rubber, plastic & injection moulding components for precision manufacturing.',
  },
];

// ── Featured card (tall left panel) ────────────────────────────────────────
const FeaturedCard = ({ cat }) => (
  <div
    className="group relative overflow-hidden cursor-pointer"
    style={{
      borderRadius: '14px',
      border: '1px solid var(--border)',
      minHeight: '460px',
      height: '100%',
      transition: 'box-shadow 0.28s ease, border-color 0.28s ease, transform 0.28s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'var(--red)';
      e.currentTarget.style.boxShadow = '0 0 0 1.5px var(--red), 0 12px 36px rgba(200,16,46,0.12)';
      e.currentTarget.style.transform = 'translateY(-3px)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    <img src={cat.img} alt={cat.name}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      style={{ filter: 'brightness(0.65)' }}
    />
    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.15) 55%, transparent 100%)' }} />

    {cat.tag && (
      <div className="absolute top-4 left-4 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded"
        style={{ backgroundColor: 'var(--red)' }}>
        {cat.tag}
      </div>
    )}

    <div className="absolute bottom-0 left-0 right-0 p-6">
      <div style={{ color: 'var(--red)' }} className="mb-2">{cat.icon}</div>
      <h3 className="text-xl font-black text-white mb-2">{cat.name}</h3>
      <p className="text-[#CBD5E1] text-[13.5px] leading-relaxed mb-5">{cat.desc}</p>
      <a href="#contact" onClick={e => scrollTo('#contact', e)}
        className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-[13px] group/btn">
        Enquire Now <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
      </a>
    </div>
  </div>
);

// ── Regular card ────────────────────────────────────────────────────────────
const RegCard = ({ cat }) => (
  <div
    className="group relative overflow-hidden cursor-pointer"
    style={{
      borderRadius: '12px',
      border: '1px solid var(--border)',
      height: '185px',
      transition: 'box-shadow 0.25s ease, border-color 0.25s ease, transform 0.25s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'var(--red)';
      e.currentTarget.style.boxShadow = '0 0 0 1.5px var(--red), 0 6px 20px rgba(200,16,46,0.10)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    <img src={cat.img} alt={cat.name}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
      style={{ filter: 'brightness(0.62)' }}
    />
    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.1) 60%, transparent 100%)' }} />

    <div className="absolute bottom-0 left-0 right-0 p-4">
      <div style={{ color: 'var(--red)' }} className="mb-1">{cat.icon}</div>
      <h3 className="text-[13.5px] font-bold text-white mb-0.5 leading-snug">{cat.name}</h3>
      <p className="text-[11.5px] text-[#aaa] leading-snug line-clamp-2">{cat.desc}</p>
    </div>

    {/* Hover enquire overlay */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      <a href="#contact" onClick={e => scrollTo('#contact', e)}
        className="btn-primary flex items-center gap-1.5 text-[12px] px-4 py-2">
        Enquire <ArrowRight size={11} />
      </a>
    </div>
  </div>
);

// ── CTA card ────────────────────────────────────────────────────────────────
const CTACard = () => (
  <a href="#contact" onClick={e => scrollTo('#contact', e)}
    className="flex flex-col items-center justify-center text-center p-5 cursor-pointer transition-all duration-250 group"
    style={{ borderRadius: '12px', height: '185px', backgroundColor: '#111', border: '1px solid #1A1A1A' }}
    onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--red)'}
    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#111'}
  >
    <div className="w-11 h-11 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
      style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
      <Phone size={19} className="text-white" />
    </div>
    <h3 className="text-[14px] font-bold text-white mb-1">Get a Quote</h3>
    <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.55)' }}>Bulk orders & custom pricing</p>
  </a>
);

export default function Products() {
  const featured = CATEGORIES[0];
  const rest     = CATEGORIES.slice(1);

  return (
    <section id="products" className="py-16" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-5">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8" style={{ backgroundColor: 'var(--red)' }} />
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase" style={{ color: 'var(--red)' }}>Our Inventory</span>
            </div>
            <h2 className="text-3xl md:text-[2.1rem] font-black mb-2" style={{ color: '#111' }}>
              Complete Industrial Supply
            </h2>
            <p style={{ color: '#666', fontSize: '14.5px' }}>
              19+ product categories spanning automation, maintenance, pneumatics, hydraulics and more.
            </p>
          </div>
          <a href="#contact" onClick={e => scrollTo('#contact', e)}
            className="hidden md:flex items-center gap-2 text-sm font-bold group whitespace-nowrap"
            style={{ color: 'var(--red)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--red-hover)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--red)'}
          >
            Request Catalog <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Layout: featured left + grid right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

          {/* Featured */}
          <motion.div className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <FeaturedCard cat={featured} />
          </motion.div>

          {/* Grid: 7 regular + 1 CTA = 8 → 4 rows × 2 cols on tablet, 3 cols on desktop */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.slice(0, 8).map((cat, i) => (
              <motion.div key={cat.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}>
                <RegCard cat={cat} />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.36 }}>
              <CTACard />
            </motion.div>
          </div>
        </div>

        {/* More categories strip */}
        <div className="mt-6 p-4 rounded-xl flex flex-wrap gap-2 items-center" style={{ backgroundColor: '#fff', border: '1px solid var(--border)' }}>
          <span className="text-[11.5px] font-bold uppercase tracking-wider mr-2" style={{ color: 'var(--muted)' }}>Also Available:</span>
          {rest.slice(8).map(cat => (
            <span key={cat.name}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold cursor-pointer transition-all"
              style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--sub)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)'; e.currentTarget.style.backgroundColor = 'var(--red-tint)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--sub)'; e.currentTarget.style.backgroundColor = 'var(--bg)'; }}
            >
              <span style={{ color: 'var(--red)' }}>{cat.icon}</span> {cat.name}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
