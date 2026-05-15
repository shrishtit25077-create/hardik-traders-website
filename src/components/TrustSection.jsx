import React from 'react';
import { ShieldCheck, FileText, Package, Truck, Layers, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const TRUST = [
  {
    Icon: ShieldCheck,
    title: 'Authorized Dealer',
    desc: 'Official authorized dealer for 25+ premium global industrial brands since 2014.',
    color: '#1A6CB5',
  },
  {
    Icon: FileText,
    title: 'GST Registered',
    desc: 'Fully GST compliant. Valid tax invoices provided for all B2B procurement.',
    color: '#d62839',
  },
  {
    Icon: Package,
    title: 'Genuine Products',
    desc: 'Every product supplied is 100% original with manufacturer warranty.',
    color: '#2E7D32',
  },
  {
    Icon: Truck,
    title: 'Pan India Delivery',
    desc: 'Fast, reliable delivery across all major industrial hubs in India.',
    color: '#E65100',
  },
  {
    Icon: Layers,
    title: 'Bulk Supply',
    desc: 'Specialized in bulk industrial procurement for factories and contractors.',
    color: '#6A1B9A',
  },
  {
    Icon: Headphones,
    title: 'Technical Support',
    desc: 'Expert guidance to help you select the right tools for your application.',
    color: '#00695C',
  },
];

export default function TrustSection() {
  return (
    <section className="py-16" style={{ backgroundColor: 'var(--card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container mx-auto px-6 lg:px-12">

        <div className="text-center max-w-lg mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-6" style={{ backgroundColor: 'var(--red)' }} />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--red)' }}>Why Choose Us</span>
            <div className="h-px w-6" style={{ backgroundColor: 'var(--red)' }} />
          </div>
          <h2 className="text-[1.75rem] font-black mb-2" style={{ color: 'var(--text)' }}>
            Trusted by 1,500+ Industrial Clients
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '14px' }}>
            A reliable procurement partner for factories, contractors, and engineering firms across India.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {TRUST.map(({ Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.32, delay: i * 0.06 }}
              className="flex flex-col items-center text-center p-5 rounded-xl group cursor-default"
              style={{
                backgroundColor: 'var(--bg)',
                border: '1px solid var(--border)',
                transition: 'all 0.22s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = `0 4px 16px ${color}22`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                style={{ backgroundColor: `${color}18` }}
              >
                <Icon size={20} style={{ color }} strokeWidth={1.7} />
              </div>
              <h4 className="text-[12.5px] font-bold mb-1.5 leading-snug" style={{ color: 'var(--text)' }}>{title}</h4>
              <p className="text-[11.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>{desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
