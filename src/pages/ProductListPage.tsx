import React from 'react';
import { ProductList } from '../components/ProductList/ProductList';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const ProductListPage: React.FC = () => {
  return (
    <div className='bg-gray-300'>
      <Header isAdmin={false} />
      <ProductList />
      <Footer isAdmin={false} />
    </div>
  );
};
