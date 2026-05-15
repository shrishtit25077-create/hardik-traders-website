import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageCircle, CheckCircle } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const scrollTo = (href, e) => {
  if (e) e.preventDefault();
  const el = document.getElementById(href.replace('#', ''));
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 78, behavior: 'smooth' });
};

const CONTACTS = [
  { Icon: MapPin, title: 'Office Address', lines: ['Industrial Area, Sector 12', 'Ahmedabad, Gujarat – 382 425'] },
  { Icon: Phone,  title: 'Phone Numbers',  lines: ['+91 98765 43210', '+91 79 2345 6789'] },
  { Icon: Mail,   title: 'Email',          lines: ['sales@hardiktraders.com', 'info@hardiktraders.com'] },
];

const inputStyle = {
  width: '100%', padding: '11px 15px', borderRadius: '8px', fontSize: '14px',
  border: '1px solid var(--border)', backgroundColor: 'var(--bg)', color: 'var(--text)',
  outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', fontFamily: 'Inter, sans-serif',
};
const onFocus = e => { e.target.style.borderColor = 'var(--red)'; e.target.style.boxShadow = '0 0 0 3px var(--red-tint)'; e.target.style.backgroundColor = '#fff'; };
const onBlur  = e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; e.target.style.backgroundColor = 'var(--bg)'; };

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [state, setState] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState('loading');
    setErrorMsg('');
    try {
      const res = await fetch(`${API_URL}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setState('success');
        setForm({ name: '', email: '', phone: '', company: '', message: '' });
        setTimeout(() => setState('idle'), 6000);
      } else {
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
        setState('error');
      }
    } catch {
      setErrorMsg('Unable to connect. Please try WhatsApp or call us directly.');
      setState('error');
    }
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container mx-auto px-6 lg:px-12">

        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1.5px] w-8" style={{ backgroundColor: 'var(--red)' }} />
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase" style={{ color: 'var(--red)' }}>Contact Us</span>
            <div className="h-[1.5px] w-8" style={{ backgroundColor: 'var(--red)' }} />
          </div>
          <h2 className="text-3xl md:text-[2rem] font-black mb-2" style={{ color: 'var(--text)' }}>Request a Quote</h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px' }}>Our team responds within 24 hours on business days.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {CONTACTS.map(({ Icon, title, lines }) => (
              <div key={title} className="flex items-start gap-4 p-5 rounded-xl" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--red-tint)' }}>
                  <Icon size={17} style={{ color: 'var(--red)' }} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold mb-1" style={{ color: 'var(--text)' }}>{title}</h4>
                  {lines.map((l, i) => <p key={i} className="text-[13px]" style={{ color: 'var(--sub)' }}>{l}</p>)}
                </div>
              </div>
            ))}

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-sm transition-all border"
              style={{ backgroundColor: '#EAF7EF', borderColor: '#CFE9D8', color: '#2E8B57' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.backgroundColor = 'var(--red-tint)'; e.currentTarget.style.color = 'var(--red)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#CFE9D8'; e.currentTarget.style.backgroundColor = '#EAF7EF'; e.currentTarget.style.color = '#2E8B57'; }}
            >
              <MessageCircle size={17} style={{ color: '#2E8B57' }} />
              Chat on WhatsApp
            </a>

            {/* Business hours */}
            <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              <h4 className="text-[12px] font-black uppercase tracking-widest mb-3" style={{ color: 'var(--text)' }}>Business Hours</h4>
              <div className="space-y-2 text-[13px]">
                <div className="flex justify-between"><span style={{ color: 'var(--sub)' }}>Monday – Saturday</span><span className="font-semibold" style={{ color: 'var(--text)' }}>9:00 AM – 7:00 PM</span></div>
                <div className="flex justify-between"><span style={{ color: 'var(--sub)' }}>Sunday</span><span style={{ color: 'var(--red)' }} className="font-semibold">Closed</span></div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3 rounded-2xl p-8 md:p-10"
            style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            {state === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-14 gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--red-tint)' }}>
                  <CheckCircle size={32} style={{ color: 'var(--red)' }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>Enquiry Received!</h3>
                <p style={{ color: 'var(--sub)' }}>Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold mb-1.5" style={{ color: 'var(--sub)' }}>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required style={inputStyle} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold mb-1.5" style={{ color: 'var(--sub)' }}>Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required style={inputStyle} placeholder="you@company.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold mb-1.5" style={{ color: 'var(--sub)' }}>Phone Number *</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required style={inputStyle} placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold mb-1.5" style={{ color: 'var(--sub)' }}>Company Name</label>
                    <input name="company" value={form.company} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} style={inputStyle} placeholder="Your company" />
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5" style={{ color: 'var(--sub)' }}>Product Requirement *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required rows="4" style={{ ...inputStyle, resize: 'none' }} placeholder="List the tools, brands, or quantity you need..." />
                </div>

                {state === 'error' && (
                  <p className="text-[13px] font-medium" style={{ color: 'var(--red)' }}>⚠ {errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="btn-primary w-full py-3.5 text-[0.9rem] flex items-center justify-center gap-2"
                  style={{ opacity: state === 'loading' ? 0.75 : 1, cursor: state === 'loading' ? 'not-allowed' : 'pointer' }}
                >
                  {state === 'loading' ? (
                    <><span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" /> Sending…</>
                  ) : (
                    <><Send size={15} /> Send Enquiry</>
                  )}
                </button>

                <p className="text-center text-[12px]" style={{ color: 'var(--muted)' }}>
                  By submitting, you agree to be contacted regarding your enquiry.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
