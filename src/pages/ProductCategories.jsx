import React from 'react';
import { Link } from 'react-router-dom';
import { categoriesList, allProductsData } from '../data/categoryData';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const ProductCategories = () => {
  return (
    <div className="bg-bg-900 min-h-screen text-text-primary flex flex-col justify-between">
      <Navbar />

      <main className="max-w-[1400px] w-full mx-auto px-6 md:px-10 py-16 flex-grow mt-[72px]">
        {/* Hero Section */}
        <section className="mb-16 border-l-4 border-ice-blue pl-6 md:pl-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-ice-blue/10 text-ice-blue border border-ice-blue/20 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 rounded-full">
            Product Hub
          </span>
          <h1 className="text-[40px] sm:text-[52px] font-black text-text-primary tracking-tight leading-none uppercase mb-4">
            Product <span className="text-ice-blue">Categories</span>
          </h1>
          <p className="text-text-secondary text-[16px] max-w-2xl font-medium leading-relaxed">
            Engineered precision for heavy industry. Explore our comprehensive inventory of high-performance mechanical components from world-leading manufacturers.
          </p>
        </section>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categoriesList.map((cat) => {
            const itemCount = allProductsData[cat.slug]?.length || 0;
            return (
              <div key={cat.slug} className="group bg-white border border-border-subtle hover:border-ice-blue/30 transition-all duration-300 flex flex-col rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:shadow-2xl">
                <div className="relative h-56 overflow-hidden bg-slate-50 flex items-center justify-center p-4 border-b border-border-subtle">
                  <img
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                    src={allProductsData[cat.slug]?.[0]?.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuCsfU-V-1W5TjG3_qHnZzP_Yj2A7wB_KkG_3M8M_Q_Q_Q_Q_Q_Q_Q_Q_Q_Q_Q_Q"}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col border-t-2 border-border-subtle group-hover:border-ice-blue/30 transition-all duration-300">
                  <h3 className="text-[20px] font-black uppercase text-text-primary mb-2 tracking-tight group-hover:text-ice-blue transition-colors">{cat.title}</h3>
                  <p className="text-text-secondary text-[14px] mb-6 line-clamp-2 leading-relaxed font-medium">{cat.desc}</p>
                  <div className="text-[10px] uppercase tracking-widest text-ice-blue font-black mb-4">{itemCount}+ Items</div>
                  <Link to={`/products/category/${cat.slug}`} className="mt-auto w-full py-3 bg-transparent border border-border-mid group-hover:border-ice-blue group-hover:bg-ice-blue group-hover:text-white text-text-primary font-bold text-[12px] uppercase tracking-wider flex items-center justify-center gap-2 rounded-[24px] transition-all">
                    Explore <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            );
          })}

          {/* Call to Action Card */}
          <div className="lg:col-span-2 bg-bg-800 border border-border-subtle hover:border-ice-blue/30 p-8 flex flex-col md:flex-row items-center justify-between gap-8 rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.04)] relative overflow-hidden group transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-ice-blue/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-[20px] md:text-[24px] font-black text-text-primary uppercase tracking-tight mb-2">Custom Engineering Solutions</h2>
              <p className="text-text-secondary text-[14px] max-w-lg leading-relaxed font-medium">
                Can't find a specific part? Our technical support team specializes in sourcing obsolete components and designing bespoke industrial systems.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link to="/contact" className="btn-primary text-center">
                Request Specialist
              </Link>
              <Link to="/catalog" className="btn-outline text-center">
                Download Catalog
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductCategories;
