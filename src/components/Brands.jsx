// Brands — Authorized Dealer Grid
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';

// ── Local logo imports ───────────────────────────────────────────────────────
import boschImg    from '../icons/bosch.png';
import dewaltImg   from '../icons/dewalt.png';
import makitaImg   from '../icons/Makita.png';
import stanleyImg  from '../icons/stanley.png';
import hiltiImg    from '../icons/hilti.png';
import tapariaImg  from '../icons/taparia.png';
import pidiliteImg from '../icons/Pidilite.png';
import unbrakoImg  from '../icons/unbrako.png';
import yatoImg     from '../icons/yato.png';
import mitutoyoImg from '../icons/mitutoyo.png';
import toptulImg   from '../icons/toptul.png';
import totalImg    from '../icons/totaltools.png';

const scrollTo = (href, e) => {
  if (e) e.preventDefault();
  const el = document.getElementById(href.replace('#', ''));
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 78, behavior: 'smooth' });
};

// ── Brand data ───────────────────────────────────────────────────────────────
// type: 'img' uses local/CDN image  |  type: 'text' renders styled text logo
const BRANDS = [
  // ── Hand & Power Tools ─────────────────────────────────
  { name: 'Bosch',           type: 'img',  src: boschImg,    cat: 'Tools' },
  { name: 'DeWalt',          type: 'img',  src: dewaltImg,   cat: 'Tools' },
  { name: 'Makita',          type: 'img',  src: makitaImg,   cat: 'Tools' },
  { name: 'Stanley',         type: 'img',  src: stanleyImg,  cat: 'Tools' },
  { name: 'Hilti',           type: 'img',  src: hiltiImg,    cat: 'Tools' },
  { name: 'Taparia',         type: 'img',  src: tapariaImg,  cat: 'Tools' },
  { name: 'Toptul',          type: 'img',  src: toptulImg,   cat: 'Tools' },
  { name: 'Yato',            type: 'img',  src: yatoImg,     cat: 'Tools' },
  { name: 'Total Tools',     type: 'img',  src: totalImg,    cat: 'Tools' },

  // ── Bearings ───────────────────────────────────────────
  { name: 'SKF',    type: 'text', color: '#005BAA', cat: 'Bearings' },
  { name: 'NSK',    type: 'text', color: '#003087', cat: 'Bearings' },
  { name: 'NTN',    type: 'text', color: '#E4002B', cat: 'Bearings' },
  { name: 'FAG',    type: 'text', color: '#003087', cat: 'Bearings' },
  { name: 'Timken', type: 'text', color: '#003087', cat: 'Bearings' },

  // ── Automation & Sensors ───────────────────────────────
  { name: 'Mitsubishi Electric', type: 'text', color: '#E4002B', cat: 'Automation' },
  { name: 'Yaskawa',             type: 'text', color: '#003087', cat: 'Automation' },
  { name: 'Balluff',             type: 'text', color: '#E4002B', cat: 'Automation' },
  { name: 'Pepperl+Fuchs',       type: 'text', color: '#E4002B', cat: 'Automation' },

  // ── Pneumatics & Hydraulics ────────────────────────────
  { name: 'Festo',         type: 'text', color: '#00539B', cat: 'Pneumatics' },
  { name: 'SMC',           type: 'text', color: '#E4002B', cat: 'Pneumatics' },
  { name: 'Parker',        type: 'text', color: '#FFB612', textColor: '#111', cat: 'Pneumatics' },
  { name: 'AirTAC',        type: 'text', color: '#003087', cat: 'Pneumatics' },
  { name: 'Danfoss',       type: 'text', color: '#E4002B', cat: 'Pneumatics' },
  { name: 'Bosch Rexroth', type: 'text', color: '#005BAA', cat: 'Hydraulics' },

  // ── Electricals ────────────────────────────────────────
  { name: 'Schneider Electric', type: 'text', color: '#3DCD58', textColor: '#111', cat: 'Electricals' },
  { name: 'Siemens',            type: 'text', color: '#009999', cat: 'Electricals' },
  { name: 'Fuji Electric',      type: 'text', color: '#E4002B', cat: 'Electricals' },

  // ── Measuring ──────────────────────────────────────────
  { name: 'Mitutoyo', type: 'img',  src: mitutoyoImg, cat: 'Measuring' },
  { name: 'Fluke',    type: 'text', color: '#E4002B',  cat: 'Measuring' },
  { name: 'Hioki',    type: 'text', color: '#003087',  cat: 'Measuring' },
  { name: 'Tohnichi', type: 'text', color: '#111111',  cat: 'Measuring' },

  // ── Lubricants ─────────────────────────────────────────
  { name: 'Shell',              type: 'text', color: '#FBB800', textColor: '#111', cat: 'Lubricants' },
  { name: 'Castrol',            type: 'text', color: '#009844', cat: 'Lubricants' },
  { name: 'Mobil',              type: 'text', color: '#E4002B', cat: 'Lubricants' },
  { name: 'Bharat Petroleum',   type: 'text', color: '#003087', cat: 'Lubricants' },

  // ── Fasteners & Adhesives ──────────────────────────────
  { name: 'Unbrako',  type: 'img',  src: unbrakoImg,  cat: 'Fasteners' },
  { name: 'Pidilite', type: 'img',  src: pidiliteImg, cat: 'Fasteners' },

  // ── Power Transmission ─────────────────────────────────
  { name: 'Tsubaki', type: 'text', color: '#E4002B', cat: 'Transmission' },
];

const CATS = ['All', ...Array.from(new Set(BRANDS.map(b => b.cat)))];

// ── Text logo ─────────────────────────────────────────────────────────────────
const TextLogo = ({ brand, hov }) => (
  <span
    style={{
      fontFamily:  'Inter, sans-serif',
      fontWeight:  900,
      fontSize:    brand.name.length > 10 ? '11px' : brand.name.length > 7 ? '13px' : '15px',
      color:       hov ? (brand.textColor || '#fff') : (brand.color || '#111'),
      background:  hov ? (brand.color || '#111') : 'transparent',
      padding:     hov ? '4px 10px' : '0',
      borderRadius: '6px',
      transition:  'all 0.22s ease',
      letterSpacing: '-0.01em',
      textAlign:   'center',
      lineHeight:  1.2,
    }}
  >
    {brand.name}
  </span>
);

// ── Brand card ────────────────────────────────────────────────────────────────
function BrandCard({ brand, i }) {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10px' }}
      transition={{ duration: 0.28, delay: Math.min(i * 0.025, 0.4) }}
      className="flex items-center justify-center bg-white select-none relative overflow-hidden cursor-default"
      style={{
        height:       '100px',
        borderRadius: '10px',
        border:       hov ? '1px solid rgba(200,16,46,0.4)' : '1px solid #E4DED6',
        boxShadow:    hov
          ? '0 4px 18px rgba(200,16,46,0.09), 0 1px 4px rgba(0,0,0,0.04)'
          : '0 1px 4px rgba(0,0,0,0.04)',
        transform:    hov ? 'translateY(-2px)' : 'none',
        transition:   'all 0.22s ease',
        padding:      '12px 16px',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {brand.type === 'img' ? (
        <img
          src={brand.src}
          alt={brand.name}
          style={{
            maxWidth:  '100%',
            maxHeight: '52px',
            objectFit: 'contain',
            transition: 'transform 0.22s ease, filter 0.22s ease',
            transform:  hov ? 'scale(1.06)' : 'scale(1)',
            filter:     hov ? 'none' : 'grayscale(30%)',
          }}
        />
      ) : (
        <TextLogo brand={brand} hov={hov} />
      )}

      {/* Bottom red accent line on hover */}
      <div style={{
        position:        'absolute',
        bottom:          0,
        left:            '15%',
        right:           '15%',
        height:          '2px',
        borderRadius:    '2px',
        backgroundColor: '#C8102E',
        transform:       hov ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'center',
        transition:      'transform 0.24s ease',
      }} />
    </motion.div>
  );
}

export default function Brands() {
  const [search, setSearch] = useState('');
  const [active, setActive] = useState('All');

  const filtered = useMemo(() =>
    BRANDS.filter(b => {
      const matchCat  = active === 'All' || b.cat === active;
      const matchName = b.name.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchName;
    }),
    [search, active]
  );

  // Pad to next multiple of 5 for even grid
  const remainder = filtered.length % 5;
  const padded = remainder === 0 ? filtered : [...filtered, ...Array(5 - remainder).fill({ name: '', type: 'placeholder' })];

  return (
    <section id="brands" className="py-16 relative overflow-hidden" style={{ backgroundColor: '#F7F4EF' }}>
      {/* Grid texture */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      <div className="container mx-auto px-6 lg:px-12 relative">

        {/* Header */}
        <div className="text-center max-w-lg mx-auto mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-6" style={{ backgroundColor: '#C8102E' }} />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: '#C8102E' }}>Our Partners</span>
            <div className="h-px w-6" style={{ backgroundColor: '#C8102E' }} />
          </div>
          <h2 className="text-[1.8rem] font-black mb-2 leading-tight" style={{ color: 'var(--text)' }}>
            Authorized Brand Partners
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '14px' }}>
            30+ globally recognized brands. Every product is 100% genuine and sourced directly from authorized distributors.
          </p>
        </div>

        {/* Search + filter bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 max-w-3xl mx-auto">
          {/* Search */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg flex-1" style={{ backgroundColor: '#fff', border: '1px solid #DDD8CE' }}>
            <Search size={14} style={{ color: '#999', flexShrink: 0 }} />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search brands…"
              className="flex-1 bg-transparent text-[13px] outline-none"
              style={{ color: '#111', fontFamily: 'Inter, sans-serif' }}
            />
            {search && <button onClick={() => setSearch('')}><X size={13} style={{ color: '#999' }} /></button>}
          </div>

          {/* Category filter pills */}
          <div className="flex gap-1.5 flex-wrap">
            {CATS.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className="px-3 py-1.5 rounded-full text-[11.5px] font-bold transition-all"
                style={{
                  backgroundColor: active === c ? '#C8102E' : '#fff',
                  color:           active === c ? '#fff'     : '#666',
                  border:          active === c ? '1px solid #C8102E' : '1px solid #DDD8CE',
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Brand grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-12" style={{ color: '#999' }}>
            <p className="font-semibold">No brands found for "{search}"</p>
          </div>
        ) : (
          <div
            className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5"
            style={{ maxWidth: '960px' }}
          >
            {padded.map((brand, i) =>
              brand.type === 'placeholder' ? (
                <div key={`ph-${i}`} style={{ height: '100px', borderRadius: '10px', border: '1px dashed #DDD8CE', backgroundColor: 'rgba(255,255,255,0.35)' }} />
              ) : (
                <BrandCard key={brand.name} brand={brand} i={i} />
              )
            )}
          </div>
        )}

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <span className="text-[12px] font-semibold px-4 py-1.5 rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.7)', border: '1px solid #DDD8CE', color: 'var(--sub)' }}>
            <span style={{ color: '#C8102E', fontWeight: 800 }}>+10</span> more brands available on request
          </span>
          <a href="#contact" onClick={(e) => scrollTo('#contact', e)}
            className="text-[12.5px] font-bold px-5 py-2 rounded-lg text-white transition-all"
            style={{ backgroundColor: '#C8102E', letterSpacing: '0.02em' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#A30D24'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C8102E'}
          >
            Request Full Brand Catalog →
          </a>
        </div>

      </div>
    </section>
  );
}
