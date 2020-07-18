import React from 'react';
import Popup from 'reactjs-popup';
import { CreateProductModal } from './CreateProductModal';
import { Button } from '../atomics/Button';

interface CreateProductButtonProps {}

export const CreateProductButton: React.FC<CreateProductButtonProps> = () => {
  return (
    <div className=''>
      <Popup
        trigger={<Button text='Add New Product' />}
        modal={true}
        closeOnDocumentClick={true}
      >
        <CreateProductModal />
      </Popup>
    </div>
  );
};
