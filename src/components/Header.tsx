import React from 'react';
import { HeaderActions } from './HeaderActions';
import logo from '../assets/images/Mathnasium_logo.png';

interface HeaderProps {
  isAdmin?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isAdmin = false }) => {
  return (
    <div className='header flex w-full flex flex-col items-center mb-8 bg-white'>
      <div className='flex w-full flex flex-col md:flex-row justify-center items-center py-10 pl-12 pr-12 mn-bg-black text-white'>
        <img src={logo} alt='logo' className='h-16 mb-2 mr-4' />
        <h2 className='text-3xl w-full font-serif text-center text-white'>
          New Tampa Reward Cabinet
        </h2>
        {isAdmin && <HeaderActions />}
      </div>
    </div>
  );
};
