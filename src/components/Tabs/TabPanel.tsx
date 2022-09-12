import React from 'react';
import { useTabPanel } from './internal/hooks';

type Props = {
  children: React.ReactNode;
};

export const TabPanel = ({ children }: Props) => {
  const tabPanelAttributes = useTabPanel();
  return (
    <div className="flex min-h-0 flex-grow py-0 px-2" {...tabPanelAttributes}>
      {children}
    </div>
  );
};

export default TabPanel;
