import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Package, ShieldCheck, Users, Clock } from 'lucide-react';

const Counter = ({ end, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTime;
      let animationFrame;
      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        if (progress < duration) {
          const easeOut = 1 - Math.pow(2, -10 * (progress / duration));
          setCount(Math.floor(end * easeOut));
          animationFrame = requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };
      animationFrame = requestAnimationFrame(updateCount);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const Stats = () => {
  const stats = [
    { name: 'Products Supplied', value: 50000, suffix: '+', icon: <Package size={28} /> },
    { name: 'Trusted Brands', value: 25, suffix: '+', icon: <ShieldCheck size={28} /> },
    { name: 'Industrial Clients', value: 1500, suffix: '+', icon: <Users size={28} /> },
    { name: 'Years of Service', value: 10, suffix: '+', icon: <Clock size={28} /> },
  ];

  return (
    <section className="py-20 relative" style={{ backgroundColor: '#C1121F' }}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div
                className="p-4 rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFFFFF' }}
              >
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white tracking-tight">
                <Counter end={stat.value} duration={2000} suffix={stat.suffix} />
              </div>
              <div className="font-medium tracking-wide uppercase text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {stat.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
