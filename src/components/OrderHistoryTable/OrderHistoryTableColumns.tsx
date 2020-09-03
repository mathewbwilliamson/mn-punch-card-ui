import React from 'react';
import { ColumnsType } from 'antd/lib/table';
import { ProductOrderHistory } from '../../types/productTypes';

export const orderHistoryTableColumns: ColumnsType<ProductOrderHistory> = [
  // [matt] add the checkbox
  {
    title: 'Has Been Ordered?',
    dataIndex: 'isOrdered',
    key: 'isOrdered',
  },
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
    // render: () => <div></div>
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
    key: 'createdAt', // [matt] Format this better
  },
];
