import axios from 'axios';

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
};
