import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Products = () => {
  return (
    <div className="bg-bg-800 min-h-screen text-text-primary flex flex-col justify-between">
      <Navbar />

      <main className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-10 py-16 flex-grow mt-[72px]">
        {/* Hero Section */}
        <section className="mb-16 border-l-4 border-ice-blue pl-6 md:pl-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-ice-blue/10 text-ice-blue border border-ice-blue/20 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 rounded-[24px]">
            Product Hub
          </span>
          <h1 className="text-[32px] sm:text-[44px] md:text-[52px] font-black text-text-primary tracking-tight leading-none uppercase mb-4">
            Product <span className="text-ice-blue">Categories</span>
          </h1>
          <p className="text-text-secondary text-[16px] max-w-2xl font-medium leading-relaxed">
            Engineered precision for heavy industry. Explore our comprehensive inventory of high-performance mechanical components from world-leading manufacturers.
          </p>
        </section>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Ball Bearings */}
          <div className="group bg-bg-900 border border-border-subtle hover:border-ice-blue/30 transition-all duration-300 flex flex-col rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:shadow-2xl">
            <div className="relative h-56 overflow-hidden bg-bg-900/50 flex items-center justify-center p-4">
              <img
                alt="Precision Ball Bearings"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALs4DZKQp9BkyiC3IkKGD_SNUqw55dgLZE2DlwNqURGWdjm5ESXZWeCCsxUOVqekP2glCZ-yQgeJQ_ewo6xl9JPV50LvyhklsGxyjupeOzVIh3QFkTSKjVT-p_JroX8nZ-h8MZHzp-lD-8FwznBLE0-90ZYKHoYZq5VTCVD80taHqtfVvknKTKXr80octzl8Ja3kzlhhO3hYzd4weyYoF9XNzbHEgfoITbr9F80KEoeGQNSlYn8naj4zv6EYoxccARdFQcT8HalxRd"
              />
              <div className="absolute top-4 left-4 bg-ice-blue text-white px-3 py-1 text-[9px] font-bold uppercase tracking-wider rounded-[24px]">Top Category</div>
            </div>
            <div className="p-6 flex-grow flex flex-col border-t border-border-subtle group-hover:border-ice-blue/30">
              <h3 className="text-[20px] font-black uppercase text-text-primary mb-2 tracking-tight group-hover:text-ice-blue transition-colors">Ball Bearings</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['SKF', 'NSK', 'FAG', 'NTN'].map(b => (
                  <span key={b} className="px-2.5 py-0.5 bg-bg-900/60 border border-border-mid text-text-muted text-[10px] font-bold tracking-wider uppercase rounded-[24px]">{b}</span>
                ))}
              </div>
              <Link to="/products/category/bearings" className="mt-auto w-full py-3 bg-transparent border border-border-mid group-hover:border-ice-blue group-hover:bg-ice-blue group-hover:text-white text-text-primary font-bold text-[12px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all rounded-[24px]">
                Explore <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Roller Bearings */}
          <div className="group bg-bg-900 border border-border-subtle hover:border-ice-blue/30 transition-all duration-300 flex flex-col rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:shadow-2xl">
            <div className="relative h-56 overflow-hidden bg-bg-900/50 flex items-center justify-center p-4">
              <img
                alt="Heavy Duty Roller Bearings"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAchaD9nrvI3LaBMChQ32OBwxo2JusCcgPHrD03f9HHaz0HVcSsbtG0piKJmQ60MFLo7tLGChd0gKV_Ss8WHm1sZSgp2QExEf8jQNqlv_lB_HlP41MewCA1CrUobD120WaVdMzmOI0lNWa8XCsk7xZRGIGmzU2UKOGgWggsuIKOHbEpXol1mipWeeojniWUPGH9JKdQlxC5TabisjoP9GMwN1yWyGVGryvtZaH5t_ZYkM5HJFWZpFTrzdiIhNMH_XmvVNta0WXwxnFg"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col border-t border-border-subtle group-hover:border-ice-blue/30">
              <h3 className="text-[20px] font-black uppercase text-text-primary mb-2 tracking-tight group-hover:text-ice-blue transition-colors">Roller Bearings</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Timken', 'INA', 'KOYO'].map(b => (
                  <span key={b} className="px-2.5 py-0.5 bg-bg-900/60 border border-border-mid text-text-muted text-[10px] font-bold tracking-wider uppercase rounded-[24px]">{b}</span>
                ))}
              </div>
              <Link to="/products/category/bearings" className="mt-auto w-full py-3 bg-transparent border border-border-mid group-hover:border-ice-blue group-hover:bg-ice-blue group-hover:text-white text-text-primary font-bold text-[12px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all rounded-[24px]">
                Explore <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Card 3: Linear Motion */}
          <div className="group bg-bg-900 border border-border-subtle hover:border-ice-blue/30 transition-all duration-300 flex flex-col rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:shadow-2xl">
            <div className="relative h-56 overflow-hidden bg-bg-900/50 flex items-center justify-center p-4">
              <img
                alt="Linear Motion Systems"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNaSh57aC_k3pg78SB1wiOyNif-w3dkPySBGFU-tnlBozxWfpRzgd1ANVDDhzE4mLphSyMqI1F9i-dRt65Z9u-mgzpAbAftwyPiSjf5i6YkUO0StuWMT-Y22P6DsfR39aAZsoaKzfSktD-PTfG-CU4WRXrFa8W-C6KEcwKZ4Pezw54IOGue2kKLZZyAX7fh8qTe25g4dY0RvhKX005zgBE2q6NjEYztL9Nj5-o9WL9ZFodJz0NT3OyGdgoT4Um-sFRBv0O5RwMBPKN"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col border-t border-border-subtle group-hover:border-ice-blue/30">
              <h3 className="text-[20px] font-black uppercase text-text-primary mb-2 tracking-tight group-hover:text-ice-blue transition-colors">Linear Motion</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['THK', 'HIWIN', 'Rexroth'].map(b => (
                  <span key={b} className="px-2.5 py-0.5 bg-bg-900/60 border border-border-mid text-text-muted text-[10px] font-bold tracking-wider uppercase rounded-[24px]">{b}</span>
                ))}
              </div>
              <Link to="/products/category/bearings" className="mt-auto w-full py-3 bg-transparent border border-border-mid group-hover:border-ice-blue group-hover:bg-ice-blue group-hover:text-white text-text-primary font-bold text-[12px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all rounded-[24px]">
                Explore <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Card 4: Pneumatics */}
          <div className="group bg-bg-900 border border-border-subtle hover:border-ice-blue/30 transition-all duration-300 flex flex-col rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:shadow-2xl">
            <div className="relative h-56 overflow-hidden bg-bg-900/50 flex items-center justify-center p-4">
              <img
                alt="Pneumatic Systems"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdFNNqGKLLng9Crr7yXipOJNVvJC0cKkiww6S5xY5fRM1WJ5NhcAK_wNI-FOFQzB_n4F79L-WcxILrIuwdmAqVfj9MwtAOFkposzHRV2OsHkvUEj3a_HymY4cDtDo4-XmF4JfkpnfwZEO6z94J3tZenx4EOUwM-edtNS2JJ1TQ9Crz6TmEwkZTvrVgRcyNbG_zDnMpIdC8x5_FdYjgn01VdrLUZvp6Wnd7eli-zKfvehtZmstKwu3ujcTu5Wu_NtCVM8cJIfyu0BYZ"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col border-t border-border-subtle group-hover:border-ice-blue/30">
              <h3 className="text-[20px] font-black uppercase text-text-primary mb-2 tracking-tight group-hover:text-ice-blue transition-colors">Pneumatics</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['SMC', 'Festo', 'Parker', 'Janatics'].map(b => (
                  <span key={b} className="px-2.5 py-0.5 bg-bg-900/60 border border-border-mid text-text-muted text-[10px] font-bold tracking-wider uppercase rounded-[24px]">{b}</span>
                ))}
              </div>
              <Link to="/products/category/pneumatics" className="mt-auto w-full py-3 bg-transparent border border-border-mid group-hover:border-ice-blue group-hover:bg-ice-blue group-hover:text-white text-text-primary font-bold text-[12px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all rounded-[24px]">
                Explore <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Card 5: Hydraulics */}
          <div className="group bg-bg-900 border border-border-subtle hover:border-ice-blue/30 transition-all duration-300 flex flex-col rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:shadow-2xl">
            <div className="relative h-56 overflow-hidden bg-bg-900/50 flex items-center justify-center p-4">
              <img
                alt="Hydraulic Power"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHgMVBOlecPHLleX954K1uIqzBRs9Vm-h5DHbh3l1g8xwqJh9tl6Y-EAv8Wg46_fHTB07yXHqasi-5EuRSeQUdHoikIEC5M9TML0Rcput6R5ilenF_WOoNcesWZN00H-oiavZotipzjgbqixvUkZo2-Flh7-UjokcUm_X9sUknO9JgOCds7Enbe74hMyVTqd2m-hXdf-GoT73wtPbab1VmtWifsTJaeCiwicYb8TtmdIvcHXQrga0mZ4_fi3nkWtLqOdxy_RCQyEYc"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col border-t border-border-subtle group-hover:border-ice-blue/30">
              <h3 className="text-[20px] font-black uppercase text-text-primary mb-2 tracking-tight group-hover:text-ice-blue transition-colors">Hydraulics</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Eaton', 'Parker', 'Vickers'].map(b => (
                  <span key={b} className="px-2.5 py-0.5 bg-bg-900/60 border border-border-mid text-text-muted text-[10px] font-bold tracking-wider uppercase rounded-[24px]">{b}</span>
                ))}
              </div>
              <Link to="/products/category/hydraulics" className="mt-auto w-full py-3 bg-transparent border border-border-mid group-hover:border-ice-blue group-hover:bg-ice-blue group-hover:text-white text-text-primary font-bold text-[12px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all rounded-[24px]">
                Explore <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Card 6: Electricals */}
          <div className="group bg-bg-900 border border-border-subtle hover:border-ice-blue/30 transition-all duration-300 flex flex-col rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:shadow-2xl">
            <div className="relative h-56 overflow-hidden bg-bg-900/50 flex items-center justify-center p-4">
              <img
                alt="Industrial Electrical Systems"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIc3Y0hCy8UvIGni8Hi2kW20Kb5YjsB3VcgWSGF8VuaZf32WJVtgz2Q5FUU34e1ZCyO8NitO0_w0Iuw9_eMfrZeJ23DICo-6VJ6GxdUJmAVTH_cCUmJ49ywGMkLcgNve2Qm-7qpsdaLoERxKSuOYbmj49zqmggKWEtUdLuddGy2MkfL8PxDa7qy9OqQ5jE_dN2vxBk6oNiuu7wJqG_PGlCA-ovMh2ikNOyUZWSySGwQ3TT8FzcLptGK9kFEiGW0uMVwy1G-HTg1DDT"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col border-t border-border-subtle group-hover:border-ice-blue/30">
              <h3 className="text-[20px] font-black uppercase text-text-primary mb-2 tracking-tight group-hover:text-ice-blue transition-colors">Electricals</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['ABB', 'Siemens', 'Schneider'].map(b => (
                  <span key={b} className="px-2.5 py-0.5 bg-bg-900/60 border border-border-mid text-text-muted text-[10px] font-bold tracking-wider uppercase rounded-[24px]">{b}</span>
                ))}
              </div>
              <Link to="/products/category/electricals-electronics" className="mt-auto w-full py-3 bg-transparent border border-border-mid group-hover:border-ice-blue group-hover:bg-ice-blue group-hover:text-white text-text-primary font-bold text-[12px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all rounded-[24px]">
                Explore <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Card 7: Lubricants */}
          <div className="group bg-bg-900 border border-border-subtle hover:border-ice-blue/30 transition-all duration-300 flex flex-col rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:shadow-2xl">
            <div className="relative h-56 overflow-hidden bg-bg-900/50 flex items-center justify-center p-4">
              <img
                alt="Industrial Lubricants"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5JrRcekTA2LkJFmcfJnr0kakLiGvdfLayMB8z1ooKpgkL0dz0fbX3I88hlwFcGwwg8W12xbzFxpCdnV09crNkoslF2shMVCMUxnF2FBrSVIojSeDndPDdAZ6Huamplc2Vi7FFJMvUBPBEjHBDaAL3_ovYNfkPHJNvY8-7c6oz1Ejs0FURwHNXIIlJ720OEPH5K_GIQ_IRlQiYBaAf2UznXzISWOIr5nlMvEtCfi4e2gvNp4ZmSXhf3H-Mp3YAZs1GezmaQyn1bHMW"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col border-t border-border-subtle group-hover:border-ice-blue/30">
              <h3 className="text-[20px] font-black uppercase text-text-primary mb-2 tracking-tight group-hover:text-ice-blue transition-colors">Lubricants</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Mobil', 'Shell', 'Castrol'].map(b => (
                  <span key={b} className="px-2.5 py-0.5 bg-bg-900/60 border border-border-mid text-text-muted text-[10px] font-bold tracking-wider uppercase rounded-[24px]">{b}</span>
                ))}
              </div>
              <Link to="/products/category/lubricants-greases" className="mt-auto w-full py-3 bg-transparent border border-border-mid group-hover:border-ice-blue group-hover:bg-ice-blue group-hover:text-white text-text-primary font-bold text-[12px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all rounded-[24px]">
                Explore <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Call to Action Card */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-bg-900 border border-border-subtle hover:border-ice-blue/30 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] relative overflow-hidden group transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-ice-blue/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-[20px] md:text-[24px] font-black text-text-primary uppercase tracking-tight mb-2">Custom Engineering Solutions</h2>
              <p className="text-text-secondary text-[14px] max-w-lg leading-relaxed font-medium">
                Can't find a specific part? Our technical support team specializes in sourcing obsolete components and designing bespoke industrial systems.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link to="/contact" className="px-8 py-4 bg-ice-blue text-white text-center font-bold text-[12px] uppercase tracking-wider hover:bg-ice-blue-dark transition-colors rounded-[24px] shadow-[0_4px_12px_rgba(59,130,246,0.15)]">
                Request Specialist
              </Link>
              <Link to="/catalog" className="px-8 py-4 border border-border-mid text-text-primary text-center font-bold text-[12px] uppercase tracking-wider hover:bg-slate-50 transition-colors rounded-[24px]">
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

export default Products;
