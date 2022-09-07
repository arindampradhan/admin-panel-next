import React from 'react';

type BadgeProps = {
  children: React.ReactNode;
  appearance:
    | 'default'
    | 'primary'
    | 'primaryInverted'
    | 'important'
    | 'added'
    | 'removed';
  max: boolean | number | 'none';
};

export const Badge: React.FC<BadgeProps> = ({ children, appearance, max }) => {
  const appearanceBehaviour = {
    default: 'bg-lightneutral-500 text-primarydark',
    primary: 'bg-primary text-white',
    primaryInverted: 'bg-white text-blue-700',
    important: 'bg-red-600 text-white',
    added: 'bg-green-100 text-green-700',
    removed: 'bg-red-100 text-red-700'
  };

  if (typeof max === 'number' && typeof children !== 'number') {
    throw Error('react-children and max prop has to be of number type');
  }

  let maxFlag = false;

  if (typeof max === 'number' && typeof children === 'number') {
    maxFlag = true;
    if (children > max) {
      children = `${max}+`;
    }
  }

  return (
    <span
      className={
        '  relative inline-flex appearance-none  rounded-lg border-none  px-[6px] py-[2px] font-normal ' +
        appearanceBehaviour[appearance]
      }
    >
      <span className="box-border text-center text-xs leading-3">
        {children}
      </span>
    </span>
  );
};

Badge.defaultProps = {
  appearance: 'default',
  max: 'none'
};

export default Badge;
