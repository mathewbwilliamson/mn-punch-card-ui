import React from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  buttonClassNames?: string;
  containerClassNames?: string;
  isDisabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  buttonClassNames,
  containerClassNames,
  isDisabled = false,
}) => {
  const disabledClassName = isDisabled ? 'disabled' : null;

  return (
    <div className={`${containerClassNames}`}>
      <button
        className={`btn btn-primary ${buttonClassNames} ${disabledClassName} flex`}
        onClick={!isDisabled ? onClick : undefined}
        disabled={isDisabled}
      >
        {text}
      </button>
    </div>
  );
};
