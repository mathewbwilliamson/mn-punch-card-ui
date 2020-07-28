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
