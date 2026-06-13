import React from 'react';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
      {/* Call Button — primary number */}
      <a
        href="tel:+919416215742"
        className="w-12 h-12 bg-bg-900/90 backdrop-blur-md border border-border-mid shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex items-center justify-center text-ice-blue hover:text-white hover:bg-ice-blue hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 group relative rounded-[24px]"
        aria-label="Call Hardik Traders"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.6 4.38 2 2 0 0 1 3.57 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <span className="absolute right-14 bg-white/95 backdrop-blur-md border border-border-mid shadow-xl text-text-primary text-[11px] font-bold px-3 py-1.5 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap rounded-[24px] translate-x-2 group-hover:translate-x-0">
          +91 94162 15742
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919416215742"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#25D366]/90 backdrop-blur-md border border-[#25D366]/20 text-white shadow-[0_8px_32px_rgba(37,211,102,0.2)] flex items-center justify-center hover:bg-[#20bd5a] hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300 group relative rounded-[24px]"
        aria-label="WhatsApp Hardik Traders"
      >
        <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.643.832 5.109 2.33 7.15L.75 24l4.982-1.551A11.972 11.972 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm6.34 17.262c-.265.748-1.528 1.45-2.096 1.516-.54.062-1.222.115-3.486-.826-2.738-1.139-4.498-3.926-4.633-4.106-.135-.18-1.107-1.472-1.107-2.812 0-1.34.697-2.003.945-2.268.248-.265.54-.332.72-.332.18 0 .36.002.518.01.166.009.39-.064.609.467.225.54.767 1.867.834 2.003.067.136.113.295.023.475-.09.18-.135.295-.27.452-.135.158-.284.343-.406.475-.135.158-.284.329-.126.6.158.271.703 1.157 1.506 1.874.966.862 1.83 1.134 2.1 1.27.27.136.428.113.585-.067.158-.18.675-.788.855-1.058.18-.27.36-.225.608-.135.248.09 1.576.743 1.846.878.27.135.45.203.518.315.068.113.068.653-.197 1.401z"/>
        </svg>
        <span className="absolute right-14 bg-[#25D366] text-white text-[11px] font-bold px-3 py-1.5 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap rounded-[24px] translate-x-2 group-hover:translate-x-0 shadow">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
};

export default FloatingContact;
