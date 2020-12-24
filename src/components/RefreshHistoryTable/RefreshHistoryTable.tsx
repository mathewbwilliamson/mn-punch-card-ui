import React from 'react';
import { Table, Button, message } from 'antd';
import { RefreshHistoryTableColumns } from './RefreshHistoryTableColumns';
import { useOvermind } from '../../store';
import './RefreshHistoryTable.css';

export const RefreshHistoryTable: React.FC = () => {
  const { state, actions } = useOvermind();
  const [isRefreshing, setIsRefreshing] = React.useState<boolean>(false);

  React.useEffect(() => {
    actions.RefreshHistoryStore.getRefreshHistoryFromApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    actions.ProductListStore.getAmazonApiUsage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.RefreshHistoryStore.refreshHistory?.length]);

  const refreshData = state.ProductListStore.apiInformation;

  const sortedRefreshHistory = [
    ...(state.RefreshHistoryStore.refreshHistory || []),
  ]?.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <div className='bg-gray-300 refresh-history-table'>
      <Button
        className='header-actions__refresh-all mb-6 ml-3'
        type='primary'
        loading={isRefreshing}
        onClick={async () => {
          setIsRefreshing(true);
          try {
            await actions.ProductListStore.refreshAllProducts();
            message.success('Your products have all been refreshed!');

            await actions.RefreshHistoryStore.getRefreshHistoryFromApi();
          } catch (err) {
            console.log('\x1b[41m%s \x1b[0m', 'err', err);
            message.error(
              'There was an error refreshing products See below for information!'
            );
            await actions.RefreshHistoryStore.getRefreshHistoryFromApi();
            setIsRefreshing(false);
          }
          setIsRefreshing(false);
        }}
      >
        Refresh ({refreshData.creditsRemaining} Items Left)
      </Button>
      <Table
        columns={RefreshHistoryTableColumns}
        dataSource={sortedRefreshHistory}
      />
    </div>
  );
};
