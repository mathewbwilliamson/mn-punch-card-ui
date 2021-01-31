import React from 'react';
import { CheckOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/lib/table';
import { RefreshHistoryItem } from '../../types/productTypes';
import { TableColumnRefreshButton } from './TableColumnRefreshButton';
import { TableColumnTitleRender } from './TableColumnTitleRender';
import { TableColumnDifference } from './TableColumnDifference';

export const RefreshHistoryTableColumns: ColumnsType<RefreshHistoryItem> = [
  {
    title: 'Order ID',
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => b.id - a.id,
  },
  {
    title: 'ASIN',
    dataIndex: 'asin',
    key: 'asin',
    sorter: (a, b) => b.asin.localeCompare(a.asin),
  },
  {
    title: 'Title',
    dataIndex: 'asin',
    key: 'asinTitle',
    render: (asin: string) => <TableColumnTitleRender asin={asin} />,
  },
  {
    title: 'Successful Refresh?',
    dataIndex: 'errorMessage',
    key: 'errorMessage',
    render: (errorMessage: string) => (
      <div className='refresh-history-table__success'>
        {errorMessage === 'undefined' ? (
          <CheckOutlined style={{ color: 'green' }} />
        ) : (
          <ExclamationCircleOutlined style={{ color: 'red' }} />
        )}
      </div>
    ),
  },
  {
    title: 'Error Message',
    dataIndex: 'errorMessage',
    key: 'errorMessage',
    sorter: (a, b) => b.errorMessage.localeCompare(a.errorMessage),
    render: (errorMessage: string) => (
      <div>{errorMessage !== 'undefined' ? errorMessage : 'No error'}</div>
    ),
  },
  {
    title: 'Old Price',
    dataIndex: 'oldRewardCardPrice',
    key: 'oldRewardCardPrice',
    sorter: (a, b) => b.oldRewardCardPrice - a.oldRewardCardPrice,
    render: (oldRewardCardPrice: number) => <div>{oldRewardCardPrice}</div>,
  },
  {
    title: 'New Price',
    dataIndex: 'newRewardCardPrice',
    key: 'newRewardCardPrice',
    sorter: (a, b) => b.newRewardCardPrice - a.newRewardCardPrice,
    render: (newRewardCardPrice: number) => <div>{newRewardCardPrice}</div>,
  },
  {
    title: 'Difference',
    dataIndex: 'asin',
    key: 'asin',
    align: 'center',
    sorter: (a, b) => {
      return b.oldRewardCardPrice - a.oldRewardCardPrice;
    },
    render: (_, item) => {
      return <TableColumnDifference item={item} />;
    },
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
    sorter: (a, b) => b.createdAt.localeCompare(a.createdAt),
    sortDirections: ['descend', 'ascend'],
    render: (createdAt: string) => {
      const dateObject = new Date(createdAt);
      const dateStr = dateObject.toLocaleDateString();
      const timeStr = dateObject.toLocaleTimeString();
      return `${dateStr} ${timeStr}`;
    },
  },
  {
    title: 'Manual Refresh',
    dataIndex: 'asin',
    key: 'asin',
    render: (asin: string) => <TableColumnRefreshButton asin={asin} />,
  },
];
