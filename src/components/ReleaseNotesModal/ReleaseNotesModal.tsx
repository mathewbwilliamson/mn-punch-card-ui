import React from 'react';
import { MdClose } from 'react-icons/md';

interface ReleaseNotesModalProps {
  handleClose: () => void;
}

export const ReleaseNotesModal: React.FC<ReleaseNotesModalProps> = ({
  handleClose,
}) => {
  return (
    <div className='release-notes-modal__container bg-white m-6'>
      <button
        className='absolute top-0 right-0 mr-4 mt-3'
        onClick={handleClose}
      >
        <MdClose className='fill-current text-gray-600' />
      </button>
      <h2 className='text-gray-700 font-semibold'>Release Notes</h2>
      <h5 className='text-gray-700 font-semibold'>August 4, 2020</h5>
      <ul className='text-gray-700'>
        <li>
          -Added a link to the product. Adjust margin top to image, margin
          bottom away from image.
        </li>
        <li>
          -CSS Product Card: adjust so that height of image is the same and the
          title appears at the same level.
        </li>
        <li>-Removed ability to include duplicates on a New Product</li>
        <li>
          -Handle the error of being a "valid" asin but not being a real one:
          ie, B084T448VC
        </li>
        <li>-Updated button styles</li>
        <li>
          -Make Product Card into: On hover, a card pops up like on All Modern
        </li>
        <li>-Add a Refresh All button</li>
        <li>-Add a button for a Release Notes Popup</li>
      </ul>
      <h5 className='text-gray-700 font-semibold mt-6'>August 2, 2020</h5>
      <ul className='text-gray-700'>
        <li>-Sort products by price, low to high</li>
        <li>-Add in new logos and designs.</li>
      </ul>
    </div>
  );
};