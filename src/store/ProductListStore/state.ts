import { Product } from '../../types/productTypes';
import { derived } from 'overmind';
import { sortProducts } from './productListStoreUtils';

interface ProductListStoreState {
  productList: Product[];
  sortedProductList: Product[];
}

export const state: ProductListStoreState = {
  productList: [],
  sortedProductList: derived((state) => {
    const productList = [...(state.productList as Product[])];
    sortProducts(productList as Product[]);

    console.log('\x1b[41m%s \x1b[0m', '[matt] productList', productList);
    return productList;
  }),
};
