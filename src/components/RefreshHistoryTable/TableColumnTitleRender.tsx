import React from 'react';
import { useOvermind } from '../../store';

interface TableColumnTitleRenderProps {
  asin: string;
}

export const TableColumnTitleRender: React.FC<TableColumnTitleRenderProps> = ({
  asin,
}) => {
  const { state } = useOvermind();

  const product = state.ProductListStore.productList.find(
    (item) => item.asin === asin
  );

  return (
    <div>
      <a href={product?.link}>{!!product ? product.title : 'No Title Found'}</a>
    </div>
  );
};
