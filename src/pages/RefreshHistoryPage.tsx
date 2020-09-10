import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { RefreshHistoryTable } from '../components/RefreshHistoryTable/RefreshHistoryTable';

// [matt] TODO needs to be protected and created. It should also be the ProductListPage with extra stuff
export const RefreshHistoryPage: React.FC = () => {
  return (
    <div className='bg-gray-300'>
      <Header isAdmin={true} />
      <RefreshHistoryTable />
      <Footer />
    </div>
  );
};
