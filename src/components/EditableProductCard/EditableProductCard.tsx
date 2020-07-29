import React from 'react';
import { Product } from '../../types/productTypes';
import { Input } from '../atomics/Input';
import { calculateRewardCardPrice } from '../../utils/calculateRewardCardPrice';
import { MdArrowForward } from 'react-icons/md';
import { LoadingState } from '../atomics/LoadingState';

interface EditableProductCardProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  productData?: Product;
  handleBlur?: () => void;
  isLoading?: boolean;
}

export const EditableProductCard: React.FC<EditableProductCardProps> = ({
  productData,
  title,
  setTitle,
  handleBlur,
  isLoading = false,
}) => {
  if (!productData) {
    return null;
  }

  console.log('\x1b[41m%s \x1b[0m', '[matt] title', title);

  return (
    <div className='w-full'>
      <LoadingState isLoading={isLoading} />

      {!isLoading && (
        <>
          <Input
            name='title'
            label='Title'
            value={title}
            inputClassNames='w-full'
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleBlur}
          />
          <div className='pt-2 pb-2'>
            <span>Price: ${productData.price}</span>
            <span className='mx-4'>
              <MdArrowForward className='inline-block' />
            </span>
            <span>{calculateRewardCardPrice(productData.price)} Cards</span>
          </div>
          <img
            className='mx-auto'
            src={productData.imageUrl}
            alt={`${productData.title}`}
          />
        </>
      )}
    </div>
  );
};
