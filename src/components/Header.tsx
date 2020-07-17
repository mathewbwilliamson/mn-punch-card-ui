import React from 'react';
import { CreateProductItem } from './CreateProductItem';

interface HeaderProps {
  isAdmin?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isAdmin = false }) => {
  return (
    <div>
      This is the header
      {isAdmin && <CreateProductItem />}
    </div>
  );
};
