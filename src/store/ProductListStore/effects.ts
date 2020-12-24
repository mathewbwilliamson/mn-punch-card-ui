import axios from 'axios';
import { Product } from '../../types/productTypes';
import { AmazonApiAccountData } from '../../types/generalTypes';

export const ProductListEffect = {
  refreshAllProducts: async () => {
    return await axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/amazon/refresh`)
      .then((response) => response.data as Product[]);
  },
  getAmazonApiUsage: async () => {
    return await axios(
      `${process.env.REACT_APP_API_ENDPOINT}/amazon/usage`
    ).then((response) => response.data as AmazonApiAccountData);
  },
};
