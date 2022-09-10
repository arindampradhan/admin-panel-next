/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Account } from '@/components/Icons/index';
import Presence from './Presence';
import Status from './Status';
import { appearanceBehaviour, chipBehaviour, sizeBehaviour } from './theme';

type AvatarProps = {
  children?: React.ReactNode;
  appearance?: 'circle' | 'square';
  label?: string;
  borderColor?: string;
  href?: string;
  isDisabled?: boolean;
  name?: string;
  presence?: 'online' | 'busy' | 'focus' | 'offline';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  src?: string;
  status?: 'approved' | 'declined' | 'locked';
  target?: '_blank' | '_self' | '_top' | '_parent';
  onClick?: Function;
};

export const Avatar: React.FC<AvatarProps> = ({
  appearance = 'circle',
  label = 'avatar',
  href,
  isDisabled = true,
  size = 'medium',
  src,
  presence,
  borderColor = 'white',
  status
}) => {
  const DefaultAvatar = () => (
    <span className="block h-full w-full">
      <Account
        className={`${sizeBehaviour[size]} bg-neutral-400 text-white `}
      />
    </span>
  );

  const ImageAvatar = () => (
    <>
      {href ? (
        <a href={href} className="block h-full w-full cursor-pointer ">
          <img alt="avatar" src={src} className={`${sizeBehaviour[size]}  `} />
        </a>
      ) : (
        <span className="block h-full w-full">
          <img alt="avatar" src={src} className={sizeBehaviour[size]} />
        </span>
      )}
    </>
  );

  return (
    <div className="relative inline-block outline-0">
      {status ? (
        <div
          className={`pointer-events-none absolute top-0 right-0 h-4  ${chipBehaviour[size]}`}
        >
          <Status status={status} borderColor={borderColor} />
        </div>
      ) : null}

      <span
        className={`static m-[2px] flex flex-col items-stretch overflow-hidden  border-none p-0 transition-all ${
          appearanceBehaviour(size)[appearance]
        }`}
      >
        {src ? <ImageAvatar /> : <DefaultAvatar />}
      </span>
      {presence ? (
        <div
          className={`pointer-events-none absolute bottom-0 right-0 h-4  ${chipBehaviour[size]}`}
        >
          <Presence presence={presence} borderColor={borderColor} />
        </div>
      ) : null}
    </div>
  );
};

export default Avatar;
