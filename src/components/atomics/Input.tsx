import React from 'react';

interface InputProps {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  placeholderText?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  errorMessage,
  placeholderText,
}) => {
  return (
    <div className=''>
      <label>
        ASIN:
        <input
          type='text'
          name='asin'
          id='asin'
          placeholder={placeholderText}
          value={value}
          onChange={onChange}
        />
      </label>
      <span>{errorMessage}</span>
    </div>
  );
};
