import React from 'react';
import { ColumnsType } from 'antd/lib/table';
import { ProductOrderHistory } from '../../types/productTypes';
import { Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

export interface OrderHistoryTableCreator {
  onDelete: (id: number) => void;
  onHide: (id: number) => void;
}

// [matt] Create an HOC for the React.Fragment isHidden crap
// When it's minimized and hidden, there should be no padding on the row top and bottom
// but when it's not minimized, it should have the padding

export const orderHistoryTableCreator = ({
  onDelete,
  onHide,
}: OrderHistoryTableCreator) => {
  return [
    {
      // [matt] Click little plus/minus button. It triggers onHide. OnHide flips isHidden from T to F or vice versa
      // It immediately updates the data locally and sends off the patch API call in the background
      title: 'Hide?',
      dataIndex: 'id',
      key: 'id',
      render: (id: number, orderData: ProductOrderHistory) => {
        console.log(
          '\x1b[42m%s \x1b[0m',
          '[matt] orderData',
          orderData.isHidden
        );
        return (
          <React.Fragment>
            {orderData.isHidden ? (
              <Button
                className='order-history-table__hide flex items-center justify-center m-0 p-0'
                icon={<PlusOutlined />}
                onClick={(e) => onHide(id)}
              ></Button>
            ) : (
              <Button
                className='order-history-table__hide flex items-center justify-center m-0 p-0'
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
      render: (id: number, orderData: ProductOrderHistory) => (
        <React.Fragment>
          {!orderData.isHidden ? <span>{id}</span> : null}
        </React.Fragment>
      ),
    },
    {
      title: 'Child First Name',
      dataIndex: 'firstNameOfChild',
      key: 'firstNameOfChild',
      sorter: (a, b) => b.firstNameOfChild.localeCompare(a.firstNameOfChild),
      render: (firstNameOfChild: string, orderData: ProductOrderHistory) => (
        <React.Fragment>
          {!orderData.isHidden ? <span>{firstNameOfChild}</span> : null}
        </React.Fragment>
      ),
    },
    {
      title: 'Child Last Name',
      dataIndex: 'lastNameOfChild',
      key: 'lastNameOfChild',
      sorter: (a, b) => b.lastNameOfChild.localeCompare(a.lastNameOfChild),
      render: (lastNameOfChild: string, orderData: ProductOrderHistory) => (
        <React.Fragment>
          {!orderData.isHidden ? <span>{lastNameOfChild}</span> : null}
        </React.Fragment>
      ),
    },
    {
      title: 'Parent Email Address',
      dataIndex: 'emailAddressOfParent',
      key: 'emailAddressOfParent',
      sorter: (a, b) =>
        b.emailAddressOfParent.localeCompare(a.emailAddressOfParent),
      render: (
        emailAddressOfParent: string,
        orderData: ProductOrderHistory
      ) => (
        <React.Fragment>
          {!orderData.isHidden ? <span>{emailAddressOfParent}</span> : null}
        </React.Fragment>
      ),
    },
    {
      title: 'Parent Address',
      dataIndex: 'streetAddress',
      key: 'streetAddress',
      sorter: (a, b) => b.streetAddress.localeCompare(a.streetAddress),
      render: (streetAddress: string, orderData: ProductOrderHistory) => {
        return (
          <React.Fragment>
            {!orderData.isHidden ? (
              <span>
                {streetAddress}, {orderData.city} {orderData.state}{' '}
                {orderData.zipCode}
              </span>
            ) : null}
          </React.Fragment>
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
        return (
          <React.Fragment>
            {!orderData.isHidden ? (
              <a href={orderData.link}>{productTitle}</a>
            ) : null}
          </React.Fragment>
        );
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      sortDirections: ['descend', 'ascend'],
      render: (price: string, orderData: ProductOrderHistory) => (
        <React.Fragment>
          {!orderData.isHidden ? `$${price}` : null}
        </React.Fragment>
      ),
    },
    {
      title: 'Reward Card Price',
      dataIndex: 'rewardCardPrice',
      key: 'rewardCardPrice',
      sorter: (a, b) => a.rewardCardPrice - b.rewardCardPrice,
      sortDirections: ['descend', 'ascend'],
      render: (rewardCardPrice: string, orderData: ProductOrderHistory) => (
        <React.Fragment>
          {!orderData.isHidden ? `${rewardCardPrice}` : null}
        </React.Fragment>
      ),
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
  ] as ColumnsType<ProductOrderHistory>;
};
