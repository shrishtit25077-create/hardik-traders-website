import React from 'react';
import { trackEvent } from '../utils/analytics';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Catalog = () => {
  const catalogs = [
    {
      id: "company_profile",
      title: "Company Profile",
      desc: "Comprehensive overview of Hardik Traders, our vision, and pan-India distribution network.",
      size: "2.4 MB",
      pages: 12,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      eventName: "company_profile_download"
    },
    {
      id: "product_catalog",
      title: "Product Catalog",
      desc: "Complete inventory listing of automation, pneumatics, tooling, and mechanical components.",
      size: "18.5 MB",
      pages: 240,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      eventName: "catalog_download"
    },
    {
      id: "brand_portfolio",
      title: "Brand Portfolio",
      desc: "Detailed guide to our global manufacturing partners including SKF, SMC, and Bosch.",
      size: "5.1 MB",
      pages: 36,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      eventName: "brand_portfolio_download"
    },
    {
      id: "technical_brochure",
      title: "Technical Brochure",
      desc: "Engineering specifications, load ratings, and application guides for critical components.",
      size: "14.2 MB",
      pages: 156,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      eventName: "technical_brochure_download"
    }
  ];

  const handleDownload = (catalog) => {
    trackEvent(catalog.eventName, { document: catalog.title });
  };

  return (
    <div className="bg-bg-900 min-h-screen text-text-primary flex flex-col justify-between">
      <Navbar />
      
      <main className="flex-grow mt-[72px]">
        {/* Header Section */}
        <section className="relative py-20 border-b border-border-subtle bg-gradient-to-b from-bg-800 to-bg-900 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-ice-blue/5 blur-[80px] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-ice-blue/10 text-ice-blue border border-ice-blue/20 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 rounded-[24px]">
              <span className="w-1.5 h-1.5 rounded-full bg-ice-blue" />
              Downloads
            </span>
            <h1 className="text-[40px] sm:text-[52px] font-black text-text-primary mb-4 uppercase tracking-tight leading-none">
              Digital <span className="text-ice-blue">Catalogs</span>
            </h1>
            <p className="text-text-secondary max-w-2xl mx-auto text-[16px] leading-relaxed font-medium">
              Download our comprehensive product catalogs, technical brochures, and company profiles for offline access and procurement planning.
            </p>
          </div>
        </section>

        {/* Catalog Grid */}
        <section className="py-16 max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {catalogs.map((catalog) => (
              <div key={catalog.id} className="bg-bg-800 border border-border-subtle rounded-[28px] p-8 flex flex-col hover:border-ice-blue/30 transition-colors shadow-[0_20px_60px_rgba(0,0,0,0.04)] group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-white border border-border-mid text-ice-blue rounded-[12px] flex items-center justify-center group-hover:bg-ice-blue group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[32px]">picture_as_pdf</span>
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={catalog.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-10 h-10 border border-border-mid bg-white rounded-[24px] flex items-center justify-center hover:bg-slate-50 transition-colors text-text-secondary hover:text-ice-blue"
                      title="Preview PDF"
                    >
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </a>
                    <a 
                      href={catalog.url} 
                      download
                      onClick={() => handleDownload(catalog)}
                      className="w-10 h-10 bg-ice-blue text-white rounded-[24px] flex items-center justify-center hover:bg-ice-blue-dark transition-all shadow-[0_4px_12px_rgba(59,130,246,0.15)]"
                      title="Download PDF"
                    >
                      <span className="material-symbols-outlined text-[20px] text-white">download</span>
                    </a>
                  </div>
                </div>

                <h3 className="text-[20px] font-black uppercase tracking-tight text-text-primary mb-3">{catalog.title}</h3>
                <p className="text-[14px] text-text-secondary flex-grow mb-6 leading-relaxed font-medium">{catalog.desc}</p>

                <div className="flex items-center gap-6 pt-6 border-t border-border-subtle text-[11px] font-bold text-text-muted uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-ice-blue">description</span>
                    <span>{catalog.pages} Pages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-ice-blue">sd_storage</span>
                    <span>{catalog.size}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
