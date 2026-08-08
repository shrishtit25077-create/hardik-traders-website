import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const productsList = [
  { label: 'Bearings', to: '/products/category/bearings' },
  { label: 'Sensors', to: '/products/category/sensors' },
  { label: 'Pneumatics', to: '/products/category/pneumatics' },
  { label: 'Electricals & Electronics', to: '/products/category/electricals-electronics' },
  { label: 'Allen Bolts', to: '/products/category/allen-bolts' },
  { label: 'Pulleys & V-Belts', to: '/products/category/pulleys-vbelts' },
  { label: 'Safety Equipment', to: '/products/category/safety-equipment' },
];

const brandsList = [
  { label: 'SKF', to: '/products/category/bearings' },
  { label: 'Festo', to: '/products/category/pneumatics' },
  { label: 'Schneider', to: '/products/category/electricals-electronics' },
  { label: 'Unbrako', to: '/products/category/allen-bolts' },
  { label: 'Fenner', to: '/products/category/pulleys-vbelts' },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#05070A] text-white border-t border-white/[0.03] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-700/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Grid (Reduced py-16 to py-12) */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1: Company Info */}
          <div className="flex flex-col items-start lg:pr-4">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-9 h-9 bg-blue-600 flex items-center justify-center font-black text-white text-sm tracking-tighter group-hover:shadow-[0_0_16px_rgba(59,130,246,0.5)] transition-all duration-300 rounded-[10px]">
                HT
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-[15px] tracking-tight group-hover:text-blue-400 transition-colors duration-300">Hardik Traders</span>
                <span className="text-[9px] text-slate-500 uppercase tracking-[0.12em] font-semibold mt-0.5">Est. 2001</span>
              </div>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed mb-5">
              Industrial Components Since 2001. Pan India distributor of high-performance bearings, pneumatics, and electrical systems.
            </p>
            {/* Certification tags directly below paragraph */}
            <div className="flex flex-wrap gap-1.5">
              {[
                'ISO 9001:2015',
                'GST Registered',
                'Authorized Distributor',
                '100% Genuine Products',
                'Pan India Supply'
              ].map(badge => (
                <span key={badge} className="border border-white/[0.06] bg-[#0A1525] text-slate-400 text-[8px] uppercase tracking-wider px-2.5 py-1 font-bold rounded-[8px]">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-5 pb-1 border-b border-white/[0.04] inline-block">Products</h4>
            <ul className="space-y-2.5">
              {productsList.map(item => (
                <li key={item.label}>
                  <Link to={item.to} className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-xs font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Brands */}
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-5 pb-1 border-b border-white/[0.04] inline-block">Brands</h4>
            <ul className="space-y-2.5">
              {brandsList.map(item => (
                <li key={item.label}>
                  <Link to={item.to} className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-xs font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col items-start">
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-5 pb-1 border-b border-white/[0.04] inline-block">Contact</h4>
            <ul className="space-y-3.5 mb-5">
              <li className="flex items-start gap-2.5 text-slate-400 text-xs">
                <MapPin size={14} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">Shop No. 1740/4, Near SBI Bank, Circular Road, Rewari, Haryana - 123401</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400 text-xs">
                <Phone size={14} className="text-blue-500 flex-shrink-0" />
                <a href="tel:+919416215742" className="hover:text-blue-400 transition-colors font-semibold">+91 94162 15742</a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400 text-xs">
                <Mail size={14} className="text-blue-500 flex-shrink-0" />
                <a href="mailto:hardiktraders123@gmail.com" className="hover:text-blue-400 transition-colors font-semibold break-all">hardiktraders123@gmail.com</a>
              </li>
            </ul>
            <Link to="/get-quote" className="inline-flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider hover:translate-x-1 transition-all duration-300 group">
              Get Quote <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.03] py-5 bg-[#0A1525]/85">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px] font-medium">
          <p>Copyright © 2026 Hardik Traders. All rights reserved.</p>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-end">
            <span>GSTIN: 06CYFPS9701M1ZU</span>
            <span>·</span>
            <span>100% Genuine Products</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
