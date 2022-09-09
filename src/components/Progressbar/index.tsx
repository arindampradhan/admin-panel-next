import React from 'react';

type Props = {
  appearance?: 'default' | 'success' | 'inverse';
  value: number;
  isIndeterminate?: boolean;
  ariaLabel?: string;
};

export function Progressbar({
  value = 0,
  appearance = 'default',
  ariaLabel = ''
}: Props) {
  // theme
  const outerBarBehaviour = {
    default: 'bg-darkneutral-500/[0.13]',
    success: 'bg-darkneutral-500/[0.13]',
    inverse: 'bg-white/[0.5]'
  };

  const innerBarBehaviour = {
    default: 'bg-darkneutral-100',
    success: 'bg-green-500',
    inverse: 'bg-white'
  };

  return (
    <div
      className={`bg-white-[0.5] relative h-[6px] w-full overflow-hidden rounded-[3px] ${outerBarBehaviour[appearance]}`}
      tabIndex={0}
      aria-label={ariaLabel}
      aria-valuemin={0}
      aria-valuemax={1}
    >
      <span
        className={`absolute block h-[6px] rounded-[3px]  transition-all ${innerBarBehaviour[appearance]}`}
        style={{ width: `${value * 100}%` }}
      >
        Progressbar
      </span>
    </div>
  );
}

export default Progressbar;
