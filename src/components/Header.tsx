import React from 'react';
import { CreateProductButton } from './CreateProduct/CreateProductButton';

interface HeaderProps {
  isAdmin?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isAdmin = false }) => {
  return (
    <div className='header flex w-full flex flex-col items-center mb-8 bg-white'>
      <div className='mn-bg-yellow h-2 w-full mb-4'></div>
      <div className='flex w-full flex flex-row items-center pb-4'>
        <div className='ml-12 w-full'>This is the header</div>
        {isAdmin && <CreateProductButton />}
      </div>
      <div className='h-4 w-full'>
        <div className='mn-bg-black h-2 w-full'></div>
        <div className='mn-bg-light-red h-2 w-full'></div>
      </div>
    </div>
  );
};
