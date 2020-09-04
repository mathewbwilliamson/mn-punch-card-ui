import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { OrderHistoryTable } from '../components/OrderHistoryTable/OrderHistoryTable';
import { CurrentAdminPage } from '../types/generalTypes';

// [matt] TODO needs to be protected and created. It should also be the ProductListPage with extra stuff
export const OrderHistoryPage: React.FC = () => {
  return (
    <div className='bg-gray-300'>
      <Header
        isAdmin={true}
        currentAdminPage={CurrentAdminPage.ORDER_HISTORY}
      />
      <OrderHistoryTable />
      <Footer />
    </div>
  );
};
