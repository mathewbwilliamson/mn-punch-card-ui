import React from 'react';
import { ColumnsType } from 'antd/lib/table';
import { ProductOrderHistory } from '../../types/productTypes';

export const orderHistoryTableColumns: ColumnsType<ProductOrderHistory> = [
  { title: 'Order ID', dataIndex: 'id', key: 'id' },
  {
    title: 'Child First Name',
    dataIndex: 'firstNameOfChild',
    key: 'firstNameOfChild',
  },
  {
    title: 'Child Last Name',
    dataIndex: 'lastNameOfChild',
    key: 'lastNameOfChild',
  },
  {
    title: 'Parent Email Address',
    dataIndex: 'emailAddressOfParent',
    key: 'emailAddressOfParent',
  },
  {
    title: 'Parent Address',
    dataIndex: 'streetAddress',
    key: 'streetAddress',
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
    render: (productTitle: string, orderData: ProductOrderHistory) => {
      return <a href={orderData.link}>{productTitle}</a>;
    },
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (price: string) => `$${price}`,
  },
  {
    title: 'Reward Card Price',
    dataIndex: 'rewardCardPrice',
    key: 'rewardCardPrice',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (createdAt: string) => {
      const dateObject = new Date(createdAt);
      const dateStr = dateObject.toLocaleDateString();
      const timeStr = dateObject.toLocaleTimeString();
      return `${dateStr} ${timeStr}`;
    },
  },
];
