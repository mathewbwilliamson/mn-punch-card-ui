import { Product, ItemError } from '../../types/productTypes';

interface ProductDetailStoreState {
  currentProduct?: Product;
  productError?: ItemError;
}

export const state: ProductDetailStoreState = {
  currentProduct: undefined,
  productError: undefined,
};
