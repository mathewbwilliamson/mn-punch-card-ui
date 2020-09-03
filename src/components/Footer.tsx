import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { CurrentAdminPage } from '../types/generalTypes';

interface FooterProps {
  currentAdminPage?: CurrentAdminPage;
  isAdmin?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  isAdmin = false,
  currentAdminPage,
}) => {
  const OrderHistoryButton = () => {
    if (CurrentAdminPage.ADMIN_DASHBOARD === currentAdminPage) {
      return (
        <Link to='/admin-order-history'>
          <Button type='primary'>Order History</Button>
        </Link>
      );
    } else if (CurrentAdminPage.ORDER_HISTORY === currentAdminPage) {
      return (
        <Link to='/admin-thisisarealpath-so-this-should-work'>
          <Button type='primary'>Admin Dashboard</Button>
        </Link>
      );
    }
  };
  return (
    <div className='footer flex w-full flex flex-col mt-8'>
      <div className='mn-bg-yellow h-6 w-full'></div>
      <div className='mn-bg-light-red h-24 w-full flex flex-row items-center justify-end pr-6'>
        {isAdmin && OrderHistoryButton()}
      </div>
    </div>
  );
};
