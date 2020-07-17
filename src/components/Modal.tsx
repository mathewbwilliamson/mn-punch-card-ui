import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children?: React.ReactChild;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  const modalRoot = document.getElementById('modal-root');
  const attachmentElement = document.createElement('div');

  React.useEffect(() => {
    modalRoot?.appendChild(attachmentElement);

    return () => {
      modalRoot?.removeChild(attachmentElement);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className='absolute w-screen h-screen flex content-center overflow-hidden justify-center opacity-75 top-0 left-0 bg-gray-900 text-red-200 border p-4'></div>
      <div className='absolute w-3/5 my-auto h-64 bg-white opacity-100'>
        {children}
      </div>
    </>,
    attachmentElement
  );
};
