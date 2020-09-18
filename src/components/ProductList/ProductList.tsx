import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { useOvermind } from '../../store';
import { EditableProductCardContainer } from '../EditableProductCard/EditableProductCardContainer';
import './productList.css';

interface ProductListProps {
  isAdmin?: boolean;
}
export const ProductList: React.FC<ProductListProps> = ({
  isAdmin = false,
}) => {
  const { state, actions } = useOvermind();

  React.useEffect(() => {
    actions.ProductListStore.getProductListFromApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='product-list__container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mx-12 gap-8'>
      {state.ProductListStore.sortedProductList.map((product) => {
        const isErrorItem =
          !product.rewardCardPrice || product.rewardCardPrice === 0;
        if (!isAdmin && isErrorItem) {
          return null;
        }

        return (
          <div key={product.asin}>
            {!isAdmin ? (
              <ProductCard productData={product} isAdmin={isAdmin} />
            ) : (
              <EditableProductCardContainer
                product={product}
                isErrorItem={isErrorItem}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
