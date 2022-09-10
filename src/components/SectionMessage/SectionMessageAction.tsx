import React from 'react';

type Props = {
  children: React.ReactNode;
  href: string;
};

export function SectionMessageAction({ children, href }: Props) {
  // TODO: content not working properly [after not last css property]
  return (
    <a
      href={href}
      className="relative box-border inline-flex h-auto w-auto max-w-full cursor-pointer items-baseline justify-center whitespace-nowrap rounded-[3px] bg-none p-0  text-center align-baseline font-medium text-primary after:inline-block after:w-4 after:align-middle after:text-darkneutral-100 hover:bg-none hover:text-blue-500 hover:underline focus:bg-none focus:text-blue-600 active:bg-none active:text-blue-700 not-last-after:content-['.']"
    >
      {children}
    </a>
  );
}

export default SectionMessageAction;
