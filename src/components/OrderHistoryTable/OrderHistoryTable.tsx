import React from 'react';
import { Table } from 'antd';
import {
  OrderHistoryTableCreator,
  orderHistoryTableCreator,
} from './OrderHistoryTableColumns';
import { useOvermind } from '../../store';
import './OrderHistoryTable.css';

export const OrderHistoryTable: React.FC = () => {
  const { state, actions } = useOvermind();
  // const [selectedRowKeys, setSelectedRowKeys] = React.useState<string[]>([]);

  React.useEffect(() => {
    actions.OrderHistoryStore.getOrderHistoryFromApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const onSelectChange = (selectRowKeys: any, selectedRows: any) => {
  //   console.log(
  //     'selectedRowKeys changed: ',
  //     selectedRowKeys,
  //     selectRowKeys,
  //     selectedRows
  //   );
  //   if (selectedRowKeys.find(selectedRows.id)) {
  //     setSelectedRowKeys(
  //       selectedRowKeys.filter((item) => item === selectedRows.id)
  //     );
  //   } else {
  //     setSelectedRowKeys([...selectedRowKeys, selectedRows.id]);
  //   }
  // };

  // const rowSelection: TableRowSelection<ProductOrderHistory> = {
  //   selectedRowKeys,
  //   onChange: onSelectChange,
  // };

  const sortedOrderHistory = [
    ...(state.OrderHistoryStore.orderHistory || []),
  ]?.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  const onItemHide = (id: number) => {
    actions.OrderHistoryStore.hideOrder(id);
  };

  const onItemDelete = (id: number) => {
    console.log('\x1b[42m%s \x1b[0m', '[matt] delete id', id);
    actions.OrderHistoryStore.deleteOrder(id);
  };

  const orderHistoryTableCreatorProps: OrderHistoryTableCreator = {
    onDelete: onItemDelete,
    onHide: onItemHide,
  };

  const orderHistoryColumns = orderHistoryTableCreator(
    orderHistoryTableCreatorProps
  );

  return (
    <div className='bg-gray-300'>
      <Table
        className='order-history-table__main-table'
        // rowSelection={rowSelection}
        columns={orderHistoryColumns}
        dataSource={sortedOrderHistory}
      />
    </div>
  );
};
