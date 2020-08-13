import React from 'react';
import { Product } from '../../types/productTypes';
import { EditableProductCard } from './EditableProductCard';
import { Button } from '../atomics/Button';
import { useOvermind } from '../../store';
import { LoadingState } from '../atomics/LoadingState';

interface EditableProductCardContainerProps {
  product?: Product;
}

export const EditableProductCardContainer: React.FC<EditableProductCardContainerProps> = ({
  product,
}) => {
  const { actions } = useOvermind();

  const [isRefreshLoading, setIsRefreshLoading] = React.useState<boolean>(
    false
  );
  const [title, setTitle] = React.useState<string>(
    !!product ? product.title : ''
  );

  if (!product) {
    return null;
  }

  const handleBlur = () => {
    actions.ProductDetailStore.updateProduct({ id: product.id, title });
  };

  return (
    <div className='product-card__container text-gray-900 bg-white border p-4 h-full w-full flex flex-col items-center overflow-y-hidden'>
      <LoadingState isLoading={isRefreshLoading} />
      {!isRefreshLoading && (
        <EditableProductCard
          productData={product}
          title={title}
          setTitle={setTitle}
          handleBlur={handleBlur}
        />
      )}
      <div className='flex flex-row justify-end w-full mt-6'>
        <Button
          buttonClassNames='px-4 py-1 mr-4'
          text='Refresh'
          onClick={async () => {
            setIsRefreshLoading(true);
            await actions.ProductDetailStore.refreshProduct({
              id: product.id,
              asin: product.asin,
            });
            setIsRefreshLoading(false);
          }}
        />
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
