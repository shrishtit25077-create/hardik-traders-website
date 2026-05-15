import React from 'react';
import { Wrench, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111111', color: '#9CA3AF' }}>
      <div className="container mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <Wrench size={20} style={{ color: '#C1121F' }} />
              <span className="text-lg font-bold tracking-tight text-white">
                HARDIK <span style={{ color: '#C1121F' }}>TRADERS</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Your trusted partner for high-quality engineering and industrial tools. Supplying the best global brands to power industrial development.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={14} style={{ color: '#C1121F' }} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} style={{ color: '#C1121F' }} />
                <span>sales@hardiktraders.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 tracking-wide uppercase text-xs">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {['Home', 'About Us', 'Products', 'Brands', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-5 tracking-wide uppercase text-xs">Categories</h4>
            <ul className="space-y-3 text-sm">
              {['Power Tools', 'Hand Tools', 'Air Tools', 'Welding Equipment', 'Measuring Instruments'].map((item) => (
                <li key={item}>
                  <span className="hover:text-white transition-colors cursor-pointer">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-white font-bold mb-5 tracking-wide uppercase text-xs">Business Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between pb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span>Monday – Saturday</span>
                <span className="text-white">9AM – 7PM</span>
              </li>
              <li className="flex justify-between pt-1">
                <span>Sunday</span>
                <span style={{ color: '#C1121F' }} className="font-medium">Closed</span>
              </li>
            </ul>

            <div className="mt-8 p-4 rounded-xl" style={{ backgroundColor: 'rgba(193,18,31,0.12)', border: '1px solid rgba(193,18,31,0.2)' }}>
              <p className="text-xs leading-relaxed" style={{ color: '#C1121F' }}>
                📍 Industrial Area, Engineering Zone<br />City, State, ZIP
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p>&copy; {new Date().getFullYear()} Hardik Traders. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
