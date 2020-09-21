import { AsyncAction } from 'overmind';

export const getOrderHistoryFromApi: AsyncAction = async ({
  state,
  effects,
}) => {
  const orderHistoryData = await effects.OrderHistoryStore.OrderHistoryEffects.getOrderHistoryFromApi();
  state.OrderHistoryStore.orderHistory = orderHistoryData;
};

export const hideOrder: AsyncAction<number, void> = async (
  { state, effects },
  id
) => {
  const existingOrderHistory = [
    ...(state.OrderHistoryStore.orderHistory || []),
  ];
  const existingOrder = existingOrderHistory.find((item) => item.id === id);

  effects.OrderHistoryStore.OrderHistoryEffects.patchOrder(id, {
    isHidden: !existingOrder?.isHidden,
  });

  const newOrderHistory = existingOrderHistory.map((order) => {
    if (order.id === id) {
      return { ...order, isHidden: !order.isHidden };
    } else {
      return order;
    }
  });
  state.OrderHistoryStore.orderHistory = newOrderHistory;
};

export const deleteOrder: AsyncAction<number, void> = async (
  { state, effects },
  id
) => {};
