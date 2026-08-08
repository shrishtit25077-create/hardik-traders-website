import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Shop No. 1740/4, Near SBI Bank,\nCircular Road, Rewari,\nHaryana - 123401',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 94162 15742\n+91 89506 46800',
    href: 'tel:+919416215742',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hardiktraders123@gmail.com',
    href: 'mailto:hardiktraders123@gmail.com',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Sat: 9:00 AM – 6:30 PM',
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', requirement: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1200));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-[#f6f8fb] to-[#f8fafc] pt-[40px] md:pt-[40px] lg:pt-[40px] pb-[40px] md:pb-[40px] lg:pb-[40px] border-t border-black/[0.04] relative">
      {/* Subtle radial glow background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full">
        <div className="max-w-[1320px] mx-auto w-full">

          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Get In Touch
            </p>
            <h2 className="text-[36px] sm:text-[46px] font-black tracking-tight leading-none text-[#081120] uppercase">
              Start Your
              <span className="text-slate-500 font-light lowercase"> Inquiry</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT: Contact Info (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                Reach out for product inquiries, bulk quotations, cross-reference support, or technical assistance. Our team responds within 2 business hours.
              </p>

              <div className="space-y-6 md:space-y-8">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <div key={i} className="flex items-start gap-5 group">
                      <div className="w-12 h-12 rounded-full bg-blue-500/8 border border-blue-500/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300">
                        <Icon size={18} className="text-blue-600 group-hover:text-white transition-colors" strokeWidth={1.8} />
                      </div>
                      <div>
                        <p className="text-[10px] text-blue-600 font-bold uppercase tracking-[0.18em] mb-1.5">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-[#081120] text-base hover:text-blue-600 transition-colors font-semibold leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed font-medium" style={{ whiteSpace: 'pre-line' }}>{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919416215742"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-slate-900 hover:shadow-[0_0_15px_rgba(30,41,59,0.2)] transition-all rounded-[24px]"
                >
                  <MessageSquare size={14} /> WhatsApp Support
                </a>
                <a
                  href="tel:+919416215742"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-slate-200 bg-white text-slate-800 text-[11px] font-bold uppercase tracking-widest hover:border-blue-500/30 hover:bg-slate-50 transition-all rounded-[24px]"
                >
                  Call: 94162 15742
                </a>
                <a
                  href="tel:+918950646800"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-slate-200 bg-white text-slate-800 text-[11px] font-bold uppercase tracking-widest hover:border-blue-500/30 hover:bg-slate-50 transition-all rounded-[24px]"
                >
                  Call: 89506 46800
                </a>
              </div>
            </motion.div>

            {/* RIGHT: Form (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 w-full"
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center py-16 px-8 text-center rounded-[28px] border border-slate-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                  <CheckCircle size={48} className="text-blue-600 mb-6" strokeWidth={1.5} />
                  <h3 className="text-[#081120] font-black text-2xl uppercase tracking-tight mb-3">Inquiry Received</h3>
                  <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
                    Thank you! Our B2B specialists will analyze your requirements and get back to you with pricing and availability within 2 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', company: '', phone: '', email: '', requirement: '' }); }}
                    className="mt-8 border border-blue-500/40 text-blue-600 px-8 py-3 rounded-[24px] text-xs font-bold uppercase tracking-widest hover:bg-blue-500/5 transition-all duration-300"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-6 sm:p-8 rounded-[28px] space-y-5"
                >
                  <div className="pb-4 border-b border-slate-100">
                    <p className="text-[10px] text-blue-600 uppercase tracking-widest font-black">Inquiry Form</p>
                    <h3 className="text-[#081120] font-black text-xl mt-1 uppercase">Send Us a Message</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                      { name: 'company', label: 'Company', type: 'text', placeholder: 'Company name' },
                      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 9XXXXXXXXX' },
                      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@company.com' },
                    ].map(field => (
                      <div key={field.name} className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                          {field.label} <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name]}
                          onChange={handleChange}
                          required
                          placeholder={field.placeholder}
                          className="h-11 bg-slate-50/50 border border-slate-200 text-slate-900 text-[14px] px-4 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all rounded-[12px] placeholder-slate-400"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                      Requirement <span className="text-blue-600">*</span>
                    </label>
                    <textarea
                      name="requirement"
                      value={form.requirement}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Describe your product requirements, requested part numbers, quantities, or specific engineering parameters..."
                      className="bg-slate-50/50 border border-slate-200 text-slate-900 text-[14px] px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all rounded-[12px] resize-none placeholder-slate-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-4 font-bold text-[13px] uppercase tracking-[0.15em] hover:bg-blue-700 shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition-all duration-300 disabled:opacity-60 rounded-[24px]"
                  >
                    {sending ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                    ) : (
                      <><Send size={15} />Submit B2B Inquiry</>
                    )}
                  </button>

                  <p className="text-slate-400 text-[10px] text-center font-semibold uppercase tracking-wider">
                    GSTIN: 06CYFPS9701M1ZU · GST Invoice Provided · 100% Genuine Products
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
