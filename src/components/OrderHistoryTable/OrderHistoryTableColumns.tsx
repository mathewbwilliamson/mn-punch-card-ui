import React from 'react';
import { ColumnsType } from 'antd/lib/table';
import { ProductOrderHistory } from '../../types/productTypes';
import { Button, Popconfirm } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

export interface OrderHistoryTableCreator {
  onDelete: (id: number) => void;
  onHide: (id: number) => void;
}

export const withHidden = (fragment: JSX.Element, isHidden?: boolean) => {
  return (
    <React.Fragment>
      {!isHidden ? (
        <span className='order-history-table__visible-cell'>{fragment}</span>
      ) : null}
    </React.Fragment>
  );
};

export const orderHistoryTableCreator = ({
  onDelete,
  onHide,
}: OrderHistoryTableCreator) => {
  return [
    {
      title: 'Hide?',
      dataIndex: 'id',
      key: 'id',
      render: (id: number, orderData: ProductOrderHistory) => {
        return (
          <React.Fragment>
            {orderData.isHidden ? (
              <Button
                className='order-history-table__hide flex items-center justify-center mt-0 mb-0 ml-4 p-0'
                icon={<PlusOutlined />}
                onClick={(e) => onHide(id)}
              ></Button>
            ) : (
              <Button
                className='order-history-table__hide flex items-center justify-center mt-0 mb-0 ml-4 p-0'
                icon={<MinusOutlined />}
                onClick={(e) => onHide(id)}
              ></Button>
            )}
          </React.Fragment>
        );
      },
    },
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => b.id - a.id,
      render: (id: number, orderData: ProductOrderHistory) =>
        withHidden(<span>{id}</span>, orderData.isHidden),
    },
    {
      title: 'Child First Name',
      dataIndex: 'firstNameOfChild',
      key: 'firstNameOfChild',
      sorter: (a, b) => b.firstNameOfChild.localeCompare(a.firstNameOfChild),
      render: (firstNameOfChild: string, orderData: ProductOrderHistory) =>
        withHidden(<span>{firstNameOfChild}</span>, orderData.isHidden),
    },
    {
      title: 'Child Last Name',
      dataIndex: 'lastNameOfChild',
      key: 'lastNameOfChild',
      sorter: (a, b) => b.lastNameOfChild.localeCompare(a.lastNameOfChild),
      render: (lastNameOfChild: string, orderData: ProductOrderHistory) =>
        withHidden(<span>{lastNameOfChild}</span>, orderData.isHidden),
    },
    {
      title: 'Parent Email Address',
      dataIndex: 'emailAddressOfParent',
      key: 'emailAddressOfParent',
      sorter: (a, b) =>
        b.emailAddressOfParent.localeCompare(a.emailAddressOfParent),
      render: (emailAddressOfParent: string, orderData: ProductOrderHistory) =>
        withHidden(<span>{emailAddressOfParent}</span>, orderData.isHidden),
    },
    {
      title: 'Parent Address',
      dataIndex: 'streetAddress',
      key: 'streetAddress',
      sorter: (a, b) => b.streetAddress.localeCompare(a.streetAddress),
      render: (streetAddress: string, orderData: ProductOrderHistory) => {
        return withHidden(
          <span>
            {streetAddress}, {orderData.city} {orderData.state}{' '}
            {orderData.zipCode}
          </span>,
          orderData.isHidden
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
        return withHidden(
          <a href={orderData.link}>{productTitle}</a>,
          orderData.isHidden
        );
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      sortDirections: ['descend', 'ascend'],
      render: (price: string, orderData: ProductOrderHistory) =>
        withHidden(<span>{`$${price}`}</span>, orderData.isHidden),
    },
    {
      title: 'Reward Card Price',
      dataIndex: 'rewardCardPrice',
      key: 'rewardCardPrice',
      sorter: (a, b) => a.rewardCardPrice - b.rewardCardPrice,
      sortDirections: ['descend', 'ascend'],
      render: (rewardCardPrice: string, orderData: ProductOrderHistory) =>
        withHidden(<span>{`${rewardCardPrice}`}</span>, orderData.isHidden),
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      sorter: (a, b) => b.createdAt.localeCompare(a.createdAt),
      sortDirections: ['descend', 'ascend'],
      render: (createdAt: string, orderData: ProductOrderHistory) => {
        if (orderData.isHidden) {
          return null;
        }
        const dateObject = new Date(createdAt);
        const dateStr = dateObject.toLocaleDateString();
        const timeStr = dateObject.toLocaleTimeString();
        return `${dateStr} ${timeStr}`;
      },
    },
    {
      title: 'Delete?',
      dataIndex: 'id',
      key: 'id',
      render: (id: number, orderData: ProductOrderHistory) =>
        withHidden(
          <Popconfirm
            title='Are you sure delete this Order History Item?'
            onConfirm={() => onDelete(id)}
            okText='Yes'
            cancelText='No'
            placement='left'
          >
            <Button>Delete</Button>
          </Popconfirm>,
          orderData.isHidden
        ),
    },
  ] as ColumnsType<ProductOrderHistory>;
};
