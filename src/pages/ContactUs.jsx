import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight, Send, CheckCircle } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    lines: ['SH.NO.1740/4, Near SBI Bank,', 'Circular Road, Rewari,', 'Haryana – 123401'],
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+91 94162 15742', '+91 89506 46800'],
    href: 'tel:+919416215742',
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['hardiktraders123@gmail.com'],
    href: 'mailto:hardiktraders123@gmail.com',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    lines: ['Mon – Sat: 9:00 AM – 6:30 PM', 'Sunday: Closed'],
  },
];

const subjectOptions = [
  { value: 'sales',     label: 'Product Quotation' },
  { value: 'technical', label: 'Technical Support' },
  { value: 'logistics', label: 'Shipping & Logistics' },
  { value: 'bulk',      label: 'Bulk / OEM Orders' },
  { value: 'other',     label: 'Other Inquiry' },
];

const ContactUs = () => {
  const location = useLocation();
  const [form, setForm] = useState({ name:'', company:'', phone:'', email:'', subject:'sales', message:'' });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (location.state) {
      const { productName, sku, category } = location.state;
      if (productName) {
        setForm(f => ({
          ...f,
          subject: 'sales',
          message: `I am interested in the following product:\n\nProduct Name: ${productName}\nSKU: ${sku}\nCategory: ${category}\n\nPlease provide pricing and availability.`,
        }));
      }
    }
  }, [location.state]);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1400));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-bg-900 min-h-screen text-text-primary">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-bg-800 to-bg-900 pt-28 pb-16 px-5 md:px-10 lg:px-20 border-b border-border-subtle">
        <div className="max-w-[1120px] mx-auto">
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}>
            <span className="inline-block text-[11px] font-bold text-ice-blue uppercase tracking-[0.2em] bg-ice-blue/10 border border-ice-blue/20 px-3 py-1 mb-5 rounded-full">
              Get In Touch
            </span>
            <h1 className="text-[44px] sm:text-[56px] font-black text-text-primary tracking-tight leading-tight mb-4 uppercase">
              Let's Build With<br />Precision.
            </h1>
            <p className="text-text-secondary text-[17px] max-w-xl leading-relaxed">
              Our engineering experts are ready to assist with your industrial procurement requirements.
              Reach out for product inquiries, bulk orders, or technical support.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="max-w-[1120px] mx-auto px-5 md:px-10 lg:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* LEFT: Contact Info */}
          <motion.div
            initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.7, delay:0.1 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-11 h-11 bg-ice-blue/10 border border-ice-blue/20 text-ice-blue flex items-center justify-center rounded-full flex-shrink-0 mt-0.5">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-ice-blue uppercase tracking-[0.15em] mb-1.5">{item.label}</p>
                    {item.href ? (
                      item.lines.map((line, li) => (
                        <a key={li} href={item.href}
                          className="block text-text-primary text-[15px] font-medium hover:text-ice-blue transition-colors">
                          {line}
                        </a>
                      ))
                    ) : (
                      item.lines.map((line, li) => (
                        <p key={li} className="text-text-secondary text-[15px]">{line}</p>
                      ))
                    )}
                  </div>
                </div>
              );
            })}

            {/* Map placeholder */}
            <div className="relative h-[260px] overflow-hidden border border-border-subtle rounded-[28px] mt-4 group shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBohnyVoLPW9NlnkeMcHatk1FiTio967So6wQhO52Xm1CPJKHttE9uhlGsXCesB-dBZ5szRpQK0NwHMbu4hng-x2cJMMlJrXaOzaus6_ewoIF_Ur36O6SA7J52kA07ETLM-HsiSeDO9T-lEypRLJ1AN0n6QsOuxJUBRiTjGv-Xa0u4RcPzXUkftf14CcG2Oi8y8Z75T8_PWJi8QVg5RP3288CGf2_4t88TUcq2Heu25hAWp3IJXU_SgBlzfN35ddfSb0omeF1d6mb8b"
                alt="GIDC Industrial Map"
                className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:opacity-90 transition-opacity duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-ice-blue text-white px-6 py-3 flex items-center gap-3 shadow-lg rounded-full">
                  <MapPin size={20} strokeWidth={2} />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">CIRCULAR ROAD, REWARI</p>
                    <p className="text-[15px] font-bold">Haryana – 123401</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://wa.me/919416215742" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 text-[13px] font-bold hover:bg-[#20bd5a] transition-all rounded-[24px] shadow-[0_4px_12px_rgba(37,211,102,0.15)]">
                WhatsApp Us
              </a>
              <a href="tel:+919416215742"
                className="flex items-center gap-2 border border-border-mid text-text-primary bg-white px-5 py-2.5 text-[13px] font-bold hover:bg-slate-50 hover:border-ice-blue/30 transition-all rounded-[24px]">
                <Phone size={14} /> 94162 15742
              </a>
              <a href="tel:+918950646800"
                className="flex items-center gap-2 border border-border-mid text-text-primary bg-white px-5 py-2.5 text-[13px] font-bold hover:bg-slate-50 hover:border-ice-blue/30 transition-all rounded-[24px]">
                <Phone size={14} /> 89506 46800
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.7, delay:0.2 }}
            className="lg:col-span-7"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-24 text-center border border-border-subtle bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                <CheckCircle size={52} className="text-ice-blue mb-6 animate-pulse" strokeWidth={1} />
                <h2 className="text-[28px] font-black text-text-primary mb-3">Inquiry Sent!</h2>
                <p className="text-text-secondary text-[15px] max-w-xs leading-relaxed font-medium">
                  Thank you! Our team will respond within 2 business hours with pricing and availability.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name:'', company:'', phone:'', email:'', subject:'sales', message:'' }); }}
                  className="mt-8 border border-border-mid text-text-primary px-8 py-3 text-[12px] font-bold uppercase tracking-wider hover:bg-slate-50 rounded-[24px] transition-all bg-white">
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-white border border-border-subtle p-8 sm:p-10 rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                <div className="pb-4 border-b border-border-subtle mb-2">
                  <p className="text-[11px] text-ice-blue font-bold uppercase tracking-[0.2em]">Contact Form</p>
                  <h2 className="text-[24px] font-black text-text-primary mt-1 uppercase">Send Us Your Inquiry</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name:'name',    label:'Full Name',       type:'text',  placeholder:'John Smith' },
                    { name:'company', label:'Company Name',    type:'text',  placeholder:'Your Company Ltd.' },
                    { name:'phone',   label:'Phone Number',    type:'tel',   placeholder:'+91 98765 43210' },
                    { name:'email',   label:'Email Address',   type:'email', placeholder:'john@company.com' },
                  ].map(field => (
                    <div key={field.name} className="flex flex-col gap-2">
                      <label className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">{field.label} *</label>
                      <input
                        type={field.type} name={field.name} value={form[field.name]}
                        onChange={handleChange} required placeholder={field.placeholder}
                        className="h-12 px-4 bg-slate-50/50 border border-border-mid text-text-primary text-[14px] outline-none focus:border-ice-blue focus:ring-1 focus:ring-ice-blue rounded-[12px] transition-colors placeholder-text-dim"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Inquiry Subject</label>
                  <select name="subject" value={form.subject} onChange={handleChange}
                    className="h-12 px-4 bg-slate-50/50 border border-border-mid text-text-primary text-[14px] outline-none focus:border-ice-blue rounded-[12px] transition-colors">
                    {subjectOptions.map(o => <option key={o.value} value={o.value} className="bg-bg-800">{o.label}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Your Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Describe your industrial requirements in detail..."
                    className="px-4 py-3 bg-slate-50/50 border border-border-mid text-text-primary text-[14px] outline-none focus:border-ice-blue rounded-[12px] transition-colors resize-none placeholder-text-dim"
                  />
                </div>

                <button type="submit" disabled={sending}
                  className="w-full btn-primary h-14 flex items-center justify-center gap-3 bg-ice-blue text-white font-bold text-[13px] uppercase tracking-wider hover:bg-ice-blue-dark transition-all rounded-[24px] shadow-[0_4px_12px_rgba(59,130,246,0.15)]">
                  {sending ? (
                    <><div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={16} /> Submit Inquiry <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>

                <p className="text-center text-[12px] text-text-muted font-medium">
                  GSTIN: 06CYFPS9701M1ZU · GST Invoice Provided · 100% Genuine Products
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
