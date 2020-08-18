import { Product } from '../../types/productTypes';
import { derived } from 'overmind';
import { sortProducts, SortType } from './productListStoreUtils';
import { AmazonApiAccountData } from '../../types/generalTypes';

interface ProductListStoreState {
  productList: Product[];
  sortedProductList: Product[];
  asinList: string[];
  apiInformation: AmazonApiAccountData;
}

export const state: ProductListStoreState = {
  productList: [],
  sortedProductList: derived((state) => {
    const productList = [...(state.productList as Product[])];
    sortProducts(productList as Product[], SortType.DESC);

    return productList;
  }),
  asinList: derived((state) => {
    return (state.productList as Product[]).map((product) => product.asin);
  }),
  apiInformation: {
    creditsUsed: 0,
    creditsLimit: 0,
    creditsRemaining: 0,
    overageLimit: 0,
    overageUsed: 0,
  },
};
