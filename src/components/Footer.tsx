import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

interface FooterProps {
  isAdmin?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isAdmin = false }) => {
  const OrderHistoryButton = () => {
    if (isAdmin) {
      return (
        <Link to='/admin-order-history'>
          <Button>Order History</Button>
        </Link>
      );
    }
  };
  return (
    <div className='footer flex w-full flex flex-col mt-8'>
      <div className='mn-bg-yellow h-6 w-full'></div>
      <div className='mn-bg-light-red h-24 w-full flex flex-row'>
        {OrderHistoryButton()}
      </div>
    </div>
  );
};
