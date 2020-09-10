import React from 'react';
import { Button } from 'antd';
import { useOvermind } from '../../store';

interface TableColumnRefreshButtonProps {
  asin: string;
}

export const TableColumnRefreshButton: React.FC<TableColumnRefreshButtonProps> = ({
  asin,
}) => {
  const { state, actions } = useOvermind();
  const [isRefreshLoading, setIsRefreshLoading] = React.useState<boolean>(
    false
  );

  const itemRefreshed = state.ProductListStore.productList.find(
    (item) => item.asin === asin
  );
  console.log(
    '\x1b[41m%s \x1b[0m',
    '[matt] state.productListStore',
    state.ProductListStore.productList
  );
  const refreshHistoryItem = state.RefreshHistoryStore.refreshHistory?.find(
    (item) => item.asin === asin
  );
  console.log('\x1b[44m%s \x1b[0m', '[matt] itemRefreshed', itemRefreshed);
  return (
    <Button
      onClick={async () => {
        if (!itemRefreshed) {
          return;
        }
        setIsRefreshLoading(true);
        await actions.ProductDetailStore.refreshProduct({
          id: itemRefreshed.id,
          asin: itemRefreshed.asin,
          title: itemRefreshed.title,
        });
        setIsRefreshLoading(false);
      }}
      disabled={!itemRefreshed || !refreshHistoryItem?.success}
    >
      Refresh
    </Button>
  );
};
