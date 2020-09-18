import React from 'react';
import { MdClose } from 'react-icons/md';
import './releaseNotesModal.css';

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
      <h5 className='text-gray-700 font-semibold mt-6'>September 17, 2020</h5>
      <ul className='text-gray-700'>
        <li>
          Added ability to have a blank priced product on the Admin page but not
          appear on the main product page. This product will have an error tag
          telling the admin that the product is not appearing on the
          student-facing list.
        </li>
        <li>
          Bug Fix: When refreshing a product, it was erroring out when there
          wasn't a price but the rest of the product was fine.
        </li>
        <li>
          Made sure that Refresh from the editing Admin page works correctly
          when a product has an error or not. Also added a popup message when
          the refresh happens.
        </li>
        <li>
          Bug Fix: In the Refresh History, Success icon now works correctly, the
          error message works correctly, and the Refresh button works correctly.
        </li>
      </ul>
      <h5 className='text-gray-700 font-semibold mt-6'>September 9, 2020</h5>
      <ul className='text-gray-700'>
        <li>Bug Fix: Added a default sort to the Order History page.</li>
        <li>Added sorting capability to the Order History page.</li>
        <li>
          Added a menu to the top of the Admin page. That menu has the Order
          History, the Admin Page, and Refresh History.
        </li>
        <li>
          Moved Refresh All button to the Refresh History page. Added a Refresh
          History page. Note that you can't refresh a product on this page whose
          Refresh was successful. This will make it easier for you to see which
          products failed and need to be refreshed.
        </li>
      </ul>
      <h5 className='text-gray-700 font-semibold mt-6'>September 3, 2020</h5>
      <ul className='text-gray-700'>
        <li>
          Bug Fix: When a user orders a product, the emails aren't working. This
          is under investigation.
        </li>
        <li>
          Built an order history feature so that when in Admin pages, an admin
          can easily see the order history.
        </li>
      </ul>
      <h5 className='text-gray-700 font-semibold mt-6'>August 20, 2020</h5>
      <ul className='text-gray-700'>
        <li>
          Bug Fix: When refreshing single products, the title doesn't get wiped
          again.
        </li>
      </ul>
      <h5 className='text-gray-700 font-semibold mt-6'>August 19, 2020</h5>
      <ul className='text-gray-700'>
        <li>
          Updated price calculation on new items to 1.085 instead of 1.08.
        </li>
      </ul>
      <h5 className='text-gray-700 font-semibold mt-6'>August 18, 2020</h5>
      <ul className='text-gray-700'>
        <li>
          Updated various places with popup messages to tell the user that an
          action was completed: create product, some error messages, and order a
          product.
        </li>
        <li>
          Added a refresh counter on the Admin page, and added a counter of how
          many products there are on the page.
        </li>
      </ul>
      <h5 className='text-gray-700 font-semibold mt-6'>August 17, 2020</h5>
      <ul className='text-gray-700'>
        <li>
          Updated mobile buttons on Admin page to be more symetric and better
          looking.
        </li>
        <li>Fixed the Product Card Reward card looks and CSS.</li>
      </ul>
      <h5 className='text-gray-700 font-semibold mt-6'>August 13, 2020</h5>
      <ul className='text-gray-700'>
        <li>BUG FIX: Emails are now working.</li>
        <li>Updated some looks.</li>
        <li>Bug Fix for adding a product.</li>
        <li>Updated database for backend fixes.</li>
        <li>
          Fixed bug when adding a new product and it keeps the product's info
          when you go back into the add product modal.
        </li>
      </ul>
      <h5 className='text-gray-700 font-semibold mt-6'>August 10, 2020</h5>
      <ul className='text-gray-700'>
        <li>
          Added a button for the kids to order a product. They should be able to
          click on a thing then fill out the information, then the system emails
          Julie and Autumn with the order request. Of course, there is no user
          information so there is no check against them actually having the
          cards.
        </li>
        <li>Updated some looks.</li>
        <li>Bug Fix for adding a product.</li>
        <li>Updated database for backend fixes.</li>
        <li>
          Fixed bug when adding a new product and it keeps the product's info
          when you go back into the add product modal.
        </li>
      </ul>
      <h5 className='text-gray-700 font-semibold'>August 4, 2020</h5>
      <ul className='text-gray-700'>
        <li>
          Added a link to the product. Adjust margin top to image, margin bottom
          away from image.
        </li>
        <li>
          CSS Product Card: adjust so that height of image is the same and the
          title appears at the same level.
        </li>
        <li>Removed ability to include duplicates on a New Product</li>
        <li>
          Handle the error of being a "valid" asin but not being a real one: ie,
          B084T448VC
        </li>
        <li>Updated button styles</li>
        <li>
          Make Product Card into: On hover, a card pops up like on All Modern
        </li>
        <li>Add a Refresh All button</li>
        <li>Add a button for a Release Notes Popup</li>
      </ul>
      <h5 className='text-gray-700 font-semibold mt-6'>August 2, 2020</h5>
      <ul className='text-gray-700'>
        <li>Sort products by price, low to high</li>
        <li>Add in new logos and designs.</li>
      </ul>
    </div>
  );
};
