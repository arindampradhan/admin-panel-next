import React, { createRef, useCallback } from 'react';
import { useTab } from './internal/hooks';

type TabProps = {
  children: React.ReactNode;
  index: number;
};

export const Tab: React.FC<TabProps> = ({ children }) => {
  const isActive = false;
  const isActiveClass = isActive
    ? "after:content-[''] after:rounded-sm after:bottom-0 after:m-0 after:absolute after:w-inherit after:left-2 after:right-2 after:border-b-2 after:border-solid after:border-primary"
    : '';
  const tabAttributes = useTab();
  return (
    <div
      className={`relative m-0 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap px-2 py-1 leading-relaxed text-darkneutral-100 hover:text-primary focus:rounded-[3px] focus:shadow-outline focus:outline-none active:text-blue-700 ${isActiveClass}`}
      {...tabAttributes}
    >
      {children}
    </div>
  );
};

export default Tab;
