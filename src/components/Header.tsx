import React from 'react';
import { CreateProductButton } from './CreateProduct/CreateProductButton';

interface HeaderProps {
  isAdmin?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isAdmin = false }) => {
  return (
    <div className='header flex w-full flex flex-col items-center mb-8 bg-white'>
      <div className='flex w-full flex flex-row items-center p-10 mn-bg-black text-white'>
        <div className='ml-12 w-full'>This is the header</div>
        {isAdmin && <CreateProductButton />}
      </div>
    </div>
  );
};
