import React, { useState, useMemo } from 'react';
import InquiryModal from './InquiryModal';
import ProductCard from './ProductCard';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const CategoryTemplate = ({ categoryName, title, description, products }) => {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Pagination & Filter State
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const ITEMS_PER_PAGE = 12;

  // Dynamic Brands list from products
  const uniqueBrands = useMemo(() => {
    if (!products) return [];
    const brandsSet = new Set(products.map(p => p.brand).filter(Boolean));
    return Array.from(brandsSet).sort();
  }, [products]);

  // Dynamic Types list from products
  const uniqueTypes = useMemo(() => {
    if (!products) return [];
    const typesSet = new Set();
    products.forEach(p => {
      let type = p.name;
      if (p.brand) {
        // Remove brand name (case-insensitive)
        const brandRegex = new RegExp('^' + p.brand.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '\\s*', 'i');
        type = type.replace(brandRegex, '');
      }
      // Remove standard suffix - High Performance
      type = type.replace(/\s*-\s*High\s*Performance\s*$/i, '');
      type = type.trim();
      if (type) {
        typesSet.add(type);
      }
    });
    return Array.from(typesSet).sort();
  }, [products]);

  const handleInquiry = (productName, sku) => {
    setSelectedProduct({ name: productName, sku: sku });
    setIsInquiryModalOpen(true);
  };

  const handleBrandToggle = (brand) => {
    setSelectedBrands(prev => {
      if (prev.includes(brand)) return prev.filter(b => b !== brand);
      return [...prev, brand];
    });
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  const filteredProducts = useMemo(() => {
    let result = products || [];

    // Filter by Brand
    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brand));
    }

    // Filter by Type
    if (selectedType !== 'All') {
      const lowerType = selectedType.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(lowerType) || (p.description && p.description.toLowerCase().includes(lowerType)));
    }

    return result;
  }, [products, selectedBrands, selectedType]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE) || 1;
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  
  const startItem = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endItem = Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length);

  return (
    <div className="bg-bg-800 min-h-screen text-text-primary flex flex-col justify-between">
      <Navbar />
      
      <main className="max-w-[1400px] w-full mx-auto px-6 md:px-10 py-12 flex-grow mt-[72px]">
        {/* Breadcrumbs & Title */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-text-muted mb-4">
            <span className="text-[10px] font-bold uppercase tracking-wider">Products</span>
            <span className="text-text-dim text-[12px] font-bold">/</span>
            <span className="text-[10px] font-bold text-ice-blue uppercase tracking-wider">{categoryName}</span>
          </div>
          <h1 className="text-[36px] sm:text-[48px] font-black uppercase tracking-tight text-text-primary mb-4 leading-none">
            {title}
          </h1>
          <p className="text-text-secondary max-w-2xl text-[16px] leading-relaxed font-medium">
            {description}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-bg-900 p-6 rounded-[28px] border border-border-subtle sticky top-28 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-subtle">
                <h2 className="text-[18px] font-bold text-text-primary uppercase tracking-wider">Filters</h2>
                <span className="text-text-muted text-sm font-semibold uppercase tracking-wider text-[10px]">Options</span>
              </div>
              
              {/* Brand Filter */}
              {uniqueBrands.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-[10px] font-bold text-ice-blue uppercase tracking-widest mb-4">Brand</h3>
                  <div className="space-y-3 max-h-48 overflow-y-auto custom-scrollbar pr-2">
                    {uniqueBrands.map(brand => (
                      <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          className="rounded-[4px] border-border-mid bg-white text-ice-blue focus:ring-ice-blue focus:ring-offset-0 w-4 h-4" 
                          type="checkbox" 
                          checked={selectedBrands.includes(brand)}
                          onChange={() => handleBrandToggle(brand)}
                        />
                        <span className="text-[14px] text-text-secondary group-hover:text-ice-blue transition-colors font-medium">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Type Filter */}
              {uniqueTypes.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-[10px] font-bold text-ice-blue uppercase tracking-widest mb-4">Type</h3>
                  <div className="space-y-3 max-h-48 overflow-y-auto custom-scrollbar pr-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        className="rounded-full border-border-mid bg-white text-ice-blue focus:ring-ice-blue focus:ring-offset-0 w-4 h-4" 
                        name="type" 
                        type="radio" 
                        checked={selectedType === 'All'}
                        onChange={() => { setSelectedType('All'); setCurrentPage(1); }}
                      />
                      <span className="text-[14px] text-text-secondary group-hover:text-ice-blue transition-colors font-medium">All Types</span>
                    </label>
                    {uniqueTypes.map(type => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          className="rounded-full border-border-mid bg-white text-ice-blue focus:ring-ice-blue focus:ring-offset-0 w-4 h-4" 
                          name="type" 
                          type="radio" 
                          checked={selectedType === type}
                          onChange={() => { setSelectedType(type); setCurrentPage(1); }}
                        />
                        <span className="text-[14px] text-text-secondary group-hover:text-ice-blue transition-colors font-medium">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
          
          {/* Product Grid */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-6 pb-2 border-b border-border-subtle">
              <span className="text-[14px] text-text-secondary font-medium">
                Showing {filteredProducts.length > 0 ? startItem : 0}-{endItem} of {filteredProducts.length} results
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} onInquiry={handleInquiry} />
                ))
              ) : (
                <div className="col-span-full text-center py-16 bg-bg-900 border border-border-subtle rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                  <h3 className="text-[20px] font-black uppercase text-text-primary mb-2 tracking-tight">No products found</h3>
                  <p className="text-[14px] text-text-secondary max-w-md mx-auto">Try adjusting your brand or type filters to find components.</p>
                </div>
              )}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-16 flex justify-center items-center gap-2">
                <button 
                  className={`p-2 text-[13px] font-bold uppercase tracking-wider transition-colors ${currentPage === 1 ? 'text-text-muted cursor-not-allowed' : 'text-text-secondary hover:text-ice-blue'}`}
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                
                {[...Array(totalPages)].map((_, i) => {
                  const pageNumber = i + 1;
                  if (
                    pageNumber === 1 || 
                    pageNumber === totalPages || 
                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                  ) {
                    return (
                      <button 
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`w-10 h-10 flex items-center justify-center font-bold text-[13px] transition-all rounded-[24px] ${
                          currentPage === pageNumber 
                            ? 'bg-ice-blue text-white shadow-[0_4px_12px_rgba(59,130,246,0.15)]' 
                            : 'text-text-secondary hover:bg-bg-900 hover:text-text-primary border border-border-mid bg-white'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  }
                  
                  if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                    return <span key={`ellipsis-${pageNumber}`} className="mx-2 text-text-muted">...</span>;
                  }
                  
                  return null;
                })}
 
                <button 
                  className={`p-2 text-[13px] font-bold uppercase tracking-wider transition-colors ${currentPage === totalPages ? 'text-text-muted cursor-not-allowed' : 'text-text-secondary hover:text-ice-blue'}`}
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
      
      <InquiryModal isOpen={isInquiryModalOpen} onClose={() => setIsInquiryModalOpen(false)} product={selectedProduct} />
    </div>
  );
};

export default CategoryTemplate;
