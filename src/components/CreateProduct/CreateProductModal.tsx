import React from 'react';
import { FindAmazonProductInput } from './FindAmazonProductInput';
import { Product, NewProduct } from '../../types/productTypes';
import { verifyAsin } from '../../utils/verifyAsin';
import axios from 'axios';
import './CreateProductModal.css';
import { AddNewProductToDB } from './AddNewProductToDB';
import { MdClose } from 'react-icons/md';
import { ProductCardContainer } from '../ProductCard/ProductCardContainer';
import { useOvermind } from '../../store';
import { calculateRewardCardPrice } from '../../utils/calculateRewardCardPrice';

interface CreateProductModalProps {
  handleClose: () => void;
}

export const CreateProductModal: React.FC<CreateProductModalProps> = ({
  handleClose,
}) => {
  const { actions } = useOvermind();

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

      // [matt] TODO MAke into an action
      axios(`${process.env.REACT_APP_API_ENDPOINT}/amazon/${asin}`).then(
        (response) => {
          setCurrentProduct(response.data);
          setIsLoading(false);
        }
      );
    }
  };

  const handleAddNewProductClick = async () => {
    if (!currentProduct) {
      return;
    }

    const rewardCardPrice = calculateRewardCardPrice(currentProduct.price || 0);
    const newProduct: NewProduct = {
      ...currentProduct,
      title: titleReactState[0],
      rewardCardPrice,
    };

    // [matt] TODO MAke into an action
    axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/amazon`, newProduct)
      .then(async (response) => {
        if (response.status !== 200) {
          setError('There was a problem with adding the product!');
          throw new Error('There was a problem!');
        }
        await actions.ProductListStore.getProductListFromApi();
        handleClose();
      });
  };
  console.log('\x1b[42m%s \x1b[0m', '[matt] productData', currentProduct);

  return (
    <div className='create-product-modal__container bg-white'>
      <button
        className='absolute top-0 right-0 mr-4 mt-3'
        onClick={handleClose}
      >
        <MdClose />
      </button>
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
      <AddNewProductToDB
        handleClick={handleAddNewProductClick}
        isDisabled={!!currentProduct?.price && currentProduct?.price <= 0}
      />
    </div>
  );
};
