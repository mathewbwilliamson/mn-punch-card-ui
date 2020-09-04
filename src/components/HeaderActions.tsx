import React from 'react';
import Popup from 'reactjs-popup';
import { CreateProductModal } from './CreateProduct/CreateProductModal';
import { useOvermind } from '../store';
import { MdComment } from 'react-icons/md';
import { ReleaseNotesModal } from './ReleaseNotesModal/ReleaseNotesModal';
import { Button, message, Menu, Modal } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { CurrentAdminPage } from '../types/generalTypes';
import { Link } from 'react-router-dom';

interface HeaderActionsProps {
  currentAdminPage?: CurrentAdminPage;
}

export const HeaderActions: React.FC<HeaderActionsProps> = ({
  currentAdminPage,
}) => {
  const { state, actions } = useOvermind();
  const [isRefreshing, setIsRefreshing] = React.useState<boolean>(false);

  React.useEffect(() => {
    actions.ProductListStore.getAmazonApiUsage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefreshing]);

  const refreshData = state.ProductListStore.apiInformation;
  const totalNumberOfProducts = state.ProductListStore.productList.length;

  const isAdminPage = CurrentAdminPage.ADMIN_DASHBOARD === currentAdminPage;

  const OrderHistoryButton = () => {
    if (CurrentAdminPage.ADMIN_DASHBOARD === currentAdminPage) {
      return <Link to='/admin-order-history'>Order History</Link>;
    } else if (CurrentAdminPage.ORDER_HISTORY === currentAdminPage) {
      return (
        <Link to='/admin-thisisarealpath-so-this-should-work'>
          Admin Dashboard
        </Link>
      );
    }
  };

  return (
    <div className='h-full header-actions__menu'>
      <Menu mode='horizontal'>
        <Menu.Item key='orderHistoryToggle'>{OrderHistoryButton()}</Menu.Item>
        <Menu.Item key='newProduct'>
          <Popup
            trigger={<span>New Product</span>}
            modal={true}
            closeOnDocumentClick={false}
          >
            {(handleClose) => <CreateProductModal handleClose={handleClose} />}
          </Popup>
        </Menu.Item>
        <Menu.Item key='refreshAll'>
          <Button
            className='header-actions__refresh-all'
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
            Refresh ({refreshData.creditsRemaining} Items Left)
          </Button>
        </Menu.Item>
        <Menu.Item key='releaseNotes'>
          <Popup
            trigger={<span>Release Notes</span>}
            modal={true}
            closeOnDocumentClick={false}
          >
            {(handleClose) => <ReleaseNotesModal handleClose={handleClose} />}
          </Popup>
        </Menu.Item>
      </Menu>
      {isAdminPage && (
        <div className='mt-4 text-right absolute top-0 right-0 mr-12'>
          Total Amount of Products: {totalNumberOfProducts}
        </div>
      )}
    </div>
  );
};
