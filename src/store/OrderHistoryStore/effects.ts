import axios from 'axios';
import { ProductOrderHistory } from '../../types/productTypes';

export const OrderHistoryEffects = {
  getOrderHistoryFromApi: async () => {
    return await axios(
      `${process.env.REACT_APP_API_ENDPOINT}/orderproduct`
    ).then((response) => response.data as ProductOrderHistory[]);
  },
  patchOrder: async (id: number, payload: Partial<ProductOrderHistory>) => {
    return await axios.patch(
      `${process.env.REACT_APP_API_ENDPOINT}/orderproduct/${id}`,
      payload
    );
  },
  deleteOrder: async (id: number) => {
    return await axios.delete(
      `${process.env.REACT_APP_API_ENDPOINT}/orderproduct/${id}`
    );
  },
};
