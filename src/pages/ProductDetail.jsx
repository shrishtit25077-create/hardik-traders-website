import React, { useState } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import InquiryModal from '../components/product/InquiryModal';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { CheckCircle } from 'lucide-react';

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [bulkForm, setBulkForm] = useState({ name: '', email: '', phone: '', quantity: '', message: '' });
  const [bulkSubmitted, setBulkSubmitted] = useState(false);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const handleInquiry = () => {
    setSelectedProduct({ name: product.name, sku: product.sku });
    setIsInquiryModalOpen(true);
  };

  const handleBulkSubmit = (e) => {
    e.preventDefault();
    setBulkSubmitted(true);
  };

  return (
    <div className="bg-bg-900 min-h-screen text-text-primary flex flex-col justify-between">
      <Navbar />

      <main className="max-w-[1400px] w-full mx-auto px-6 md:px-10 py-12 flex-grow mt-[72px]">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-text-secondary mb-8 text-[12px] font-bold uppercase tracking-wider overflow-x-auto whitespace-nowrap pb-2">
          <Link className="hover:text-ice-blue transition-colors" to="/products">Products</Link>
          <span className="text-text-dim">/</span>
          <Link className="hover:text-ice-blue transition-colors" to="/products">Bearings</Link>
          <span className="text-text-dim">/</span>
          <span className="text-ice-blue font-black">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Product Gallery & Info */}
          <div className="lg:col-span-8 space-y-8">
            {/* Gallery Section */}
            <div className="space-y-4">
              <div className="bg-slate-50 border border-border-subtle rounded-[28px] overflow-hidden aspect-video flex items-center justify-center p-6">
                <img
                  alt={product.name}
                  className="w-full h-full object-contain opacity-95"
                  src={product.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuCsfU-V-1W5TjG3_qHnZzP_Yj2A7wB_KkG_3M8M_Q_Q_Q_Q_Q_Q_Q_Q_Q_Q_Q_Q"}
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="border-2 border-ice-blue rounded-[12px] overflow-hidden cursor-pointer h-24 bg-white p-2 flex items-center justify-center">
                  <img alt="View 1" className="w-full h-full object-contain" src={product.image} />
                </div>
                {["https://lh3.googleusercontent.com/aida-public/AB6AXuA_sT0Ozs3BzU6sqRh-XO7GRy-VZa1Pl2pQt7uW-PIUsT1KcdLhYwGhucpdwxe6xEiaWy2lzf1uEeMuWCZfduX6WEqfyG8vavptLBFcPtEtArF3FrgWfcfo9rFQkcUSFIgYIIuxIwXcpzLp8r2RQXYT-ubwhMzryOlFvS_Xw7RdxS2fRpx7glhuXIjtRP0oRsCkb0sn-XBLsxB8BqhsBebJSLZ05B4RgM7_kMF3h2ayY2t6JL1i2g8qqmyPVvtxkOCnw3ZBxCpZxbGV", "https://lh3.googleusercontent.com/aida-public/AB6AXuAuXBySPg--wjp1vueTcCXXUn-RhaCJOxL0JrmY7naOLRjhsGmeTm3320ZN5O0CDA7BdDBrUGPSNC4iTWxkC2TXAGquV1iDQy3D1f7Ij1cwjrDtJTgO4WhWYi7MkLDCGI8Ca_Nnr7yFXZmF28AyLWAwQoeMLskF_QndC_f-h0K8UDpDTZqyFrO99VUsNnj-gNV2CkOQUy2zZZEuPXiST7dva_y1Qb3eAVSdYgHnslcis780nlJJn6RLqozQZqSrup2Ii2A-rkLFKvd5", "https://lh3.googleusercontent.com/aida-public/AB6AXuCuMyxoKnlydJGtlZ06burzYzQ9wAYfUtP_4wtOnW-izR4NlPBmnN4ADG-JFo24g7i7qsmSLh7-7PrWk0jOx_ZjCQpVMjNlLP5uqi00MvbyPk_2QOVwfiwrrIUaOhjE8NSxd2bqjKLahb76roFsZ_EnDGZimTGU6NL3qi4V2qUbJ5SBr2H1Cso_pl-r4jHcvBRvOhjwZxZ5-vpZ-bMStdsz713WdU1ibfCgaSMjJD6DDEOGfvrA0vjsccgaM9bFn2LEq50C1zgS_lr0"].map((imgUrl, i) => (
                  <div key={i} className="border border-border-subtle hover:border-ice-blue rounded-[12px] overflow-hidden cursor-pointer h-24 bg-white p-2 flex items-center justify-center transition-colors">
                    <img alt={`View ${i + 2}`} className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity" src={imgUrl} />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-[32px] sm:text-[40px] font-black uppercase tracking-tight text-text-primary mb-4 leading-tight">{product.name}</h1>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="text-[11px] font-bold bg-slate-50 border border-border-mid px-3 py-1 text-text-secondary tracking-wider rounded-full">SKU: {product.sku}</span>
                  <span className="text-[11px] font-bold bg-ice-blue/10 border border-ice-blue/20 px-3 py-1 text-ice-blue tracking-wider uppercase rounded-full">Brand: {product.brand || 'Genuine'}</span>
                </div>
                <p className="text-text-secondary text-[16px] leading-relaxed font-medium max-w-3xl">
                  {product.description || 'Premium industrial component designed for robust operation in demanding environments. Ensures high reliability, efficiency, and compliance with international standards.'}
                </p>
              </div>

              {/* Technical Spec */}
              <div className="pt-4">
                <h2 className="text-[18px] font-black uppercase tracking-wider text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-ice-blue" />
                  Technical Specifications
                </h2>
                <div className="bg-white border border-border-subtle overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.04)] max-w-3xl">
                  <table className="w-full text-left text-[14px]">
                    <thead className="bg-slate-50/50 border-b border-border-subtle text-text-muted font-bold uppercase tracking-widest text-[11px]">
                      <tr>
                        <th className="px-6 py-4">Attribute</th>
                        <th className="px-6 py-4">Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-subtle text-text-secondary font-medium">
                      {product.attributes && product.attributes.map((attr, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/30 transition-colors">
                          <td className="px-6 py-4 text-text-muted font-bold uppercase tracking-wider text-[11px]">{attr.label}</td>
                          <td className="px-6 py-4 text-text-primary">{attr.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Features & Applications */}
              <div className="grid md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4">
                  <h3 className="text-[14px] font-bold text-ice-blue uppercase tracking-widest flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">verified</span>
                    Key Features
                  </h3>
                  <ul className="space-y-3 text-[14px] text-text-secondary font-medium">
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-ice-blue text-[16px] mt-0.5">check_circle</span>
                      <span>Low frictional torque for energy efficiency</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-ice-blue text-[16px] mt-0.5">check_circle</span>
                      <span>Quiet operation at high rotational speeds</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-ice-blue text-[16px] mt-0.5">check_circle</span>
                      <span>Pre-lubricated with high-quality industrial grease</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-[14px] font-bold text-ice-blue uppercase tracking-widest flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">settings_applications</span>
                    Applications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Electric Motors', 'Automotive', 'Conveyor Systems', 'Power Tools'].map(app => (
                      <span key={app} className="bg-ice-blue/10 border border-ice-blue/20 text-text-primary font-bold text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-4">
            <aside className="sticky top-28 space-y-6">
              <div className="bg-bg-800 border border-border-subtle p-6 rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
                <h2 className="text-[20px] font-black uppercase text-text-primary tracking-tight mb-2">Bulk Inquiry</h2>
                <p className="text-text-secondary text-[13px] mb-6 leading-relaxed font-medium">Request a specialized quote for industrial procurement. Our team responds within 2 hours.</p>

                {bulkSubmitted ? (
                  <div className="py-8 text-center flex flex-col items-center justify-center space-y-4">
                    <CheckCircle size={48} className="text-ice-blue animate-pulse" />
                    <h3 className="text-[16px] font-bold text-text-primary uppercase tracking-wider">Inquiry Received</h3>
                    <p className="text-text-secondary text-[13px] font-medium leading-relaxed max-w-[200px]">Our sourcing team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleBulkSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Full Name</label>
                      <input required className="w-full px-4 h-11 bg-white border border-border-mid text-text-primary outline-none focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10 transition-all rounded-[12px] text-[13px] font-medium placeholder-slate-400" placeholder="Enter your name" type="text" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Company Email</label>
                      <input required className="w-full px-4 h-11 bg-white border border-border-mid text-text-primary outline-none focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10 transition-all rounded-[12px] text-[13px] font-medium placeholder-slate-400" placeholder="name@company.com" type="email" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Phone</label>
                        <input required className="w-full px-4 h-11 bg-white border border-border-mid text-text-primary outline-none focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10 transition-all rounded-[12px] text-[13px] font-medium placeholder-slate-400" placeholder="+91..." type="tel" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Quantity</label>
                        <input required className="w-full px-4 h-11 bg-white border border-border-mid text-text-primary outline-none focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10 transition-all rounded-[12px] text-[13px] font-medium placeholder-slate-400" placeholder="e.g. 500" type="number" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Message</label>
                      <textarea required className="w-full px-4 py-2.5 bg-white border border-border-mid text-text-primary outline-none focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10 transition-all resize-none rounded-[12px] text-[13px] font-medium placeholder-slate-400" placeholder="Describe specifications..." rows="3" />
                    </div>
                    <button className="w-full btn-primary flex items-center justify-center gap-2 py-3.5 bg-ice-blue text-white rounded-[24px] font-bold text-[12px] uppercase tracking-wider hover:bg-ice-blue-dark shadow-[0_4px_12px_rgba(59,130,246,0.15)]" type="submit">
                      <span className="material-symbols-outlined text-[16px]">send</span>
                      Request Quote
                    </button>
                  </form>
                )}

                <div className="mt-6 pt-6 border-t border-border-subtle flex items-center gap-4">
                  <div className="w-10 h-10 bg-ice-blue/10 border border-ice-blue/20 text-ice-blue flex items-center justify-center rounded-full flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                  </div>
                  <div>
                    <p className="text-[9px] text-text-muted uppercase tracking-widest font-black">Direct Sourcing Assist</p>
                    <p className="font-bold text-[13px] text-text-primary leading-tight mt-0.5">+91 94162 15742, +91 89506 46800</p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-bg-800 border border-border-subtle p-6 rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-ice-blue" style={{ fontVariationSettings: '"FILL" 1' }}>verified_user</span>
                  <span className="text-[11px] font-bold text-text-primary uppercase tracking-wider">Authorized Distributor</span>
                </div>
                <p className="text-[12px] text-text-secondary leading-relaxed font-medium">Guaranteeing authentic industrial parts with full manufacturer warranty and quality certificates.</p>
              </div>
            </aside>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <div className="flex justify-between items-end mb-8 border-b border-border-subtle pb-4">
            <div>
              <h2 className="text-[22px] font-black uppercase text-text-primary tracking-tight">Related Solutions</h2>
              <p className="text-text-secondary text-[13px] font-medium">Explore complementary industrial components</p>
            </div>
            <Link to="/products" className="text-ice-blue font-bold text-[11px] uppercase tracking-wider flex items-center gap-1 hover:underline transition-all">
              View Catalog
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: '1', name: 'Cylindrical Roller Bearing', type: 'Roller Bearings', desc: 'High load capacity for demanding industrial gearboxes and machinery.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnt9G4-8i_8n_Dvc3cS2lEyAypGsJ0hekjxNaBFsBZl8zNVnIsuX1L3oxyMDu5vUumo383W0edP2glP_Hwn_Q3pPNLd2wDQAGC05MuExabJCRa5c7Bc0t7Nk9H5kq40eecvnFRb8bZXTPPcUprXizSesIXJhTegrvMFi8se1YJkWlVHZ-TO4Hm1P0b185J0A8e8_c1SC20uvEGxVrchGAxOBq1LA2Vunc5RA6E7XXR4QfWDYL_HlYgyViN9Rkfv6oeaziBvbnAxtKE' },
              { id: '2', name: 'H-Type Linear Rails', type: 'Linear Guides', desc: 'Precision motion control for automation and assembly lines.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCVjmZnaLkUvjKOYdL0jZeXZRySpudeioPcOZGgynLtmvrRCHohCRCDolHkdxzNsGfKI40vr6CwIn17-f_rhNZZWUmKvTKzvxJHshOds3J014rlC2Ho17rJWGTDTPhzKL42jTsTbnKOgbEmk-yJqI9v95Hw6j3NmDz_oI_3VJ5uqiyawSxRNLVasXGjnNqQZ7PqOrt4r5vgTyf-y8vcyAz4wbqaA248lIqPFJq8FK0zx6vf0ew3rvnK-woSaxewW5RwyrBd0AbcXN1' },
              { id: '3', name: 'Spherical Roller Bearing', type: 'Specialized', desc: 'Self-aligning solution for heavy shafts with potential deflection.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt-HfcuVf1jTxTaMFaDoEmxB7vTxE4eKZA2q4Q0vK0JdqG60fLHMhgU4-wrg0v1qUD6bmvZ9wY9xLvxnFVE9Ow2hLPeEaYR_Oa-lJcfIP7D2eIAkeLV-2bL4Q2lVPtFKPTZbI5fzV3W6f9ErpNqnHAYvV0JRh2J1MjIVEDV3AMNvejKvsUB3dRbmOQSArwLSnwENAppChYUTmzfXTwKk2kRyFTqMIpQC3dfxjqkW702DDjUDftueuszZQ2skxFj3WJXp1WcXjZiZr0' },
              { id: '4', name: 'Industrial Oil Seals', type: 'Sealing', desc: 'High-temperature resistant seals for rotating equipment and motors.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDP593OtUigqnMfYtS9j2ZcMMK_S6ZPJkxvjqt_jEmk5m8kjxfOsxdam6KIcQBn1K9O8TztBRHcGUQ4m1Kj_ZHzHMCf_bzKX5rVumTE7Vg7jgJI1ojSe9S3QsP9fPM7VPRewWn5DN35pKvg6tsKfLdQmyX6P8HGxKc_1wBuVXT6MLJHDjEETpwqXisF1GDg_OniQS1LpgbQzkhxU3Dh4rTvBeuWCk3MfjEtvM4U5i5065mscpGzD1n7xnYcs5Dt2IXv_3IAP8oSC42n' }
            ].map((prod) => (
              <div key={prod.id} className="bg-white border border-border-subtle rounded-[28px] overflow-hidden group cursor-pointer hover:border-ice-blue/30 shadow-[0_20px_60px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden bg-slate-50 p-4 flex items-center justify-center">
                  <img alt={prod.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 opacity-80" src={prod.img} />
                </div>
                <div className="p-5 space-y-2 border-t border-border-subtle">
                  <span className="text-[9px] font-bold text-ice-blue uppercase tracking-widest">{prod.type}</span>
                  <h4 className="text-[16px] font-black uppercase text-text-primary tracking-tight group-hover:text-ice-blue transition-colors">{prod.name}</h4>
                  <p className="text-[13px] text-text-secondary line-clamp-2 leading-relaxed font-medium">{prod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <InquiryModal isOpen={isInquiryModalOpen} onClose={() => setIsInquiryModalOpen(false)} product={selectedProduct} />
    </div>
  );
};

export default ProductDetail;
