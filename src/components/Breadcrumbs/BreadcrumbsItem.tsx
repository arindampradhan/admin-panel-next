import React from 'react';

type ItemsProps = {
  children?: React.ReactNode;
  text?: string;
  href?: string;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  onClick?: Function;
  truncationWidth?: number;
  target?: '_blank' | '_parent' | '_self' | '_top' | '';
  type?: 'button' | 'link';
};

type CustomTagProps = {
  type: 'button' | 'link';
  children: React.ReactNode;
  className: string;
  style?: any;
  [rest: string]: any;
};

export const CustomTag: React.FC<CustomTagProps> = ({
  children,
  className,
  type,
  ...rest
}) => {
  if (type === 'button') {
    return (
      <button className={className} {...rest}>
        {children}
      </button>
    );
  }
  return (
    <a className={className} {...rest}>
      {children}
    </a>
  );
};

export const BreadcrumbsItem: React.FC<ItemsProps> = ({
  children,
  text,
  href,
  iconBefore,
  iconAfter,
  onClick,
  truncationWidth = 200,
  target = '_blank',
  type = 'link'
}) => {
  const content = text || children;

  return (
    <li className='box-border flex h-7 max-w-full flex-row not-last:after:w-auto not-last:after:shrink-0 not-last:after:px-2 not-last:after:py-0 not-last:after:text-center not-last:after:no-underline not-last:after:content-["/"]'>
      {/* TODO: last element remove style of content */}
      <CustomTag
        style={{ maxWidth: `${truncationWidth}px` }}
        onClick={onClick}
        type={type}
        href={type == 'link' ? href : null}
        className="relative box-border inline-flex h-auto w-auto max-w-full cursor-pointer items-baseline justify-center whitespace-nowrap rounded-[3px] p-0 text-center align-baseline font-medium no-underline transition-all hover:text-neutral-400 hover:underline focus:text-neutral-600 active:text-neutral-800"
      >
        <span className="m-0 shrink flex-grow overflow-hidden overflow-ellipsis whitespace-nowrap opacity-100">
          {content}
        </span>
      </CustomTag>
    </li>
  );
};

export default BreadcrumbsItem;
