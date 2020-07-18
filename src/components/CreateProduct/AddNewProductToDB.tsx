import React from 'react';
import { Button } from '../atomics/Button';
import { Product } from '../../types/productTypes';

interface AddNewProductToDBProps {
  newProduct?: Product;
}

export const AddNewProductToDB: React.FC<AddNewProductToDBProps> = () => {
  return (
    <Button
      text='Add Product'
      onClick={() => {}}
      containerClassNames={'absolute right-0 bottom-0 mr-6 mb-4'}
    />
  );
};
