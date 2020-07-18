import React from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  buttonClassNames?: string;
  containerClassNames?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  buttonClassNames,
  containerClassNames,
}) => {
  return (
    <div className={`${containerClassNames}`}>
      <button className={`btn btn-3 ${buttonClassNames}`} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
