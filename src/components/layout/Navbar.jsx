import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/', type: 'link' },
  { label: 'Products', href: '/products', type: 'link' },
  { label: 'Brands', href: '/#brands', type: 'hash' },
  { label: 'Industries', href: '/#industries', type: 'hash' },
  { label: 'Resources', href: '/catalog', type: 'link' },
  { label: 'Contact', href: '/#contact', type: 'hash' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleHashNav = (hash) => {
    setMobileOpen(false);
    const id = hash.replace('/#', '');
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el2 = document.getElementById(id);
        if (el2) {
          window.scrollTo({ top: el2.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
        }
      }, 400);
    }
  };

  const isHomePage = location.pathname === '/';
  const isLightNavbar = !isHomePage || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isLightNavbar
          ? 'bg-white/80 backdrop-blur-2xl border-b border-slate-200/50 shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className={`w-9 h-9 flex items-center justify-center font-black text-[15px] tracking-tighter shadow-sm transition-all duration-300 rounded-[8px] ${
            isLightNavbar ? 'bg-blue-600 text-white' : 'bg-blue-400 text-slate-950'
          }`}>
            HT
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-bold text-[15px] tracking-tight transition-colors duration-300 ${
              isLightNavbar ? 'text-[#081120] group-hover:text-blue-600' : 'text-white group-hover:text-blue-400'
            }`}>
              Hardik Traders
            </span>
            <span className={`text-[9px] uppercase tracking-[0.15em] font-semibold mt-0.5 ${
              isLightNavbar ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Est. 2001
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.type === 'hash' ? (
              <button
                key={link.label}
                onClick={() => handleHashNav(link.href)}
                className={`text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 relative group py-2 ${
                  isLightNavbar ? 'text-slate-600 hover:text-[#081120]' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 relative group py-2 ${
                  isLightNavbar ? 'text-slate-600 hover:text-[#081120]' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/catalog"
            className={`px-5 py-2 border text-[11px] font-bold uppercase tracking-wider transition-all duration-300 rounded-[24px] ${
              isLightNavbar 
                ? 'border-slate-200 text-slate-800 hover:border-blue-500 hover:bg-blue-50/50' 
                : 'border-white/10 text-white hover:border-blue-400/40 hover:bg-blue-500/5'
            }`}
          >
            Download Catalog
          </Link>
          <Link
            to="/get-quote"
            className={`px-5 py-2 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 rounded-[24px] ${
              isLightNavbar
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-400 text-slate-950 hover:bg-blue-300'
            }`}
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 transition-colors rounded-full ${
            isLightNavbar ? 'text-[#081120] hover:bg-slate-100' : 'text-white hover:bg-white/5'
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={`lg:hidden fixed inset-x-0 top-[72px] px-6 py-8 flex flex-col gap-6 animate-fade-in shadow-xl ${
          isLightNavbar 
            ? 'bg-white/95 backdrop-blur-3xl border-b border-slate-200/50' 
            : 'bg-slate-950/95 backdrop-blur-3xl border-b border-white/5'
        }`}>
          {navLinks.map((link) =>
            link.type === 'hash' ? (
              <button
                key={link.label}
                onClick={() => handleHashNav(link.href)}
                className={`text-left font-bold text-[14px] uppercase tracking-widest transition-colors duration-200 ${
                  isLightNavbar ? 'text-[#081120] hover:text-blue-600' : 'text-white hover:text-blue-400'
                }`}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-bold text-[14px] uppercase tracking-widest transition-colors duration-200 ${
                  isLightNavbar ? 'text-[#081120] hover:text-blue-600' : 'text-white hover:text-blue-400'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <div className={`flex flex-col gap-3 pt-4 border-t ${
            isLightNavbar ? 'border-slate-100' : 'border-white/5'
          }`}>
            <Link to="/catalog" onClick={() => setMobileOpen(false)} className="btn-outline text-center block py-3 text-[12px]">
              Download Catalog
            </Link>
            <Link to="/get-quote" onClick={() => setMobileOpen(false)} className="btn-primary text-center block py-3 text-[12px]">
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
