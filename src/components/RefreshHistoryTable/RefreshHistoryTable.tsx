import React from 'react';
import { Table } from 'antd';
import { RefreshHistoryTableColumns } from './RefreshHistoryTableColumns';
import { useOvermind } from '../../store';
import './RefreshHistoryTable.css';

export const RefreshHistoryTable: React.FC = () => {
  const { state, actions } = useOvermind();

  React.useEffect(() => {
    actions.RefreshHistoryStore.getRefreshHistoryFromApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortedRefreshHistory = [
    ...(state.RefreshHistoryStore.refreshHistory || []),
  ]?.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <div className='bg-gray-300 refresh-history-table'>
      <Table
        columns={RefreshHistoryTableColumns}
        dataSource={sortedRefreshHistory}
      />
    </div>
  );
};
