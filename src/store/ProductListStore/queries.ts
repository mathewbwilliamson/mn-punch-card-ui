import axios from "axios";
import { useQuery } from "react-query";

export const useProducts = () => {
  return useQuery("products", async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/amazon`
    );
    return data;
  });
}