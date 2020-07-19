import React from 'react';
import { Product } from '../../types/productTypes';
import { Input } from '../atomics/Input';

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
    <div>
      <Input name='title' value={productData.title} />
      <div>Price: {productData.price}</div>
      <img src={productData.imageUrl} alt={`${productData.title}`} />
    </div>
  );
};
