import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';

const scrollTo = (href, e) => {
  if (e) e.preventDefault();
  const el = document.getElementById(href.replace('#', ''));
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 78, behavior: 'smooth' });
};

const CONTACTS = [
  { Icon: MapPin, title: 'Office Address', lines: ['Industrial Area, Engineering Zone', 'City, State – 000000'] },
  { Icon: Phone,  title: 'Phone Numbers',  lines: ['+91 98765 43210', '+91 12345 67890'] },
  { Icon: Mail,   title: 'Email',          lines: ['sales@hardiktraders.com', 'info@hardiktraders.com'] },
];

const inputStyle = {
  width: '100%', padding: '11px 15px', borderRadius: '8px', fontSize: '14px',
  border: '1px solid #E5E7EB', backgroundColor: '#F9FAFB', color: '#111', outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};
const onFocus = e => { e.target.style.borderColor = 'var(--red)'; e.target.style.boxShadow = '0 0 0 3px var(--red-tint2)'; };
const onBlur  = e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none'; };

export default function Contact() {
  const [form,    setForm]    = useState({ name: '', email: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent,    setSent]    = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault(); setSending(true);
    setTimeout(() => { setSending(false); setSent(true); setForm({ name: '', email: '', phone: '', message: '' }); setTimeout(() => setSent(false), 4000); }, 1200);
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container mx-auto px-6 lg:px-12">

        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-8" style={{ backgroundColor: 'var(--red)' }} />
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase" style={{ color: 'var(--red)' }}>Contact Us</span>
            <div className="h-[2px] w-8" style={{ backgroundColor: 'var(--red)' }} />
          </div>
          <h2 className="text-3xl md:text-[2.1rem] font-black mb-2 text-[#111]">Request a Quote</h2>
          <p className="text-[#666]">Get competitive pricing, bulk offers, and expert guidance from our industrial team.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Info column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {CONTACTS.map(({ Icon, title, lines }) => (
              <div key={title} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#E8E8E8]">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--red-tint)' }}>
                  <Icon size={18} style={{ color: 'var(--red)' }} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold mb-1 text-[#111]">{title}</h4>
                  {lines.map((l, i) => <p key={i} className="text-sm text-[#666]">{l}</p>)}
                </div>
              </div>
            ))}

            {/* WhatsApp — on-brand: white bg + dark text + green icon accent */}
            <a
              href="https://wa.me/919876543210"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-3.5 rounded-xl font-bold text-sm border border-[#E8E8E8] bg-white transition-all"
              style={{ color: '#111' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.backgroundColor = 'var(--red-tint)'; e.currentTarget.style.color = 'var(--red)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8E8E8'; e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#111'; }}
            >
              <MessageCircle size={18} style={{ color: '#1A7A40' }} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3 bg-white p-8 md:p-10 rounded-2xl border border-[#E8E8E8]"
            style={{ boxShadow: '0 4px 28px rgba(0,0,0,0.05)' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-14">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--red-tint)' }}>
                  <Send size={26} style={{ color: 'var(--red)' }} />
                </div>
                <h3 className="text-xl font-bold mb-1 text-[#111]">Inquiry Sent!</h3>
                <p className="text-[#666]">Our team will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold mb-1.5 text-[#333]">Name / Company</label>
                    <input name="name" value={form.name} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required style={inputStyle} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold mb-1.5 text-[#333]">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required style={inputStyle} placeholder="you@company.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5 text-[#333]">Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required style={inputStyle} placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5 text-[#333]">Requirement Details</label>
                  <textarea name="message" value={form.message} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required rows="4" style={{ ...inputStyle, resize: 'none' }} placeholder="List the tools, brands, or quantity you require..." />
                </div>
                <button
                  type="submit" disabled={sending}
                  className="btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2"
                  style={{ opacity: sending ? 0.7 : 1, cursor: sending ? 'not-allowed' : 'pointer' }}
                >
                  {sending ? 'Sending…' : <><Send size={15} /> Send Inquiry</>}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
