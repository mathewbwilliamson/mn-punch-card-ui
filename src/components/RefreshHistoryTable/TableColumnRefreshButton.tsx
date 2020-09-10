import React from 'react';
import { Button } from 'antd';
import { useOvermind } from '../../store';
import { ReloadOutlined } from '@ant-design/icons';

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

  const refreshHistoryItem = state.RefreshHistoryStore.refreshHistory?.find(
    (item) => item.asin === asin
  );

  return (
    <Button
      type='primary'
      className='flex items-center'
      loading={isRefreshLoading}
      icon={<ReloadOutlined />}
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
        await actions.RefreshHistoryStore.getRefreshHistoryFromApi();
        setIsRefreshLoading(false);
      }}
      disabled={!itemRefreshed || refreshHistoryItem?.success}
    >
      Refresh
    </Button>
  );
};
