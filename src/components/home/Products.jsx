import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Bearings',
    desc: 'Precision ball, roller, linear & needle bearings from SKF, FAG, NSK, NTN, Timken',
    image: '/products/bearings-category.png',
    path: '/products/category/bearings',
    brands: ['SKF', 'FAG', 'NSK', 'NTN', 'Timken']
  },
  {
    title: 'Sensors',
    desc: 'Industrial proximity, photoelectric, pressure and level sensors from OMRON, BANNER, IFM, P+F',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    path: '/products/category/sensors',
    brands: ['OMRON', 'BANNER', 'IFM', 'P+F']
  },
  {
    title: 'Pneumatics',
    desc: 'High-performance cylinders, valves, FRLs and air manifolds from Festo & SMC',
    image: '/products/pneumatics-category.jpg',
    path: '/products/category/pneumatics',
    brands: ['Festo', 'SMC', 'Janatics', 'Airtac']
  },
  {
    title: 'Electricals',
    desc: 'Industrial MCBs, contactors, control switchgear and relays from Schneider, Siemens, L&T, ABB',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop',
    path: '/products/category/electricals-electronics',
    brands: ['Schneider', 'Siemens', 'L&T', 'ABB']
  },
  {
    title: 'Allen Bolts',
    desc: 'High-tensile socket head cap screws, hex bolts and fasteners from Unbrako, X-Bolt',
    image: '/products/allen-bolts-category.png',
    path: '/products/category/allen-bolts',
    brands: ['Unbrako', 'X-Bolt']
  },
  {
    title: 'Pulleys & V-Belts',
    desc: 'Power transmission pulleys, V-Belts, couplings and belt drive systems from Fenner',
    image: '/products/pulleys-vbelts-category.png',
    path: '/products/category/pulleys-vbelts',
    brands: ['Fenner']
  },
  {
    title: 'Safety Equipment',
    desc: 'Helmets, gloves, safety shoes, goggles and personal protective equipment (PPE) from 3M, Honeywell, Udyogi',
    image: '/products/safety-category.png',
    path: '/products/category/safety-equipment',
    brands: ['3M', 'Honeywell', 'Udyogi']
  }
];

function CategoryCard({ cat, index, inView }) {
  return (
    <Link to={cat.path} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -6, scale: 1.02 }}
        className="
          relative flex flex-col overflow-hidden group rounded-[24px] border border-[rgba(20,50,100,0.06)] bg-white h-full 
          transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.02)] hover:border-blue-500/25 hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)]
        "
      >
        {/* Image Area (Fixed 220px) */}
        <div className="h-[220px] w-full overflow-hidden relative border-b border-[rgba(20,50,100,0.04)] flex-shrink-0">
          <img
            src={cat.image}
            alt={cat.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col justify-start gap-3 flex-grow">
          {/* Category title */}
          <h3 className="font-bold text-[#1F2937] uppercase text-[17px] tracking-tight leading-none group-hover:text-blue-600 transition-colors duration-300">
            {cat.title}
          </h3>

          {/* Description */}
          <p className="text-[12px] text-slate-500 line-clamp-2 leading-relaxed font-medium">
            {cat.desc}
          </p>

          {/* Brand chips */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {cat.brands.map((brand) => (
              <span
                key={brand}
                className="px-2.5 py-0.5 bg-[#E6F0FA] border border-blue-100/40 text-blue-700 text-[9px] font-extrabold uppercase tracking-wider rounded-md"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Products() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="products" className="bg-gradient-to-b from-[#f6f8fb] to-[#f4f7fa] pt-[60px] md:pt-[80px] lg:pt-[100px] pb-[60px] md:pb-[80px] lg:pb-[100px] border-t border-black/[0.04] relative z-20">
      {/* Background ambient light */}
      <div className="absolute bottom-1/4 right-[5%] w-[400px] h-[400px] rounded-full bg-blue-500/[0.015] blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="max-w-[1320px] mx-auto w-full">
          {/* Centered Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center"
          >
            <p className="text-blue-600 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">Our Portfolio</p>
            <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-black tracking-tight leading-tight text-[#1F2937] uppercase mb-4">
              Product Categories
            </h2>
            <p className="text-slate-600 text-[14px] sm:text-[16px] leading-relaxed mb-6 font-medium">
              Explore our comprehensive range of high-performance mechanical, electrical, pneumatic, and safety equipment from global brands.
            </p>
            <Link
              to="/products/categories"
              className="btn-outline flex items-center gap-2 group py-3.5 px-6 text-[12px] rounded-[24px] hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Explore Complete Catalog
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Grid Layout - 4 columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr mt-12">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.title} cat={cat} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
