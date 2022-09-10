export const radiusSizeBehaviour = {
  xsmall: 'rounded-sm',
  small: 'rounded-sm',
  medium: 'rounded-[3px]',
  large: 'rounded-[3px]',
  xlarge: 'rounded-md',
  xxlarge: 'rounded-xl'
};

export const sizeBehaviour = {
  xsmall: 'h-4 w-4',
  small: 'h-6 w-6',
  medium: 'h-8 w-8',
  large: 'h-10 w-10',
  xlarge: 'h-24 w-24',
  xxlarge: 'h-32 w-32'
};

export const appearanceBehaviour = (size: string) => ({
  circle: 'rounded-full',
  square: radiusSizeBehaviour[size]
});

export const chipBehaviour = {
  xsmall: 'h-0 w-0',
  small: 'h-3 w-3',
  medium: 'h-[14px] w-[14px]',
  large: 'h-[15px] w-[15px]',
  xlarge: 'h-[18px] w-[18px]',
  xxlarge: 'h-0 w-0'
};

// Skeleton
export const opacityBehaviour = {
  normal: 'opacity-20',
  strong: 'opacity-30'
};
