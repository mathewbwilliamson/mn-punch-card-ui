import React from 'react';
import { FindAmazonProductInput } from './FindAmazonProductInput';
import { Product } from '../../types/productTypes';
import { verifyAsin } from '../../utils/verifyAsin';
import axios from 'axios';
import './CreateProductModal.css';
import { AddNewProductToDB } from './AddNewProductToDB';
import { ProductCardContainer } from '../ProductCardContainer';

interface CreateProductModalProps {}

export const CreateProductModal: React.FC<CreateProductModalProps> = () => {
  const [currentProduct, setCurrentProduct] = React.useState<Product>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  const titleReactState = React.useState<string>(currentProduct?.title || '');

  const handleFindProductClick = async (asin: string) => {
    const isAsinVerified = verifyAsin(asin);

    if (!isAsinVerified) {
      setError('This ASIN is invalid');

      return;
    } else {
      setIsLoading(true);
      setError('');

      axios(`${process.env.REACT_APP_API_ENDPOINT}/amazon/${asin}`).then(
        (response) => {
          setCurrentProduct(response.data);
          setIsLoading(false);
        }
      );
    }
  };

  const handleAddNewProductClick = async () => {
    const newProduct = { ...currentProduct, title: titleReactState[0] };
    console.log('\x1b[41m%s \x1b[0m', '[matt] newProduct', newProduct);
  };

  // [matt] TODO: Add a close button in the top right corner
  return (
    <div className='create-product-modal__container bg-white'>
      <FindAmazonProductInput
        handleClick={handleFindProductClick}
        error={error}
      />
      <ProductCardContainer
        productData={currentProduct}
        isLoading={isLoading}
        isEditing={true}
        titleReactState={titleReactState}
      />
      <AddNewProductToDB handleClick={handleAddNewProductClick} />
    </div>
  );
};
