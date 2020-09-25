import React from 'react';
import { Product } from '../../types/productTypes';
import { EditableProductCard } from './EditableProductCard';
import { Button } from '../atomics/Button';
import { useOvermind } from '../../store';
import { LoadingState } from '../atomics/LoadingState';
import { notification, Tag } from 'antd';
import { toaster, ToasterType } from '../Toaster/Toaster';
import { state } from '../../store/ProductListStore';
import { ExclamationCircleOutlined } from '@ant-design/icons';

interface EditableProductCardContainerProps {
  product?: Product;
  isErrorItem?: boolean;
}

export const EditableProductCardContainer: React.FC<EditableProductCardContainerProps> = ({
  product,
  isErrorItem,
}) => {
  const { actions, state } = useOvermind();

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
    actions.ProductDetailStore.updateProduct({
      id: product.id,
      productAttributes: { title },
    });
  };

  return (
    <div className='product-card__container text-gray-900 bg-white border p-4 h-full w-full flex flex-col items-center overflow-y-hidden'>
      <LoadingState isLoading={isRefreshLoading} />
      {(isErrorItem || product.isHidden) && (
        <Tag
          icon={<ExclamationCircleOutlined className='mb-1' />}
          className='self-end'
          color='orange'
        >
          Product is Not Public
        </Tag>
      )}
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
              title: product.title,
            });
            setIsRefreshLoading(false);

            if (!!state.ProductDetailStore.productError?.errorMessage) {
              toaster(
                'Refresh Error!',
                state.ProductDetailStore.productError?.errorMessage,
                ToasterType.ERROR
              );
              actions.ProductDetailStore.clearErrorMessage();
            } else {
              toaster(
                'Success!',
                'The product has been successfully refreshed!',
                ToasterType.SUCCESS
              );
            }
          }}
        />
        <Button
          buttonClassNames='px-4 py-1 mr-4'
          text='Hide'
          onClick={() =>
            actions.ProductDetailStore.updateProduct({
              id: product.id,
              productAttributes: { isHidden: !product.isHidden },
            })
          }
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
