import React, { useState, useEffect } from 'react';
import { Menu, X, Wrench } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const scrollTo = (href, e) => {
  if (e) e.preventDefault();
  const el = document.getElementById(href.replace('#', ''));
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 78, behavior: 'smooth' });
};

const NAV = [
  { name: 'Home',     href: '#home'     },
  { name: 'About',    href: '#about'    },
  { name: 'Products', href: '#products' },
  { name: 'Brands',   href: '#brands'   },
  { name: 'Contact',  href: '#contact'  },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active,     setActive]     = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['home', 'about', 'products', 'brands', 'contact'];
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-25% 0px -65% 0px' }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass' : ''}`}
      style={{ padding: scrolled ? '9px 0' : '13px 0', backgroundColor: scrolled ? undefined : 'var(--bg)', borderBottom: scrolled ? undefined : '1px solid var(--border)' }}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#home" onClick={e => scrollTo('#home', e)} className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ backgroundColor: 'var(--red)' }}>
            <Wrench size={17} color="#fff" strokeWidth={2.2} />
          </div>
          <span className="text-[1.1rem] font-extrabold tracking-tight text-[#111]">
            HARDIK <span style={{ color: 'var(--red)' }}>TRADERS</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {NAV.map(({ name, href }) => {
            const id = href.replace('#', '');
            const isActive = active === id;
            return (
              <a
                key={name}
                href={href}
                onClick={e => scrollTo(href, e)}
                className="relative text-sm font-semibold pb-0.5 transition-colors"
                style={{ color: isActive ? 'var(--red)' : '#555' }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--red)'; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = '#555'; }}
              >
                {name}
                <motion.div
                  className="absolute -bottom-0.5 left-0 h-[2px] rounded-full"
                  style={{ backgroundColor: 'var(--red)' }}
                  animate={{ width: isActive ? '100%' : '0%' }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                />
              </a>
            );
          })}
          <a href="#contact" onClick={e => scrollTo('#contact', e)} className="btn-primary px-5 py-2.5 text-sm">
            Get a Quote
          </a>
        </div>

        <button className="md:hidden p-1 text-[#333]" onClick={() => setMobileOpen(v => !v)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute w-full left-0 top-full overflow-hidden border-t shadow-md"
            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
          >
            <div className="flex flex-col p-5 gap-0.5">
              {NAV.map(({ name, href }) => (
                <a
                  key={name} href={href}
                  onClick={e => { scrollTo(href, e); setMobileOpen(false); }}
                  className="py-3 text-sm font-semibold border-b border-[#F5F5F5] transition-colors"
                  style={{ color: active === href.replace('#', '') ? 'var(--red)' : '#444' }}
                >
                  {name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={e => { scrollTo('#contact', e); setMobileOpen(false); }}
                className="btn-primary mt-4 py-3 text-center text-sm"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
