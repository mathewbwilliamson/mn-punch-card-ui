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
  console.log(
    '\x1b[41m%s \x1b[0m',
    '[matt] buttonClassNames',
    buttonClassNames
  );
  return (
    <div className={`${containerClassNames}`}>
      <button
        className={`btn btn-3 ${buttonClassNames} ${disabledClassName}`}
        onClick={!isDisabled ? onClick : undefined}
        disabled={isDisabled}
      >
        {text}
      </button>
    </div>
  );
};
