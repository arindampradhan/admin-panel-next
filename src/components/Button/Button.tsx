import React from 'react';
import { buttonBehaviour, textBehaviour } from './theme';

type TypeProps = {
  children: React.ReactNode;
};

type ButtonProps = {
  children: React.ReactNode;
  appearance?:
    | 'default'
    | 'primary'
    | 'subtle'
    | 'link'
    | 'subtle-link'
    | 'warning'
    | 'danger';
  isSelected?: boolean;
  isLoading?: boolean; // TODO: is loading implementation,
  spacing?: 'default' | 'compact' | 'none';
  className?: string;
  shouldFitContainer?: boolean;
  [rest: string]: any;
  isDisabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  appearance = 'default',
  isSelected,
  isLoading,
  className = '',
  spacing = 'default',
  shouldFitContainer = false,
  isDisabled = false,
  ...rest
}) => {
  const spacingBehaviour = {
    default: 'px-3 leading-9',
    compact: 'px-2 leading-7',
    none: 'px-0 leading-5'
  };

  const textSpacingBehaviour = {
    default: 'mx-1',
    compact: 'mx-[2px]',
    none: 'mx-0'
  };

  const containerBehaviour = {
    default: 'w-auto',
    fullFit: 'w-full'
  };

  const Text: React.FC<TypeProps> = ({ children }) => (
    <span
      className={`flex-shrink flex-grow overflow-hidden text-ellipsis whitespace-nowrap text-center transition-opacity ${textBehaviour[appearance]} ${textSpacingBehaviour[spacing]}`}
    >
      {children}
    </span>
  );

  const disabledClass =
    'disabled:bg-darkneutral-500/[0.06] disabled:text-neutral-200 disabled:cursor-not-allowed';

  return (
    <button
      disabled={isDisabled}
      className={`inline-flex cursor-pointer items-baseline rounded-[3px] border-0 text-center align-middle font-normal  transition-all ${disabledClass} ${className} ${spacingBehaviour} ${
        spacingBehaviour[spacing]
      } ${
        isSelected ? buttonBehaviour['selected'] : buttonBehaviour[appearance]
      } ${
        shouldFitContainer
          ? containerBehaviour.fullFit
          : containerBehaviour.default
      }`}
      {...rest}
    >
      <Text>{children}</Text>
    </button>
  );
};

export default Button;
