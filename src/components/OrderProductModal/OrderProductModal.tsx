import React from 'react';
import './OrderProductModal.css';
import { Product } from '../../types/productTypes';
import { Input, Form, Checkbox, Button, Select } from 'antd';
import { MdClose } from 'react-icons/md';
import { Store } from 'antd/lib/form/interface';

interface OrderProductModalProps {
  handleClose: () => void;
  currentProduct: Product;
}

interface Address {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

interface OrderProductForm {
  firstNameOfChild: string;
  lastNameOfChild: string;
  firstNameOfParent: string;
  lastNameOfParent: string;
  address: Address;
  emailAddressOfParent: string;
  parentApproval: boolean;
}

const onSubmitOrderProduct = (payload: any) => {};

// Have a button to send Autumn and Julie an email with what the kids want. Popup a little
// popup that says "Tell Julie and Autumn about this product": what they want,
// student first/last name, parent first/last name, shipping address, Parent's email address,
// Parent Approval checkbox. "I understand that I spending X punch cards on this item, and there
// are no refunds. Are you sure you want this?" Then form emails to Julie and Autumn.
export const OrderProductModal: React.FC<OrderProductModalProps> = ({
  handleClose,
  currentProduct,
}) => {
  const initialValues: OrderProductForm = {
    firstNameOfChild: '',
    lastNameOfChild: '',
    firstNameOfParent: '',
    lastNameOfParent: '',
    emailAddressOfParent: '',
    address: {
      streetAddress: '',
      city: 'Tampa',
      state: 'FL',
      zipCode: '',
    },
    parentApproval: false,
  };
  const { Option } = Select;

  const onSubmitComplete = (values: Store) => {
    console.log('\x1b[41m%s \x1b[0m', '[matt] values', values);
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
        return (
          form.isFieldValidating(field) ||
          !form.isFieldTouched(field) ||
          form.getFieldError(field).length > 0
        );
      })
      .some((item) => !!item);
  };
  // const onGenderChange = (value: any) => {
  //   switch (value) {
  //     case 'male':
  //       form.setFieldsValue({ state: 'Hi, man!' });
  //       return;
  //     case 'female':
  //       form.setFieldsValue({ state: 'Hi, lady!' });
  //       return;
  //     case 'other':
  //       form.setFieldsValue({ state: 'Hi there!' });
  //       return;
  //   }
  // };
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
        name='basic'
        initialValues={initialValues}
        onFinish={onSubmitComplete}
      >
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
        {/* <Form.Item
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
            onChange={onGenderChange}
            allowClear
          >
            <Option value='male'>male</Option>
            <Option value='female'>female</Option>
            <Option value='other'>other</Option>
          </Select>{' '}
        </Form.Item> */}
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
          <Input />
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

        <Form.Item shouldUpdate={true} {...tailLayout}>
          {() => {
            console.log(
              '\x1b[44m%s \x1b[0m',
              '[matt] isFormDisabled()',
              isFormDisabled()
            );
            return (
              <Button
                type='primary'
                htmlType='submit'
                disabled={isFormDisabled()}
              >
                Submit
              </Button>
            );
          }}
        </Form.Item>
      </Form>
    </div>
  );
};
