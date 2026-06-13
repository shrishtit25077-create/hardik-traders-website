import React, { useState } from 'react';

const InquiryModal = ({ isOpen, onClose, product }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto"
      onClick={handleClose}
    >
      <div 
        className="bg-white border border-border-mid w-full max-w-2xl my-auto relative rounded-[28px] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 text-text-muted hover:text-ice-blue transition-colors p-2 hover:bg-slate-100 rounded-[24px]"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="p-6 md:p-8 border-b border-border-subtle bg-slate-50 rounded-t-[28px]">
          <h2 className="text-[20px] md:text-[24px] font-black text-text-primary uppercase tracking-tight">
            {isSubmitted ? 'Inquiry Sent' : 'Request Product Quotation'}
          </h2>
          <p className="text-[12px] text-text-muted tracking-wider font-semibold uppercase mt-1">
            {isSubmitted ? 'Success' : 'Direct B2B Pricing Channel'}
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-12 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-16 h-16 rounded-[24px] bg-ice-blue/10 text-ice-blue flex items-center justify-center border border-ice-blue/20 animate-pulse">
              <span className="material-symbols-outlined text-[32px]">check_circle</span>
            </div>
            <div>
              <h3 className="text-[20px] font-black text-text-primary uppercase tracking-tight mb-2">Thank you for your inquiry.</h3>
              <p className="text-[14px] text-text-secondary max-w-md mx-auto font-medium">
                Our sales engineering team will review your specifications and contact you within 2 hours regarding the {product?.name || 'requested parts'}.
              </p>
            </div>
            <button 
              onClick={handleClose}
              className="mt-4 px-8 py-3 bg-ice-blue text-white font-bold text-[12px] uppercase tracking-wider rounded-[24px] hover:bg-ice-blue-dark transition-colors shadow-[0_4px_12px_rgba(59,130,246,0.15)]"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            {/* Product Details Section */}
            <div className="bg-slate-50 p-5 border-l-4 border-ice-blue rounded-r-[12px] space-y-2">
              <span className="text-[9px] text-text-muted uppercase tracking-widest font-black block mb-1">Selected Component</span>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <span className="text-[16px] text-text-primary font-bold uppercase tracking-tight">{product?.name || 'Selected Product'}</span>
                {product?.sku && product.sku !== 'N/A' && (
                  <div className="bg-white border border-border-mid px-3 py-1 text-[11px] font-bold text-text-primary tracking-wider rounded-[24px]">
                    SKU: {product.sku}
                  </div>
                )}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider" htmlFor="fullName">Full Name *</label>
                <input 
                  id="fullName" 
                  required 
                  className="w-full h-12 px-4 bg-slate-50/50 border border-border-mid focus:border-ice-blue focus:ring-1 focus:ring-ice-blue outline-none transition-all text-[14px] text-text-primary font-medium rounded-[12px] placeholder-slate-400" 
                  placeholder="Enter your name" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider" htmlFor="companyName">Company Name *</label>
                <input 
                  id="companyName" 
                  required 
                  className="w-full h-12 px-4 bg-slate-50/50 border border-border-mid focus:border-ice-blue focus:ring-1 focus:ring-ice-blue outline-none transition-all text-[14px] text-text-primary font-medium rounded-[12px] placeholder-slate-400" 
                  placeholder="Enter company name" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider" htmlFor="phone">Phone Number *</label>
                <input 
                  id="phone" 
                  required 
                  type="tel"
                  className="w-full h-12 px-4 bg-slate-50/50 border border-border-mid focus:border-ice-blue focus:ring-1 focus:ring-ice-blue outline-none transition-all text-[14px] text-text-primary font-medium rounded-[12px] placeholder-slate-400" 
                  placeholder="e.g. +91 98765 43210" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider" htmlFor="email">Email Address *</label>
                <input 
                  id="email" 
                  required 
                  type="email"
                  className="w-full h-12 px-4 bg-slate-50/50 border border-border-mid focus:border-ice-blue focus:ring-1 focus:ring-ice-blue outline-none transition-all text-[14px] text-text-primary font-medium rounded-[12px] placeholder-slate-400" 
                  placeholder="name@company.com" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider" htmlFor="requirement">Requirement Details *</label>
              <textarea 
                id="requirement" 
                required 
                rows="4"
                className="w-full px-4 py-3 bg-slate-50/50 border border-border-mid focus:border-ice-blue focus:ring-1 focus:ring-ice-blue outline-none transition-all text-[14px] text-text-primary font-medium resize-none rounded-[12px] placeholder-slate-400" 
                placeholder="Specify quantities, required delivery date, dimensions, or technical questions..." 
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-col-reverse md:flex-row justify-end items-center gap-4 border-t border-border-subtle">
              <button 
                type="button" 
                onClick={handleClose}
                className="w-full md:w-auto px-6 py-3 border border-border-mid bg-white text-text-primary hover:bg-slate-50 font-bold text-[12px] uppercase tracking-wider rounded-[24px] transition-all"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="w-full md:w-auto px-8 py-3 bg-ice-blue text-white hover:bg-ice-blue-dark font-bold text-[12px] uppercase tracking-wider rounded-[24px] transition-all flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(59,130,246,0.15)]"
              >
                Submit Request
                <span className="material-symbols-outlined text-[16px]">send</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default InquiryModal;
