import React from 'react';

interface InputProps {
  name: string;
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  placeholderText?: string;
  inputClassNames?: string;
  onBlur?: () => void;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  value,
  onChange,
  errorMessage,
  placeholderText,
  inputClassNames,
  onBlur,
}) => {
  return (
    <div>
      <label className='w-full'>
        {label}:
        <input
          className={`w-32 border-solid border rounded-sm border-gray-300 pl-1 pr-1 ml-2 text-gray-700 ${inputClassNames}`}
          type='text'
          name={name}
          id={name}
          placeholder={placeholderText}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
      <div className='text-red-700 text-sm'>{errorMessage}</div>
    </div>
  );
};
