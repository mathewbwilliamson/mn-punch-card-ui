import React from 'react';

interface PopupProps {}

export const Popup: React.FC<PopupProps> = () => {
  return (
    <div className='absolute w-screen h-screen opacity-75 top-0 left-0 bg-gray-900 text-red-200 border p-4'>
      Hiya
    </div>
  );
};
