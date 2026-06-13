import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Send, CheckCircle, Phone, Mail, Upload, X, Shield, Clock, Package } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const productCategories = [
  'Bearings (Ball, Roller, Linear)',
  'Pneumatic Systems',
  'Hydraulic Components',
  'Automation & PLCs',
  'Sensors & Proximity Switches',
  'Electrical Components',
  'Lubricants & Greases',
  'Industrial Tools',
  'Measuring Instruments',
  'Other / Custom',
];

const urgencyOptions = [
  { value: 'standard', label: 'Standard (5–7 business days)' },
  { value: 'urgent',   label: 'Urgent (2–3 business days)' },
  { value: 'express',  label: 'Express (Same / Next day)' },
];

const sidebarFeatures = [
  { icon: Shield,  title: 'Quality Assurance',   desc: 'ISO 9001:2015 certified. 100% genuine products with manufacturer warranty.' },
  { icon: Clock,   title: '< 2 Hour Response',    desc: 'Guaranteed quotation response for all industrial inquiries.' },
  { icon: Package, title: 'Bulk Orders Welcome',  desc: 'Special pricing and priority handling for volume and OEM orders.' },
];

const GetQuote = () => {
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '',
    category: '', partNumber: '', quantity: '', urgency: 'standard', notes: '',
  });
  const [fileName, setFileName] = useState('');
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef();

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleFile = e => {
    if (e.target.files.length) setFileName(e.target.files[0].name);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1400));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-bg-800 min-h-screen text-text-primary flex flex-col justify-between">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-32 pb-14 px-6 md:px-10 lg:px-20 border-b border-border-subtle bg-gradient-to-b from-bg-900 to-bg-800 overflow-hidden">
        {/* Subtle background ice-blue glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-ice-blue/5 blur-[80px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-ice-blue/10 text-ice-blue border border-ice-blue/20 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 rounded-[24px]">
              <span className="w-1.5 h-1.5 rounded-full bg-ice-blue" />
              Get a Quote
            </span>
            <h1 className="text-[40px] sm:text-[52px] font-black text-text-primary tracking-tight leading-none mb-4 uppercase">
              Request a<br />
              <span className="text-ice-blue">Quotation</span>
            </h1>
            <p className="text-text-secondary text-[16px] max-w-xl leading-relaxed font-medium">
              Fill in your requirement details and our sourcing team will respond with pricing,
              availability, and delivery timelines within 2 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-10 py-16 flex-grow">
        {submitted ? (
          <motion.div
            initial={{ opacity:0, scale:0.97 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.5 }}
            className="flex flex-col items-center justify-center py-20 text-center bg-white border border-border-subtle rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-8 max-w-2xl mx-auto">
            <CheckCircle size={64} className="text-ice-blue mb-6 animate-pulse" strokeWidth={1.5} />
            <h2 className="text-[32px] font-black text-text-primary uppercase tracking-tight mb-4">Quotation Request Received!</h2>
            <p className="text-text-secondary text-[16px] max-w-md leading-relaxed mb-8 font-medium">
              Our sourcing team will review your requirements and respond with detailed pricing within 2 business hours.
            </p>
            <div className="flex gap-4">
              <button onClick={() => { setSubmitted(false); setForm({ name:'', company:'', phone:'', email:'', category:'', partNumber:'', quantity:'', urgency:'standard', notes:'' }); setFileName(''); }}
                className="bg-ice-blue text-white px-8 py-3 text-[12px] font-bold uppercase tracking-wider hover:bg-ice-blue-dark rounded-[24px] transition-colors shadow-[0_4px_12px_rgba(59,130,246,0.15)]">
                Submit Another
              </button>
              <Link to="/" className="border border-border-mid text-text-primary bg-white px-8 py-3 text-[12px] font-bold uppercase tracking-wider hover:bg-slate-50 rounded-[24px] transition-all">
                Back to Home
              </Link>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* FORM (2 cols) */}
            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-6 bg-white border border-border-subtle p-8 sm:p-10 rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                <div className="pb-4 border-b border-border-subtle">
                  <p className="text-[10px] text-ice-blue font-bold uppercase tracking-[0.2em]">Quotation Request</p>
                  <h2 className="text-[20px] font-black text-text-primary uppercase tracking-tight mt-1">Your Details</h2>
                </div>

                {/* Contact info row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name:'name',    label:'Full Name',    type:'text',  placeholder:'Enter your name',       required:true },
                    { name:'company', label:'Company Name', type:'text',  placeholder:'Enter company name',    required:true },
                    { name:'phone',   label:'Phone Number', type:'tel',   placeholder:'e.g. +91 98765 43210',  required:true },
                    { name:'email',   label:'Email Address',type:'email', placeholder:'name@company.com',      required:true },
                  ].map(field => (
                    <div key={field.name} className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">{field.label}{field.required && ' *'}</label>
                      <input
                        type={field.type} name={field.name} value={form[field.name]}
                        onChange={handleChange} required={field.required} placeholder={field.placeholder}
                        className="h-12 px-4 bg-slate-50/50 border border-border-mid text-text-primary text-[14px] outline-none focus:border-ice-blue focus:ring-1 focus:ring-ice-blue rounded-[12px] transition-colors placeholder-text-dim"
                      />
                    </div>
                  ))}
                </div>

                <div className="border-t border-border-subtle pt-6">
                  <p className="text-[10px] text-ice-blue font-bold uppercase tracking-[0.2em] mb-4">Product Requirement</p>
                </div>

                {/* Product info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Product Category *</label>
                    <select name="category" value={form.category} onChange={handleChange} required
                      className="h-12 px-4 bg-slate-50/50 border border-border-mid text-text-primary text-[14px] outline-none focus:border-ice-blue rounded-[12px] transition-colors">
                      <option value="" className="bg-bg-800">Select a category...</option>
                      {productCategories.map(c => <option key={c} value={c} className="bg-bg-800">{c}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Part Number / SKU</label>
                    <input type="text" name="partNumber" value={form.partNumber} onChange={handleChange}
                      placeholder="e.g. SKF-6205-2RS"
                      className="h-12 px-4 bg-slate-50/50 border border-border-mid text-text-primary text-[14px] outline-none focus:border-ice-blue rounded-[12px] transition-colors placeholder-text-dim"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Quantity Required *</label>
                    <input type="text" name="quantity" value={form.quantity} onChange={handleChange} required
                      placeholder="e.g. 50 pcs / 10 sets"
                      className="h-12 px-4 bg-slate-50/50 border border-border-mid text-text-primary text-[14px] outline-none focus:border-ice-blue rounded-[12px] transition-colors placeholder-text-dim"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Delivery Urgency</label>
                    <select name="urgency" value={form.urgency} onChange={handleChange}
                      className="h-12 px-4 bg-slate-50/50 border border-border-mid text-text-primary text-[14px] outline-none focus:border-ice-blue rounded-[12px] transition-colors">
                      {urgencyOptions.map(o => <option key={o.value} value={o.value} className="bg-bg-800">{o.label}</option>)}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Additional Notes</label>
                  <textarea name="notes" value={form.notes} onChange={handleChange} rows={4}
                    placeholder="Any specific brand preference, technical specifications, or application details..."
                    className="px-4 py-3 bg-slate-50/50 border border-border-mid text-text-primary text-[14px] outline-none focus:border-ice-blue rounded-[12px] transition-colors resize-none placeholder-text-dim"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block mb-2">
                    Attach Drawing / BOM (Optional)
                  </label>
                  <div
                    onClick={() => fileRef.current.click()}
                    className="border-2 border-dashed border-border-mid hover:border-ice-blue transition-colors cursor-pointer p-8 flex flex-col items-center justify-center gap-3 bg-slate-50/30 rounded-[12px]"
                  >
                    {fileName ? (
                      <>
                        <CheckCircle size={28} className="text-ice-blue" />
                        <p className="text-text-primary font-semibold text-[14px]">{fileName}</p>
                        <button type="button" onClick={e => { e.stopPropagation(); setFileName(''); }}
                          className="text-text-muted text-[12px] flex items-center gap-1 hover:text-ice-blue">
                          <X size={12} /> Remove
                        </button>
                      </>
                    ) : (
                      <>
                        <Upload size={28} className="text-text-muted" strokeWidth={1.5} />
                        <p className="text-text-secondary text-[14px]">Click to upload or drag & drop</p>
                        <p className="text-text-dim text-[12px]">PDF, PNG, DXF up to 10MB</p>
                      </>
                    )}
                  </div>
                  <input ref={fileRef} type="file" accept=".pdf,.png,.jpg,.dxf" className="hidden" onChange={handleFile} />
                </div>

                <button type="submit" disabled={sending}
                  className="w-full flex items-center justify-center gap-3 bg-ice-blue text-white h-14 font-bold text-[13px] uppercase tracking-[0.15em] hover:bg-ice-blue-dark transition-all duration-200 disabled:opacity-60 rounded-[24px] shadow-[0_4px_12px_rgba(59,130,246,0.15)]">
                  {sending ? (
                    <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Processing...</>
                  ) : (
                    <><Send size={16} /> Submit Quotation Request</>
                  )}
                </button>
              </form>
            </motion.div>

            {/* SIDEBAR (1 col) */}
            <motion.aside
              initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.7, delay:0.15 }}
              className="flex flex-col gap-6"
            >
              {sidebarFeatures.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="bg-white border border-border-subtle p-6 rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-ice-blue/10 flex items-center justify-center flex-shrink-0 border border-ice-blue/20 rounded-[24px]">
                        <Icon size={18} className="text-ice-blue" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-text-primary font-bold text-[15px] mb-1">{feat.title}</h3>
                        <p className="text-text-secondary text-[13px] leading-relaxed font-medium">{feat.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Image */}
              <div className="relative h-[240px] overflow-hidden group border border-border-subtle rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlx5sI-EUyBke64tMuHAH3pNJhzd5-WCetRWIMiWbGRdpOrXnjpGlJvJbfY4jFZhLE0dUK1MmEM3eZxNCs0p12meB6hBgXKRRTrgh4RlX4PBROCUCyRFET28kGkYD2NdXAo51cNPA29WnVzt8FNcu6gWXAsTq16NQKAc8p42pzU1xsn9oB1geu7BUlLuUHK-MnGcGuEB3nQYDHt8XHaspvWXUaocacfh1sdpzcsM3oEmZje2hf62xPbGAqL381ntJhL_z7kBy4Ac5l"
                  alt="Industrial Bearing"
                  className="w-full h-full object-cover brightness-50 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-900 to-transparent flex flex-col justify-end p-5">
                  <p className="text-text-primary font-black text-[16px] leading-tight uppercase tracking-tight">Engineered for Reliability</p>
                  <p className="text-text-secondary text-[12px] mt-1 font-medium">25+ years of precision sourcing</p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white border border-border-subtle p-6 rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-4">Quick Support</p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-ice-blue/10 flex items-center justify-center flex-shrink-0 border border-ice-blue/20 rounded-[24px]">
                      <Mail size={17} className="text-ice-blue" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[9px] text-text-muted uppercase tracking-wider">Email</p>
                      <a href="mailto:hardiktraders123@gmail.com" className="text-text-primary font-bold text-[14px] hover:text-ice-blue transition-colors">hardiktraders123@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-ice-blue/10 flex items-center justify-center flex-shrink-0 border border-ice-blue/20 rounded-[24px]">
                      <Phone size={17} className="text-ice-blue" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[9px] text-text-muted uppercase tracking-wider">Direct Line 1</p>
                      <a href="tel:+919416215742" className="text-text-primary font-bold text-[14px] hover:text-ice-blue transition-colors">+91 94162 15742</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-ice-blue/10 flex items-center justify-center flex-shrink-0 border border-ice-blue/20 rounded-[24px]">
                      <Phone size={17} className="text-ice-blue" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[9px] text-text-muted uppercase tracking-wider">Direct Line 2</p>
                      <a href="tel:+918950646800" className="text-text-primary font-bold text-[14px] hover:text-ice-blue transition-colors">+91 89506 46800</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default GetQuote;
