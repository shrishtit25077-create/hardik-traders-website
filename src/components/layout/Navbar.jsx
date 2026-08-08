import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/', type: 'link' },
  { label: 'Industries', href: '/#industries', type: 'hash' },
  { label: 'Brands', href: '/#brands', type: 'hash' },
  { label: 'Contact', href: '/#contact', type: 'hash' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial call
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') return;

      const scrollPosition = window.scrollY + 120;

      const brandsEl = document.getElementById('brands');
      const industriesEl = document.getElementById('industries');
      const contactEl = document.getElementById('contact');

      if (contactEl && scrollPosition >= contactEl.offsetTop) {
        setActiveSection('contact');
      } else if (industriesEl && scrollPosition >= industriesEl.offsetTop) {
        setActiveSection('industries');
      } else if (brandsEl && scrollPosition >= brandsEl.offsetTop) {
        setActiveSection('brands');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const isActive = (link) => {
    if (location.pathname !== '/') {
      return link.type === 'link' && link.href === location.pathname;
    }
    if (link.type === 'link') {
      return activeSection === 'home';
    } else {
      const id = link.href.replace('/#', '');
      return activeSection === id;
    }
  };

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center border-b transition-all duration-300 ease-out ${
        scrolled 
          ? 'h-[64px] border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)]' 
          : 'h-[76px] border-white/5'
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(10, 20, 40, 0.85)' : 'rgba(10, 20, 40, 0.40)',
        backdropFilter: scrolled ? 'blur(16px)' : 'blur(8px)',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'blur(8px)'
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 w-full flex items-center justify-between">

        {/* Logo (Left) */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="w-9 h-9 flex items-center justify-center font-black text-[15px] tracking-tighter shadow-sm bg-blue-600 text-white rounded-[8px]">
            HT
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-[15px] tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
              Hardik Traders
            </span>
            <span className="text-[9px] uppercase tracking-[0.15em] font-semibold text-slate-400 mt-0.5">
              Est. 2001
            </span>
          </div>
        </Link>

        {/* Desktop Nav (Center) - gap-8 is 32px */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.type === 'hash' ? (
              <button
                key={link.label}
                onClick={() => handleHashNav(link.href)}
                className={`text-[15px] font-bold uppercase tracking-[0.12em] transition-colors duration-300 relative group py-2 ${
                  isActive(link) ? 'text-blue-400 font-extrabold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-all duration-300 ${
                  isActive(link) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`text-[15px] font-bold uppercase tracking-[0.12em] transition-colors duration-300 relative group py-2 ${
                  isActive(link) ? 'text-blue-400 font-extrabold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-all duration-300 ${
                  isActive(link) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            )
          )}
        </nav>

        {/* Desktop Actions (Right) */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/get-quote"
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-[11px] uppercase tracking-wider rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-[0_4px_16px_rgba(59,130,246,0.2)]"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white hover:bg-white/5 transition-colors rounded-full"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div 
          className="lg:hidden fixed inset-x-0 top-[70px] px-6 py-8 flex flex-col gap-6 animate-fade-in shadow-xl max-h-[calc(100vh-70px)] overflow-y-auto border-b border-white/5"
          style={{
            backgroundColor: 'rgba(10, 20, 40, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
        >
          {navLinks.map((link) =>
            link.type === 'hash' ? (
              <button
                key={link.label}
                onClick={() => handleHashNav(link.href)}
                className={`text-left font-bold text-[14px] uppercase tracking-widest transition-colors duration-200 ${
                  isActive(link) ? 'text-blue-400 font-extrabold' : 'text-slate-300 hover:text-white'
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
                  isActive(link) ? 'text-blue-400 font-extrabold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
            <Link 
              to="/get-quote" 
              onClick={() => setMobileOpen(false)} 
              className="text-center block py-3 text-[12px] font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full hover:brightness-110 transition-all shadow-[0_4px_16px_rgba(59,130,246,0.2)]"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
