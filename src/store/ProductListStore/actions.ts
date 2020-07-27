import { AsyncAction } from 'overmind';

export const getProductListFromApi: AsyncAction = async ({
  state,
  effects,
}) => {
  const productListData = await effects.ProductListStore.ProductListEffect.getProductListFromApi();
  state.ProductListStore.productList = productListData;
};
