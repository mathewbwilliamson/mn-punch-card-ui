import React from 'react';
import { Product } from '../types/productTypes';
import { Input } from './atomics/Input';
import { LoadingState } from './atomics/LoadingState';

interface ProductCardProps {
  productData?: Product;
  isAdmin?: boolean; // [matt] Used for adding a delete button
  isLoading?: boolean;
  isEditing?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  productData,
  isLoading = false,
  isEditing = false,
}) => {
  console.log('\x1b[41m%s \x1b[0m', '[matt] productData', productData);
  return (
    <div className='product-card__container text-gray-900 m-4 border p-4 h-full w-full flex flex-col items-center overflow-y-hidden'>
      <LoadingState isLoading={isLoading} />
      {!isLoading && !!productData && (
        <>
          {!isEditing ? (
            <div>Name: productData.title</div>
          ) : (
            <Input name='title' value={productData.title} />
          )}
          <div>Price: {productData.price}</div>
          <img src={productData.imageUrl} alt={`${productData.title}`} />
        </>
      )}
    </div>
  );
};
