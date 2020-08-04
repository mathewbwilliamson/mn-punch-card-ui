import React from 'react';
import Popup from 'reactjs-popup';
import { CreateProductModal } from './CreateProductModal';
import { Button } from '../atomics/Button';
import { useOvermind } from '../../store';

interface HeaderActionsProps {}

export const HeaderActions: React.FC<HeaderActionsProps> = () => {
  const { actions } = useOvermind();
  const [isRefreshing, setIsRefreshing] = React.useState<boolean>(false);

  return (
    <div className='w-1/4 flex flex-col lg:flex-row mt-4'>
      <Button
        text='Refresh'
        containerClassNames='header-actions__refresh-all w-full flex justify-end mr-4 mb-4'
        onClick={async () => {
          setIsRefreshing(true);
          await actions.ProductListStore.refreshAllProducts();
          await actions.ProductListStore.getProductListFromApi();
          setIsRefreshing(false);
        }}
        isLoading={isRefreshing}
      />
      <Popup
        trigger={
          <Button
            text='New'
            containerClassNames='w-full flex justify-end -mr-4'
          />
        }
        modal={true}
        closeOnDocumentClick={false}
      >
        {(handleClose) => <CreateProductModal handleClose={handleClose} />}
      </Popup>
    </div>
  );
};
