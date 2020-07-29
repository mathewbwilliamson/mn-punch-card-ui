import React from 'react';
import { Product } from '../../types/productTypes';
import { EditableProductCard } from './EditableProductCard';
import { Button } from '../atomics/Button';
import { useOvermind } from '../../store';

interface EditableProductCardContainerProps {
  product?: Product;
}

export const EditableProductCardContainer: React.FC<EditableProductCardContainerProps> = ({
  product,
}) => {
  const { actions } = useOvermind();

  const [title, setTitle] = React.useState<string>(
    !!product ? product.title : ''
  );

  if (!product) {
    return null;
  }

  const handleBlur = () => {
    console.log('\x1b[41m%s \x1b[0m', '[matt] title', title);
  };

  return (
    <div className='product-card__container text-gray-900 bg-white m-4 border p-4 h-full w-full flex flex-col items-center overflow-y-hidden'>
      <EditableProductCard
        productData={product}
        title={title}
        setTitle={setTitle}
        handleBlur={handleBlur}
      />
      <div className='flex flex-row justify-end w-full mt-6'>
        <Button
          buttonClassNames='px-4 py-1'
          text='Delete'
          onClick={() =>
            actions.ProductDetailStore.deleteProductFromApi(product.id)
          }
        />
      </div>
    </div>
  );
};
