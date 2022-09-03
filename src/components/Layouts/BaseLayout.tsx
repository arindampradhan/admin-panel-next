import { NextPage } from 'next';
import React from 'react';

type PageProps = {
  children: React.ReactNode;
};

export const BaseLayout: NextPage = ({ children }: PageProps) => {
  return <div>{children}</div>;
};

export default BaseLayout;
