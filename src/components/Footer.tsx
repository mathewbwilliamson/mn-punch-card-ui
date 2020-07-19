import React from 'react';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <div className='footer flex w-full flex flex-col mt-8'>
      <div className='mn-bg-black h-3 w-full'></div>
      <div className='mn-bg-yellow h-3 w-full'></div>
      <div className='mn-bg-light-red h-10 w-full'></div>
    </div>
  );
};
