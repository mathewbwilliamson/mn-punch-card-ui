import { AsyncAction, Action } from 'overmind';
import { NewOrder } from '../../types/productTypes';

export const deleteProductFromApi: AsyncAction<number, void> = async (
  { state, effects },
  id: number
) => {
  await effects.ProductDetailStore.ProductDetailEffect.deleteProductFromApi(id);
  state.ProductListStore.productList = state.ProductListStore.productList.filter(
    (item) => item.id !== id
  );
};

export const clearProductFromDetailStore: Action<void, void> = ({ state }) => {
  state.ProductDetailStore.currentProduct = undefined;
};

export const updateProduct: AsyncAction<
  { id: number; title: string },
  void
> = async ({ state, effects }, payload: { id: number; title: string }) => {
  await effects.ProductDetailStore.ProductDetailEffect.updateProduct(
    payload.id,
    payload.title
  );

  state.ProductListStore.productList = state.ProductListStore.productList.map(
    (product) => {
      if (product.id === payload.id) {
        return { ...product, title: payload.title };
      }
      return product;
    }
  );
};

export const getAmazonProduct: AsyncAction<string, void> = async (
  { state, effects },
  asin: string
) => {
  state.ProductDetailStore.currentProduct = await effects.ProductDetailStore.ProductDetailEffect.findAmazonProduct(
    asin
  );
};

export const refreshProduct: AsyncAction<
  { id: number; asin: string; title: string },
  void
> = async (
  { state, effects },
  payload: { id: number; asin: string; title: string }
) => {
  const savedItem = await effects.ProductDetailStore.ProductDetailEffect.refreshProduct(
    payload.id,
    payload.asin,
    payload.title
  );

  state.ProductListStore.productList = [
    ...state.ProductListStore.productList.filter(
      (product) => product.id !== payload.id
    ),
    { ...savedItem, id: payload.id },
  ];
};

export const submitOrder: AsyncAction<NewOrder, void> = async (
  { effects },
  newOrder
) => {
  try {
    await effects.ProductDetailStore.ProductDetailEffect.submitOrder(newOrder);
  } catch (err) {
    console.log('Error for Submitting Order: ', err);
  }
};
