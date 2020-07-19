import React from 'react';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <div className='footer flex w-full flex flex-col mt-8'>
      <div className='footer-1 h-3 w-full'></div>
      <div className='footer-2 h-3 w-full'></div>
      <div className='footer-3 h-10 w-full'></div>
    </div>
  );
};
