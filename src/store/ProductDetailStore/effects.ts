import axios from 'axios';

export const ProductDetailEffect = {
  deleteProductFromApi: async (id: number) => {
    return await axios.delete(
      `${process.env.REACT_APP_API_ENDPOINT}/amazon/${id}`
    );
  },
};
