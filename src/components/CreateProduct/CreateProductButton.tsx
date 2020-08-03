import React from 'react';
import Popup from 'reactjs-popup';
import { CreateProductModal } from './CreateProductModal';
import { Button } from '../atomics/Button';

interface CreateProductButtonProps {}

export const CreateProductButton: React.FC<CreateProductButtonProps> = () => {
  return (
    <div className='w-1/4 flex flex-col lg:flex-row mt-4'>
      <Button
        text='Refresh'
        containerClassNames='w-full flex justify-end mr-4 mb-4'
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
