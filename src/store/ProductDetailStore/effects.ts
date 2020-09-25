import axios from 'axios';
import { Product, NewOrder, ItemError } from '../../types/productTypes';

export const ProductDetailEffect = {
  deleteProductFromApi: async (id: number) => {
    return await axios.delete(
      `${process.env.REACT_APP_API_ENDPOINT}/amazon/${id}`
    );
  },
  updateProduct: async (id: number, productAttributes: Partial<Product>) => {
    return await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/amazon/${id}`,
      { productAttributes }
    );
  },
  findAmazonProduct: async (asin: string) => {
    return (await axios(`${process.env.REACT_APP_API_ENDPOINT}/amazon/${asin}`))
      .data as Product;
  },
  refreshProduct: async (id: number, asin: string, title: string) => {
    return (
      await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/amazon/refresh/${id}`,
        { asin, title }
      )
    ).data as Product | ItemError;
  },
  submitOrder: async (newOrder: NewOrder) => {
    return await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/email/buyproduct`,
      { newOrder }
    );
  },
};
