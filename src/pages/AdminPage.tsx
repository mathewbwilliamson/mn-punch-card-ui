import React from 'react';
import { ProductList } from '../components/ProductList';
import { Header } from '../components/Header';

// [matt] TODO needs to be protected and created. It should also be the ProductListPage with extra stuff
export const AdminPage: React.FC = () => {
  return (
    <div>
      <Header isAdmin={true} />
      <ProductList isAdmin={true} />
    </div>
  );
};
