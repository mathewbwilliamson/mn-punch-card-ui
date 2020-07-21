import { AsyncAction } from 'overmind';

export const getProductListFromApi: AsyncAction = async ({
  state,
  effects,
}) => {
  console.log('\x1b[41m%s \x1b[0m', '[matt] HI');
  const productListData = await effects.ProductListStore.ProductListEffect.getProductListFromApi();
  state.ProductListStore.productList = productListData;
};
