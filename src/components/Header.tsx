import React from 'react';
import { CreateProductButton } from './CreateProduct/CreateProductButton';
import logo from '../assets/images/Mathnasium_logo.png';

interface HeaderProps {
  isAdmin?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isAdmin = false }) => {
  return (
    <div className='header flex w-full flex flex-col items-center mb-8 bg-white'>
      <div className='flex w-full flex flex-row items-center py-10 pl-12 mn-bg-black text-white'>
        <img src={logo} alt='logo' className='h-16 mb-2 mr-4' />
        <h2 className='text-3xl w-full font-serif'>New Tampa Reward Cabinet</h2>
        {isAdmin && <CreateProductButton />}
      </div>
    </div>
  );
};
