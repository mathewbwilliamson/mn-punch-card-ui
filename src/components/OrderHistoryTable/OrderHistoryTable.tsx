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
    console.log('\x1b[42m%s \x1b[0m', '[matt] hide id', id);
    actions.OrderHistoryStore.hideOrder(id);
  };

  const onItemDelete = (id: number) => {
    console.log('\x1b[42m%s \x1b[0m', '[matt] delete id', id);
  };

  const orderHistoryTableCreatorProps: OrderHistoryTableCreator = {
    onDelete: onItemDelete,
    onHide: onItemHide,
  };

  // [matt] Hiding I think will send a thing to the DB for a new column called isHidden
  // When that record comes back here, the table sees that and prints nothing

  // [matt] Delete button will say isDeleted = true on DB record. Then the DB will not return
  // the isDeleted records so front end doesn't have to do anything

  // [matt] Need a patch operation so on click of either of these buttons, it updates the DB
  // with isHidden or isDeleted
  const orderHistoryColumns = orderHistoryTableCreator(
    orderHistoryTableCreatorProps
  );

  return (
    <div className='bg-gray-300'>
      <Table
        // rowSelection={rowSelection}
        columns={orderHistoryColumns}
        dataSource={sortedOrderHistory}
      />
    </div>
  );
};
