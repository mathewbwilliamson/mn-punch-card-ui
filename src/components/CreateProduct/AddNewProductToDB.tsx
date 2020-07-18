import React from 'react';
import { Button } from '../atomics/Button';
import { Product } from '../../types/productTypes';

interface AddNewProductToDBProps {
  newProduct?: Product;
}

export const AddNewProductToDB: React.FC<AddNewProductToDBProps> = () => {
  return (
    <Button
      text='Add New Product'
      onClick={() => {}}
      containerClassNames={'w-full flex justify-end'}
    />
  );
};
