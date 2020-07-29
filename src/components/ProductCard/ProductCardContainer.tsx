import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../../types/productTypes';
import { LoadingState } from '../atomics/LoadingState';
import { EditableProductCard } from '../EditableProductCard/EditableProductCard';

interface ProductCardContainerProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  productData?: Product;
  isAdmin?: boolean; // [matt] Used for adding a delete button
  isLoading?: boolean;
  isEditing?: boolean;
}

export const ProductCardContainer: React.FC<ProductCardContainerProps> = ({
  productData,
  isLoading = false,
  isEditing = false,
  title,
  setTitle,
}) => {
  return (
    <div className='product-card__container text-gray-900 m-4 border p-4 h-full w-full flex flex-col items-center overflow-y-hidden'>
      <LoadingState isLoading={isLoading} />
      {!isLoading && !!productData && !isEditing && (
        <ProductCard productData={productData} />
      )}
      {!isLoading && !!productData && isEditing && (
        <EditableProductCard
          productData={productData}
          title={title}
          setTitle={setTitle}
        />
      )}
    </div>
  );
};
