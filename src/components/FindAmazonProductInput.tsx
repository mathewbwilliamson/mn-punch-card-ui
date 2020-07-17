import React from 'react';

interface FindAmazonProductInputProps {
  handleClick: (asin: string) => void;
}

export const FindAmazonProductInput: React.FC<FindAmazonProductInputProps> = ({
  handleClick,
}) => {
  const [asin, setAsin] = React.useState<string>('');

  return (
    <div className=''>
      <label>
        ASIN:
        <input
          type='text'
          name='asin'
          id='asin'
          placeholder='B000000'
          value={asin}
          onChange={(e) => setAsin(e.target.value)}
        />
      </label>
      <button onClick={() => handleClick(asin)}>Find Amazon Product</button>
    </div>
  );
};
