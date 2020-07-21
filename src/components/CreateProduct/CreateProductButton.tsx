import React from 'react';
import Popup from 'reactjs-popup';
import { CreateProductModal } from './CreateProductModal';
import { Button } from '../atomics/Button';

interface CreateProductButtonProps {}

export const CreateProductButton: React.FC<CreateProductButtonProps> = () => {
  return (
    <div className='w-full mr-12'>
      <Popup
        trigger={
          <Button
            text='Add New Product'
            containerClassNames={'w-full flex justify-end -mr-4'}
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
