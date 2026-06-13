import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import CategoryTemplate from '../components/product/CategoryTemplate';
import { categoriesList, allProductsData } from '../data/categoryData';

const DynamicCategory = () => {
  const { slug } = useParams();
  
  const categoryMeta = categoriesList.find(c => c.slug === slug);
  const products = allProductsData[slug];

  if (!categoryMeta || !products) {
    return <Navigate to="/products/categories" replace />;
  }

  return (
    <CategoryTemplate 
      categoryName={categoryMeta.title}
      title={categoryMeta.title}
      description={categoryMeta.desc}
      products={products}
    />
  );
};

export default DynamicCategory;
