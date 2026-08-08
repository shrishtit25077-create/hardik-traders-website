import React from 'react';
import { ShieldCheck, FileCheck, Package, Truck, Layers, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const TRUST = [
  {
    Icon: ShieldCheck,
    title: 'Authorized Dealer',
    desc: 'Direct manufacturer ties. Authorized distributor of 25+ premium global brands.',
    color: '#e31b23',
  },
  {
    Icon: Package,
    title: 'Genuine Products',
    desc: '100% authenticity certified. Sourced directly with original manufacturer warranty.',
    color: '#e31b23',
  },
  {
    Icon: Truck,
    title: 'Pan India Delivery',
    desc: 'Express site supply. Prompt delivery across major B2B hubs and project sites.',
    color: '#e31b23',
  },
  {
    Icon: Headphones,
    title: 'Technical Support',
    desc: 'Expert engineering guidance. Get specialized recommendations from our application engineers.',
    color: '#e31b23',
  },
  {
    Icon: Layers,
    title: 'Bulk Procurement',
    desc: 'Volume-based corporate supply contracts with customized flexible commercial terms.',
    color: '#e31b23',
  },
  {
    Icon: FileCheck,
    title: 'GST Compliant',
    desc: 'Full corporate B2B tax compliance. Valid GST invoices provided for input tax credit.',
    color: '#e31b23',
  },
];

export default function TrustSection() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container mx-auto px-6 lg:px-12">

        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-6" style={{ backgroundColor: 'var(--red)' }} />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--red)' }}>Why Partner With Us</span>
            <div className="h-px w-6" style={{ backgroundColor: 'var(--red)' }} />
          </div>
          <h2 className="text-3xl md:text-[2.1rem] font-black mb-3 text-[#111]" style={{ color: 'var(--text)' }}>
            Trusted by 1,500+ Industrial Clients
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: 300, lineHeight: 1.8 }}>
            India's reliable industrial procurement partner for factories, OEMs, and engineering contractors. We deliver absolute reliability and authenticity.
          </p>
        </div>

        <div className="why-glass-grid">
          {TRUST.map(({ Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.32, delay: i * 0.06 }}
              className="why-glass-card flex flex-col items-start group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundColor: 'var(--red-light)', border: '1px solid rgba(59, 130, 246, 0.15)' }}
              >
                <Icon size={22} style={{ color: 'var(--red)' }} strokeWidth={1.8} />
              </div>
              <h4 className="text-[15px] font-bold mb-2 leading-snug" style={{ color: 'var(--text)' }}>{title}</h4>
              <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-muted)', fontWeight: 300 }}>{desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

