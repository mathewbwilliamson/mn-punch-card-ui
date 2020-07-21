import React from 'react';
import { Product } from '../../types/productTypes';
import { Input } from '../atomics/Input';
import { calculateRewardCardPrice } from '../../utils/calculateRewardCardPrice';
import { MdArrowForward } from 'react-icons/md';

interface EditableProductCardProps {
  titleReactState?: [string, React.Dispatch<React.SetStateAction<string>>];
  productData?: Product;
}

export const EditableProductCard: React.FC<EditableProductCardProps> = ({
  productData,
  titleReactState,
}) => {
  if (!productData) {
    return null;
  }

  let title: string = productData.title;
  let setTitle: React.Dispatch<React.SetStateAction<string>>;

  if (!!titleReactState) {
    [title, setTitle] = titleReactState;
    title = !title ? productData.title : title;
  }

  return (
    <div className='w-full'>
      <Input
        name='title'
        label='Title'
        value={title}
        inputClassNames='w-full'
        onChange={(e) => setTitle(e.target.value)}
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
    </div>
  );
};
