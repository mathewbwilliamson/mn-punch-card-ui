import React from 'react';
import { Product } from '../types/productTypes';
import PacmanLoader from 'react-spinners/PacmanLoader';

interface ProductCardProps {
  productData?: Product;
  isAdmin?: boolean; // [matt] Used for adding a delete button
  isLoading?: boolean;
}

// [matt] TODO need to add a max-height to the images. There should be the ability to have more
// than one row!
export const ProductCard: React.FC<ProductCardProps> = ({
  productData,
  isLoading = false,
}) => {
  console.log('\x1b[41m%s \x1b[0m', '[matt] productData', productData);
  return (
    <div className='product-card__container text-gray-900 m-4 border p-4 h-full w-full flex flex-col items-center overflow-y-hidden'>
      {isLoading && (
        <div className='h-full w-full flex justify-center items-center'>
          <PacmanLoader
            css={'align-items: center; justify-content: center'}
            size={30}
            color={'#ee3b34'}
            loading={isLoading}
          />
        </div>
      )}
      {!isLoading && !!productData && (
        <>
          <div>Name: {productData.title}</div>
          <div>Price: {productData.price}</div>
          <img src={productData.imageUrl} alt={`${productData.title}`} />
        </>
      )}
    </div>
  );
};
