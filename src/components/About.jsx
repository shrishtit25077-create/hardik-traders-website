import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

const About = () => {
  const features = [
    { icon: <Award size={20} style={{ color: '#C1121F' }} />, title: "Premium Quality", desc: "Only stocking top-tier industrial brands and certified equipment" },
    { icon: <ShieldCheck size={20} style={{ color: '#C1121F' }} />, title: "Authorized Dealer", desc: "Official partners for all major manufacturers" },
    { icon: <Clock size={20} style={{ color: '#C1121F' }} />, title: "Reliable Service", desc: "Timely delivery and dedicated expert support" },
  ];

  return (
    <section id="about" className="py-24" style={{ backgroundColor: '#F5F5F5', scrollMarginTop: '80px' }}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1565439390234-fcac351a02d4?auto=format&fit=crop&q=80&w=1200"
                alt="Industrial Facility and Equipment"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div
              className="absolute -bottom-6 -right-6 text-white p-6 rounded-2xl shadow-xl hidden md:block"
              style={{ backgroundColor: '#C1121F' }}
            >
              <div className="text-4xl font-bold mb-1">10+</div>
              <div className="text-xs font-semibold uppercase tracking-wider opacity-90">Years of<br />Excellence</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-8" style={{ backgroundColor: '#C1121F' }} />
              <span className="font-semibold tracking-wider uppercase text-sm" style={{ color: '#C1121F' }}>About Hardik Traders</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: '#111111' }}>
              Your Reliable Partner in Industrial Development
            </h2>

            <p className="mb-5 leading-relaxed text-lg" style={{ color: '#4B5563' }}>
              Hardik Traders is a trusted engineering and industrial tools trading company dedicated to providing high-quality industrial products and reliable engineering solutions. We bridge the gap between world-class manufacturers and industrial sectors.
            </p>

            <p className="mb-10 leading-relaxed" style={{ color: '#4B5563' }}>
              With our extensive inventory and strong partnerships with global brands, we ensure our clients receive the best tools for their specific requirements, enhancing productivity and maintaining high safety standards.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 p-4 rounded-xl"
                  style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(193,18,31,0.08)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1" style={{ color: '#111111' }}>{item.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded text-white transition-all group"
              style={{ backgroundColor: '#C1121F' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#A30F1A'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C1121F'}
            >
              Get In Touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
