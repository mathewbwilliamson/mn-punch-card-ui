import { AsyncAction } from 'overmind';

export const getProductListFromApi: AsyncAction = async ({
  state,
  effects,
}) => {
  const productListData = await effects.ProductListStore.ProductListEffect.getProductListFromApi();
  state.ProductListStore.productList = productListData;
};

export const refreshAllProducts: AsyncAction = async ({ state, effects }) => {
  const productListData = await effects.ProductListStore.ProductListEffect.refreshAllProducts();
  console.log('\x1b[44m%s \x1b[0m', '[matt] productListData', productListData);
  // state.ProductListStore.productList = productListData;
};
