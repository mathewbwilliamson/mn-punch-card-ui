import React from 'react';
import { ProductList } from '../components/ProductList/ProductList';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CurrentAdminPage } from '../types/generalTypes';

// [matt] TODO needs to be protected and created. It should also be the ProductListPage with extra stuff
export const AdminPage: React.FC = () => {
  return (
    <div className='bg-gray-300'>
      <Header
        isAdmin={true}
        currentAdminPage={CurrentAdminPage.ADMIN_DASHBOARD}
      />
      <ProductList isAdmin={true} />
      <Footer />
    </div>
  );
};
