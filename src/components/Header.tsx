import React from 'react';
import { CreateProductButton } from './CreateProductButton';

interface HeaderProps {
  isAdmin?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isAdmin = false }) => {
  return (
    <div>
      This is the header
      {isAdmin && <CreateProductButton />}
    </div>
  );
};
