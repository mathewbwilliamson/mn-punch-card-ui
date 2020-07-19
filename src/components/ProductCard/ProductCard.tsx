import React from 'react';
import { Product } from '../../types/productTypes';
import { calculateRewardCardPrice } from '../../utils/calculateRewardCardPrice';

interface ProductCardProps {
  productData?: Product;
  isAdmin?: boolean; // [matt] Used for adding a delete button
}

export const ProductCard: React.FC<ProductCardProps> = ({ productData }) => {
  if (!productData) {
    return null;
  }
  return (
    <div className='product-card__container text-gray-900 border p-4 h-full w-full flex flex-col items-center overflow-y-hidden bg-white'>
      <div>Name: {productData.title}</div>
      <div>Cards: {calculateRewardCardPrice(productData.price)}</div>
      <img src={productData.imageUrl} alt={`${productData.title}`} />
    </div>
  );
};
