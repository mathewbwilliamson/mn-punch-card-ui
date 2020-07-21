import { Product } from '../../types/productTypes';

interface ProductListStoreState {
  productList: Product[];
}

export const state: ProductListStoreState = {
  productList: [],
};
