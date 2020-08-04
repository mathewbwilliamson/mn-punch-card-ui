import React from 'react';
import './Button.css';
import { LoadingState, LoaderType } from './LoadingState';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  buttonClassNames?: string;
  containerClassNames?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  buttonClassNames,
  containerClassNames,
  isDisabled = false,
  isLoading = false,
}) => {
  const disabledClassName = isDisabled ? 'disabled' : null;

  return (
    <div className={`${containerClassNames}`}>
      <button
        className={`btn btn-primary ${buttonClassNames} ${disabledClassName} flex`}
        onClick={!isDisabled ? onClick : undefined}
        disabled={isDisabled}
      >
        {isLoading ? (
          <LoadingState
            isLoading={isLoading}
            size={10}
            type={LoaderType.BEAT}
          />
        ) : (
          text
        )}
      </button>
    </div>
  );
};
