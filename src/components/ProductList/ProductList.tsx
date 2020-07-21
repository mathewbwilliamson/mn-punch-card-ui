import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { useOvermind } from '../../store';

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
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mx-12 gap-8'>
      {state.ProductListStore.productList.map((product) => (
        <ProductCard
          key={product.asin}
          productData={product}
          isAdmin={isAdmin}
        />
      ))}
    </div>
  );
};
