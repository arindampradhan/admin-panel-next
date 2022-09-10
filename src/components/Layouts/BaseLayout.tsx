import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export const BaseLayout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="block">{children}</div>;
};

export default BaseLayout;
