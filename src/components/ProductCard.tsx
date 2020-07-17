import React from 'react';

interface ProductCardProps {
  productData: any; // [matt] TODO Fix this any
}

export const ProductCard: React.FC<ProductCardProps> = () => {
  return <div className='product-card__container'>Product Card</div>;
};
