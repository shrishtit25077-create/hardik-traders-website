import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import InquiryModal from '../product/InquiryModal';

const categories = [
  { id: 'bearings', label: 'Bearings' },
  { id: 'fasteners', label: 'Fasteners & Fixings' },
  { id: 'power-tools', label: 'Power Tools' },
  { id: 'pneumatics', label: 'Pneumatic Tools' },
  { id: 'pipes', label: 'Pipes & Industrial Flow' },
  { id: 'electrical', label: 'Electrical & Automation' },
  { id: 'safety', label: 'Safety Equipment' },
  { id: 'transmission', label: 'Power Transmission' }
];

const productsData = {
  bearings: [
    {
      brand: 'SKF',
      image: '/products/bearings-category.png',
      types: ['Ball Bearings', 'Roller Bearings', 'Tapered Roller Bearings']
    },
    {
      brand: 'FAG',
      image: '/products/fag-category.png',
      types: ['Spherical Roller Bearings', 'Cylindrical Roller Bearings', 'Precision Bearings']
    },
    {
      brand: 'NTN',
      image: '/products/ntn-category.png',
      types: ['High-Speed Bearings', 'Pillow Block Units', 'Needle Roller Bearings']
    },
    {
      brand: 'NBC',
      image: '/products/nbc-category.png',
      types: ['Deep Groove Ball Bearings', 'Automotive Bearings', 'Taper Roller Bearings']
    }
  ],
  fasteners: [
    {
      brand: 'Unbrako',
      image: '/products/unbrako-category.png',
      types: [
        'Socket Head Cap Screws',
        'Hex Bolts',
        'Grub Screws',
        'Anchor Fasteners',
        'High-Tensile Studs',
        'Spring Washers'
      ]
    }
  ],
  'power-tools': [
    {
      brand: 'Bosch',
      image: '/products/bosch-category.png',
      types: ['Hammer Drills', 'Angle Grinders', 'Cordless Drivers']
    },
    {
      brand: 'Makita',
      image: '/products/makita-category.png',
      types: ['Circular Saws', 'Impact Wrenches', 'Demolition Hammers']
    },
    {
      brand: 'Hilti',
      image: '/products/hilti-category.png',
      types: ['Rotary Hammers', 'Gas Actuated Fasteners', 'Diamond Cutters']
    }
  ],
  pneumatics: [
    {
      brand: 'Festo',
      image: '/products/pneumatics-category.jpg',
      types: ['Pneumatic Cylinders', 'Solenoid Valves', 'FRL Units']
    },
    {
      brand: 'SMC',
      image: '/products/smc-category.png',
      types: ['Air Fittings & Tubing', 'Speed Controllers', 'Manifolds']
    }
  ],
  pipes: [
    {
      brand: 'Tata Pipes',
      image: '/products/tata-category.png',
      types: ['MS Pipes (Mild Steel)', 'GI Pipes', 'Structural Pipes']
    },
    {
      brand: 'Jindal',
      image: '/products/jindal-category.png',
      types: ['Pipe Fittings & Elbos', 'Flanges & Unions', 'Seamless Steel Pipes']
    },
    {
      brand: 'Gates',
      image: '/products/gates-category.png',
      types: ['Hydraulic Hose Pipes', 'High-Pressure Hoses', 'Crimped Fittings']
    }
  ],
  electrical: [
    {
      brand: 'Schneider',
      image: '/products/schneider-category.png',
      types: ['Air Circuit Breakers', 'Contactors & Relays', 'Switchgear Units']
    },
    {
      brand: 'Siemens',
      image: '/products/siemens-category.png',
      types: ['PLCs & HMI Panels', 'AC Drives & VFDs', 'Motor Protections']
    }
  ],
  safety: [
    {
      brand: '3M',
      image: '/products/safety-category.png',
      types: ['N95 Respirators', 'Protective Eyewear', 'Disposable Coveralls']
    },
    {
      brand: 'Honeywell',
      image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=800&auto=format&fit=crop',
      types: ['Safety Helmets', 'Full Body Harnesses', 'Steel-Toe Boots']
    }
  ],
  transmission: [
    {
      brand: 'Fenner',
      image: '/products/pulleys-vbelts-category.png',
      types: ['Industrial V-Belts', 'Timing Pulleys', 'Flexible Couplings']
    }
  ]
};

function BrandCard({ brandData, onEnquire }) {
  return (
    <div
      onClick={() => onEnquire({ name: `${brandData.brand} ${brandData.types[0]}` })}
      className="
        relative flex flex-col overflow-hidden group rounded-[28px] border border-slate-100 bg-white/95 backdrop-blur-md h-full cursor-pointer
        transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:border-blue-500/30 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(59,130,246,0.18)]
      "
    >
      {/* Brand logo overlay tag (floating badge) */}
      <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-blue-600/90 text-white text-[10px] font-black uppercase tracking-widest rounded-md backdrop-blur-sm shadow-md z-10 transition-transform duration-300 group-hover:scale-105">
        {brandData.brand}
      </div>

      {/* Product Image Area - object-contain with p-4 to prevent cropping */}
      <div className="h-[220px] w-full overflow-hidden relative border-b border-slate-100/90 flex-shrink-0 rounded-t-[28px] bg-[#F8FAFC] p-4 flex items-center justify-center">
        <img
          src={brandData.image}
          alt={brandData.brand}
          loading="lazy"
          className="max-w-full max-h-full object-contain transition-transform duration-[600ms] group-hover:scale-102 object-center"
        />
        {/* Subtle bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          {/* Brand Title (prominent, bold, below image) */}
          <h4 className="font-black text-slate-900 text-[22px] uppercase tracking-widest leading-none mb-4 flex items-center justify-between">
            <span>{brandData.brand}</span>
            <span className="text-blue-500 text-[12px] font-bold group-hover:translate-x-1 transition-transform duration-300">→</span>
          </h4>

          {/* Product Types listed as clean capsule pills with hover glow */}
          <div className="flex flex-col gap-1.5">
            {brandData.types.map((type) => (
              <div 
                key={type}
                className="px-4 py-2.5 bg-[#E6F0FA] border border-blue-100/30 text-blue-900 text-[12px] font-extrabold uppercase tracking-wider rounded-full text-left transition-all duration-300 hover:shadow-[0_0_12px_rgba(59,130,246,0.15)] hover:bg-[#E6F0FA]/90"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('bearings');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="products" className="bg-[#F8FAFC] py-8 border-t border-black/[0.04] relative z-20">
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
      
      {/* Main Product Catalog Section */}
      <div className="w-[96%] max-w-[1480px] mx-auto px-6">
        {/* Main Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-6"
        >
          <p className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.25em] mb-1.5">B2B Industrial Catalog</p>
          <h2 className="text-[28px] sm:text-[34px] font-black tracking-tight leading-tight text-slate-900 uppercase mb-2">
            Our Products
          </h2>
          <p className="text-slate-500 text-[13px] leading-relaxed font-medium">
            Explore our comprehensive inventory of mechanical components, tools, automation devices, and safety gear organized by category and authorized manufacturer.
          </p>
        </motion.div>

        {/* Categories Tab Selector (Horizontal Scroll on Mobile - starts from Bearings) */}
        <div className="flex items-center justify-start overflow-x-auto pb-4 mb-8 gap-4 no-scrollbar w-full flex-nowrap py-2 px-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="relative px-8 py-4.5 text-[13px] font-black uppercase tracking-widest rounded-full transition-colors duration-300 flex-shrink-0 z-10 hover:-translate-y-0.5 hover:scale-105 active:scale-95 select-none"
                style={{ color: isActive ? '#ffffff' : '#475569' }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-[0_6px_20px_rgba(59,130,246,0.35)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-20">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Category Label Title with Thicker Gradient Accent Line */}
        <div className="flex items-center mb-6">
          <div className="h-8 w-1.5 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full mr-4 shadow-sm" />
          <h3 className="font-black text-slate-900 text-[22px] md:text-[25px] uppercase tracking-widest leading-none">
            {categories.find(c => c.id === activeCategory)?.label}
          </h3>
        </div>

        {/* Brand Cards Grid - pre-rendered and visibility-toggled for instant switching */}
        {categories.map((cat) => {
          const isCurrent = activeCategory === cat.id;
          return (
            <div
              key={cat.id}
              className={`${
                isCurrent 
                  ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr mt-2 opacity-100 transition-opacity duration-200 ease-out" 
                  : "hidden opacity-0"
              }`}
            >
              {(productsData[cat.id] || []).map((brand) => (
                <BrandCard 
                  key={brand.brand} 
                  brandData={brand} 
                  onEnquire={setSelectedProduct} 
                />
              ))}
            </div>
          );
        })}
      </div>

      {/* Inquiry Popup Integration */}
      {selectedProduct && (
        <InquiryModal 
          isOpen={!!selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          product={selectedProduct} 
        />
      )}

    </section>
  );
}
