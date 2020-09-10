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
  state.ProductListStore.productList = productListData;
};

export const getAmazonApiUsage: AsyncAction = async ({ state, effects }) => {
  const apiAccountData = await effects.ProductListStore.ProductListEffect.getAmazonApiUsage();
  state.ProductListStore.apiInformation = apiAccountData;
};
