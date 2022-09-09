/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Button from '../Button';

type EmptyStateProps = {
  header?: string;
  description?: string;
  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  tertiaryAction?: React.ReactNode;
  isLoading?: boolean;
  imageUrl?: string;
  customImage?: Function;
  maxImageHeight?: number;
  maxImageWidth?: number;
  width?: 'narrow' | 'wide';
};

const EmptyState: React.FC<EmptyStateProps> = ({
  header,
  description,
  primaryAction,
  secondaryAction,
  tertiaryAction,
  isLoading,
  imageUrl,
  customImage,
  maxImageHeight = 160,
  maxImageWidth = 160,
  width = 'wide'
}) => {
  const widthBehaviour = {
    wide: 'max-w-md',
    narrow: 'max-w-xs'
  };
  return (
    <div className={`mx-auto my-12 text-center ${widthBehaviour[width]}`}>
      {customImage ? (
        <img
          src={imageUrl}
          style={{
            maxWidth: `${maxImageWidth}px`,
            maxHeight: `${maxImageHeight}px`
          }}
          className="mx-auto mt-0 mb-6"
          alt="preview-state"
          role="presentation"
        />
      ) : null}
      <h4 className="mb-4 text-xl leading-6 text-primarydark">{header}</h4>
      <p className="mb-6 mt-0 text-primarydark">{description}</p>
      <div className="mb-2 flex items-center justify-center gap-1">
        {primaryAction}
        {secondaryAction}
        {isLoading && <span className="ml-4">o</span>}
      </div>
      {tertiaryAction}
    </div>
  );
};

export default EmptyState;
