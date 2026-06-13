import React from 'react';
import { Truck, BadgeCheck, Package, Phone } from 'lucide-react';

const ITEMS = [
  { Icon: Truck,       text: 'Pan India Delivery' },
  { Icon: BadgeCheck,  text: '100% Genuine Products' },
  { Icon: Package,     text: 'Authorized Dealer' },
  { Icon: Phone,       text: '+91 9416215742, +91 8950646800' },
  { text: 'GST: 06CYFPS9701M1ZU' },
];

export default function TopBar() {
  return (
    <div
      className="w-full hidden md:flex items-center justify-center gap-6 py-2 px-6"
      style={{
        position:        'fixed',
        top:             0,
        left:            0,
        right:           0,
        zIndex:          60,
        backgroundColor: '#C8102E',
        fontSize:        '11.5px',
        fontWeight:      600,
        color:           'rgba(255,255,255,0.92)',
        letterSpacing:   '0.03em',
      }}
    >
      {ITEMS.map(({ Icon, text }, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {Icon && <Icon size={12} strokeWidth={2} style={{ opacity: 0.85 }} />}
          {text}
        </span>
      ))}
      <span
        className="ml-auto text-[11px] font-semibold px-3 py-1 rounded-full cursor-pointer transition-all"
        style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}
      >
        Download Catalog ↓
      </span>
    </div>
  );
}
