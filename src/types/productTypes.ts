import { BasicResource } from './generalTypes';

export interface Product extends BasicResource, NewProduct {}

export interface NewProduct {
  asin: string;
  amazonTitle: string;
  price: number;
  title: string;
  imageUrl: string;
  createdAt: string;
  createdBy: string;
  updateSource: string;
  rewardCardPrice: number;
  link: string;
}

export interface NewOrder {
  product: NewProduct;
  order: OrderProductForm;
}

export interface OrderProductForm {
  firstNameOfChild: string;
  lastNameOfChild: string;
  firstNameOfParent: string;
  lastNameOfParent: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  emailAddressOfParent: string;
  parentApproval: boolean;
}

export interface ProductOrderHistory {
  id: number;
  isOrdered: boolean;
  firstNameOfChild: string;
  lastNameOfChild: string;
  firstNameOfParent: string;
  lastNameOfParent: string;
  emailAddressOfParent: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  productTitle: string;
  amazonTitle: string;
  asin: string;
  price: number;
  rewardCardPrice: number;
  link: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}
