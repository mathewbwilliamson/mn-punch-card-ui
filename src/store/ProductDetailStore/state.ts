import { Product } from '../../types/productTypes';

interface ProductDetailStoreState {
  currentProduct?: Product;
}

export const state: ProductDetailStoreState = {
  currentProduct: undefined,
};
