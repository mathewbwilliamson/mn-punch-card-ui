import axios from 'axios';
import { Product } from '../../types/productTypes';

export const ProductListEffect = {
  getProductListFromApi: async () => {
    return await axios(`${process.env.REACT_APP_API_ENDPOINT}/amazon`).then(
      (response) => response.data as Product[]
    );
  },
  refreshAllProducts: async () => {
    return await axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/amazon/refresh`)
      .then((response) => response.data as Product[]);
  },
};
