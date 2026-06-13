import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowLeft, Send, Tag, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';

const scrollToContact = (prefill, setPrefill) => {
  setPrefill(prefill);
  setTimeout(() => {
    const el = document.getElementById('contact');
    if (el) {
      const offset = 82;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, 100);
};

export default function CategoryDrawer({ cat, openProduct, onClose, setPrefill }) {
  const overlayRef = useRef(null);
  const [view, setView] = useState(openProduct ? 'details' : 'brands'); // 'brands', 'products', 'details'
  const [activeBrand, setActiveBrand] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(openProduct || null);

  // Monitor openProduct changes (e.g. from Search)
  useEffect(() => {
    if (openProduct) {
      setSelectedProduct(openProduct);
      setView('details');
    } else {
      setSelectedProduct(null);
      setView('brands');
    }
  }, [openProduct, cat]);

  // Lock body scroll and handle Escape
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handler = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handler); };
  }, [onClose]);

  if (!cat) return null;

  // Filter products based on active brand
  const filteredProducts = cat.products.filter(p => {
    if (activeBrand === 'All') return true;
    return p.brand.toLowerCase().includes(activeBrand.toLowerCase());
  });

  const selectBrand = (brand) => {
    setActiveBrand(brand);
    setView('products');
  };

  const selectProduct = (prod) => {
    setSelectedProduct(prod);
    setView('details');
  };

  const submitQuote = (prod) => {
    const msg = `I am interested in: ${prod.name} (${cat.name}). Brand preference: ${prod.brand}. Please share catalog specifications and volume commercial pricing sheets.`;
    scrollToContact(msg, setPrefill);
    onClose();
  };

  const enquireAll = `I am interested in bulk options for ${cat.name} category. Sourced brands: ${cat.brands.join(', ')}. Please share detailed catalogs and pricing.`;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex"
      style={{ backgroundColor: 'rgba(0,0,0,0.65)' }}
      onClick={e => { if (e.target === overlayRef.current) onClose(); }}
    >
      {/* Drawer panel */}
      <div
        className="ml-auto w-full max-w-4xl h-full flex flex-col overflow-hidden"
        style={{ 
          backgroundColor: '#0a0a0a', 
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          animation: 'slideInRight 0.32s cubic-bezier(0.16, 1, 0.3, 1)' 
        }}
      >
        
        {/* HERO HEADER */}
        <div className="relative shrink-0" style={{ height: '200px' }}>
          <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.38)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.4) 100%)' }} />

          {/* Controls */}
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-30">
            {view !== 'brands' ? (
              <button 
                onClick={() => setView(view === 'details' ? 'products' : 'brands')} 
                className="flex items-center gap-1.5 text-white text-[12px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.15)] transition-colors cursor-pointer"
              >
                <ArrowLeft size={14} /> Back
              </button>
            ) : (
              <div />
            )}
            <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.15)] transition-colors cursor-pointer">
              <X size={18} color="#fff" />
            </button>
          </div>

          {/* Title text */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[var(--red)] block mb-1">Industrial Catalog</span>
            <h2 className="text-2xl md:text-3xl font-black text-white leading-tight font-display uppercase tracking-tight">{cat.name}</h2>
            <p className="text-[13px] text-[rgba(255,255,255,0.6)] font-light mt-1 max-w-[85%]">{cat.desc}</p>
          </div>
        </div>

        {/* ─── STEP 1: BRANDS SELECTOR VIEW ─── */}
        {view === 'brands' && (
          <div className="flex-1 overflow-y-auto p-6 flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[rgba(255,255,255,0.4)] mb-4 font-display">
                Step 1: Choose an Authorized Manufacturer
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cat.brands.map(brand => (
                  <div
                    key={brand}
                    onClick={() => selectBrand(brand)}
                    className="p-5 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:border-[var(--red)] bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.06)] group"
                    onMouseEnter={e => {
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(227, 27, 35, 0.08)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-[rgba(227,27,35,0.08)] border border-[rgba(227,27,35,0.15)] group-hover:scale-105 transition-transform duration-300">
                      <Tag size={16} className="text-[var(--red)]" />
                    </div>
                    <h4 className="text-[14px] font-bold text-white uppercase tracking-wider">{brand}</h4>
                    <span className="text-[10px] text-[rgba(255,255,255,0.4)] mt-1.5 flex items-center gap-0.5">
                      Explore catalog <ArrowRight size={10} className="text-[var(--red)]" />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skip Sourcing Block */}
            <div className="mt-8 p-6 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.01)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-[14px] font-bold text-white">Looking for complete category quotation?</h4>
                <p className="text-[12px] text-[rgba(255,255,255,0.45)] mt-1 font-light">Submit spec sheets or list of multiple brand requirements directly.</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => selectBrand('All')}
                  className="px-4 py-2.5 rounded-lg text-[12px] font-bold text-white bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.15)] cursor-pointer transition-colors"
                >
                  Show All Products
                </button>
                <button
                  onClick={() => { scrollToContact(enquireAll, setPrefill); onClose(); }}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-[12px] font-bold text-white bg-[var(--red)] hover:bg-[var(--red-hover)] cursor-pointer transition-colors"
                  style={{ boxShadow: '0 4px 12px rgba(227,27,35,0.2)' }}
                >
                  <Send size={12} /> RFQ Category
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ─── STEP 2: PRODUCT LISTING VIEW ─── */}
        {view === 'products' && (
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-4 border-b border-[rgba(255,255,255,0.06)] pb-3">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[rgba(255,255,255,0.4)] font-display">
                Step 2: Select Specific Engineering Product ({activeBrand})
              </p>
              <button 
                onClick={() => setView('brands')} 
                className="text-[11px] font-bold text-[var(--red)] uppercase tracking-wider flex items-center gap-1 cursor-pointer"
              >
                Change Brand
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredProducts.map((p, idx) => (
                <div
                  key={idx}
                  onClick={() => selectProduct(p)}
                  className="p-5 rounded-xl border flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-[var(--red)] bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.06)] group"
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(227, 27, 35, 0.05)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                  }}
                >
                  <div>
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <Tag size={11} className="text-[var(--red)]" />
                      <span className="text-[9.5px] font-extrabold uppercase tracking-widest text-[var(--red)]">{p.brand}</span>
                    </div>
                    <h4 className="text-[14px] font-bold text-white mb-2 leading-snug group-hover:text-[var(--red)] transition-colors">{p.name}</h4>
                    <p className="text-[12px] text-[rgba(255,255,255,0.55)] leading-relaxed font-light line-clamp-3" style={{ fontWeight: 300 }}>{p.desc}</p>
                  </div>

                  <span className="text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-1 mt-4 group-hover:text-[var(--red)] transition-colors" style={{ letterSpacing: '0.04em' }}>
                    View Technical Details →
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── STEP 3: PRODUCT DETAILS SHEET ─── */}
        {view === 'details' && selectedProduct && (
          <div className="flex-1 overflow-y-auto p-6 flex flex-col md:flex-row gap-6">
            
            {/* Left spec column */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-3">
                  <Tag size={12} className="text-[var(--red)]" />
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--red)]">{selectedProduct.brand}</span>
                </div>
                <h3 className="text-[20px] md:text-[22px] font-black text-white mb-3 font-display uppercase tracking-tight leading-tight">
                  {selectedProduct.name}
                </h3>
                <p className="text-[13.5px] text-[rgba(255,255,255,0.65)] leading-relaxed font-light mb-6" style={{ fontWeight: 300 }}>
                  {selectedProduct.desc}
                </p>

                {/* Specs block */}
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-[rgba(255,255,255,0.4)] mb-3 font-display border-b border-[rgba(255,255,255,0.06)] pb-1.5">
                  Technical Specifications
                </h4>

                <div className="flex flex-col gap-2 mb-6">
                  {[
                    { label: 'Precision Rating', value: 'ISO P6 / ABEC-3 (High Precision)' },
                    { label: 'Core Material', value: 'High Carbon Chrome Steel (GCr15)' },
                    { label: 'Operating Temp', value: '-30°C to +150°C (Stabilized)' },
                    { label: 'Lubrication', value: 'Lithium Complex Grease / Mobilux EP2 Filled' },
                    { label: 'Origin', value: 'Japan / Germany OEM Sourced' },
                    { label: 'Compliance', value: 'ISO 9001:2015, CE Certified' }
                  ].map((spec, sidx) => (
                    <div key={sidx} className="flex justify-between items-center text-[12px] py-1.5 border-b border-[rgba(255,255,255,0.03)]">
                      <span className="text-[rgba(255,255,255,0.45)] font-light">{spec.label}</span>
                      <span className="text-white font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Big CTA */}
              <button
                onClick={() => submitQuote(selectedProduct)}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-[13.5px] font-extrabold uppercase tracking-wider text-white transition-all cursor-pointer"
                style={{ 
                  background: 'linear-gradient(135deg, #ff2d2d, #d90000)',
                  boxShadow: '0 8px 24px rgba(227,27,35,0.3)',
                  letterSpacing: '0.04em'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(227,27,35,0.45)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(227,27,35,0.3)';
                }}
              >
                <Send size={14} /> Request Quote & Specifications
              </button>
            </div>

            {/* Right blueprint diagram mockup column */}
            <div className="w-full md:w-[320px] shrink-0 p-5 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.015)] flex flex-col justify-between" style={{ minHeight: '320px' }}>
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-[rgba(255,255,255,0.4)] mb-3 font-display">
                  Component Blueprint
                </h4>
                
                {/* Simulated SVG blueprint schematic */}
                <div className="w-full h-[180px] rounded-lg border border-[rgba(227,27,35,0.15)] bg-[rgba(227,27,35,0.02)] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.3) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
                  <div className="w-24 h-24 rounded-full border-[3px] border-dashed border-[rgba(227,27,35,0.45)] flex items-center justify-center relative animation-spin-slow">
                    <div className="w-16 h-16 rounded-full border border-dashed border-[rgba(227,27,35,0.3)] flex items-center justify-center">
                      <Cpu size={18} className="text-[rgba(227,27,35,0.45)]" />
                    </div>
                  </div>
                  
                  {/* Mock indicators */}
                  <span className="absolute bottom-2 left-3 text-[9px] text-[rgba(255,255,255,0.3)] font-mono">D: 25.00mm</span>
                  <span className="absolute top-2 right-3 text-[9px] text-[rgba(255,255,255,0.3)] font-mono">Precision: ISO P6</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] text-left mt-4">
                <div className="flex items-center gap-2 text-white text-[12px] font-bold mb-1">
                  <ShieldCheck size={14} className="text-[var(--red)]" />
                  <span>100% Genuine Partner</span>
                </div>
                <p className="text-[10.5px] text-[rgba(255,255,255,0.45)] leading-relaxed font-light" style={{ fontWeight: 300 }}>
                  This product is back-sourced directly with full manufacturer warranties, tax clearance compliance, and GST invoices.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        .animation-spin-slow {
          animation: spin 30s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
