import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Zap, Factory, Cog, PenTool, Hammer, ArrowRight, Activity, Wind } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      name: 'Power Tools',
      tag: 'Best Seller',
      icon: <Zap size={18} />,
      img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1200',
      desc: 'High-performance drills, grinders, circular saws, and impact drivers for demanding industrial use.',
      featured: true
    },
    {
      name: 'Hand Tools',
      icon: <Wrench size={18} />,
      img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=800',
      desc: 'Professional-grade wrenches, pliers, and screwdrivers.'
    },
    {
      name: 'Welding Equipment',
      icon: <Factory size={18} />,
      img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
      desc: 'Industrial welding machines and complete safety gear.'
    },
    {
      name: 'Air Tools',
      icon: <Wind size={18} />,
      img: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=800',
      desc: 'Pneumatic impact wrenches, grinders, and drills.'
    },
    {
      name: 'Fasteners',
      icon: <Hammer size={18} />,
      img: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&q=80&w=800',
      desc: 'High-tensile nuts, bolts, and industrial screws.'
    },
    {
      name: 'Bearings',
      icon: <Cog size={18} />,
      img: 'https://images.unsplash.com/photo-1621905252507-b35492d90986?auto=format&fit=crop&q=80&w=800',
      desc: 'Precision ball, roller, and thrust bearings.'
    },
    {
      name: 'Hydraulic Tools',
      icon: <Activity size={18} />,
      img: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=800',
      desc: 'Heavy-duty jacks, pumps, and cylinders.'
    },
    {
      name: 'Measuring Instruments',
      icon: <PenTool size={18} />,
      img: 'https://images.unsplash.com/photo-1582214400328-44fb74b0c609?auto=format&fit=crop&q=80&w=800',
      desc: 'Calipers, micrometers, and precision gauges.'
    }
  ];

  const featured = categories[0];
  const rest = categories.slice(1);

  return (
    <section id="products" style={{ backgroundColor: '#FFFFFF', scrollMarginTop: '80px' }} className="py-24">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8" style={{ backgroundColor: '#C1121F' }} />
              <span className="font-semibold tracking-wider uppercase text-xs" style={{ color: '#C1121F' }}>Our Inventory</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight" style={{ color: '#111111' }}>
              Premium Industrial Products
            </h2>
            <p style={{ color: '#4B5563' }}>
              Complete range of industrial and engineering tools for heavy-duty applications and precision work.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 font-semibold text-sm group transition-colors whitespace-nowrap"
            style={{ color: '#C1121F' }}
          >
            View Full Catalog
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Two-column layout: Featured left + grid right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

          {/* Featured Card — takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 group relative overflow-hidden cursor-pointer"
            style={{ borderRadius: '12px', border: '1px solid #E5E7EB' }}
          >
            <div className="relative h-[420px] lg:h-full min-h-[420px] overflow-hidden">
              <img
                src={featured.img}
                alt={featured.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: 'brightness(0.8)' }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(17,17,17,0.92) 0%, rgba(17,17,17,0.2) 55%, transparent 100%)' }} />

              {/* Tag */}
              {featured.tag && (
                <div className="absolute top-5 left-5 px-3 py-1 rounded text-xs font-bold text-white uppercase tracking-wider" style={{ backgroundColor: '#C1121F' }}>
                  {featured.tag}
                </div>
              )}

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="flex items-center gap-2 mb-2" style={{ color: '#C1121F' }}>
                  {featured.icon}
                  <span className="text-xs font-bold uppercase tracking-wider text-white opacity-60">Category</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{featured.name}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.75)' }}>{featured.desc}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded text-white transition-all group/btn"
                  style={{ backgroundColor: '#C1121F', border: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#A30F1A'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C1121F'}
                >
                  Enquire Now <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Smaller Cards Grid — takes 3 columns */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative overflow-hidden cursor-pointer"
                style={{
                  borderRadius: '12px',
                  border: '1px solid #E5E7EB',
                  height: '200px',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#C1121F';
                  e.currentTarget.style.boxShadow = '0 0 0 1px #C1121F, 0 8px 28px rgba(193,18,31,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                  style={{ filter: 'brightness(0.75)' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(17,17,17,0.9) 0%, rgba(17,17,17,0.1) 60%, transparent 100%)' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-1.5 mb-1" style={{ color: '#C1121F' }}>
                    {category.icon}
                    <h3 className="text-sm font-bold text-white">{category.name}</h3>
                  </div>
                  <p
                    className="text-xs leading-relaxed overflow-hidden transition-all duration-300"
                    style={{ color: 'rgba(255,255,255,0.65)', maxHeight: 0, opacity: 0 }}
                    ref={el => {
                      if (el) {
                        el.parentElement.parentElement.addEventListener('mouseenter', () => {
                          el.style.maxHeight = '40px';
                          el.style.opacity = 1;
                        });
                        el.parentElement.parentElement.addEventListener('mouseleave', () => {
                          el.style.maxHeight = 0;
                          el.style.opacity = 0;
                        });
                      }
                    }}
                  >
                    {category.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Explore all tile */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.48 }}
              className="group flex flex-col items-center justify-center text-center p-6 cursor-pointer transition-all duration-300"
              style={{
                borderRadius: '12px',
                height: '200px',
                backgroundColor: '#111111',
                border: '1px solid #111111',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#C1121F'; e.currentTarget.style.borderColor = '#C1121F'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#111111'; e.currentTarget.style.borderColor = '#111111'; }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <ArrowRight size={22} className="text-white group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">15+ Categories</h3>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>View complete catalog</p>
            </motion.a>
          </div>

        </div>

        {/* Mobile CTA */}
        <a
          href="#contact"
          className="mt-8 flex md:hidden items-center justify-center gap-2 w-full text-white py-4 font-semibold transition-colors"
          style={{ backgroundColor: '#C1121F', borderRadius: '10px' }}
        >
          View Full Catalog <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
};

export default Products;
