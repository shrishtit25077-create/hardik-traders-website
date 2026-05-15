import React from 'react';
import { MessageCircle, Phone, Mail, FileDown } from 'lucide-react';

const scrollTo = (href, e) => {
  if (e) e.preventDefault();
  const el = document.getElementById(href.replace('#', ''));
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 78, behavior: 'smooth' });
};

const ACTIONS = [
  { icon: <MessageCircle size={17} strokeWidth={1.8} />, label: 'WhatsApp', bg: '#25D366', href: 'https://wa.me/919416215742', external: true },
  { icon: <Phone       size={17} strokeWidth={1.8} />, label: 'Call',      bg: '#1A5F9E', href: 'tel:+919416215742',            external: true },
  { icon: <Mail        size={17} strokeWidth={1.8} />, label: 'Email',     bg: 'var(--red)', href: 'mailto:sales@hardiktraders.com', external: true },
  { icon: <FileDown    size={17} strokeWidth={1.8} />, label: 'Catalog',   bg: '#2d2d2d', href: '#contact',                      external: false },
];

export default function QuickContact() {
  return (
    <>
      {/* ─── Desktop: vertical pill anchored to right edge ─── */}
      <div
        className="fixed z-40 hidden lg:flex flex-col items-center"
        style={{ right: 0, top: '50%', transform: 'translateY(-50%)' }}
      >
        {ACTIONS.map(({ icon, label, bg, href, external }, i) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            onClick={!external ? (e) => scrollTo(href, e) : undefined}
            className="flex flex-col items-center justify-center group relative"
            style={{
              width: '44px', height: '44px',
              backgroundColor: bg,
              borderBottom: i < ACTIONS.length - 1 ? '1px solid rgba(255,255,255,0.18)' : 'none',
              borderRadius: i === 0 ? '8px 0 0 0' : i === ACTIONS.length - 1 ? '0 0 0 8px' : '0',
              boxShadow: '-2px 0 12px rgba(0,0,0,0.14)',
              transition: 'width 0.18s ease',
            }}
            title={label}
          >
            <span className="text-white">{icon}</span>
            {/* Tooltip */}
            <span
              className="absolute right-full top-1/2 -translate-y-1/2 mr-2 whitespace-nowrap text-[11px] font-bold text-white px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"
              style={{ backgroundColor: bg }}
            >
              {label}
            </span>
          </a>
        ))}
      </div>

      {/* ─── Mobile: horizontal bar pinned to bottom ─── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden"
        style={{ boxShadow: '0 -2px 16px rgba(0,0,0,0.12)' }}
      >
        {ACTIONS.map(({ icon, label, bg, href, external }) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            onClick={!external ? (e) => scrollTo(href, e) : undefined}
            className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-white"
            style={{ backgroundColor: bg }}
          >
            {icon}
            <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.04em' }}>{label}</span>
          </a>
        ))}
      </div>

      {/* Spacer so mobile content isn't hidden behind the bar */}
      <div className="h-14 lg:hidden" aria-hidden="true" />
    </>
  );
}
