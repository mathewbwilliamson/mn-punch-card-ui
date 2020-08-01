import { Product } from '../../types/productTypes';
import { derived } from 'overmind';
import { sortProducts, SortType } from './productListStoreUtils';

interface ProductListStoreState {
  productList: Product[];
  sortedProductList: Product[];
}

export const state: ProductListStoreState = {
  productList: [],
  sortedProductList: derived((state) => {
    const productList = [...(state.productList as Product[])];
    sortProducts(productList as Product[], SortType.DESC);

    return productList;
  }),
};
