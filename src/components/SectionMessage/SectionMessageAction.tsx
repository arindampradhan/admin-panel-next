import React from 'react';

type Props = {
  children: React.ReactNode;
  href: string;
};

export function SectionMessageAction({ children, href }: Props) {
  return (
    <a
      href={href}
      className="relative box-border inline-flex h-auto w-auto max-w-full cursor-pointer items-baseline justify-center whitespace-nowrap rounded-[3px] bg-none p-0 text-center  align-baseline font-medium text-primary hover:bg-none hover:text-blue-500 hover:underline focus:bg-none focus:text-blue-600 active:bg-none  active:text-blue-700 "
    >
      {children}
    </a>
  );
}

export default SectionMessageAction;
