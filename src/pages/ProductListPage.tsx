import React from 'react';
import { ProductList } from '../components/ProductList';
import { Header } from '../components/Header';

export const ProductListPage: React.FC = () => {
  return (
    <div>
      <Header isAdmin={false} />
      <ProductList />
    </div>
  );
};
