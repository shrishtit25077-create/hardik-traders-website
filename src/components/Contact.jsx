import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry. Our team will contact you shortly.");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: '#F9FAFB',
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    color: '#111111',
    outline: 'none',
    fontSize: '14px',
    transition: 'border-color 0.2s',
  };

  const handleFocus = (e) => { e.target.style.borderColor = '#C1121F'; e.target.style.boxShadow = '0 0 0 3px rgba(193,18,31,0.08)'; };
  const handleBlur = (e) => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none'; };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Info */}
          <div className="w-full lg:w-1/3">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-8" style={{ backgroundColor: '#C1121F' }} />
              <span className="font-semibold tracking-wider uppercase text-sm" style={{ color: '#C1121F' }}>Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: '#111111' }}>Request a Quote</h2>
            <p className="mb-10 leading-relaxed" style={{ color: '#4B5563' }}>
              Looking for specific industrial tools or bulk orders? Reach out to our team for competitive pricing and expert advice.
            </p>

            <div className="space-y-6">
              {[
                { Icon: MapPin, title: 'Corporate Office', text: 'Industrial Area, Engineering Zone\nCity, State, ZIP' },
                { Icon: Phone, title: 'Phone', text: '+91 98765 43210\n+91 12345 67890' },
                { Icon: Mail, title: 'Email', text: 'sales@hardiktraders.com\ninfo@hardiktraders.com' },
              ].map(({ Icon, title, text }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(193,18,31,0.1)' }}>
                    <Icon size={18} style={{ color: '#C1121F' }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1" style={{ color: '#111111' }}>{title}</h4>
                    <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#6B7280' }}>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-2xl"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#374151' }}>Company / Your Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required style={inputStyle} placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#374151' }}>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required style={inputStyle} placeholder="Enter your email" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#374151' }}>Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required style={inputStyle} placeholder="Enter phone number" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#374151' }}>Requirement Details</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required rows="4" style={{ ...inputStyle, resize: 'none' }} placeholder="List the tools, brands, or products you are inquiring about..." />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-colors"
                  style={{ backgroundColor: '#C1121F' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#A30F1A'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C1121F'}
                >
                  <Send size={16} /> Send Inquiry
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
