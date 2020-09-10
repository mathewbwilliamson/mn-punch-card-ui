import { AsyncAction } from 'overmind';

export const getRefreshHistoryFromApi: AsyncAction = async ({
  state,
  effects,
}) => {
  const refreshHistoryData = await effects.RefreshHistoryStore.RefreshHistoryEffects.getRefreshHistoryFromApi();
  state.RefreshHistoryStore.refreshHistory = refreshHistoryData;
};
