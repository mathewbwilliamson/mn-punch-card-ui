import React from 'react';
import { FindAmazonProductInput } from './FindAmazonProductInput';
import { Product } from '../../types/productTypes';
import { verifyAsin } from '../../utils/verifyAsin';
import axios from 'axios';
import './CreateProductModal.css';
import { AddNewProductToDB } from './AddNewProductToDB';
import { ProductCardContainer } from '../ProductCardContainer';

interface CreateProductModalProps {
  handleClose: () => void;
}

export const CreateProductModal: React.FC<CreateProductModalProps> = ({
  handleClose,
}) => {
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

    axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/amazon`, newProduct)
      .then((response) => {
        if (response.status !== 200) {
          setError('There was a problem with adding the product!');
          throw new Error('There was a problem!');
        }
        handleClose();
      });
  };

  // [matt] TODO: Add a close button in the top right corner
  return (
    <div className='create-product-modal__container bg-white'>
      <button onClick={handleClose}>CLOSE</button>
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
