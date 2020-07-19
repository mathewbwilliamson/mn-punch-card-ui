import React from 'react';
import { Product } from '../../types/productTypes';
import { Input } from '../atomics/Input';
import { calculateRewardCardPrice } from '../../utils/calculateRewardCardPrice';

interface EditableProductCardProps {
  productData?: Product;
}

export const EditableProductCard: React.FC<EditableProductCardProps> = ({
  productData,
}) => {
  if (!productData) {
    return null;
  }

  return (
    <div className='w-full'>
      <Input
        name='title'
        label='Title'
        value={productData.title}
        inputClassNames='w-full'
      />
      <div className='pt-2 pb-2'>
        <span>Price: ${productData.price}</span>
        <span>ARROW</span>
        <span>{calculateRewardCardPrice(productData.price)}</span>
      </div>
      <img
        className='mx-auto'
        src={productData.imageUrl}
        alt={`${productData.title}`}
      />
    </div>
  );
};
