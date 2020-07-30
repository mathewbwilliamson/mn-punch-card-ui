import axios from 'axios';
import { Product } from '../../types/productTypes';

export const ProductDetailEffect = {
  deleteProductFromApi: async (id: number) => {
    return await axios.delete(
      `${process.env.REACT_APP_API_ENDPOINT}/amazon/${id}`
    );
  },
  updateProduct: async (id: number, title: string) => {
    return await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/amazon/${id}`,
      { title }
    );
  },
  findAmazonProduct: async (asin: string) => {
    return (await axios(`${process.env.REACT_APP_API_ENDPOINT}/amazon/${asin}`))
      .data as Product;
  },
  refreshProduct: async (id: number, asin: string) => {
    return (
      await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/amazon/refresh/${id}`,
        { asin }
      )
    ).data as Product;
  },
};
