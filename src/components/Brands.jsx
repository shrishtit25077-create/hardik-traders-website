import React from 'react';

/*
  Horizontal infinite-scroll brand marquee — matching the screenshot style.
  Real logos via Clearbit (colored, not grayscale) with a clean white pill card.
  On hover the whole marquee pauses.
*/

const BRANDS = [
  { name: 'Bosch',    logo: 'https://logo.clearbit.com/bosch.com' },
  { name: 'DeWalt',   logo: 'https://logo.clearbit.com/dewalt.com' },
  { name: 'Makita',   logo: 'https://logo.clearbit.com/makita.com' },
  { name: 'Stanley',  logo: 'https://logo.clearbit.com/stanleytools.com' },
  { name: 'Hilti',    logo: 'https://logo.clearbit.com/hilti.com' },
  { name: 'Ingco',    logo: 'https://logo.clearbit.com/ingco.com' },
  { name: 'Total',    logo: null },
  { name: 'Yato',     logo: null },
  { name: 'Unbrako',  logo: null },
  { name: 'Taparia',  logo: null },
  { name: 'Toptul',   logo: null },
  { name: 'Pidilite', logo: 'https://logo.clearbit.com/pidilite.in' },
  { name: 'Mitutoyo', logo: 'https://logo.clearbit.com/mitutoyo.com' },
];

const LogoPill = ({ brand }) => {
  const [err, setErr] = React.useState(false);
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center gap-2 px-6"
      style={{
        height: '68px',
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '10px',
        minWidth: '140px',
        marginRight: '12px',
        boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.boxShadow = '0 3px 14px rgba(204,17,34,0.10)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = '0 1px 6px rgba(0,0,0,0.05)'; }}
    >
      {brand.logo && !err ? (
        <img
          src={brand.logo}
          alt={brand.name}
          onError={() => setErr(true)}
          style={{ maxHeight: '36px', maxWidth: '90px', objectFit: 'contain' }}
        />
      ) : (
        <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--sub)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          {brand.name}
        </span>
      )}
    </div>
  );
};

const scrollTo = (href, e) => {
  if (e) e.preventDefault();
  const el = document.getElementById(href.replace('#', ''));
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 78, behavior: 'smooth' });
};

export default function Brands() {
  // Duplicate for seamless loop
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section id="brands" className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container mx-auto px-6 lg:px-12 mb-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1.5px] w-7" style={{ backgroundColor: 'var(--red)' }} />
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: 'var(--red)' }}>Our Partners</span>
          <div className="h-[1.5px] w-7" style={{ backgroundColor: 'var(--red)' }} />
        </div>
        <h2 className="text-3xl md:text-[2rem] font-black mb-2.5" style={{ color: 'var(--text)' }}>
          Authorized Dealer Brands
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
          Official authorized dealer for 25+ world-class industrial brands
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Left/right fade masks matching beige bg */}
        <div className="absolute top-0 left-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }} />
        <div className="absolute top-0 right-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg), transparent)' }} />

        <div
          className="flex group"
          style={{ animation: 'marquee 38s linear infinite', width: 'max-content' }}
        >
          {doubled.map((b, i) => <LogoPill key={i} brand={b} />)}
        </div>
      </div>

      {/* More brands badge + CTA */}
      <div className="container mx-auto px-6 lg:px-12 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
          style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--sub)' }}
        >
          <span style={{ color: 'var(--red)', fontWeight: 800 }}>+13</span> More Brands Available
        </div>
        <a
          href="#contact"
          onClick={e => scrollTo('#contact', e)}
          className="btn-primary px-6 py-2.5 text-sm"
        >
          Request Full Brand Catalog →
        </a>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .group:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}
