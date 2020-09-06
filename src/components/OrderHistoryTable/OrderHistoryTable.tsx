import React from 'react';
import { Table } from 'antd';
import { orderHistoryTableColumns } from './OrderHistoryTableColumns';
import { useOvermind } from '../../store';

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

  return (
    <div className='bg-gray-300'>
      <Table
        // rowSelection={rowSelection}
        columns={orderHistoryTableColumns}
        dataSource={sortedOrderHistory}
      />
    </div>
  );
};
