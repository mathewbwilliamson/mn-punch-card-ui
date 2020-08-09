import React from 'react';
import { Product } from '../../types/productTypes';
import { calculateRewardCardPrice } from '../../utils/calculateRewardCardPrice';
import Popup from 'reactjs-popup';
import './productCard.css';
import { Card, Button } from 'antd';
import { OrderProductModal } from '../OrderProductModal/OrderProductModal';

interface ProductCardProps {
  productData?: Product;
  isAdmin?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ productData }) => {
  if (!productData) {
    return null;
  }

  return (
    <Card
      hoverable={true}
      className='product-card__container relative text-gray-900 border p-4 h-full w-full flex flex-col items-center overflow-y-hidden bg-white'
    >
      <div className='absolute top-0 right-0 bg-blue-400 text-white py-2 px-3 rounded-bl-lg'>
        {productData.rewardCardPrice ||
          calculateRewardCardPrice(productData.price)}{' '}
        cards
      </div>
      <Popup
        trigger={
          <div className='product-card__image-container mt-10 mb-6 flex justify-center'>
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
      <div className='text-gray-700 text-lg h-16'>{productData.title}</div>

      <div className='order-product-modal w-full'>
        <Popup
          trigger={
            <div className='w-full flex justify-end mt-4'>
              <Button type='primary'>Buy with Cards!</Button>
            </div>
          }
          modal={true}
          closeOnDocumentClick={false}
        >
          {(handleClose) => (
            <OrderProductModal
              handleClose={handleClose}
              currentProduct={productData}
            />
          )}
        </Popup>
      </div>
    </Card>
  );
};
