import React, { useState, useEffect } from 'react';
import { Menu, X, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Brands', href: '#brands' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
        padding: isScrolled ? '8px 0' : '14px 0',
        boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Wrench size={24} style={{ color: '#C1121F' }} />
          <span className="text-xl font-bold tracking-tight" style={{ color: '#111111' }}>
            HARDIK <span style={{ color: '#C1121F' }}>TRADERS</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-sm transition-colors hover:text-red-700"
              style={{ color: '#4B5563' }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="text-white text-sm px-5 py-2.5 rounded font-semibold transition-colors"
            style={{ backgroundColor: '#C1121F' }}
            onMouseEnter={e => e.target.style.backgroundColor = '#A30F1A'}
            onMouseLeave={e => e.target.style.backgroundColor = '#C1121F'}
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen
            ? <X size={24} style={{ color: '#111111' }} />
            : <Menu size={24} style={{ color: '#111111' }} />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute w-full left-0 top-full overflow-hidden"
            style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium text-base pb-3 transition-colors"
                  style={{ color: '#4B5563', borderBottom: '1px solid #F3F4F6' }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-center px-6 py-3 rounded font-semibold mt-1"
                style={{ backgroundColor: '#C1121F' }}
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
