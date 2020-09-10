import axios from 'axios';
import { RefreshHistoryItem } from '../../types/productTypes';

export const RefreshHistoryEffects = {
  getRefreshHistoryFromApi: async () => {
    return await axios(
      `${process.env.REACT_APP_API_ENDPOINT}/refresh-history`
    ).then((response) => response.data as RefreshHistoryItem[]);
  },
};
