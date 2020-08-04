import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import BeatLoader from 'react-spinners/BeatLoader';

export enum LoaderType {
  BEAT = 'BeatLoader',
  PACMAN = 'PacmanLoader',
}

interface LoadingStateProps {
  isLoading: boolean;
  size?: number;
  type?: LoaderType;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  isLoading,
  size = 30,
  type = LoaderType.PACMAN,
}) => {
  if (isLoading) {
    return (
      <div className='h-full w-full flex justify-center items-center'>
        {type === LoaderType.PACMAN ? (
          <PacmanLoader
            css={'align-items: center; justify-content: center'}
            size={size}
            color={'#ee3b34'}
            loading={isLoading}
          />
        ) : (
          <BeatLoader
            css={'align-items: center; justify-content: center'}
            size={size}
            color={'#ee3b34'}
            loading={isLoading}
          />
        )}
      </div>
    );
  } else {
    return null;
  }
};
