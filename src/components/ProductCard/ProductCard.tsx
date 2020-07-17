import React from 'react';
import { Product } from '../../types/productTypes';
import './ProductCard.css';

interface ProductCardProps {
  productData: Product; // [matt] TODO Fix this any
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
