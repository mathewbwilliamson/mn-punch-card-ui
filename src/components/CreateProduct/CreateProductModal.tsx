import React from 'react';
import { FindAmazonProductInput } from './FindAmazonProductInput';
import { NewProduct } from '../../types/productTypes';
import { verifyAsin, verifyAsinIsUnique } from '../../utils/verifyAsin';
import axios from 'axios';
import './CreateProductModal.css';
import { AddNewProductToDB } from './AddNewProductToDB';
import { MdClose } from 'react-icons/md';
import { useOvermind } from '../../store';
import { calculateRewardCardPrice } from '../../utils/calculateRewardCardPrice';
import { EditableProductCard } from '../EditableProductCard/EditableProductCard';
import { LoadingState } from '../atomics/LoadingState';

interface CreateProductModalProps {
  handleClose: () => void;
}

export const CreateProductModal: React.FC<CreateProductModalProps> = ({
  handleClose,
}) => {
  const { state, actions } = useOvermind();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const currentProduct = state.ProductDetailStore.currentProduct;

  const [title, setTitle] = React.useState<string>(
    currentProduct?.title || currentProduct?.amazonTitle || ''
  );

  React.useEffect(() => {
    setTitle(currentProduct?.title || currentProduct?.amazonTitle || '');
  }, [currentProduct, state.ProductDetailStore.currentProduct, isLoading]);

  const handleFindProductClick = async (asin: string) => {
    setIsLoading(true);
    const isAsinVerified = verifyAsin(asin);
    const isAsinUnique = verifyAsinIsUnique(
      asin,
      state.ProductListStore.asinList
    );

    if (!isAsinVerified) {
      setError('This ASIN is invalid');
      setIsLoading(false);

      return;
    } else if (!isAsinUnique) {
      setError('This ASIN is a duplicate');
      setIsLoading(false);

      return;
    } else {
      setError('');

      try {
        await actions.ProductDetailStore.getAmazonProduct(asin);
      } catch (err) {
        setError('This product does not exist.');
      }
      setIsLoading(false);
    }
  };

  const handleAddNewProductClick = async () => {
    if (!currentProduct) {
      return;
    }

    const rewardCardPrice = calculateRewardCardPrice(currentProduct.price || 0);
    const newProduct: NewProduct = {
      ...currentProduct,
      title: title,
      rewardCardPrice,
      price: Math.ceil(currentProduct.price),
    };

    // [matt] TODO MAke into an action
    axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/amazon`, newProduct)
      .then(async (response) => {
        console.log('\x1b[41m%s \x1b[0m', '[matt] response', response);
        if (response.status !== 200) {
          setError('There was a problem with adding the product!');
          throw new Error('There was a problem!');
        }
        await actions.ProductListStore.getProductListFromApi();
        handleClose();
      });
  };

  return (
    <div className='create-product-modal__container bg-white'>
      <button
        className='absolute top-0 right-0 mr-4 mt-3'
        onClick={handleClose}
      >
        <MdClose className='fill-current text-gray-600' />
      </button>
      <FindAmazonProductInput
        handleClick={handleFindProductClick}
        error={error}
      />
      <div className='product-card__container text-gray-900'>
        <LoadingState isLoading={isLoading} />

        <EditableProductCard
          productData={currentProduct}
          isLoading={isLoading}
          title={title}
          setTitle={setTitle}
        />
      </div>
      <AddNewProductToDB
        handleClick={handleAddNewProductClick}
        isDisabled={!!currentProduct?.price && currentProduct?.price <= 0}
      />
    </div>
  );
};
