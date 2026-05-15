import React from 'react';

/* 
  Real logos sourced from Clearbit Logo API (well-known brands)
  and Wikipedia SVG for others. Fallback to styled text badge.
*/
const brands = [
  {
    name: 'DEWALT',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/DeWalt_Logo.svg/320px-DeWalt_Logo.svg.png',
    url: '#',
  },
  {
    name: 'BOSCH',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bosch-logo.svg/320px-Bosch-logo.svg.png',
    url: '#',
  },
  {
    name: 'MAKITA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Makita_logo.svg/320px-Makita_logo.svg.png',
    url: '#',
  },
  {
    name: 'STANLEY',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Stanley_Logo.svg/320px-Stanley_Logo.svg.png',
    url: '#',
  },
  {
    name: 'HILTI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Hilti_logo.svg/320px-Hilti_logo.svg.png',
    url: '#',
  },
  {
    name: 'MITUTOYO',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Mitutoyo_logo.svg/320px-Mitutoyo_logo.svg.png',
    url: '#',
  },
  { name: 'TAPARIA', logo: null, url: '#' },
  { name: 'GROZ', logo: null, url: '#' },
  { name: 'INSIZE', logo: null, url: '#' },
  { name: 'TOPTUL', logo: null, url: '#' },
  { name: 'GREAT YUWA', logo: null, url: '#' },
  { name: 'UNBRAKO', logo: null, url: '#' },
  { name: 'TOKU', logo: null, url: '#' },
  { name: 'DREBON', logo: null, url: '#' },
  { name: 'PIDILITE', logo: null, url: '#' },
  { name: 'UNIK', logo: null, url: '#' },
  { name: 'KARTAR', logo: null, url: '#' },
  { name: 'YG-1', logo: null, url: '#' },
  { name: 'MIRANDA', logo: null, url: '#' },
  { name: 'FENNER', logo: null, url: '#' },
  { name: 'JANATICS', logo: null, url: '#' },
  { name: 'TECHNO', logo: null, url: '#' },
  { name: 'YATO', logo: null, url: '#' },
];

const BrandCard = ({ brand }) => (
  <div
    className="flex-shrink-0 flex items-center justify-center cursor-default group"
    style={{
      width: '180px',
      height: '88px',
      backgroundColor: '#FFFFFF',
      border: '1px solid #E5E7EB',
      borderRadius: '10px',
      padding: '16px 20px',
      transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = '#C1121F';
      e.currentTarget.style.boxShadow = '0 4px 16px rgba(193,18,31,0.1)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = '#E5E7EB';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    {brand.logo ? (
      <img
        src={brand.logo}
        alt={brand.name}
        className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:opacity-100"
        style={{ filter: 'grayscale(100%)', opacity: 0.65, maxHeight: '44px', maxWidth: '130px' }}
        onMouseEnter={e => { e.target.style.filter = 'grayscale(0%)'; e.target.style.opacity = 1; }}
        onMouseLeave={e => { e.target.style.filter = 'grayscale(100%)'; e.target.style.opacity = 0.65; }}
        onError={e => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
    ) : null}
    <span
      className="font-black uppercase tracking-widest text-center text-xs"
      style={{
        color: '#374151',
        display: brand.logo ? 'none' : 'block',
        letterSpacing: '0.12em',
        lineHeight: 1.3,
      }}
    >
      {brand.name}
    </span>
  </div>
);

const Brands = () => {
  const row1 = [...brands.slice(0, 12), ...brands.slice(0, 12)];
  const row2 = [...brands.slice(12), ...brands.slice(12), ...brands.slice(12)];

  return (
    <section id="brands" className="py-24 overflow-hidden" style={{ backgroundColor: '#F5F5F5', scrollMarginTop: '80px' }}>
      <div className="container mx-auto px-6 lg:px-12 mb-14 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[2px] w-8" style={{ backgroundColor: '#C1121F' }} />
          <span className="font-semibold tracking-wider uppercase text-sm" style={{ color: '#C1121F' }}>Our Partners</span>
          <div className="h-[2px] w-8" style={{ backgroundColor: '#C1121F' }} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#111111' }}>Authorized Dealer Brands</h2>
        <p className="text-lg" style={{ color: '#4B5563' }}>
          Official authorized dealer for 25+ world-class industrial brands
        </p>
      </div>

      {/* Marquee rows */}
      <div className="relative w-full overflow-hidden flex flex-col gap-5">
        {/* Left/right fade masks */}
        <div className="absolute top-0 left-0 w-24 h-full z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #F5F5F5, transparent)' }} />
        <div className="absolute top-0 right-0 w-24 h-full z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #F5F5F5, transparent)' }} />

        {/* Row 1 — left scroll */}
        <div className="flex w-max animate-[slide_40s_linear_infinite] hover:[animation-play-state:paused]">
          <div className="flex items-center gap-4 px-2">
            {row1.map((brand, i) => <BrandCard key={`r1-${i}`} brand={brand} />)}
          </div>
        </div>

        {/* Row 2 — right scroll */}
        <div className="flex w-max animate-[slide-reverse_50s_linear_infinite] hover:[animation-play-state:paused]">
          <div className="flex items-center gap-4 px-2">
            {row2.map((brand, i) => <BrandCard key={`r2-${i}`} brand={brand} />)}
          </div>
        </div>
      </div>

      {/* Static grid fallback for very small screens */}
      <div className="mt-10 container mx-auto px-6 lg:px-12 flex flex-wrap justify-center gap-3 md:hidden">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', color: '#374151' }}
          >
            {brand.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
