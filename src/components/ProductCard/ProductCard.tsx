import React from 'react';
import { Product } from '../../types/productTypes';
import { calculateRewardCardPrice } from '../../utils/calculateRewardCardPrice';
import Popup from 'reactjs-popup';
import './productCard.css';

interface ProductCardProps {
  productData?: Product;
  isAdmin?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ productData }) => {
  if (!productData) {
    return null;
  }

  return (
    <div className='product-card__container relative text-gray-900 border p-4 h-full w-full flex flex-col items-center overflow-y-hidden bg-white'>
      <div className='absolute top-0 right-0 bg-blue-400 text-white py-2 px-3 rounded-bl-lg'>
        {productData.rewardCardPrice ||
          calculateRewardCardPrice(productData.price)}{' '}
        cards
      </div>
      <Popup
        trigger={
          <div className='product-card__image-container mt-10 mb-6'>
            <img src={productData.imageUrl} alt={`${productData.title}`} />
          </div>
        }
        position='center center'
        on='hover'
      >
        <a
          href={productData.link}
          target='_blank'
          className='flex items-center justify-center'
        >
          <div className='text-center'>View Product</div>
        </a>
      </Popup>
      <div className='text-gray-600 text-lg'>{productData.title}</div>
    </div>
  );
};
