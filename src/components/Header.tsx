import React from 'react';
import { CreateProductButton } from './CreateProduct/CreateProductButton';

interface HeaderProps {
  isAdmin?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isAdmin = false }) => {
  return (
    <div className='flex'>
      <div>This is the header</div>
      {isAdmin && <CreateProductButton />}
    </div>
  );
};
