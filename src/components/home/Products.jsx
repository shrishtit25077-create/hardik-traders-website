import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Bearings',
    desc: 'Ball, roller, linear & needle bearings from SKF, FAG, NSK, NTN, TIMKEN',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0Ha61bvwd-jCMb0n2YdN8-pIHiOvWBrsEnnvUtUSAFpviN9GTVVS_EM0VaYNMtGElYh0sLoCBw-ntKqQVoWR3sc_KXnUbxGdpqc9ziXS6s6ahNgEtA2MUTzDP71hPNrRzUCDQ9QCTt0vzIrwnbzfmei72D7ta7bkrZr57XExqZz8PAcdGyczCg5dF-9bUpUCpc7X8H-1Hfa4aUFnFqao9IVpAxFXlNv_fI_Ubu0WTwFZNkwr-m0Cw5GMx3N0C9aPb3URpyEZ3YeYH',
    path: '/products/category/bearings',
    brands: ['SKF', 'FAG', 'NSK', 'NTN', 'TIMKEN']
  },
  {
    title: 'Automation',
    desc: 'PLCs, HMIs, drives, and servo systems from Siemens & Mitsubishi',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAeOyeV21--wLNvG-VKO1gVrgT9fzedrTpHwoaq5wzQA_Ed4WGNSZ1kT3JskHeE9iRC2WqQpE-eAUAepFUxnpMxaCAmzlpsZyGbWW6fronUt759wSKUg1a7vzHuDRDbe3Dvs4GV_-0bugyp-F4CKx8Xp8VMXWzvnvLAyN6hLwm4WJV6WvmZnfc_cc1FZ9x9CSSii3hjqHjwXG8s_Ac5ya1D4T0TB59-X6FXF4Wzk3jv1QkYXuJ-xLDGKJ37Pv8r0hmAOPbLJUn2yJb',
    path: '/products/category/sensors-automation',
    brands: ['SIEMENS', 'MITSUBISHI', 'DELTA']
  },
  {
    title: 'Sensors',
    desc: 'Proximity, photoelectric, pressure and level sensors from OMRON',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwJnuRUWzW5wrIRKUQfT62UzitARjivGt1jdcauS-q03HLTYh1-1anfAyuvlJBKrfCE-DbKwYPpQBhdKwrAzA8wfbIjtoBb_s8d-H1jO8G3zqjFDaWcsJfOtpnL424kzIxu4YzIRleaI_u9UFp7zZWWC6E4qM01Fthe_9T4EggZMwvvyg3rgxzkoOubX4qJI41uaBKFOE3PnPL55ezHjRJ42DiMVipUh3IAZwBSyZz9SlXkZH3j11JNuuYP4GpY_tFOzM05K4nix3T',
    path: '/products/category/sensors-automation',
    brands: ['OMRON', 'BANNER', 'IFM', 'P+F']
  },
  {
    title: 'Pneumatics',
    desc: 'Cylinders, valves, FRLs and manifolds from FESTO & SMC',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrtRSg8g5tGEMp9f-E5gvf1jecNSjfAVEcfj4z_eeUqQRY0Ubxm-LI3No_f87bntulQ5_WYm5lhY374QsuQQK9prARziY03EM5yPP0gzTNb0Y3xTiTcSQgFWMdOTL3f52az6TmxOedU17Ry5itKhFoKNnPa6nHxvVUBphCvx4jyMV95mOPPJ2cG3Xs4EcMAC_zk0nkgQcaBPNRkADBomC6iGYSJEOq0oYnPvz1JStHlORNz-Hh9GpfqciRpySFTKJ1Cn7qyDv6XBHj',
    path: '/products/category/pneumatics',
    brands: ['FESTO', 'SMC', 'JANATICS', 'AIRTAC']
  },
  {
    title: 'Hydraulics',
    desc: 'Pumps, cylinders, power packs and customized manifold blocks from Rexroth',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGa2KHLh4nxCboeV1VLlZC6n5S4O2absL0Yfcu4HMl46H0qR9RQyLyGgthnvsL60sCQM0PeyudLMwzoc_Cycsh-FHPLrEuZ6---i4QilWjd0-YT7G4m2pimGZUpCjxb0uJMVMt2-rmhWlBvSuzx2yXeSIZdUpxlaAv75lnhj9ZCADR9xQe196xpCAr0tIlkW5sA1hq9Hs0y1nmqIJXmsQfC2D7rHVCs1U6U0wCQvBqSBnXMZmXCEGZIxfJEtDxOduRHiJ2U-GBtj5U',
    path: '/products/category/hydraulics',
    brands: ['REXROTH', 'EATON', 'YUKEN', 'PARKER']
  },
  {
    title: 'Electricals',
    desc: 'MCBs, contactors, relays and control switchgear from Schneider Electric',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOZJmdviU98_yXCp_BzxMtMS7iQe_jzEIZx52yLmR1GPqtBAf3psF8p4kuan8eJUhtbjxgCAf0HmEeQJO2kC_XXbIKlliKm4dlvSUUpXvurhUX-QSHnFFCq28yqWCopGwunGRnf3XiGgCGN8CY3MtmIGSL1BlmlFfx57IBwQQ4-bU1uU2ImViiW33YDzFEbD60D5vIZrcp9wAJPIB114wR8ddfWyOw3TUKnx9BUXapXCIVWvuf3bhmM10sn77Ls9SotODYVCX4KWV-',
    path: '/products/category/electricals-electronics',
    brands: ['SCHNEIDER', 'SIEMENS', 'L&T', 'ABB']
  }
];

function CategoryCard({ cat, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="
        relative flex flex-col overflow-hidden group rounded-[28px] border border-[rgba(20,50,100,0.06)] bg-white h-[460px] 
        transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.02)] hover:border-blue-500/25 hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)]
      "
    >
      {/* Image Area (55%) */}
      <div className="h-[55%] w-full overflow-hidden relative border-b border-[rgba(20,50,100,0.04)]">
        <img
          src={cat.image}
          alt={cat.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-105"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content Area (45%) */}
      {/* Card padding: 24px (px-6 pb-6 pt-5 gives 24px left/right/bottom, pt-5 is 20px space between image and title) */}
      <div className="h-[45%] px-6 pb-6 pt-5 flex flex-col justify-between">
        <div>
          {/* Category title */}
          <h3 className="font-black text-[#081120] uppercase text-[20px] tracking-tight leading-none group-hover:text-blue-600 transition-colors duration-300">
            {cat.title}
          </h3>

          {/* Brand chips - space to title: 14px (mt-[14px]) */}
          <div className="mt-[14px] flex flex-wrap gap-1.5">
            {cat.brands.map((brand) => (
              <span
                key={brand}
                className="px-2.5 py-0.5 bg-blue-50/50 border border-blue-100/40 text-blue-600 text-[9px] font-extrabold uppercase tracking-wider rounded-md"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button - space to chips: 24px (mt-[24px]) */}
        <div className="mt-[24px]">
          <Link
            to={cat.path}
            className="w-full py-3 bg-transparent border border-slate-200 text-slate-800 font-bold text-[12px] uppercase tracking-wider flex items-center justify-center gap-2 rounded-[24px] hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Explore Range
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="products" className="bg-gradient-to-b from-[#f6f8fb] to-[#f4f7fa] pt-[40px] md:pt-[40px] lg:pt-[40px] pb-[40px] md:pb-[40px] lg:pb-[40px] border-t border-black/[0.04] relative z-20">
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
            <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-black tracking-tight leading-tight text-[#081120] uppercase mb-4">
              Product Categories
            </h2>
            <p className="text-slate-600 text-[14px] sm:text-[16px] leading-relaxed mb-6 font-medium">
              Explore our comprehensive range of high-performance bearings, pneumatics, hydraulics, and custom automation components from global brands.
            </p>
            <Link
              to="/products/categories"
              className="btn-outline flex items-center gap-2 group py-3.5 px-6 text-[12px] rounded-[24px]"
            >
              Explore Complete Catalog
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* 3-Column Grid Layout with tighter 24px gap and reduced top margin */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.title} cat={cat} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
