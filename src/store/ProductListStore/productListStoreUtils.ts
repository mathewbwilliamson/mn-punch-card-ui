import { Product } from '../../types/productTypes';

export enum SortType {
  ASC = 'asc',
  DESC = 'desc',
}
export const sortProducts = (
  productList: Product[],
  type: SortType = SortType.DESC
) => {
  return productList.sort((a, b) => {
    if (a.rewardCardPrice < b.rewardCardPrice) {
      return type === SortType.DESC ? -1 : 1;
    } else if (a.rewardCardPrice === b.rewardCardPrice) {
      return 0;
    } else {
      return type === SortType.DESC ? 1 : -1;
    }
  });
};
