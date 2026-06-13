import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onInquiry }) => {
  return (
    <div className="bg-bg-900 border border-border-subtle hover:border-ice-blue/30 rounded-[28px] overflow-hidden group transition-all duration-300 flex flex-col relative shadow-[0_20px_60px_rgba(0,0,0,0.04)] hover:shadow-2xl">
      <div className="h-48 overflow-hidden bg-bg-900/50 flex items-center justify-center p-6 border-b border-border-subtle">
        <img
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          src={product.image}
          alt={product.imageAlt || product.name}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-3">
          {product.badge ? (
            <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 bg-ice-blue/10 text-ice-blue border border-ice-blue/20 rounded-[24px]">
              {product.badge.text}
            </span>
          ) : (
            <span></span>
          )}
          <span className="text-[10px] text-text-muted tracking-wider font-medium">SKU: {product.sku}</span>
        </div>
        <h3 className="text-[18px] font-black uppercase text-text-primary mb-4 leading-tight tracking-tight group-hover:text-ice-blue transition-colors">{product.name}</h3>

        <div className="grid grid-cols-2 gap-y-3 mb-6 border-t border-b border-border-subtle py-4">
          {product.attributes && product.attributes.map((attr, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-[9px] text-text-muted uppercase tracking-widest font-bold mb-1">{attr.label}</span>
              <span className="text-[13px] text-text-secondary font-medium">{attr.value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 mt-auto">
          <button
            className="w-full py-2.5 bg-ice-blue text-white font-bold text-[12px] uppercase tracking-wider rounded-[24px] hover:bg-ice-blue-dark active:scale-98 transition-all shadow-[0_4px_12px_rgba(59,130,246,0.15)]"
            onClick={() => onInquiry(product.name, product.sku)}
          >
            Send Inquiry
          </button>
          <Link
            to={`/product-detail/${product.sku}`}
            state={{ product }}
            className="w-full py-2.5 border border-border-mid bg-transparent text-text-primary font-bold text-[12px] uppercase tracking-wider rounded-[24px] hover:bg-slate-50 active:scale-98 transition-all text-center block"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
