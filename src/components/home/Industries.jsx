import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    tagline: '25+ years support',
    desc: 'Delivering factory machinery parts, production line controls, and comprehensive engineering solutions under one roof.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7XjCZJdHpjRsI41t2hNilVh_YJT-3S0PCMpSEPeHzhaxLTexMFdRjFhJOEThCGLN7NapQsoYldFO-u0kBgB_Hu-UWqUQ2SowEKbsUDPOct87AYdJuwtEgBR4oZNBCewkj2LkTLCsY_zojHB6T2ifmEnRllRd5acZuqlIKnWjQrsn7GcNv3K3EKFs5t88RGhI6U5IVSORiGJdKzvhbPotD1l4WqnH9GzWb03wCPVeyrFT5VZ2L5oDMkmfPIzGB-yptQlhmP1JQvzLk',
    sizeClass: 'col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 h-[280px] sm:h-[320px] lg:h-auto min-h-[280px] lg:min-h-[352px]',
    isHero: true,
  },
  {
    id: 'automotive',
    name: 'Automotive',
    tagline: 'OEM solutions',
    desc: 'Supply chain support for high-precision vehicle drivetrain parts and automated robotic assembly lines.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4cNEwRBEmVr7_nByxl5SdRk_wpss1FKW8pYVb31-8zUHSrdYFj1qRbiqYewFha9J3NDDulb6Gk0m3qVfurkhZxhlI3G68zrwsm0hE8bTi2_wpw3D8zj7kRo8QIzyoANc7CUOYyZQcoryoLEyjk0vgBTrZ9q7eC4KGVpeLijOtFv9vyeJRYhwPI3Kb0FVxIsFmUk1KaVMD56AeU6waCG_t0o7Afn1mh1JUvpgswWidsFujx3dBdqZiYzPKddlGGw3EaZikijafxWA-',
    sizeClass: 'col-span-1 lg:col-span-1 lg:row-span-1 h-[160px]',
  },
  {
    id: 'packaging',
    name: 'Packaging',
    tagline: 'Motion control systems',
    desc: 'Intelligent high-speed conveyor belts, carton dividers, and responsive packaging machinery sensors.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCI0iPNp9DJ3F5nRL_7Gjlc_coV52p4sWU1gCl4nU3SVX8TrcBZB5WIQwh89pvCRsJalSf4Dhodl5tE6NjRySTA8tvJmIon_PD3TGDiUfVMkYi5q-0hZ5wYFMAPmlF_gpiS7v40XnQFN-FSkX1dTuq8s4QxjTOySW-3AzS2wUxZIjg4vl-woY0KuvQzaStwkBEJ2ZR1-_GeLVwimEc_Vbu6nSSe2apJ3Pm-v2Vsi-3WQ4I89pZfGYvCVxYOU9txi22d6J5kDtpuZXYX',
    sizeClass: 'col-span-1 lg:col-span-1 lg:row-span-1 h-[160px]',
  },
  {
    id: 'textile',
    name: 'Textile',
    tagline: 'High-speed spindle solutions',
    desc: 'High-rpm specialized spindle setups, automated loom bearings, and custom weave sensors.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    sizeClass: 'col-span-1 lg:col-span-1 lg:row-span-1 h-[160px]',
  },
  {
    id: 'construction',
    name: 'Construction',
    tagline: 'Heavy-duty bearings',
    desc: 'Extreme-durability heavy bearings for loaders, structural cranes, and material handling systems.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    sizeClass: 'col-span-1 lg:col-span-1 lg:row-span-1 h-[160px]',
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    tagline: 'Field equipment support',
    desc: 'Resilient drive-joints and dust-sealed bearings for tractors, combine harvesters, and sprayers.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80',
    sizeClass: 'col-span-1 lg:col-span-1 lg:row-span-1 h-[160px]',
  },
  {
    id: 'food-processing',
    name: 'Food Processing',
    tagline: 'Hygienic components',
    desc: 'FDA-approved food-safe lubricants, stainless pumps, and washdown-rated pneumatic actuators.',
    image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=600&q=80',
    sizeClass: 'col-span-1 lg:col-span-1 lg:row-span-1 h-[160px]',
  },
  {
    id: 'pharma',
    name: 'Pharma',
    tagline: 'Precision engineering',
    desc: 'Cleanroom-certified pneumatic drives, laboratory scale measurement, and precision dosing valves.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
    sizeClass: 'col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-1 h-[160px]',
  },
];

function BentoCard({ ind, inView, index }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative overflow-hidden group cursor-pointer rounded-[28px] border transition-all duration-500 ease-out shadow-sm hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)]
        ${ind.sizeClass}
        ${isHovered ? 'border-blue-400/40 -translate-y-1.5' : 'border-[rgba(20,50,100,0.06)] bg-white'}
      `}
    >
      {/* Background Image */}
      <img
        src={ind.image}
        alt={ind.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08] brightness-[0.38] group-hover:brightness-[0.28]"
      />

      {/* Premium Spotlight Overlay following cursor */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 130px at ${coords.x}px ${coords.y}px, rgba(59,130,246,0.15), transparent 80%)`,
          }}
        />
      )}

      {/* Dark overlay with blue bottom glow gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-[80px] bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Small floating arrow in top-right corner */}
      <div
        className={`
          absolute top-5 right-5 w-8 h-8 rounded-full border flex items-center justify-center backdrop-blur-md transition-all duration-300 z-20
          ${isHovered
            ? 'border-blue-400 bg-blue-500/10 shadow-[0_0_15px_rgba(96,165,250,0.4)] text-blue-400 translate-x-1 rotate-45'
            : 'border-white/10 bg-black/45 text-slate-300'
          }
        `}
      >
        <ArrowUpRight size={14} className="transition-transform duration-300" />
      </div>

      {/* Card Content Layout */}
      {ind.isHero ? (
        /* HERO CARD CONTENT (Manufacturing) */
        <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
          <div>
            <span className="text-[10px] text-[#5FA8FF] font-black uppercase tracking-[0.3em] block mb-2">
              Sector Profile · {ind.tagline}
            </span>
            <h3 className="text-[28px] sm:text-[32px] font-black uppercase tracking-tight text-white leading-none mb-3">
              {ind.name}
            </h3>
            <p className="text-slate-200 text-xs sm:text-[14px] leading-relaxed max-w-lg font-medium">
              {ind.desc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-4">
            {/* Mini trust checklist badges */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[10px] font-bold text-slate-300 uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <span className="text-blue-400 text-xs font-black">✓</span> Pan India supply
              </span>
              <span className="flex items-center gap-1">
                <span className="text-blue-400 text-xs font-black">✓</span> Technical support
              </span>
              <span className="flex items-center gap-1">
                <span className="text-blue-400 text-xs font-black">✓</span> Genuine products
              </span>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-[#5FA8FF] text-[11px] font-bold uppercase tracking-wider hover:text-blue-300 transition-colors"
            >
              Explore Industry
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      ) : (
        /* STANDARD BENTO CARD CONTENT */
        <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
          <span className="text-[9px] text-[#5FA8FF] font-bold uppercase tracking-[0.25em] mb-1 block">
            {ind.tagline}
          </span>
          <h3 className="text-[20px] font-black uppercase tracking-tight text-white leading-none">
            {ind.name}
          </h3>
          <p className="text-slate-300 text-[12px] leading-relaxed mt-2 font-medium overflow-hidden max-h-0 group-hover:max-h-[60px] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
            {ind.desc}
          </p>
        </div>
      )}
    </motion.div>
  );
}

export default function Industries() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="industries" className="bg-gradient-to-b from-[#f8fafc] to-[#f6f8fb] pt-[60px] md:pt-[80px] lg:pt-[100px] pb-[40px] md:pb-[40px] lg:pb-[40px] border-t border-black/[0.04] relative z-20 overflow-hidden">
      {/* Low-opacity grid lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Decorative vertical blue light beams */}
      <div className="absolute top-1/4 left-[20%] w-[1px] h-3/4 bg-gradient-to-b from-blue-500/0 via-blue-500/10 to-blue-500/0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-[30%] w-[1px] h-3/4 bg-gradient-to-b from-blue-500/0 via-blue-500/8 to-blue-500/0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/[0.015] blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full">
        <div className="max-w-[1320px] mx-auto w-full">
          {/* Centered Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="text-blue-600 text-[11px] font-bold uppercase tracking-[0.25em] mb-3">Sectors We Power</p>
            <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-black tracking-tight leading-tight text-[#081120] uppercase mb-4">
              Industries We Serve
            </h2>
            <p className="text-slate-600 text-[14px] sm:text-[16px] leading-relaxed font-medium">
              Delivering high-performance motion, control, sensor, and hardware automation systems across India's B2B industrial sectors.
            </p>
          </motion.div>

          {/* Premium Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {industries.map((ind, i) => (
              <BentoCard key={ind.id} ind={ind} inView={inView} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
