import React from 'react';
import { CreateProductButton } from './CreateProduct/CreateProductButton';

interface HeaderProps {
  isAdmin?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isAdmin = false }) => {
  return (
    <div className='flex w-full flex flex-row items-center my-8'>
      <div className='ml-12 w-full'>This is the header</div>
      {isAdmin && <CreateProductButton />}
    </div>
  );
};
