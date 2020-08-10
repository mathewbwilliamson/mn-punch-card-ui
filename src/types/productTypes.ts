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

export interface NewOrder extends OrderProductForm, NewProduct {}

export interface Address {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface OrderProductForm {
  firstNameOfChild: string;
  lastNameOfChild: string;
  firstNameOfParent: string;
  lastNameOfParent: string;
  address: Address;
  emailAddressOfParent: string;
  parentApproval: boolean;
}
