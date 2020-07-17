import React from 'react';
import { ProductCard } from '../components/ProductCard';
import axios from 'axios';
import { Product } from '../types/productTypes';

export const ProductListPage: React.FC = () => {
  const [productData, setProductData] = React.useState<Product[]>([]);

  React.useEffect(() => {
    console.log('\x1b[41m%s \x1b[0m', '[matt] process.env', process.env);
    axios(`${process.env.REACT_APP_API_ENDPOINT}/amazon`).then((response) =>
      setProductData(response.data)
    );
  }, []);
  console.log('\x1b[41m%s \x1b[0m', '[matt] productData', productData);
  return (
    <div className='product-list-page__container'>
      <ProductCard productData={{}} />
      <ProductCard productData={{}} />
      <ProductCard productData={{}} />
    </div>
  );
};
