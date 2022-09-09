import React from 'react';

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
};

interface Behaviour {
  primary: string;
  default: string;
  subtle: string;
  link: string;
  'subtle-link': string;
  warning: string;
  danger: string;
  selected?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  appearance = 'default',
  isSelected,
  isLoading,
  className = '',
  spacing = 'default',
  shouldFitContainer = false,
  ...rest
}) => {
  const textBehaviour: Behaviour = {
    primary: '',
    default: '',
    subtle: '',
    link: '',
    'subtle-link': '',
    warning: '',
    danger: ''
  };

  const buttonBehaviour: Behaviour = {
    primary:
      'text-white bg-primary hover:bg-blue-500 focus:bg-blue-600 active:bg-blue-700',
    default:
      'text-darkneutral-100 bg-darkneutral-500/[.04] active:bg-blue-200/[0.6] focus:bg-darkneutral-500/[.04] hover:bg-darkneutral-500/[0.08] active:text-primary focus:text-darkneutral-100 hover:text-darkneutral-100',
    subtle:
      'text-darkneutral-100 hover:text-darkneutral-100 focus:text-darkneutral-100 active:text-primary hover:bg-darkneutral-500/[0.08] focus:bg-none  active:bg-blue-200/[0.6]',
    link: 'text-primary hover:text-blue-500 focus:text-blue-600 active:text-blue-700 focus:shadow-blue-300 bg-none focus:bg-none active:bg-none hover:bg-none hover:underline duration-0 focus:duration-75',
    'subtle-link':
      'text-neutral-600 hover:text-neutral-400 focus:text-neutral-600 active:text-neutral-800 hover:underline bg-none hover:bg-none active:bg-none focus:bg-none',
    warning:
      'bg-yellow-500 text-primarydark hover:text-primarydark active:text-primarydark focus:text-primarydark hover:bg-yellow-400 focus:bg-yellow-500 active:bg-yellow-600',
    danger:
      'bg-red-600 text-white hover:text-white hover:bg-red-500 focus:text-white focus:bg-red-600 active:text-white active:bg-red-700',
    selected:
      'bg-darkneutral-300 text-lightneutral-300 hover:text-lightneutral-300 focus:text-lightneutral-300 active:text-lightneutral-300 hover:bg-darkneutral-300 focus:bg-darkneutral-300 active:bg-darkneutral-300'
  };

  const spacingBehaviour = {
    default: 'px-3 leading-9',
    compact: 'px-2 leading-7',
    none: 'px-0 leading-5'
  };

  const containerBehaviour = {
    default: 'w-auto',
    fullFit: 'w-full'
  };

  const Text: React.FC<TypeProps> = ({ children }) => (
    <span
      className={`mx-1 flex-shrink flex-grow overflow-hidden text-ellipsis whitespace-nowrap text-center transition-opacity ${textBehaviour[appearance]}`}
    >
      {children}
    </span>
  );

  const disabledClass =
    'disabled:bg-darkneutral-500/[0.06] disabled:text-neutral-200 disabled:cursor-not-allowed';

  return (
    <button
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
