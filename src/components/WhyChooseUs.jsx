import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, HeadphonesIcon, BadgeCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    { icon: <BadgeCheck size={32} style={{ color: '#C1121F' }} />, title: "Authentic Products", desc: "100% genuine tools and equipment directly from authorized manufacturers." },
    { icon: <ShieldCheck size={32} style={{ color: '#C1121F' }} />, title: "Quality Assurance", desc: "Every product meets strict industrial standards for durability and performance." },
    { icon: <Truck size={32} style={{ color: '#C1121F' }} />, title: "Prompt Delivery", desc: "Robust supply chain ensuring your projects never face unnecessary delays." },
    { icon: <HeadphonesIcon size={32} style={{ color: '#C1121F' }} />, title: "Expert Support", desc: "Knowledgeable technical team to guide you to the right tools for your needs." }
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-8" style={{ backgroundColor: '#C1121F' }} />
            <span className="font-semibold tracking-wider uppercase text-sm" style={{ color: '#C1121F' }}>Our Advantage</span>
            <div className="h-[2px] w-8" style={{ backgroundColor: '#C1121F' }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#111111' }}>Why Partner With Us?</h2>
          <p className="text-lg" style={{ color: '#4B5563' }}>
            We don't just sell tools — we provide reliable engineering solutions tailored to your requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="p-8 rounded-2xl transition-all duration-300 group cursor-default"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = '#C1121F'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#E5E7EB'; }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(193,18,31,0.08)' }}
              >
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#111111' }}>{reason.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
