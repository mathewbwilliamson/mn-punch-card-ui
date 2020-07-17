import React from 'react';
import { Modal } from './Modal';

interface CreateProductItemProps {}

export const CreateProductItem: React.FC<CreateProductItemProps> = () => {
  return (
    <div className=''>
      <Modal>
        <>
          <h1>Heading</h1>
          <p>Lorem ipsum </p>
        </>
      </Modal>
    </div>
  );
};
