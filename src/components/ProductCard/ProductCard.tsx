import React from 'react';
import { Product } from '../../types/productTypes';
import { calculateRewardCardPrice } from '../../utils/calculateRewardCardPrice';
import { Button } from '../atomics/Button';

interface ProductCardProps {
  productData?: Product;
  isAdmin?: boolean; // [matt] TODO Used for adding a delete button
}

export const ProductCard: React.FC<ProductCardProps> = ({ productData }) => {
  if (!productData) {
    return null;
  }
  return (
    <div className='product-card__container relative text-gray-900 border p-4 h-full w-full flex flex-col items-center overflow-y-hidden bg-white'>
      <div className='absolute top-0 right-0 bg-blue-400 text-white py-2 px-3 rounded-bl-lg'>
        {productData.rewardCardPrice ||
          calculateRewardCardPrice(productData.price)}{' '}
        cards
      </div>
      <img src={productData.imageUrl} alt={`${productData.title}`} />
      <div className='text-gray-600 text-lg'>{productData.title}</div>
      <div className='flex flex-row justify-end w-full absolute bottom-0 right-0 my-4 mt-6'>
        <Button buttonClassNames='mr-4 px-4 py-1' text='Delete' />
        <Button buttonClassNames='mr-4 px-4 py-1' text='Edit' />
      </div>
    </div>
  );
};
