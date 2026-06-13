import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shuffle, Cpu, Layers, Wrench, Zap, Compass, CheckCircle } from 'lucide-react';

const capabilities = [
  {
    icon: Shuffle,
    title: 'Cross Reference Support',
    desc: 'Instant equivalent part number identification across global manufacturer brands to simplify replacement logistics.',
  },
  {
    icon: Cpu,
    title: 'Technical Selection Support',
    desc: 'Engineering selection help including load calculations, tolerances, and operating environment checks.',
  },
  {
    icon: Layers,
    title: 'Bulk Industrial Supply',
    desc: 'High-volume contract procurement infrastructure with optimized corporate pricing plans for B2B procurement.',
  },
  {
    icon: Wrench,
    title: 'Installation Guidance',
    desc: 'Assistance regarding fit tolerances, thermal mounting, and precision alignment guidelines to extend component service life.',
  },
  {
    icon: Zap,
    title: 'Same Day Dispatch',
    desc: 'Fast order fulfillment on critical spares from local warehouse inventory to minimize facility downtime.',
  },
  {
    icon: Compass,
    title: 'Engineering Consultation',
    desc: 'Specialized consultation covering system layouts, automation architecture, and pneumatic/hydraulic integration.',
  },
];

export default function WowSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const canvasRef = useRef(null);

  // Particle Canvas for futuristic dashboard ambient effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const particles = [];
    const count = 30;

    class TechParticle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = Math.random() * 0.4 - 0.2;
        this.vy = Math.random() * 0.4 - 0.2;
        this.r = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.4 + 0.1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#60A5FA';
        ctx.shadowBlur = 4;
        ctx.shadowColor = '#60A5FA';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < count; i++) {
      particles.push(new TechParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw faint connections
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.04)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative bg-[#05070A] py-12 md:py-[90px] px-6 md:px-12 border-t border-white/[0.03] overflow-hidden">
      {/* Background CAD Technical Blueprint Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      
      {/* Ambient Radial Glowing Halos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Animated Light Streaks gliding horizontally/vertically */}
      <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-[pulse_3s_infinite] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/15 to-transparent animate-[pulse_4s_infinite] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] block mb-3">
            B2B Engineering Support
          </span>
          <h2 className="text-[36px] sm:text-[46px] font-black tracking-tight leading-none text-white uppercase mb-4">
            Technical Expertise
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed font-medium">
            Beyond product supply, Hardik Traders offers complete industrial integration services to ensure your production lines remain reliable, efficient, and downtime-free.
          </p>
        </div>

        {/* Capabilities 3x2 Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="
                  premium-glass-card p-6 border border-white/[0.04] hover:border-blue-400/20 hover:bg-[#0B1525]/50
                  transition-all duration-300 group relative overflow-hidden h-[180px] flex flex-col justify-between
                "
              >
                {/* Accent blue bottom highlight */}
                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />

                {/* Card Icon & Header */}
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Icon size={18} className="text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  {/* Subtle checklist badge indicator */}
                  <CheckCircle size={14} className="text-blue-500/30 group-hover:text-blue-400 transition-colors" />
                </div>

                {/* Card Info */}
                <div className="mt-4">
                  <h3 className="text-white font-bold text-sm tracking-tight uppercase group-hover:text-blue-400 transition-colors duration-300">
                    {cap.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mt-1.5 font-medium line-clamp-2">
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
