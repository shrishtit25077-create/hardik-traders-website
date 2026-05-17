import React from 'react';
import { Wrench, Phone, Mail, MapPin, ArrowUpRight, Instagram, Linkedin, Youtube, BadgeCheck, Shield, FileText } from 'lucide-react';

const scrollTo = (href, e) => {
  if (e) e.preventDefault();
  const el = document.getElementById(href.replace('#', ''));
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 78, behavior: 'smooth' });
};

const LINKS   = [
  { name: 'Home', href: '#home' }, { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' }, { name: 'Brands', href: '#brands' },
  { name: 'Contact', href: '#contact' },
];
const CATS    = ['Power Tools', 'Hand Tools', 'Sensors & Automation', 'Bearings', 'Pneumatics', 'Hydraulics', 'Measuring Instruments', 'Lubricants', 'Electricals & Electronics', 'Belts & Belting', 'Torque Tools', 'Temperature Control', 'Moulding Components', 'Tsubaki Components', 'Filter Products'];
const SOCIALS = [{ Icon: Instagram, href: '#' }, { Icon: Linkedin, href: '#' }, { Icon: Youtube, href: '#' }];

const TRUST = [
  { Icon: BadgeCheck, label: 'Authorized Dealer Since 2001' },
  { Icon: Shield,     label: 'ISO 9001:2015 Compliant' },
  { Icon: FileText,   label: 'GST: 06CYFPS9701M1ZU' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#161616', color: '#777' }}>

      {/* Trust strip */}
      <div style={{ borderBottom: '1px solid #252525', padding: '18px 0' }}>
        <div className="container mx-auto px-6 lg:px-12 flex flex-wrap justify-center gap-6 md:gap-12">
          {TRUST.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-[12px] font-semibold" style={{ color: '#A09A90' }}>
              <Icon size={15} style={{ color: 'var(--red)', flexShrink: 0 }} />
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ backgroundColor: 'var(--red)' }}>
                <Wrench size={17} color="#fff" strokeWidth={2.2} />
              </div>
              <span className="text-[1.05rem] font-extrabold text-white tracking-tight">
                HARDIK <span style={{ color: 'var(--red)' }}>TRADERS</span>
              </span>
            </div>
            <p className="text-[13px] leading-relaxed mb-5" style={{ lineHeight: 1.7 }}>
              Authorized dealer for 30+ global industrial brands. Trusted supplier of quality engineering tools across India since 2001.
            </p>
            <div className="flex gap-2.5">
              {SOCIALS.map(({ Icon, href }, i) => (
                <a key={i} href={href}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                  style={{ border: '1px solid #282828', color: '#666' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--red)'; e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = '#282828'; e.currentTarget.style.color = '#666'; }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-[11px] font-black uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {LINKS.map(({ name, href }) => (
                <li key={name}>
                  <a href={href} onClick={e => scrollTo(href, e)}
                    className="flex items-center gap-1.5 text-[13px] transition-colors"
                    style={{ color: '#777' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--red)'}
                    onMouseLeave={e => e.currentTarget.style.color = '#777'}
                  >
                    <ArrowUpRight size={13} /> {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-[11px] font-black uppercase tracking-widest mb-5">Product Categories</h4>
            <ul className="space-y-2.5">
              {CATS.map(c => (
                <li key={c}>
                  <span className="flex items-center gap-1.5 text-[13px] cursor-pointer transition-colors"
                    style={{ color: '#777' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--red)'}
                    onMouseLeave={e => e.currentTarget.style.color = '#777'}
                  >
                    <ArrowUpRight size={13} /> {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-[11px] font-black uppercase tracking-widest mb-5">Contact Info</h4>
            <ul className="space-y-4 text-[13px]">
              {[
                { Icon: MapPin, text: 'SH.NO.1740/4, Near SBI Bank\nCircular Road, Rewari, Haryana – 123401' },
                { Icon: Phone,  text: '+91 94162 15742\n+91 89506 46800' },
                { Icon: Mail,   text: 'sales@hardiktraders.com\ninfo@hardiktraders.com' },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={14} style={{ color: 'var(--red)', marginTop: '2px', flexShrink: 0 }} />
                  <span className="whitespace-pre-line leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5" style={{ borderTop: '1px solid #222' }}>
              <h5 className="text-[11px] text-white font-black uppercase tracking-widest mb-2.5">Business Hours</h5>
              <div className="flex justify-between text-[13px] mb-1.5">
                <span>Mon – Sat</span><span className="text-white font-medium">9AM – 7PM IST</span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span>Sunday</span><span style={{ color: 'var(--red)' }} className="font-medium">Closed</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[12px]"
          style={{ borderTop: '1px solid #202020' }}>
          <p>&copy; {new Date().getFullYear()} Hardik Traders. All rights reserved. | Industrial Tools Authorized Dealer, Rewari, Haryana</p>
          <div className="flex gap-5" style={{ color: '#555' }}>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
