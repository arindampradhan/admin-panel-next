import React from 'react';

type LozengeProps = {
  children: React.ReactNode;
  appearance?:
    | 'default'
    | 'success'
    | 'removed'
    | 'inprogress'
    | 'new'
    | 'moved';
  isBold?: boolean;
  maxWidth?: number;
};

const Lozenge: React.FC<LozengeProps> = ({
  children,
  appearance,
  isBold,
  maxWidth
}) => {
  const appearanceBehaviour = {
    default: 'text-darkneutral-100 bg-lightneutral-500',
    defaultBold: 'bg-darkneutral-100 text-lightneutral-500',
    success: 'text-green-700 bg-green-100',
    successBold: 'bg-green-600 text-white',
    removed: 'bg-red-100 text-red-700',
    removedBold: 'bg-red-600 text-white',
    inprogress: 'bg-blue-100 text-blue-700',
    inprogressBold: 'bg-primary text-white',
    new: 'bg-purple-100 text-purple-700',
    newBold: 'bg-purple-600 text-white',
    moved: 'text-primarydark bg-yellow-200',
    movedBold: 'text-primarydark bg-yellow-700'
  };
  const key = `${appearance}${isBold ? 'Bold' : ''}`;

  return (
    <span
      style={{ maxWidth: `${maxWidth}px` }}
      className={`${appearanceBehaviour[key]}  static box-border inline-flex appearance-none rounded-[3px] border-none px-1`}
    >
      <span className="box-border overflow-hidden text-ellipsis whitespace-nowrap text-xs font-bold uppercase leading-4">
        {children}
      </span>
    </span>
  );
};

Lozenge.defaultProps = {
  isBold: false,
  appearance: 'default',
  maxWidth: 200
};

export default Lozenge;
