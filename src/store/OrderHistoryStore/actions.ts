import { AsyncAction } from 'overmind';

export const getOrderHistoryFromApi: AsyncAction = async ({
  state,
  effects,
}) => {
  const orderHistoryData = await effects.OrderHistoryStore.OrderHistoryEffects.getOrderHistoryFromApi();
  state.OrderHistoryStore.orderHistory = orderHistoryData;
};
