// Brands — Authorized Dealer Grid
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

/* SVG fallback for Ingco only */
const IngcoSVG = () => (
  <svg viewBox="0 0 180 50" width="130" height="38" xmlns="http://www.w3.org/2000/svg">
    <text x="4" y="34" fontFamily="Arial Black,sans-serif" fontSize="28" fontWeight="900" fill="#F47920">
      <tspan fontStyle="italic">i</tspan>NGCO
    </text>
  </svg>
);

const BRANDS = [
  { name: 'Bosch',    type: 'img', src: boschImg },
  { name: 'DeWalt',   type: 'img', src: dewaltImg },
  { name: 'Makita',   type: 'img', src: makitaImg },
  { name: 'Stanley',  type: 'img', src: stanleyImg },
  { name: 'Hilti',    type: 'img', src: hiltiImg },
  { name: 'Taparia',  type: 'img', src: tapariaImg },
  { name: 'Total',    type: 'img', src: totalImg },
  { name: 'Ingco',    type: 'svg' },
  { name: 'Mitutoyo', type: 'img', src: mitutoyoImg },
  { name: 'Pidilite', type: 'img', src: pidiliteImg },
  { name: 'Unbrako',  type: 'img', src: unbrakoImg },
  { name: 'Toptul',   type: 'img', src: toptulImg },
  { name: 'Yato',     type: 'img', src: yatoImg },
];

/* Fill remaining slots so the last row is always complete (5-col grid) */
const COLS = 5;
const remainder = BRANDS.length % COLS;
const PADDED = remainder === 0
  ? BRANDS
  : [...BRANDS, ...Array(COLS - remainder).fill({ name: '', type: 'placeholder' })];

function BrandCard({ brand, i }) {
  const [hov, setHov] = useState(false);

  if (brand.type === 'placeholder') {
    return (
      <div
        style={{
          borderRadius: '12px',
          border: '1px dashed #DDD8CE',
          backgroundColor: 'rgba(255,255,255,0.4)',
          aspectRatio: 'unset',
          height: '120px',
        }}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-16px' }}
      transition={{ duration: 0.32, delay: i * 0.03 }}
      className="flex items-center justify-center bg-white cursor-default select-none relative overflow-hidden"
      style={{
        height:       '120px',
        borderRadius: '12px',
        border:       hov ? '1px solid rgba(214,40,57,0.38)' : '1px solid #DDD8CE',
        boxShadow:    hov
          ? '0 4px 18px rgba(214,40,57,0.10), 0 1px 4px rgba(0,0,0,0.04)'
          : '0 1px 4px rgba(0,0,0,0.04)',
        transform:    hov ? 'translateY(-2px)' : 'none',
        transition:   'all 0.22s ease',
        padding:      '14px 18px',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {brand.type === 'img' ? (
        <img
          src={brand.src}
          alt={brand.name}
          style={{
            maxWidth:   '100%',
            maxHeight:  '56px',
            objectFit:  'contain',
            transition: 'transform 0.22s ease',
            transform:  hov ? 'scale(1.05)' : 'scale(1)',
          }}
        />
      ) : (
        <div style={{ transform: hov ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.22s ease' }}>
          <IngcoSVG />
        </div>
      )}

      {/* Bottom red accent line */}
      <div
        style={{
          position:        'absolute',
          bottom:          0,
          left:            '12%',
          right:           '12%',
          height:          '2px',
          borderRadius:    '2px',
          backgroundColor: '#d62839',
          transform:       hov ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'center',
          transition:      'transform 0.24s ease',
        }}
      />
    </motion.div>
  );
}

export default function Brands() {
  return (
    <section
      id="brands"
      className="py-16 relative overflow-hidden"
      style={{ backgroundColor: '#f7f5f1' }}
    >
      {/* Subtle industrial grid texture */}
      <div
        aria-hidden="true"
        style={{
          position:        'absolute',
          inset:           0,
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.028) 1px, transparent 1px)',
          backgroundSize:  '32px 32px',
          pointerEvents:   'none',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative">

        {/* Section header */}
        <div className="text-center max-w-lg mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-6" style={{ backgroundColor: '#d62839' }} />
            <span
              className="text-[10px] font-bold tracking-[0.2em] uppercase"
              style={{ color: '#d62839' }}
            >
              Our Partners
            </span>
            <div className="h-px w-6" style={{ backgroundColor: '#d62839' }} />
          </div>
          <h2
            className="text-[1.8rem] font-black mb-2 leading-tight"
            style={{ color: 'var(--text)' }}
          >
            Authorized Dealer Brands
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '14px' }}>
            Official authorized dealer for 25+ global industrial brands.
            Every product supplied is 100% genuine.
          </p>
        </div>

        {/* 5-col grid — last row filled/centered */}
        <div
          className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5"
          style={{ maxWidth: '860px' }}
        >
          {PADDED.map((brand, i) => (
            <BrandCard key={brand.name || `ph-${i}`} brand={brand} i={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <span
            className="text-[12px] font-semibold px-4 py-1.5 rounded-full"
            style={{
              backgroundColor: 'rgba(255,255,255,0.7)',
              border:          '1px solid #DDD8CE',
              color:           'var(--sub)',
            }}
          >
            <span style={{ color: '#d62839', fontWeight: 800 }}>+12</span>
            {' '}more brands available
          </span>
          <a
            href="#contact"
            onClick={(e) => scrollTo('#contact', e)}
            className="text-[12.5px] font-bold px-5 py-2 rounded-lg text-white transition-all"
            style={{
              backgroundColor: '#d62839',
              letterSpacing:   '0.02em',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#bf1f32'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#d62839'}
          >
            Request Full Brand Catalog →
          </a>
        </div>



      </div>
    </section>
  );
}
