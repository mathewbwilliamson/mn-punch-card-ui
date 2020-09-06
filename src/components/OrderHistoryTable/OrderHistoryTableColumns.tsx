import React from 'react';
import { ColumnsType } from 'antd/lib/table';
import { ProductOrderHistory } from '../../types/productTypes';

export const orderHistoryTableColumns: ColumnsType<ProductOrderHistory> = [
  {
    title: 'Order ID',
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => b.id - a.id,
  },
  {
    title: 'Child First Name',
    dataIndex: 'firstNameOfChild',
    key: 'firstNameOfChild',
    sorter: (a, b) => b.firstNameOfChild.localeCompare(a.firstNameOfChild),
  },
  {
    title: 'Child Last Name',
    dataIndex: 'lastNameOfChild',
    key: 'lastNameOfChild',
    sorter: (a, b) => b.lastNameOfChild.localeCompare(a.lastNameOfChild),
  },
  {
    title: 'Parent Email Address',
    dataIndex: 'emailAddressOfParent',
    key: 'emailAddressOfParent',
    sorter: (a, b) =>
      b.emailAddressOfParent.localeCompare(a.emailAddressOfParent),
  },
  {
    title: 'Parent Address',
    dataIndex: 'streetAddress',
    key: 'streetAddress',
    sorter: (a, b) => b.streetAddress.localeCompare(a.streetAddress),
    render: (streetAddress: string, orderData: ProductOrderHistory) => {
      return (
        <span>
          {streetAddress}, {orderData.city} {orderData.state}{' '}
          {orderData.zipCode}
        </span>
      );
    },
  },
  {
    title: 'Title',
    dataIndex: 'productTitle',
    key: 'productTitle',
    sorter: (a, b) => b.productTitle.localeCompare(a.productTitle),
    sortDirections: ['descend', 'ascend'],
    render: (productTitle: string, orderData: ProductOrderHistory) => {
      return <a href={orderData.link}>{productTitle}</a>;
    },
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => a.price - b.price,
    sortDirections: ['descend', 'ascend'],
    render: (price: string) => `$${price}`,
  },
  {
    title: 'Reward Card Price',
    dataIndex: 'rewardCardPrice',
    key: 'rewardCardPrice',
    sorter: (a, b) => a.rewardCardPrice - b.rewardCardPrice,
    sortDirections: ['descend', 'ascend'],
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
];
