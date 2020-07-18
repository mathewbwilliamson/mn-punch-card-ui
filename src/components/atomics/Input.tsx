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
          className='w-32 border-solid border rounded-sm border-gray-300 pl-1 ml-2'
          type='text'
          name={name}
          id={name}
          placeholder={placeholderText}
          value={value}
          onChange={onChange}
        />
      </label>
      <div className='text-red-700 text-sm'>{errorMessage}</div>
    </div>
  );
};
