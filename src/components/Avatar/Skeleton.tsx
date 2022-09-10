import React from 'react';
import { sizeBehaviour, appearanceBehaviour, opacityBehaviour } from './theme';

type Props = {
  color?: string;
  appearance?: 'circle' | 'square';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  weight?: 'normal' | 'strong';
};

export const Skeleton: React.FC<Props> = ({
  color,
  size = 'medium',
  appearance = 'circle',
  weight = 'normal'
}) => {
  return (
    <div
      style={{
        backgroundColor: color
      }}
      className={`inline-block h-8 w-8 border-2 border-solid border-transparent ${
        color ? '' : 'bg-primarydark'
      } ${opacityBehaviour[weight]} ${sizeBehaviour[size]}  ${
        appearanceBehaviour(size)[appearance]
      }`}
    />
  );
};

export default Skeleton;
