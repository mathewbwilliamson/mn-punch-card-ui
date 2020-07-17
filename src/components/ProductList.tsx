import React from 'react';
import { ProductCard } from '../components/ProductCard';
import axios from 'axios';
import { Product } from '../types/productTypes';

interface ProductListProps {
  isAdmin?: boolean;
}
export const ProductList: React.FC<ProductListProps> = ({
  isAdmin = false,
}) => {
  const [productData, setProductData] = React.useState<Product[]>([]);

  React.useEffect(() => {
    axios(`${process.env.REACT_APP_API_ENDPOINT}/amazon`).then((response) =>
      setProductData(response.data)
    );
  }, []);

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'>
      {productData.map((product) => (
        <ProductCard
          key={product.asin}
          productData={product}
          isAdmin={isAdmin}
        />
      ))}
    </div>
  );
};
