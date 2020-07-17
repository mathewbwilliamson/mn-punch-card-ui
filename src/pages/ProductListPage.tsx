import React from 'react';
import { ProductCard } from '../components/ProductCard';

export const ProductListPage: React.FC = () => {
  return (
    <div className='product-list-page__container'>
      <ProductCard productData={{}} />
      <ProductCard productData={{}} />
      <ProductCard productData={{}} />
    </div>
  );
};
