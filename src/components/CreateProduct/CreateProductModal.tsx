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
import { EditableProductCard } from '../EditableProductCard/EditableProductCard';

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
  const [title, setTitle] = React.useState<string>(
    currentProduct?.title || currentProduct?.amazonTitle || ''
  );

  React.useEffect(() => {
    setTitle(currentProduct?.title || currentProduct?.amazonTitle || '');
  }, [currentProduct]);

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
      title: title,
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
