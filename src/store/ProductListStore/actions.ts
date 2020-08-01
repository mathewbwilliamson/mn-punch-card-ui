import { AsyncAction } from 'overmind';
import { sortProducts, SortType } from './productListStoreUtils';

export const getProductListFromApi: AsyncAction = async ({
  state,
  effects,
}) => {
  const productListData = await effects.ProductListStore.ProductListEffect.getProductListFromApi();
  state.ProductListStore.productList = sortProducts(
    productListData,
    SortType.ASC
  );
};
