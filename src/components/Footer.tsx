import React from 'react';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <div className='footer flex w-full flex flex-col mt-8'>
      <div className='mn-bg-yellow h-6 w-full'></div>
      <div className='mn-bg-light-red h-24 w-full flex flex-row items-center justify-end pr-6'></div>
    </div>
  );
};
