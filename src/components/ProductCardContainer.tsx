import React from 'react';
import { Product } from '../types/productTypes';
import { Input } from './atomics/Input';
import { LoadingState } from './atomics/LoadingState';
import { ProductCard } from './ProductCard';
import { EditableProductCard } from './CreateProduct/EditableProductCard';

interface ProductCardContainerProps {
  productData?: Product;
  isAdmin?: boolean; // [matt] Used for adding a delete button
  isLoading?: boolean;
  isEditing?: boolean;
}

export const ProductCardContainer: React.FC<ProductCardContainerProps> = ({
  productData,
  isLoading = false,
  isEditing = false,
}) => {
  return (
    <div className='product-card__container text-gray-900 m-4 border p-4 h-full w-full flex flex-col items-center overflow-y-hidden'>
      <LoadingState isLoading={isLoading} />
      {!isLoading && !!productData && !isEditing && (
        <ProductCard productData={productData} />
      )}
      {!isLoading && !!productData && isEditing && (
        <EditableProductCard productData={productData} />
      )}
    </div>
  );
};
