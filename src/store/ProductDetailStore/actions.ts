import { AsyncAction } from 'overmind';

export const deleteProductFromApi: AsyncAction<number, void> = async (
  { state, effects },
  id: number
) => {
  await effects.ProductDetailStore.ProductDetailEffect.deleteProductFromApi(id);
  state.ProductListStore.productList = state.ProductListStore.productList.filter(
    (item) => item.id !== id
  );
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
