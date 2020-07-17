import React from 'react';
import { FindAmazonProductInput } from './FindAmazonProductInput';
import { Product } from '../../types/productTypes';
import { ProductCard } from '../ProductCard';
import { verifyAsin } from '../../utils/verifyAsin';

interface CreateProductModalProps {}

export const CreateProductModal: React.FC<CreateProductModalProps> = () => {
  const [currentProduct, setCurrentProduct] = React.useState<Product>();
  const [error, setError] = React.useState<string>('');

  const handleFindProductClick = async (asin: string) => {
    const isAsinVerified = verifyAsin(asin);
    console.log(
      '\x1b[41m%s \x1b[0m',
      '[matt] CLICK asin',
      asin,
      isAsinVerified,
      setCurrentProduct
    );
    if (!isAsinVerified) {
      setError('This ASIN is invalid');
      return;
    } else {
      setError('');

      // const product = axios();
      // setCurrentProduct()
    }
  };

  return (
    <div className='w-3/5 h-64 bg-white'>
      <FindAmazonProductInput
        handleClick={handleFindProductClick}
        error={error}
      />
      {currentProduct && <ProductCard productData={currentProduct} />}
    </div>
  );
};
