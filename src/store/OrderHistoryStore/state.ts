import { ProductOrderHistory } from '../../types/productTypes';

interface OrderHistoryStoreState {
  orderHistory?: ProductOrderHistory[];
}

export const state: OrderHistoryStoreState = {
  orderHistory: undefined,
};
