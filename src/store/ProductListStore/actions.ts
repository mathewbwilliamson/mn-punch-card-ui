import { AsyncAction } from 'overmind';

export const getProductListFromApi: AsyncAction = async ({
  state,
  effects,
}) => {
  const productListData = await effects.ProductListStore.ProductListEffect.getProductListFromApi();
  console.log('\x1b[41m%s \x1b[0m', '[matt] productListData', productListData);
  state.ProductListStore.productList = productListData;
};

export const refreshAllProducts: AsyncAction = async ({ state, effects }) => {
  const productListData = await effects.ProductListStore.ProductListEffect.refreshAllProducts();
  state.ProductListStore.productList = productListData;
};

export const getAmazonApiUsage: AsyncAction = async ({ state, effects }) => {
  const apiAccountData = await effects.ProductListStore.ProductListEffect.getAmazonApiUsage();
  state.ProductListStore.apiInformation = apiAccountData;
};
