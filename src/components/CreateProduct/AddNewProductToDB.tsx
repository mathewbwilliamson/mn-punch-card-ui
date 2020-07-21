import React from 'react';
import { Button } from '../atomics/Button';

interface AddNewProductToDBProps {
  handleClick?: () => void;
  isDisabled?: boolean;
}

export const AddNewProductToDB: React.FC<AddNewProductToDBProps> = ({
  handleClick,
  isDisabled,
}) => {
  return (
    <Button
      text='Add Product'
      onClick={handleClick}
      containerClassNames={'absolute right-0 bottom-0 mr-6 mb-4'}
      isDisabled={isDisabled}
    />
  );
};
