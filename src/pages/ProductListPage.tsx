import React from 'react';
import { ProductList } from '../components/ProductList/ProductList';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useOvermind } from '../store';

export const ProductListPage: React.FC = () => {
  const { state } = useOvermind();
  const thing = state.ProductListStore.test;

  console.log('\x1b[41m%s \x1b[0m', '[matt] thing', thing);
  return (
    <div>
      <Header isAdmin={false} />
      <ProductList />
      <Footer />
    </div>
  );
};
