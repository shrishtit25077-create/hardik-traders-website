import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { GitMerge, Zap, Package2, Receipt, Clock, ArrowRight } from 'lucide-react';

const features = [
  { icon: GitMerge, label: 'Cross Reference Support', desc: 'Find exact equivalents for any brand or part number' },
  { icon: Zap, label: 'Same Day Dispatch', desc: 'Orders placed before 3 PM shipped the same day' },
  { icon: Package2, label: 'Bulk Orders Welcome', desc: 'Special pricing and priority handling for volume orders' },
  { icon: Receipt, label: 'GST Invoice', desc: 'Proper GST billing for seamless B2B accounting' },
  { icon: Clock, label: 'Fast RFQ Response', desc: '< 2 hour response guarantee on all quotation requests' },
];

export default function TechSupport() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="tech-support" className="bg-gradient-to-b from-[#f7f8fb] to-[#f6f8fb] pt-[40px] md:pt-[40px] lg:pt-[40px] pb-[40px] md:pb-[40px] lg:pb-[40px] border-t border-black/[0.04]">
      <div className="max-w-[1440px] mx-auto px-8 w-full">
        <div className="max-w-[1320px] mx-auto w-full">
          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[rgba(20,50,100,0.06)] rounded-[28px] overflow-hidden bg-[#F4F8FD] shadow-[0_12px_40px_rgba(0,0,0,0.02)]">

            {/* LEFT: Features - Span 6 */}
            <div className="lg:col-span-6 py-8 px-5 md:py-10 md:px-8 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.25em] mb-4">
                  Expert Assistance
                </p>
                <h2 className="text-[32px] sm:text-[42px] font-black tracking-tight leading-[1.1] text-[#081120] mb-5 uppercase">
                  Need Technical<br />
                  <span className="text-slate-500 font-light lowercase">Assistance?</span>
                </h2>
              </motion.div>

              <div className="space-y-3">
                {features.map((feat, i) => {
                  const Icon = feat.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-4 p-2.5 rounded-[24px] hover:bg-white border border-transparent hover:border-[rgba(20,50,100,0.06)] shadow-none hover:shadow-sm transition-all duration-300 group"
                    >
                      <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-all duration-300">
                        <Icon size={16} className="text-blue-600" strokeWidth={1.8} />
                      </div>
                      <div>
                        <p className="text-[#081120] font-bold text-sm uppercase tracking-wider">{feat.label}</p>
                        <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">{feat.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4 mt-5"
              >
                <Link to="/get-quote" className="btn-primary group">
                  Request Quote
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/919416215742"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center gap-2 group border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-50 py-3.5 px-6"
                >
                  <svg className="w-4 h-4 text-emerald-600 fill-emerald-600/10 group-hover:scale-110 transition-all duration-300" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.436 0 9.86-4.426 9.864-9.864.002-2.634-1.02-5.11-2.88-6.973C16.377 1.905 13.9 .882 11.267.882c-5.442 0-9.87 4.43-9.874 9.865-.002 1.83.486 3.618 1.417 5.176l-.995 3.637 3.732-.977zm11.367-7.76c-.307-.154-1.82-.9-2.1-.1-2.8-.28-.21-.4-.6-.28-.154-.15-.307-.225-.46-.385-.256-.25-.964-1.606-1.32-2.484-.115-.282-.256-.423-.385-.423-.128-.013-.256-.013-.385-.013-.256 0-.64.096-.975.46-.335.365-1.28 1.252-1.28 3.053 0 1.801 1.31 3.545 1.49 3.787.18.243 2.58 3.935 6.248 5.514.872.376 1.553.6 2.083.77.876.278 1.674.238 2.302.145.7-.104 1.82-.746 2.078-1.47.256-.725.256-1.345.18-1.47-.076-.127-.282-.204-.59-.358z" />
                  </svg>
                  <span className="text-emerald-600">WhatsApp Chat</span>
                </a>
              </motion.div>
            </div>

            {/* RIGHT: Visual Image & Floating Card - Span 6 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-6 relative min-h-[360px] lg:min-h-full overflow-hidden flex items-center justify-center border-t lg:border-t-0 lg:border-l border-[rgba(20,50,100,0.06)]"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlx5sI-EUyBke64tMuHAH3pNJhzd5-WCetRWIMiWbGRdpOrXnjpGlJvJbfY4jFZhLE0dUK1MmEM3eZxNCs0p12meB6hBgXKRRTrgh4RlX4PBROCUCyRFET28kGkYD2NdXAo51cNPA29WnVzt8FNcu6gWXAsTq16NQKAc8p42pzU1xsn9oB1geu7BUlLuUHK-MnGcGuEB3nQYDHt8XHaspvWXUaocacfh1sdpzcsM3oEmZje2hf62xPbGAqL381ntJhL_z7kBy4Ac5l"
                alt="Industrial bearing alignment"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.7] contrast-[1.05] scale-105 hover:scale-110 transition-transform duration-[4s]"
              />

              {/* Vignette Overlay for Dramatic Lighting */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#F4F8FD_90%)] opacity-20 pointer-events-none" />

              {/* Floating Response Card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
                className="relative z-10 w-full max-w-[280px] p-5 rounded-[28px] bg-white/95 backdrop-blur-[15px] border border-[rgba(20,50,100,0.08)] shadow-[0_20px_50px_rgba(59,130,246,0.08)] overflow-hidden group/card"
              >
                {/* Gloss reflection sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />

                <p className="text-blue-600 text-[9px] font-bold uppercase tracking-[0.25em] mb-1.5 text-center">Response SLA</p>
                <p className="text-[#081120] font-black text-5xl leading-none mb-3 text-center tracking-tight">{'<'} 2h</p>
                <div className="w-10 h-[1px] bg-blue-500/20 mx-auto mb-3" />
                <p className="text-slate-600 text-xs leading-relaxed text-center font-medium">Guaranteed quotation speed and engineering compatibility check.</p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
