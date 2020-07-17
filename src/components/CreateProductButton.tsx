import React from 'react';
import { FindAmazonProductInput } from './FindAmazonProductInput';

interface CreateProductButtonProps {}

export const CreateProductButton: React.FC<CreateProductButtonProps> = () => {
  const [isProductEntryOpen, setIsProductEntryOpen] = React.useState<boolean>(
    false
  );

  const handleClick = (asin: string) => {
    console.log('\x1b[41m%s \x1b[0m', '[matt] CLICK asin', asin);
  };

  return (
    <div className=''>
      <button onClick={() => setIsProductEntryOpen(!isProductEntryOpen)}>
        Add New Product
      </button>
      {isProductEntryOpen && (
        <FindAmazonProductInput handleClick={handleClick} />
      )}
      {/* <Modal>
        <>
          <h1>Heading</h1>
          <p>Lorem ipsum </p>
        </>
      </Modal> */}
    </div>
  );
};
