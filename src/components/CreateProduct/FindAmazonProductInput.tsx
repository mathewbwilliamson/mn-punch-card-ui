import React from 'react';

interface FindAmazonProductInputProps {
  handleClick: (asin: string) => void;
  error?: string;
}

export const FindAmazonProductInput: React.FC<FindAmazonProductInputProps> = ({
  handleClick,
  error,
}) => {
  const [asin, setAsin] = React.useState<string>('');
  // [matt] create a util to check if something is a valid ASIN. Starts with B, 10 letters or digits, no special chars

  return (
    <div className=''>
      <div>
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
        <span>{error}</span>
      </div>
      <button onClick={() => handleClick(asin)}>Find Amazon Product</button>
    </div>
  );
};
