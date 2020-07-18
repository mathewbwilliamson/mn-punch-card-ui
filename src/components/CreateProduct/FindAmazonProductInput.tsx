import React from 'react';
import { Button } from '../atomics/Button';
import { Input } from '../atomics/Input';

interface FindAmazonProductInputProps {
  handleClick: (asin: string) => void;
  error?: string;
}

export const FindAmazonProductInput: React.FC<FindAmazonProductInputProps> = ({
  handleClick,
  error,
}) => {
  const [asin, setAsin] = React.useState<string>('');

  return (
    <div className='flex justify-between pt-4 pl-4 items-center'>
      <Input
        value={asin}
        onChange={(e) => setAsin(e.target.value)}
        errorMessage={error}
        placeholderText='B0012345678'
      />
      <Button
        containerClassNames='-mr-4'
        onClick={() => handleClick(asin)}
        text='Find Product'
      />
    </div>
  );
};
