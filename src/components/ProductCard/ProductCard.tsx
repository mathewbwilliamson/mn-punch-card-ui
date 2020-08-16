import React from 'react';
import { Product, OrderProductForm } from '../../types/productTypes';
import { calculateRewardCardPrice } from '../../utils/calculateRewardCardPrice';
import Popup from 'reactjs-popup';
import './productCard.css';
import { Card, Button } from 'antd';
import { OrderProductModal } from '../OrderProductModal/OrderProductModal';
import { useOvermind } from '../../store';

interface ProductCardProps {
  productData?: Product;
  isAdmin?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ productData }) => {
  const { actions } = useOvermind();
  const [isOrderSubmitting, setIsOrderSubmitting] = React.useState<boolean>(
    false
  );

  if (!productData) {
    return null;
  }

  const onSubmitOrder = async (values: OrderProductForm) => {
    setIsOrderSubmitting(true);

    const newOrder = {
      product: { ...productData },
      order: {
        firstNameOfChild: values.firstNameOfChild,
        lastNameOfChild: values.lastNameOfChild,
        firstNameOfParent: values.firstNameOfParent,
        lastNameOfParent: values.lastNameOfParent,
        streetAddress: values.streetAddress,
        city: values.city,
        state: values.state,
        zipCode: values.zipCode,
        emailAddressOfParent: values.emailAddressOfParent,
        parentApproval: values.parentApproval,
      },
    };
    await actions.ProductDetailStore.submitOrder(newOrder);
    setIsOrderSubmitting(false);
  };

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
            <a
              href={productData.link}
              target='_blank'
              className='flex items-center justify-center'
            >
              <img src={productData.imageUrl} alt={`${productData.title}`} />
            </a>
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
              <Button type='primary' className='w-full'>
                Buy with Cards!
              </Button>
            </div>
          }
          modal={true}
          closeOnDocumentClick={false}
        >
          {(handleClose) => (
            <OrderProductModal
              handleClose={handleClose}
              onSubmitOrder={onSubmitOrder}
              cardPrice={productData.rewardCardPrice}
              isOrderSubmitting={isOrderSubmitting}
            />
          )}
        </Popup>
      </div>
    </Card>
  );
};
