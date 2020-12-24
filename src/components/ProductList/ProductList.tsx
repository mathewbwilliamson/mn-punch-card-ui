import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { EditableProductCardContainer } from '../EditableProductCard/EditableProductCardContainer';
import './productList.css';
import { useProducts } from '../../store/ProductListStore/queries';
import { sortProducts, SortType } from '../../store/ProductListStore/productListStoreUtils';
import { Product } from '../../types/productTypes';

interface ProductListProps {
  isAdmin?: boolean;
}
export const ProductList: React.FC<ProductListProps> = ({
  isAdmin = false,
}) => {
  const { data, error, isFetching } = useProducts();

  if (isFetching || !!error) {
    return <div>Loading...</div>
  }

  const sortedProducts = sortProducts(data as Product[], SortType.DESC)
  
  return (
    <div className='product-list__container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mx-12 gap-8'>
      {sortedProducts.map((product) => {
        const isErrorItem =
          !product.rewardCardPrice || product.rewardCardPrice === 0;

        if (!isAdmin && (isErrorItem || product.isHidden)) {
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
