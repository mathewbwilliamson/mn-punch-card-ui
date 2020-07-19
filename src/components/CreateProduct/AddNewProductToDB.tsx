import React from 'react';
import { Button } from '../atomics/Button';

interface AddNewProductToDBProps {
  handleClick?: () => void;
}

export const AddNewProductToDB: React.FC<AddNewProductToDBProps> = ({
  handleClick,
}) => {
  return (
    <Button
      text='Add Product'
      onClick={handleClick}
      containerClassNames={'absolute right-0 bottom-0 mr-6 mb-4'}
    />
  );
};
