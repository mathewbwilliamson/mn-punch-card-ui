import React from 'react';
import Popup from 'reactjs-popup';
import { CreateProductModal } from './CreateProductModal';

interface CreateProductButtonProps {}

export const CreateProductButton: React.FC<CreateProductButtonProps> = () => {
  return (
    <div className=''>
      <Popup
        trigger={<button>Add New Product</button>}
        modal={true}
        closeOnDocumentClick={true}
      >
        <CreateProductModal />
      </Popup>
    </div>
  );
};
