import React from 'react';
import { motion } from 'framer-motion';

const StatsBar = () => {
  return (
    <section className="bg-surface-container-highest py-16 border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <div className="text-[48px] font-black text-on-surface mb-2">25+</div>
          <div className="text-[12px] font-label-bold uppercase tracking-widest text-on-surface-variant">Years Experience</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center">
          <div className="text-[48px] font-black text-on-surface mb-2">1000+</div>
          <div className="text-[12px] font-label-bold uppercase tracking-widest text-on-surface-variant">Customers</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center">
          <div className="text-[48px] font-black text-on-surface mb-2">500+</div>
          <div className="text-[12px] font-label-bold uppercase tracking-widest text-on-surface-variant">Products</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center">
          <div className="text-[48px] font-black text-primary mb-2">Pan India</div>
          <div className="text-[12px] font-label-bold uppercase tracking-widest text-on-surface-variant">Supply Network</div>
        </motion.div>
      </div>
    </section>
  );
};
export default StatsBar;
