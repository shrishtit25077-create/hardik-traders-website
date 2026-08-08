import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const industries = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    tagline: 'OEM & industrial lines',
    desc: 'Heavy-duty conveyor systems, precision assembly fixtures, and automated production machinery.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  },
  {
    id: 'automotive',
    name: 'Automotive',
    tagline: 'Assembly & robotics',
    desc: 'Pneumatic clamping systems, precision bearings, and custom robotic tooling for high-speed assembly.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80',
  },
  {
    id: 'packaging',
    name: 'Packaging',
    tagline: 'High-speed sorting',
    desc: 'Specialized vacuum suction systems, high-speed sorting rollers, and low-friction linear bearings.',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&q=80',
  },
  {
    id: 'food-processing',
    name: 'Food Processing',
    tagline: 'Hygienic Systems',
    desc: 'FDA-approved washdown pneumatics, stainless steel bearings, and food-grade lubricants.',
    image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=800&q=80',
  },
  {
    id: 'textile',
    name: 'Textile',
    tagline: 'Spinning & weaving',
    desc: 'High-temperature bearings, specialized drive belts, and precision sensors for high-speed looms.',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80',
  },
  {
    id: 'construction',
    name: 'Construction',
    tagline: 'Heavy-duty bearings',
    desc: 'Extreme-durability heavy bearings for loaders, structural cranes, and material handling systems.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
];

function IndustryCard({ ind, inView, index }) {
  return (
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
          src={ind.image}
          alt={ind.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-105"
        />
        {/* Dark overlay for readability and contrast */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
      </div>

      {/* Content Area (Flex-grow to align layout heights) */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          {/* Tagline */}
          <span className="text-[9px] text-blue-600 font-bold uppercase tracking-[0.25em] mb-1.5 block">
            {ind.tagline}
          </span>
          {/* Title */}
          <h3 className="font-bold text-[#1F2937] uppercase text-[17px] tracking-tight leading-none mb-2">
            {ind.name}
          </h3>
          {/* Description */}
          <p className="text-[12px] text-slate-500 leading-relaxed font-medium">
            {ind.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Industries() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="industries" className="bg-[#f8fafc] py-10 border-t border-black/[0.04] relative z-20 overflow-hidden">
      {/* Low-opacity grid lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Centering wrapper (max-w-6xl mx-auto px-4) */}
      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        
        {/* Centered Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <p className="text-blue-600 text-[11px] font-bold uppercase tracking-[0.25em] mb-2.5">Sectors We Power</p>
          <h2 className="text-[32px] sm:text-[40px] font-black tracking-tight leading-tight text-[#1F2937] uppercase mb-3">
            Industries We Serve
          </h2>
          <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
            Delivering high-performance motion, control, sensor, and hardware automation systems across India's B2B industrial sectors.
          </p>
        </motion.div>

        {/* Perfectly balanced 3-column grid layout (3x2 structure) with gap-6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr mt-10">
          {industries.map((ind, i) => (
            <IndustryCard key={ind.id} ind={ind} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
