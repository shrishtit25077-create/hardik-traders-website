import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageCircle, CheckCircle, Clock } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const CONTACTS = [
  {
    Icon: MapPin,
    title: 'Office Address',
    lines: ['SH.NO.1740/4, Near SBI Bank', 'Circular Road, Rewari, Haryana – 123401'],
  },
  {
    Icon: Phone,
    title: 'Phone Numbers',
    lines: ['+91 94162 15742', '+91 89506 46800'],
  },
  {
    Icon: Mail,
    title: 'Email',
    lines: ['sales@hardiktraders.com', 'info@hardiktraders.com'],
  },
];

const field = {
  width: '100%',
  padding: '10px 13px',
  borderRadius: '7px',
  fontSize: '13.5px',
  border: '1px solid var(--border)',
  backgroundColor: '#fff',
  color: 'var(--text)',
  outline: 'none',
  transition: 'border-color 0.18s, box-shadow 0.18s',
  fontFamily: 'Inter, sans-serif',
  lineHeight: '1.5',
};
const onFocus = e => {
  e.target.style.borderColor = 'var(--red)';
  e.target.style.boxShadow = '0 0 0 3px var(--red-tint)';
};
const onBlur = e => {
  e.target.style.borderColor = 'var(--border)';
  e.target.style.boxShadow = 'none';
};

const Label = ({ children, required }) => (
  <label
    className="block text-[12px] font-semibold mb-1"
    style={{ color: 'var(--sub)', letterSpacing: '0.01em' }}
  >
    {children}{required && <span style={{ color: 'var(--red)' }}> *</span>}
  </label>
);

export default function Contact() {
  const [form, setForm]   = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [state, setState] = useState('idle');
  const [errMsg, setErr]  = useState('');

  const change  = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async e => {
    e.preventDefault();
    setState('loading'); setErr('');
    try {
      const res  = await fetch(`${API_URL}/api/enquiries`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setState('success');
        setForm({ name: '', email: '', phone: '', company: '', message: '' });
        setTimeout(() => setState('idle'), 6000);
      } else {
        setErr(data.message || 'Something went wrong. Please try again.');
        setState('error');
      }
    } catch {
      setErr('Unable to connect. Please try WhatsApp or call us directly.');
      setState('error');
    }
  };

  return (
    <section id="contact" className="py-14" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">

        {/* Section Header */}
        <div className="text-center max-w-md mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-6" style={{ backgroundColor: 'var(--red)' }} />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--red)' }}>
              Get In Touch
            </span>
            <div className="h-px w-6" style={{ backgroundColor: 'var(--red)' }} />
          </div>
          <h2 className="text-[1.75rem] font-black mb-1.5" style={{ color: 'var(--text)' }}>
            Request a Quote
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '13.5px' }}>
            Our team responds within 24 hours on business days.
          </p>
        </div>

        {/* Main grid: 2 + 3 */}
        <div className="grid lg:grid-cols-5 gap-6">

          {/* ── Left: contact info ── */}
          <div className="lg:col-span-2 flex flex-col gap-3">

            {CONTACTS.map(({ Icon, title, lines }) => (
              <div
                key={title}
                className="flex items-start gap-3.5 p-4 rounded-xl"
                style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: 'var(--red-tint)' }}
                >
                  <Icon size={16} style={{ color: 'var(--red)' }} />
                </div>
                <div>
                  <p className="text-[11.5px] font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--muted)' }}>{title}</p>
                  {lines.map((l, i) => (
                    <p key={i} className="text-[13px] font-medium" style={{ color: 'var(--sub)' }}>{l}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Business hours */}
            <div
              className="p-4 rounded-xl"
              style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--red-tint)' }}>
                  <Clock size={16} style={{ color: 'var(--red)' }} />
                </div>
                <p className="text-[11.5px] font-bold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Business Hours</p>
              </div>
              <div className="space-y-1.5 text-[13px]">
                <div className="flex justify-between">
                  <span style={{ color: 'var(--sub)' }}>Monday – Saturday</span>
                  <span className="font-semibold" style={{ color: 'var(--text)' }}>9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--sub)' }}>Sunday</span>
                  <span className="font-semibold" style={{ color: 'var(--red)' }}>Closed</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919416215742"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl font-semibold text-[13px] transition-all"
              style={{ backgroundColor: '#EAF7EF', border: '1px solid #b7dfca', color: '#1f6b40' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#d4f0e2'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#EAF7EF'; }}
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>

          {/* ── Right: enquiry form ── */}
          <motion.div
            className="lg:col-span-3 rounded-xl p-6 md:p-8"
            style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', boxShadow: '0 2px 20px rgba(0,0,0,0.04)' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {state === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--red-tint)' }}>
                  <CheckCircle size={28} style={{ color: 'var(--red)' }} />
                </div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>Enquiry Received!</h3>
                <p style={{ color: 'var(--sub)', fontSize: '14px' }}>Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label required>Full Name</Label>
                    <input name="name" value={form.name} onChange={change} onFocus={onFocus} onBlur={onBlur} required style={field} placeholder="Your name" />
                  </div>
                  <div>
                    <Label required>Email Address</Label>
                    <input type="email" name="email" value={form.email} onChange={change} onFocus={onFocus} onBlur={onBlur} required style={field} placeholder="you@company.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label required>Phone Number</Label>
                    <input type="tel" name="phone" value={form.phone} onChange={change} onFocus={onFocus} onBlur={onBlur} required style={field} placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <Label>Company Name</Label>
                    <input name="company" value={form.company} onChange={change} onFocus={onFocus} onBlur={onBlur} style={field} placeholder="Your company" />
                  </div>
                </div>
                <div>
                  <Label required>Product Requirement</Label>
                  <textarea
                    name="message" value={form.message} onChange={change}
                    onFocus={onFocus} onBlur={onBlur}
                    required rows="4"
                    style={{ ...field, resize: 'vertical', minHeight: '100px' }}
                    placeholder="List the tools, brands, or quantity you need…"
                  />
                </div>

                {state === 'error' && (
                  <p className="text-[12.5px] font-medium" style={{ color: 'var(--red)' }}>⚠ {errMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="btn-primary w-full py-3 text-[13.5px] flex items-center justify-center gap-2"
                  style={{ opacity: state === 'loading' ? 0.75 : 1, cursor: state === 'loading' ? 'not-allowed' : 'pointer' }}
                >
                  {state === 'loading'
                    ? <><span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" /> Sending…</>
                    : <><Send size={14} /> Send Enquiry</>
                  }
                </button>

                <p className="text-center text-[11.5px]" style={{ color: 'var(--muted)' }}>
                  By submitting, you agree to be contacted regarding your enquiry.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* ── Map ── */}
        <div
          className="mt-6 rounded-xl overflow-hidden"
          style={{ border: '1px solid var(--border)', boxShadow: '0 1px 12px rgba(0,0,0,0.05)' }}
        >
          {/* Map header */}
          <div
            className="flex items-center gap-3 px-4 py-2.5"
            style={{ backgroundColor: 'var(--card)', borderBottom: '1px solid var(--border)' }}
          >
            <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--red-tint)' }}>
              <MapPin size={13} style={{ color: 'var(--red)' }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12.5px] font-bold truncate" style={{ color: 'var(--text)' }}>Hardik Traders — Rewari, Haryana</p>
              <p className="text-[11px] truncate" style={{ color: 'var(--muted)' }}>SH.NO.1740/4, Near SBI Bank, Circular Road, Rewari – 123401</p>
            </div>
            <a
              href="https://www.google.com/maps/search/Hardik+Traders+SBI+Bank+Circular+Road+Rewari+Haryana+123401"
              target="_blank" rel="noopener noreferrer"
              className="shrink-0 text-[11px] font-bold px-3 py-1.5 rounded-lg text-white transition-all"
              style={{ backgroundColor: 'var(--red)' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--red-hover)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--red)'}
            >
              Open Maps ↗
            </a>
          </div>
          <iframe
            title="Hardik Traders Location"
            src="https://www.google.com/maps?q=Circular+Road+Near+SBI+Bank+Rewari+Haryana+123401&output=embed"
            width="100%" height="300"
            style={{ border: 'none', display: 'block' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
}
