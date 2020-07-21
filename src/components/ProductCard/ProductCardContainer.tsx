import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../../types/productTypes';
import { LoadingState } from '../atomics/LoadingState';
import { EditableProductCard } from '../CreateProduct/EditableProductCard';

interface ProductCardContainerProps {
  productData?: Product;
  isAdmin?: boolean; // [matt] Used for adding a delete button
  isLoading?: boolean;
  isEditing?: boolean;
  titleReactState?: [string, React.Dispatch<React.SetStateAction<string>>];
}

export const ProductCardContainer: React.FC<ProductCardContainerProps> = ({
  productData,
  isLoading = false,
  isEditing = false,
  titleReactState,
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
          titleReactState={titleReactState}
        />
      )}
    </div>
  );
};
