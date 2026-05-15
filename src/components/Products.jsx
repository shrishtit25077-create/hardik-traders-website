import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Zap, Factory, Cog, PenTool, Hammer, ArrowRight, Activity, Wind, Phone } from 'lucide-react';

const scrollTo = (href, e) => {
  if (e) e.preventDefault();
  const el = document.getElementById(href.replace('#', ''));
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 78, behavior: 'smooth' });
};

const CATS = [
  { name: 'Power Tools',           icon: <Zap      size={17}/>, img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1200', desc: 'Drills, grinders, saws & impact drivers.', tag: 'Best Seller', featured: true },
  { name: 'Hand Tools',            icon: <Wrench   size={17}/>, img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=800',  desc: 'Wrenches, pliers & screwdrivers.' },
  { name: 'Welding Equipment',     icon: <Factory  size={17}/>, img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',  desc: 'Machines, electrodes & safety gear.' },
  { name: 'Air Tools',             icon: <Wind     size={17}/>, img: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=800',  desc: 'Pneumatic wrenches, grinders & drills.' },
  { name: 'Fasteners',             icon: <Hammer   size={17}/>, img: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&q=80&w=800',  desc: 'Nuts, bolts & industrial screws.' },
  { name: 'Bearings',              icon: <Cog      size={17}/>, img: 'https://images.unsplash.com/photo-1621905252507-b35492d90986?auto=format&fit=crop&q=80&w=800',  desc: 'Ball, roller & thrust bearings.' },
  { name: 'Hydraulic Tools',       icon: <Activity size={17}/>, img: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=800',  desc: 'Jacks, pumps & cylinders.' },
  { name: 'Measuring Instruments', icon: <PenTool  size={17}/>, img: 'https://images.unsplash.com/photo-1582214400328-44fb74b0c609?auto=format&fit=crop&q=80&w=800',  desc: 'Calipers, micrometers & gauges.' },
];

const Card = ({ cat, featured }) => (
  <div
    className="group relative overflow-hidden cursor-pointer"
    style={{
      borderRadius: '12px',
      border: '1px solid var(--border)',
      height: featured ? '100%' : '205px',
      minHeight: featured ? '430px' : '205px',
      transition: 'box-shadow 0.28s ease, border-color 0.28s ease, transform 0.28s ease',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.boxShadow = '0 0 0 1.5px var(--red), 0 8px 28px rgba(225,6,44,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
  >
    <img src={cat.img} alt={cat.name}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      style={{ filter: 'brightness(0.7)' }}
    />
    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.08) 60%, transparent 100%)' }} />

    {cat.tag && (
      <div className="absolute top-4 left-4 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded"
        style={{ backgroundColor: 'var(--red)' }}>
        {cat.tag}
      </div>
    )}

    <div className="absolute bottom-0 left-0 right-0 p-5">
      <div style={{ color: 'var(--red)' }} className="mb-1.5">{cat.icon}</div>
      <h3 className={`font-bold text-white ${featured ? 'text-xl mb-2' : 'text-sm mb-1'}`}>{cat.name}</h3>
      <p className={`text-[#CCC] ${featured ? 'text-sm mb-5' : 'text-xs'}`}>{cat.desc}</p>
      {featured && (
        <a href="#contact" onClick={e => scrollTo('#contact', e)}
          className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm group/btn">
          Enquire Now <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
        </a>
      )}
    </div>

    {!featured && (
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
        <a href="#contact" onClick={e => scrollTo('#contact', e)}
          className="btn-primary flex items-center gap-1.5 text-[12px] px-4 py-2">
          Enquire <ArrowRight size={11} />
        </a>
      </div>
    )}
  </div>
);

export default function Products() {
  return (
    <section id="products" className="py-16" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container mx-auto px-6 lg:px-12">

        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-5">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8" style={{ backgroundColor: 'var(--red)' }} />
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase" style={{ color: 'var(--red)' }}>Our Inventory</span>
            </div>
            <h2 className="text-3xl md:text-[2.1rem] font-black mb-2 text-[#111]">Premium Industrial Products</h2>
            <p className="text-[#666]">Complete range of tools and equipment for heavy-duty industrial applications.</p>
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <motion.div className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Card cat={CATS[0]} featured />
          </motion.div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATS.slice(1).map((cat, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Card cat={cat} />
              </motion.div>
            ))}
            <motion.a href="#contact" onClick={e => scrollTo('#contact', e)}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col items-center justify-center text-center p-5 cursor-pointer transition-all duration-280 group"
              style={{ borderRadius: '12px', height: '205px', backgroundColor: '#111', border: '1px solid #1A1A1A' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--red)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#111'; }}
            >
              <div className="w-11 h-11 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <Phone size={19} className="text-white" />
              </div>
              <h3 className="text-[15px] font-bold text-white mb-1">Get a Quote</h3>
              <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.55)' }}>Bulk orders & pricing</p>
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}
