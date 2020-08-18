import React from 'react';
import Popup from 'reactjs-popup';
import { CreateProductModal } from './CreateProduct/CreateProductModal';
import { useOvermind } from '../store';
import { MdComment } from 'react-icons/md';
import { ReleaseNotesModal } from './ReleaseNotesModal/ReleaseNotesModal';
import { Button, message } from 'antd';

interface HeaderActionsProps {}

export const HeaderActions: React.FC<HeaderActionsProps> = () => {
  const { actions } = useOvermind();
  const [isRefreshing, setIsRefreshing] = React.useState<boolean>(false);

  return (
    <div className='flex items-center justify-evenly w-full flex-row'>
      <Button
        className='header-actions__refresh-all'
        type='primary'
        loading={isRefreshing}
        onClick={async () => {
          setIsRefreshing(true);
          try {
            await actions.ProductListStore.refreshAllProducts();
            await actions.ProductListStore.getProductListFromApi();
            message.success('Your products have all been refreshed!');
          } catch (err) {
            console.log('\x1b[41m%s \x1b[0m', 'err', err);
            message.error('There was an error refreshing products!');
            setIsRefreshing(false);
          }
          setIsRefreshing(false);
        }}
      >
        Refresh
      </Button>
      <Popup
        trigger={<Button type='primary'>New</Button>}
        modal={true}
        closeOnDocumentClick={false}
      >
        {(handleClose) => <CreateProductModal handleClose={handleClose} />}
      </Popup>

      <Popup
        trigger={
          <Button type='primary'>
            <MdComment />
          </Button>
        }
        modal={true}
        closeOnDocumentClick={false}
      >
        {(handleClose) => <ReleaseNotesModal handleClose={handleClose} />}
      </Popup>
    </div>
  );
};
