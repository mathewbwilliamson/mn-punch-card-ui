import React from 'react';
import { ProductCard } from '../components/ProductCard/ProductCard';
import axios from 'axios';
import { Product } from '../types/productTypes';

export const ProductListPage: React.FC = () => {
  const [productData, setProductData] = React.useState<Product[]>([]);

  React.useEffect(() => {
    axios(`${process.env.REACT_APP_API_ENDPOINT}/amazon`).then((response) =>
      setProductData(response.data)
    );
  }, []);

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'>
      {productData.map((product) => (
        <ProductCard key={product.asin} productData={product} />
      ))}
    </div>
  );
};
