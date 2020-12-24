import axios from "axios";
import { useQuery } from "react-query";
import { Product } from "../../types/productTypes";

export const useProducts = () => {
  return useQuery("products", async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/amazon`
    );
    return data as Product[];
  });
}