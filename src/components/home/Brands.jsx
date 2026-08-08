import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const categories = [
  'All',
  'Bearings',
  'Sensors',
  'Pneumatics',
  'Electrical',
  'Allen Bolts',
  'Pulleys',
  'Safety'
];

const brandPartners = [
  {
    name: 'Bosch',
    categories: ['Allen Bolts'],
    logo: (
      <svg viewBox="0 0 150 45" className="w-32 h-10">
        <circle cx="22" cy="22" r="10" stroke="#ff0000" strokeWidth="2.5" fill="none" />
        <circle cx="22" cy="22" r="4" fill="#ff0000" />
        <path d="M12 22h20M22 12v20" stroke="#ff0000" strokeWidth="1.5" />
        <text x="45" y="30" fill="#0E1726" className="font-black text-[22px] tracking-wider" style={{ fontFamily: 'sans-serif' }}>BOSCH</text>
      </svg>
    )
  },
  {
    name: 'DeWalt',
    categories: ['Allen Bolts'],
    logo: (
      <svg viewBox="0 0 150 45" className="w-32 h-10">
        <rect x="0" y="5" width="150" height="35" fill="#FFC800" rx="4" />
        <text x="50%" y="31" textAnchor="middle" fill="#000000" className="font-extrabold text-[24px] tracking-tighter italic" style={{ fontFamily: 'Impact, sans-serif' }}>DEWALT</text>
      </svg>
    )
  },
  {
    name: 'Makita',
    categories: ['Allen Bolts'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="50%" y="32" textAnchor="middle" fill="#CE1126" className="font-black italic text-[30px] tracking-tighter" style={{ fontFamily: 'Georgia, serif' }}>makita</text>
      </svg>
    )
  },
  {
    name: 'Stanley',
    categories: ['Allen Bolts'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <rect x="0" y="8" width="120" height="29" fill="#FFC20E" rx="3" />
        <rect x="3" y="11" width="114" height="23" fill="#000000" />
        <text x="50%" y="28" textAnchor="middle" fill="#FFC20E" className="font-extrabold text-[16px] tracking-[0.1em]" style={{ fontFamily: 'sans-serif' }}>STANLEY</text>
      </svg>
    )
  },
  {
    name: 'Hilti',
    categories: ['Allen Bolts'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <rect x="5" y="10" width="110" height="25" fill="#E21B23" rx="2" />
        <text x="50%" y="28" textAnchor="middle" fill="#FFFFFF" className="font-black italic text-[18px] tracking-widest" style={{ fontFamily: 'Impact, sans-serif' }}>HILTI</text>
      </svg>
    )
  },
  {
    name: 'Taparia',
    categories: ['Allen Bolts'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="50%" y="30" textAnchor="middle" fill="#0A7A4C" className="font-extrabold text-[22px] tracking-widest" style={{ fontFamily: 'sans-serif' }}>TAPARIA</text>
        <rect x="15" y="34" width="90" height="2" fill="#0A7A4C" />
      </svg>
    )
  },
  {
    name: 'Toptul',
    categories: ['Allen Bolts'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="50%" y="28" textAnchor="middle" fill="#E31B23" className="font-black italic text-[24px]" style={{ fontFamily: 'sans-serif' }}>TOPTUL</text>
        <text x="50%" y="38" textAnchor="middle" fill="#64748B" className="text-[6px] tracking-wider uppercase font-bold">the mark of professional tool</text>
      </svg>
    )
  },
  {
    name: 'Yato',
    categories: ['Allen Bolts'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="25" y="32" fill="#000000" className="font-extrabold text-[32px] tracking-tight">YA</text>
        <text x="65" y="32" fill="#E31B23" className="font-extrabold text-[32px] tracking-tight">TO</text>
      </svg>
    )
  },
  {
    name: 'Total Tools',
    categories: ['Allen Bolts'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="50%" y="26" textAnchor="middle" fill="#005A9C" className="font-black text-[22px] tracking-tighter">TOTAL</text>
        <text x="50%" y="38" textAnchor="middle" fill="#E31B23" className="font-black text-[12px] tracking-[0.2em]">TOOLS</text>
      </svg>
    )
  },
  {
    name: 'SKF',
    categories: ['Bearings'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-24 h-10">
        <defs>
          <mask id="skf-mask-logo">
            <rect width="120" height="45" fill="white" />
            <rect y="12" width="120" height="2" fill="black" />
            <rect y="21" width="120" height="2" fill="black" />
            <rect y="30" width="120" height="2" fill="black" />
          </mask>
        </defs>
        <text x="50%" y="34" textAnchor="middle" mask="url(#skf-mask-logo)" fill="#005A9C" className="font-extrabold italic text-[38px] tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>SKF</text>
      </svg>
    )
  },
  {
    name: 'NSK',
    categories: ['Bearings'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-24 h-10">
        <text x="50%" y="33" textAnchor="middle" fill="#E31E24" className="font-black italic text-[36px] tracking-tight">NSK</text>
      </svg>
    )
  },
  {
    name: 'NTN',
    categories: ['Bearings'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-24 h-10">
        <text x="50%" y="32" textAnchor="middle" fill="#005A9C" className="font-bold text-[34px] tracking-[0.1em]">NTN</text>
      </svg>
    )
  },
  {
    name: 'FAG',
    categories: ['Bearings'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-24 h-10">
        <text x="50%" y="33" textAnchor="middle" fill="#E31B23" className="font-black text-[38px] tracking-tighter">FAG</text>
      </svg>
    )
  },
  {
    name: 'Timken',
    categories: ['Bearings'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="50%" y="32" textAnchor="middle" fill="#E15C00" className="font-black text-[28px] tracking-tight">TIMKEN</text>
      </svg>
    )
  },
  {
    name: 'Mitsubishi Electric',
    categories: ['Electrical'],
    logo: (
      <svg viewBox="0 0 150 45" className="w-36 h-10">
        <path d="M15 28 l7-12 l7 12 z M7 16 l7-12 l7 12 z M23 16 l7-12 l7 12 z" fill="#E31B23" />
        <text x="35" y="24" fill="#000000" className="font-extrabold text-[9px] tracking-wider">MITSUBISHI</text>
        <text x="35" y="34" fill="#005A9C" className="font-bold text-[9px] tracking-widest">ELECTRIC</text>
      </svg>
    )
  },
  {
    name: 'Yaskawa',
    categories: ['Electrical'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="50%" y="30" textAnchor="middle" fill="#00529B" className="font-black text-[24px] tracking-widest">YASKAWA</text>
      </svg>
    )
  },
  {
    name: 'Balluff',
    categories: ['Electrical'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <path d="M12 20 c0-4 4-8 8-8 s8 4 8 8 s-4 8-8 8 s-8-4-8-8 z M16 20 c0-2 2-4 4-4 s4 2 4 4 s-2 4-4 4 s-4-2-4-4 z" fill="#005A9C" />
        <text x="40" y="27" fill="#000000" className="font-black text-[18px] tracking-wider">BALLUFF</text>
      </svg>
    )
  },
  {
    name: 'Pepperl+Fuchs',
    categories: ['Electrical'],
    logo: (
      <svg viewBox="0 0 150 45" className="w-36 h-10">
        <rect x="5" y="10" width="25" height="25" fill="#4B9C2A" rx="2" />
        <text x="18" y="27" textAnchor="middle" fill="#FFFFFF" className="font-bold text-[12px]">P+F</text>
        <text x="36" y="23" fill="#000000" className="font-black text-[11px] tracking-wide">PEPPERL+FUCHS</text>
        <text x="36" y="32" fill="#64748B" className="text-[7px] tracking-widest font-bold">AUTOMATION</text>
      </svg>
    )
  },
  {
    name: 'Festo',
    categories: ['Pneumatics'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <path d="M10 16 h20 M10 23 h25 M10 30 h18" stroke="#0091FF" strokeWidth="4" strokeLinecap="round" />
        <text x="44" y="32" fill="#0091FF" className="font-black text-[26px] tracking-tighter lowercase">festo</text>
      </svg>
    )
  },
  {
    name: 'SMC',
    categories: ['Pneumatics'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-24 h-10">
        <text x="50%" y="32" textAnchor="middle" fill="#004C97" className="font-black text-[38px] tracking-tight">SMC</text>
      </svg>
    )
  },
  {
    name: 'Parker',
    categories: ['Pneumatics'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <circle cx="20" cy="22" r="12" fill="#FFC20E" />
        <circle cx="20" cy="22" r="9" fill="#000000" />
        <text x="20" y="27" textAnchor="middle" fill="#FFC20E" className="font-black text-[14px]">P</text>
        <text x="40" y="29" fill="#000000" className="font-extrabold text-[24px] tracking-tight">Parker</text>
      </svg>
    )
  },
  {
    name: 'AirTAC',
    categories: ['Pneumatics'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="50%" y="30" textAnchor="middle" fill="#005A9C" className="font-black italic text-[24px]">AirTAC</text>
      </svg>
    )
  },
  {
    name: 'Danfoss',
    categories: ['Pneumatics'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="50%" y="31" textAnchor="middle" fill="#E31B23" className="font-extrabold italic text-[28px]" style={{ fontFamily: 'Georgia, serif' }}>Danfoss</text>
      </svg>
    )
  },
  {
    name: 'Bosch Rexroth',
    categories: ['Bearings'],
    logo: (
      <svg viewBox="0 0 150 45" className="w-32 h-11">
        <circle cx="20" cy="22" r="12" stroke="#E31B23" strokeWidth="2.5" fill="none" />
        <line x1="20" y1="10" x2="20" y2="34" stroke="#E31B23" strokeWidth="2.5" />
        <line x1="8" y1="22" x2="32" y2="22" stroke="#E31B23" strokeWidth="2.5" />
        <text x="42" y="21" fill="#081120" className="font-black text-[14px] tracking-widest">BOSCH</text>
        <text x="42" y="34" fill="#005A9C" className="font-semibold text-[13px] tracking-wider">Rexroth</text>
      </svg>
    )
  },
  {
    name: 'Schneider Electric',
    categories: ['Electrical'],
    logo: (
      <svg viewBox="0 0 150 45" className="w-36 h-10">
        <path d="M12 28 l6-12 l6 12 z" fill="#3DCD58" />
        <text x="32" y="22" fill="#3DCD58" className="font-extrabold text-[12px]">Schneider</text>
        <text x="32" y="32" fill="#64748B" className="font-medium text-[10px]">Electric</text>
      </svg>
    )
  },
  {
    name: 'Siemens',
    categories: ['Electrical'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="50%" y="32" textAnchor="middle" fill="#00828A" className="font-bold text-[28px] tracking-widest">SIEMENS</text>
      </svg>
    )
  },
  {
    name: 'Fuji Electric',
    categories: ['Electrical'],
    logo: (
      <svg viewBox="0 0 150 45" className="w-36 h-10">
        <circle cx="20" cy="22" r="12" fill="#E31B23" />
        <text x="20" y="27" textAnchor="middle" fill="#FFFFFF" className="font-bold text-[14px]">Fe</text>
        <text x="38" y="22" fill="#000000" className="font-black text-[12px] tracking-wider">Fuji Electric</text>
        <text x="38" y="32" fill="#64748B" className="text-[8px] font-bold">INNOVATING ENERGY</text>
      </svg>
    )
  },
  {
    name: 'Mitutoyo',
    categories: ['Measuring'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <circle cx="18" cy="22" r="8" fill="#E31B23" />
        <text x="32" y="28" fill="#000000" className="font-black text-[18px]">Mitutoyo</text>
      </svg>
    )
  },
  {
    name: 'Fluke',
    categories: ['Measuring'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-24 h-10">
        <rect x="5" y="8" width="110" height="29" fill="#FFC20E" rx="2" />
        <text x="50%" y="30" textAnchor="middle" fill="#000000" className="font-black text-[22px] tracking-widest">FLUKE</text>
      </svg>
    )
  },
  {
    name: 'Hioki',
    categories: ['Measuring'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-24 h-10">
        <text x="50%" y="31" textAnchor="middle" fill="#E31B23" className="font-black text-[26px] tracking-tighter">HIOKI</text>
      </svg>
    )
  },
  {
    name: 'Tohnichi',
    categories: ['Measuring'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <circle cx="15" cy="22" r="8" fill="#E31B23" />
        <text x="28" y="28" fill="#000000" className="font-extrabold text-[16px] tracking-wide">TOHNICHI</text>
      </svg>
    )
  },
  {
    name: 'Shell',
    categories: ['Lubricants'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <path d="M12 25 c0-10 8-15 15-15 s15 5 15 15 z" fill="#FFC20E" stroke="#E31B23" strokeWidth="2" />
        <text x="48" y="29" fill="#E31B23" className="font-black text-[24px]" style={{ fontFamily: 'Georgia, serif' }}>Shell</text>
      </svg>
    )
  },
  {
    name: 'Castrol',
    categories: ['Lubricants'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <path d="M5 10 h110" stroke="#007A3E" strokeWidth="3" />
        <text x="50%" y="30" textAnchor="middle" fill="#007A3E" className="font-black italic text-[24px]">Castrol</text>
        <path d="M5 35 h110" stroke="#E31B23" strokeWidth="3" />
      </svg>
    )
  },
  {
    name: 'Mobil',
    categories: ['Lubricants'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="10" y="32" fill="#005A9C" className="font-black text-[34px] tracking-tight">M</text>
        <text x="45" y="32" fill="#E31B23" className="font-black text-[34px] tracking-tight">o</text>
        <text x="68" y="32" fill="#005A9C" className="font-black text-[34px] tracking-tight">bil</text>
      </svg>
    )
  },
  {
    name: 'Bharat Petroleum',
    categories: ['Lubricants'],
    logo: (
      <svg viewBox="0 0 150 45" className="w-36 h-10">
        <circle cx="20" cy="22" r="12" fill="#005A9C" />
        <circle cx="20" cy="22" r="6" fill="#FFC20E" />
        <text x="38" y="22" fill="#005A9C" className="font-black text-[10px] tracking-wider">Bharat</text>
        <text x="38" y="32" fill="#005A9C" className="font-black text-[10px] tracking-wider">Petroleum</text>
      </svg>
    )
  },
  {
    name: 'Unbrako',
    categories: ['Allen Bolts'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="10" y="30" fill="#000000" className="font-black text-[22px]">Unbrako</text>
        <polygon points="105,15 115,20 115,30 105,35 95,30 95,20" fill="none" stroke="#E31B23" strokeWidth="2.5" />
        <polygon points="105,20 110,23 110,27 105,30 100,27 100,23" fill="#E31B23" />
      </svg>
    )
  },
  {
    name: 'X-Bolt',
    categories: ['Allen Bolts'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="10" y="30" fill="#000000" className="font-black text-[22px]">X-Bolt</text>
        <circle cx="105" cy="22" r="8" fill="none" stroke="#E31B23" strokeWidth="2.5" />
        <path d="M101 18 l8 8 M109 18 l-8 8" stroke="#E31B23" strokeWidth="2" />
      </svg>
    )
  },
  {
    name: 'Pidilite',
    categories: ['Allen Bolts'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="50%" y="28" textAnchor="middle" fill="#005A9C" className="font-black text-[20px] tracking-tighter">Pidilite</text>
        <path d="M30 35 c15-5 45-5 60 0" stroke="#E31B23" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    )
  },
  {
    name: 'Tsubaki',
    categories: ['Bearings'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="50%" y="31" textAnchor="middle" fill="#E31B23" className="font-black text-[24px] tracking-[0.05em]">TSUBAKI</text>
      </svg>
    )
  },
  {
    name: 'Fenner',
    categories: ['Pulleys'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="50%" y="30" textAnchor="middle" fill="#005A9C" className="font-black text-[22px] tracking-widest">FENNER</text>
        <rect x="20" y="34" width="80" height="2" fill="#005A9C" />
      </svg>
    )
  },
  {
    name: '3M',
    categories: ['Safety'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="50%" y="32" textAnchor="middle" fill="#E31B23" className="font-black text-[32px]">3M</text>
      </svg>
    )
  },
  {
    name: 'Honeywell',
    categories: ['Safety'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="50%" y="30" textAnchor="middle" fill="#E21B23" className="font-black text-[20px] tracking-tight">Honeywell</text>
      </svg>
    )
  },
  {
    name: 'Udyogi',
    categories: ['Safety'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="50%" y="30" textAnchor="middle" fill="#005A9C" className="font-extrabold text-[22px]">UDYOGI</text>
      </svg>
    )
  },
  {
    name: 'Omron',
    categories: ['Sensors'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="50%" y="31" textAnchor="middle" fill="#005A9C" className="font-black text-[26px] tracking-wide">OMRON</text>
      </svg>
    )
  },
  {
    name: 'Banner',
    categories: ['Sensors'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="50%" y="30" textAnchor="middle" fill="#E21B23" className="font-extrabold text-[22px] tracking-wide">BANNER</text>
      </svg>
    )
  },
  {
    name: 'IFM',
    categories: ['Sensors'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="50%" y="30" textAnchor="middle" fill="#FF8C00" className="font-black text-[28px]">ifm</text>
      </svg>
    )
  },
  {
    name: 'P+F',
    categories: ['Sensors'],
    logo: (
      <svg viewBox="0 0 120 45" className="w-28 h-10">
        <text x="50%" y="30" textAnchor="middle" fill="#007A3E" className="font-black text-[24px]">P+F</text>
      </svg>
    )
  }
];

export default function Brands() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBrands = brandPartners.filter(brand => {
    const matchesCategory = selectedCategory === 'All' || brand.categories.includes(selectedCategory);
    const matchesSearch = brand.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="brands" className="bg-gradient-to-b from-[#f4f7fa] to-[#f5f7fb] pt-[40px] md:pt-[40px] lg:pt-[40px] pb-[40px] md:pb-[40px] lg:pb-[40px] overflow-hidden relative border-t border-black/[0.04]">
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none opacity-80" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full">
        <div className="max-w-[1320px] mx-auto w-full">

          {/* Heading */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <h2 className="text-[36px] sm:text-[46px] lg:text-[50px] font-black tracking-tight leading-none text-[#081120] uppercase mb-4">
              AUTHORIZED GLOBAL BRANDS
            </h2>
            <p className="text-slate-600 text-[14px] sm:text-[16px] leading-relaxed font-semibold">
              Partnering with the world's leading industrial manufacturers.
            </p>
          </motion.div>

          {/* Filter Controls Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 border-b border-slate-200/60 pb-8">
            {/* Search Bar on Left */}
            <div className="w-full lg:w-80 relative flex-shrink-0">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 h-12 bg-white border border-[#ececec] text-[#081120] text-[14px] outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-[16px] transition-all placeholder-slate-400 font-semibold"
              />
            </div>

            {/* Category Pills on Right */}
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 rounded-full border ${selectedCategory === cat
                      ? 'bg-blue-600 text-white border-blue-600 shadow-[0_4px_12px_rgba(59,130,246,0.15)]'
                      : 'bg-white text-slate-600 border-[#ececec] hover:bg-slate-50'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 5-Column Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center max-w-[1320px] mx-auto mb-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredBrands.map((brand) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={brand.name}
                  whileHover={{ y: -10 }}
                  className="
                    w-full max-w-[220px] h-[120px] bg-white border border-[#ececec] rounded-[24px] 
                    flex items-center justify-center select-none cursor-default relative overflow-hidden group
                    hover:shadow-[0_12px_24px_rgba(59,130,246,0.15)] hover:border-blue-500/35 transition-all duration-300
                  "
                >
                  {/* Real Logos */}
                  <div className="flex items-center justify-center w-full h-full p-4 transition-all duration-300">
                    {brand.logo}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mx-auto text-center bg-white p-8 rounded-[28px] border border-[#ececec] shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
          >
            <p className="text-slate-800 font-extrabold text-[15px] uppercase tracking-wider mb-5">
              +10 more brands available on request
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white text-[12px] font-black uppercase tracking-wider hover:bg-blue-700 transition-colors rounded-[24px] shadow-[0_4px_12px_rgba(59,130,246,0.15)]"
            >
              Request Full Brand Catalog <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
