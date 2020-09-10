import { RefreshHistoryItem } from '../../types/productTypes';

interface RefreshHistoryState {
  refreshHistory?: RefreshHistoryItem[];
}

export const state: RefreshHistoryState = {
  refreshHistory: undefined,
};
