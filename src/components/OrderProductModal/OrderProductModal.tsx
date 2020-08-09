import React from 'react';
import './OrderProductModal.css';
import { MdClose } from 'react-icons/md';
import { Product } from '../../types/productTypes';
import { useCustomForm } from '../../hooks/useCustomForm';

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
      city: 'Tampa',
      state: 'FL',
      streetAddress: '',
      zipCode: '',
    },
    parentApproval: false,
  };

  const { values, errors, handleChange, handleSubmit } = useCustomForm<
    OrderProductForm
  >(initialValues, onSubmitOrderProduct);

  return (
    <div className='order-product-modal__container bg-white'>
      <button
        className='absolute top-0 right-0 mr-4 mt-3'
        onClick={handleClose}
      >
        <MdClose className='fill-current text-gray-600' />
      </button>
      <form onSubmit={handleSubmit}>
        <label>Student's First Name</label>
        <input
          type='text'
          name='firstNameOfChild'
          onChange={handleChange}
          value={values.firstNameOfChild}
        />
        <label>Student's Last Name</label>
        <input
          type='text'
          name='lastNameOfChild'
          onChange={handleChange}
          value={values.lastNameOfChild}
        />
        <label>Parent's First Name</label>
        <input
          type='text'
          name='firstNameOfParent'
          onChange={handleChange}
          value={values.firstNameOfParent}
        />
        <label>Parent's Last Name</label>
        <input
          type='text'
          name='lastNameOfParent'
          onChange={handleChange}
          value={values.lastNameOfParent}
        />
      </form>
    </div>
  );
};
