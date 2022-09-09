import { NextPage } from 'next';
import React from 'react';

type PageProps = {
  children: React.ReactNode;
};

export const BaseLayout: React.FC<PageProps> = ({ children }) => {
  return <div className="block">{children}</div>;
};

export default BaseLayout;
