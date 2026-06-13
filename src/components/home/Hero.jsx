import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle Mouse Parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / 60;
      const y = (clientY - window.innerHeight / 2) / 60;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Twinkling Star Particles Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const count = 45;

    class TwinkleStar {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.2 + 0.3;
        this.vx = Math.random() * 0.08 - 0.04;
        this.vy = Math.random() * 0.08 - 0.04;
        this.alpha = Math.random() * 0.4 + 0.1;
        this.speed = Math.random() * 0.01 + 0.005;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha += this.speed;
        if (this.alpha > 0.6 || this.alpha < 0.1) {
          this.speed *= -1;
        }
        if (this.x < 0 || this.x > canvas.width) this.x = Math.random() * canvas.width;
        if (this.y < 0 || this.y > canvas.height) this.y = Math.random() * canvas.height;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = '#60A5FA';
        ctx.shadowBlur = 4;
        ctx.shadowColor = '#60A5FA';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < count; i++) {
      particles.push(new TwinkleStar());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen lg:h-screen flex flex-col justify-between overflow-hidden bg-[#03060B] pt-24 pb-8">
      {/* Inline styles for custom premium animations, blueprint grid, and volumetric light sweeps */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes sweep-ray-1 {
          0% { transform: rotate(-55deg) scaleY(0.95); opacity: 0.35; }
          50% { transform: rotate(-35deg) scaleY(1.05); opacity: 0.7; }
          100% { transform: rotate(-55deg) scaleY(0.95); opacity: 0.35; }
        }
        @keyframes sweep-ray-2 {
          0% { transform: rotate(-25deg) scaleX(0.9); opacity: 0.3; }
          50% { transform: rotate(-45deg) scaleX(1.15); opacity: 0.65; }
          100% { transform: rotate(-25deg) scaleX(0.9); opacity: 0.3; }
        }
        @keyframes float-energy {
          0% { transform: translate(0, 0) scale(1); opacity: 0.25; }
          50% { transform: translate(25px, -30px) scale(1.4); opacity: 0.6; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.25; }
        }
        .bg-blueprint-grid {
          background-image: 
            linear-gradient(rgba(95, 168, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(95, 168, 255, 0.015) 1px, transparent 1px);
          background-size: 60px 60px;
        }
      `}} />

      {/* Background CAD grid blueprint pattern & volumetric glows */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          transform: `translate3d(${mousePos.x * 0.15}px, ${mousePos.y * 0.15}px, 0)`,
          transition: 'transform 0.4s ease-out',
        }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.012]" />
        <div className="absolute inset-0 bg-blueprint-grid" />

        {/* Electric blue accents, ambient lens bloom and glows */}
        <div className="absolute top-[10%] right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#1E3A8A]/10 to-[#5FA8FF]/5 blur-[140px] opacity-80" />
        <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#0B1525]/30 to-[#1E3A8A]/5 blur-[120px]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#03060B_95%)]" />
      </div>

      {/* Star Particles Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 z-1 pointer-events-none" />

      {/* RIGHT SIDE: Breathtaking Full-Height Photorealistic Smart Factory Interior (Bleeds to right/bottom edges) */}
      <div
        className="absolute inset-y-0 right-0 w-full lg:w-[60vw] h-full z-0 hidden lg:block select-none overflow-hidden"
        style={{
          transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 0)`,
          transition: 'transform 0.4s ease-out',
        }}
      >
        {/* Raw, full-bleed factory photo with shallow depth of field */}
        <img
          src="/smart-factory.png"
          alt="Modern automated smart factory floor"
          className="w-full h-full object-cover brightness-[0.52] contrast-[1.15] saturate-[0.95] scale-105"
        />

        {/* Soft radial vignette center mask for natural bleed */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#03060B_95%)] opacity-[0.88] z-10 pointer-events-none" />

        {/* Linear and radial mask gradient overlays for natural bleed into dark background */}
        <div className="absolute inset-y-0 left-0 w-[300px] bg-gradient-to-r from-[#03060B] via-[#03060B]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-[280px] bg-gradient-to-t from-[#03060B] via-[#03060B]/85 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-[#03060B] via-[#03060B]/75 to-transparent z-10 pointer-events-none" />

        {/* Electric blue lens bloom overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(95,168,255,0.06),transparent_75%)] pointer-events-none" />

        {/* Volumetric glow overlay centered on the welding sparks to increase brightness */}
        <div className="absolute top-[60%] left-[53%] -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(253,186,116,0.16)_0%,rgba(95,168,255,0.06)_50%,transparent_100%)] mix-blend-screen pointer-events-none z-10 animate-pulse duration-[4000ms]" />

        {/* Volumetric light rays sweeping across the factory floor */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 opacity-45 mix-blend-screen">
          <div
            className="absolute top-0 right-0 w-[800px] h-[350px] bg-gradient-to-l from-[#5FA8FF]/15 to-transparent origin-top-right rotate-[-45deg] blur-[90px]"
            style={{ animation: 'sweep-ray-1 25s infinite ease-in-out' }}
          />
          <div
            className="absolute top-0 right-0 w-[600px] h-[480px] bg-gradient-to-l from-sky-400/10 to-transparent origin-top-right rotate-[-30deg] blur-[70px]"
            style={{ animation: 'sweep-ray-2 35s infinite ease-in-out alternate' }}
          />
        </div>

        {/* Floating blue energy points */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400/40 blur-[2px] pointer-events-none z-10"
            style={{
              top: `${25 + i * 11}%`,
              left: `${40 + (i % 2 === 0 ? i * 8 : -i * 5)}%`,
              width: `${5 + (i % 3) * 3}px`,
              height: `${5 + (i % 3) * 3}px`,
              animation: `float-energy ${15 + i * 4}s infinite ease-in-out`,
              animationDelay: `${i * 1.8}s`,
              boxShadow: '0 0 12px rgba(96,165,250,0.7)'
            }}
          />
        ))}
      </div>

      {/* Main Grid Wrapper */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full h-full">

          {/* LEFT COLUMN: SpaceX/Tesla inspired bold display typography (Spans 5 cols, ~40% width) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left h-full z-20 max-w-[480px]">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[24px] bg-white/[0.02] border border-white/5 backdrop-blur-md mb-8 text-[10px] font-bold uppercase tracking-[0.25em] text-[#5FA8FF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5FA8FF] animate-pulse" />
                Since 2001 • Authorized Industrial Partner
              </span>
            </motion.div>

            {/* Massive Display Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[44px] sm:text-[62px] md:text-[76px] lg:text-[84px] xl:text-[90px] font-black leading-[0.85] tracking-[-0.04em] text-white uppercase"
            >
              Industrial<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5FA8FF] to-[#3B82F6] drop-shadow-[0_0_35px_rgba(95,168,255,0.22)]">Ecosystem</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-slate-400 font-light lowercase font-sans text-[22px] sm:text-[30px] md:text-[36px] tracking-tight mt-6 block"
            >
              for modern factories
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#94A3B8] text-[15px] sm:text-[16px] leading-relaxed mt-6 mb-10 max-w-md font-medium"
            >
              Supplying bearings, hydraulics, pneumatics, automation, sensors and electrical systems from world-leading brands for over 25 years.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link to="/products" className="btn-primary group py-3.5 px-7 text-[12px] rounded-full bg-gradient-to-r from-[#5FA8FF] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#5FA8FF] shadow-[0_0_20px_rgba(95,168,255,0.35)] hover:shadow-[0_0_30px_rgba(95,168,255,0.5)] border-none">
                EXPLORE PRODUCTS
              </Link>
              <Link to="/get-quote" className="btn-outline py-3.5 px-7 text-[12px] rounded-full hover:bg-white/[0.02]">
                <FileText size={14} className="mr-2 text-[#5FA8FF]" />
                REQUEST QUOTE
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-t border-white/5 pt-8"
            >
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 size={13} className="text-[#5FA8FF]" /> Genuine Products
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 size={13} className="text-[#5FA8FF]" /> GST Invoice
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 size={13} className="text-[#5FA8FF]" /> Authorized Distributor
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 size={13} className="text-[#5FA8FF]" /> Pan India Delivery
              </span>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Spacer (Visual is absolutely positioned and overlays the background) */}
          <div className="lg:col-span-7 hidden lg:block h-full w-full pointer-events-none" />

        </div>
      </div>

      {/* Invisible anchor target */}
      <div className="absolute bottom-10 opacity-0 pointer-events-none w-1 h-1" />

      {/* Scroll indicator - centered */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center my-4 select-none">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            const indSection = document.getElementById('industries');
            if (indSection) indSection.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {/* Scroll mouse icon */}
          <div className="w-5 h-9 rounded-full border-2 border-white/20 flex justify-center pt-1.5 relative hover:border-blue-400/50 transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-2 rounded-full bg-blue-400"
            />
          </div>
          <span className="text-[9px] text-slate-500 uppercase tracking-[0.25em] font-extrabold mt-2 hover:text-blue-400 transition-colors">
            Scroll to Explore
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-blue-500 to-transparent mt-2 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
        </motion.div>
      </div>

    </section>
  );
}
