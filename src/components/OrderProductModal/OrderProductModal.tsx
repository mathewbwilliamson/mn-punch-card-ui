import React from 'react';
import './OrderProductModal.css';
import { Input, Form, Checkbox, Button, Select, Typography } from 'antd';
import { MdClose } from 'react-icons/md';
import { Store } from 'antd/lib/form/interface';
import { states } from '../../utils/states';
import { OrderProductForm } from '../../types/productTypes';

const { Title } = Typography;

interface OrderProductModalProps {
  handleClose: () => void;
  onSubmitOrder: (values: OrderProductForm) => void;
  cardPrice: number;
  isOrderSubmitting: boolean;
}

export const OrderProductModal: React.FC<OrderProductModalProps> = ({
  handleClose,
  onSubmitOrder,
  cardPrice,
}) => {
  const initialValues: OrderProductForm = {
    firstNameOfChild: '',
    lastNameOfChild: '',
    firstNameOfParent: '',
    lastNameOfParent: '',
    emailAddressOfParent: '',
    streetAddress: '',
    city: 'Tampa',
    state: 'FL',
    zipCode: '',
    parentApproval: false,
  };
  const { Option } = Select;

  const onSubmitComplete = (values: Store) => {
    onSubmitOrder(values as OrderProductForm);
    handleClose();
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const [form] = Form.useForm();

  const baseRules = {
    required: true,
    whitespace: true,
  };

  const isFormDisabled = () => {
    return Object.keys(form.getFieldsValue() as OrderProductForm)
      .map((field) => {
        if (field === 'parentApproval') {
          return !form.isFieldTouched(field) || !form.getFieldValue(field);
        }

        return (
          form.isFieldValidating(field) ||
          (!form.isFieldTouched(field) && !form.getFieldValue(field)) ||
          form.getFieldError(field).length > 0
        );
      })
      .some((item) => !!item);
  };

  const onStateChange = (value: any) => {
    form.setFieldsValue({ state: value });
  };

  return (
    <div className='order-product-modal__container bg-white w-full h-full p-8'>
      <button
        className='absolute top-0 right-0 mr-4 mt-3'
        onClick={handleClose}
      >
        <MdClose className='fill-current text-gray-600' />
      </button>
      <Form
        {...layout}
        form={form}
        name='orderProductModal'
        initialValues={initialValues}
        onFinish={onSubmitComplete}
      >
        <Title level={4}>Order from Julie and Autumn</Title>
        <Form.Item
          label='First Name of Child'
          name='firstNameOfChild'
          rules={[
            {
              ...baseRules,
              message: "Please input the child's first name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Last Name of Child'
          name='lastNameOfChild'
          rules={[
            { ...baseRules, message: "Please input the child's last name" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='First Name of Parent'
          name='firstNameOfParent'
          rules={[
            {
              ...baseRules,
              message: "Please input the parent's first name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Last Name of Parent'
          name='lastNameOfParent'
          rules={[
            {
              ...baseRules,
              message: "Please input the parent's last name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Email Address of Parent'
          name='emailAddressOfParent'
          rules={[
            {
              ...baseRules,
              message: "Please input the parent's email address",
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Shipping Address'
          name='streetAddress'
          rules={[
            {
              ...baseRules,
              message: 'Please input the shipping address',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='City'
          name='city'
          initialValue='Tampa'
          rules={[
            {
              ...baseRules,
              message: 'Please input the city',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='State'
          name='state'
          rules={[
            {
              ...baseRules,
              message: 'Please input the state',
            },
          ]}
        >
          <Select
            placeholder='Select a option and change input text above'
            onChange={onStateChange}
            allowClear
          >
            {states.map((state) => (
              <Option key={state} value={state}>
                {state}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label='Zip Code'
          name='zipCode'
          rules={[
            {
              ...baseRules,
              message: 'Please input the zip code',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...tailLayout}
          name='parentApproval'
          valuePropName='checked'
        >
          <Checkbox>Parent approves of purchase?</Checkbox>
        </Form.Item>

        <div className='mb-6'>
          I understand that I am spending <b>{cardPrice} punch cards</b> on this
          item, and there are no refunds. Are you sure you want this?
        </div>

        <Form.Item shouldUpdate={true} {...tailLayout}>
          {() => {
            return (
              <>
                <div>
                  <Button onClick={handleClose} className='mr-4'>
                    Cancel
                  </Button>
                  <Button
                    type='primary'
                    htmlType='submit'
                    disabled={isFormDisabled()}
                  >
                    Submit
                  </Button>
                </div>
              </>
            );
          }}
        </Form.Item>
      </Form>
    </div>
  );
};
