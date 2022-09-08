import React from 'react';

type TagProps = {
  children?: React.ReactNode;
  text?: React.ReactNode;
  appearance?: 'default' | 'rounded';
  color?:
    | 'default'
    | 'standard'
    | 'green'
    | 'blue'
    | 'red'
    | 'purple'
    | 'grey'
    | 'teal'
    | 'yellow'
    | 'greenLight'
    | 'blueLight'
    | 'redLight'
    | 'purpleLight'
    | 'greyLight'
    | 'tealLight'
    | 'yellowLight';
  elemBefore: React.ReactNode;
};

export const RemovableTag: React.FC<TagProps> = ({
  children,
  text,
  appearance
}) => {
  return <div>{text || children}</div>;
};

export default RemovableTag;
