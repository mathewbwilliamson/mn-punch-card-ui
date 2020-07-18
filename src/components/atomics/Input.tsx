import React from 'react';

interface InputProps {
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  placeholderText?: string;
}

export const Input: React.FC<InputProps> = ({
  name,
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
          name={name}
          id={name}
          placeholder={placeholderText}
          value={value}
          onChange={onChange}
        />
      </label>
      <span>{errorMessage}</span>
    </div>
  );
};
