import React from 'react';
import { MdClose } from 'react-icons/md';

interface ReleaseNotesModalProps {
  handleClose: () => void;
}

export const ReleaseNotesModal: React.FC<ReleaseNotesModalProps> = ({
  handleClose,
}) => {
  return (
    <div className='release-notes-modal__container bg-white'>
      <button
        className='absolute top-0 right-0 mr-4 mt-3'
        onClick={handleClose}
      >
        <MdClose className='fill-current text-gray-600' />
      </button>
      HIYA
    </div>
  );
};
