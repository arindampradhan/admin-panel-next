import React from 'react';
import {
  Information,
  Warning,
  Error,
  Success,
  Discovery
} from '@/components/Icons/index';

type Props = {
  appearance?: 'information' | 'warning' | 'error' | 'success' | 'discovery';
  children?: React.ReactNode;
  title: string;
  actions?: React.ReactNode[];
  icon?: React.ElementType;
};

export function SectionMessage({
  appearance = 'warning',
  title = '',
  children,
  actions,
  icon
}: Props) {
  const appearanceBehaviour = {
    information: 'bg-blue-100 text-primarydark',
    warning: 'bg-green-100 text-primarydark',
    error: 'bg-red-100 text-primarydark',
    success: 'bg-green-100 text-primarydark',
    discovery: 'bg-purple-100 text-primarydark'
  };

  const iconBehaviour = {
    information: 'fill-blue-100 text-blue-700',
    warning: 'fill-blue-100 text-blue-700',
    error: 'fill-blue-100 text-blue-700',
    success: 'fill-blue-100 text-blue-700',
    discovery: 'fill-blue-100 text-blue-700'
  };

  return (
    <section
      className={`flex rounded-[3px] p-4 ${appearanceBehaviour[appearance]}`}
    >
      {/* Icons section */}
      <div className="my-[-2px] mx-0  flex-[0_0_40px]">
        <span className="inline-block flex-shrink-0 leading-none">
          {
            {
              information: (
                <Information
                  className={`pointer-events-none max-h-full max-w-full overflow-hidden ${iconBehaviour[appearance]} align-bottom`}
                />
              ),
              warning: (
                <Warning
                  className={`pointer-events-none max-h-full max-w-full overflow-hidden ${iconBehaviour[appearance]} align-bottom`}
                />
              ),
              error: (
                <Error
                  className={`pointer-events-none max-h-full max-w-full overflow-hidden ${iconBehaviour[appearance]} align-bottom`}
                />
              ),
              success: (
                <Success
                  className={`pointer-events-none max-h-full max-w-full overflow-hidden ${iconBehaviour[appearance]} align-bottom`}
                />
              ),
              discovery: (
                <Discovery
                  className={`pointer-events-none max-h-full max-w-full overflow-hidden ${iconBehaviour[appearance]}  align-bottom`}
                />
              )
            }[appearance]
          }
        </span>
      </div>
      {/* body section */}
      <div className="flex-grow break-words">
        <h1 className="mb-2 text-base font-semibold leading-tight text-primarydark">
          {title}
        </h1>
        <div>{children}</div>

        {actions ? (
          <ul className="mt-2 flex list-none flex-wrap pl-0">
            {actions.map((node, index) => (
              <li key={index} className="m-0 flex items-center">
                {node}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

export default SectionMessage;
