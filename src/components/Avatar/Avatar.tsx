import React from 'react';
import Icon from '@/components/Icons/index';

type AvatarProps = {
  children?: React.ReactNode;
};

export const Avatar: React.FC<AvatarProps> = props => {
  return (
    <div>
      <Icon />
    </div>
  );
};

export default Avatar;
