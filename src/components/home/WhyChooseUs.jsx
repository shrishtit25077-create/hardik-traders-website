import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shuffle, Settings, Wrench, Layers, Zap, Compass, CheckCircle } from 'lucide-react';

const bigNumbers = [
  { num: '25+', label: 'Years', sub: 'of Industry Experience' },
  { num: '1000+', label: 'Customers', sub: 'Served Across India' },
  { num: '35+', label: 'Global Brands', sub: 'Authorized Partner' },
];

const features = [
  {
    icon: Shuffle,
    title: 'Cross Reference Support',
    desc: 'Equivalent part number identification and cross-brand verification for seamless replacement.'
  },
  {
    icon: Settings,
    title: 'Technical Selection',
    desc: 'Professional engineering selection assistance based on load, speed, tolerance, and environment checks.'
  },
  {
    icon: Wrench,
    title: 'Installation Guidance',
    desc: 'Expert fit instructions, tolerances, and mounting guidelines to maximize component service life.'
  },
  {
    icon: Layers,
    title: 'Bulk Supply',
    desc: 'Large-volume procurement logistics with customized B2B price schedules for annual supply contracts.'
  },
  {
    icon: Zap,
    title: 'Same Day Dispatch',
    desc: 'Rapid order processing and dispatch of in-stock items to reduce emergency facility down-time.'
  },
  {
    icon: Compass,
    title: 'Engineering Consultation',
    desc: 'Specialized consultation covering system layouts, automation architecture, and component selection.'
  },
];

const ABOUT_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRrilMhqGxBtEtcLj-ZWZoAnBHwrf1_-9d-qX04_qlunVOQALOQRX2eU_aRjRdr52gZOkrrhgVIXQikQj49bI5qw4EUHtnBGR7zN7E9UNeppsCG1pktAry91D3U2Q8mCkvET-ATytXWodU7uMHB70ml2u0U3q4OXZog7NJcyJDxyIhFFbfX5jY9WUc8GCG19tUCQgGkCbX3oucZeNoJNkYP4x4-gvlKIop4ZU-n5x5w_vKtLkN4hlyYSejLjfbMi61jAxxJ11yZCw5';

export default function WhyChooseUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="why-choose-us" className="bg-gradient-to-b from-[#f5f7fb] to-[#f7f8fb] pt-[40px] md:pt-[40px] lg:pt-[40px] pb-[40px] md:pb-[40px] lg:pb-[40px] relative z-20 border-t border-black/[0.04]">
      {/* Background subtle radial texture */}
      <div className="absolute bottom-0 left-[5%] w-[450px] h-[450px] rounded-full bg-blue-500/[0.005] blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="max-w-[1320px] mx-auto w-full">

          {/* Top Segment: Headline, Stats and Factory Image */}
          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-8">

            {/* LEFT Column: WHY HARDIK TRADERS & Big Numbers */}
            <div className="lg:col-span-5 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-blue-600 text-[11px] font-black uppercase tracking-[0.25em] mb-4">
                  Why Hardik Traders
                </p>
                <h2 className="text-[40px] sm:text-[52px] font-black tracking-tight leading-none text-[#081120] uppercase">
                  WHY HARDIK<br />TRADERS
                </h2>
              </motion.div>

              {/* Vertically stacked stats */}
              <div className="space-y-8">
                {[
                  { num: '25+', label: 'Years Experience' },
                  { num: '1000+', label: 'Customers Served' },
                  { num: '35+', label: 'Global Brands' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col group cursor-default"
                  >
                    <span className="text-[52px] sm:text-[64px] font-black text-blue-600 leading-none tracking-tight group-hover:text-blue-700 transition-colors duration-350">
                      {item.num}
                    </span>
                    <span className="text-[12px] font-extrabold text-slate-500 uppercase tracking-widest mt-1">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT Column: Rounded Engineering Image */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="relative h-[360px] md:h-[440px] overflow-hidden rounded-[32px] border border-slate-200/30 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.02)]"
              >
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                  alt="B2B industrial catalog engineering"
                  className="w-full h-full object-cover brightness-[0.85] contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
                {/* Quality certification badge */}
                <div className="absolute bottom-8 left-8 border border-slate-200 bg-white px-6 py-4 rounded-[16px] shadow-md">
                  <p className="text-[#081120] font-black text-[13px] uppercase tracking-wider">ISO 9001:2015</p>
                  <p className="text-slate-500 text-[11px] mt-0.5 font-bold uppercase tracking-wider">Certified Quality Systems</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Segment: 6 Technical Capabilities Cards (3 columns) with tighter 24px gap */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="
                    p-10 rounded-[28px] bg-white border border-slate-100/80
                    transition-all duration-300 flex flex-col justify-between group shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)] min-h-[220px] relative overflow-hidden
                  "
                >
                  {/* Accent blue bottom highlight line */}
                  <div className="absolute bottom-0 inset-x-0 h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white shadow-md shadow-blue-600/10 group-hover:bg-blue-700 transition-colors">
                      <Icon size={20} strokeWidth={2.2} />
                    </div>
                    <CheckCircle size={16} className="text-blue-600/30 group-hover:text-blue-600 transition-colors" />
                  </div>

                  <div className="flex-grow flex flex-col justify-end">
                    <h4 className="text-[#081120] font-black text-[15px] uppercase tracking-wider group-hover:text-blue-600 transition-colors">
                      {feat.title}
                    </h4>
                    <p className="text-slate-500 text-[13px] leading-relaxed mt-2.5 font-semibold">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
