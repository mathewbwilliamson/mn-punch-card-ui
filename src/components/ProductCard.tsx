import React from 'react';
import { Product } from '../types/productTypes';

interface ProductCardProps {
  productData: Product;
  isAdmin?: boolean; // [matt] Used for adding a delete button
}

export const ProductCard: React.FC<ProductCardProps> = ({ productData }) => {
  return (
    <div className='text-gray-900 m-4 border p-4'>
      <div>Name: {productData.title}</div>
      <div>Price: {productData.price}</div>
      <img src={productData.imageUrl} alt={`${productData.title}`} />
    </div>
  );
};
