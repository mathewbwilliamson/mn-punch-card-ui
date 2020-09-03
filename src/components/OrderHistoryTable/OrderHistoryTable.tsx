import React from 'react';
import { Table } from 'antd';
import { orderHistoryTableColumns } from './OrderHistoryTableColumns';
import { useOvermind } from '../../store';

export const OrderHistoryTable: React.FC = () => {
  const { state, actions } = useOvermind();

  React.useEffect(() => {
    actions.OrderHistoryStore.getOrderHistoryFromApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(
    '\x1b[41m%s \x1b[0m',
    '[matt] state',
    state.OrderHistoryStore.orderHistory
  );

  return (
    <div className='bg-gray-300'>
      <Table
        columns={orderHistoryTableColumns}
        dataSource={state.OrderHistoryStore.orderHistory}
      />
    </div>
  );
};
