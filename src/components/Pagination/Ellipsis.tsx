import React from 'react';

type EllipsisProps = {
  uid: string | null;
};

export const Ellipsis: React.FC<EllipsisProps> = ({ uid = null }) => (
  <span uid={uid} className="inline-flex h-8 items-center px-0 text-center">
    ...
  </span>
);

export default Ellipsis;
