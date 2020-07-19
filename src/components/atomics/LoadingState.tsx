import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';

interface LoadingStateProps {
  isLoading: boolean;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className='h-full w-full flex justify-center items-center'>
        <PacmanLoader
          css={'align-items: center; justify-content: center'}
          size={30}
          color={'#ee3b34'}
          loading={isLoading}
        />
      </div>
    );
  } else {
    return null;
  }
};
