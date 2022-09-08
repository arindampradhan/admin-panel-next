import React from 'react';

type TagGroupProps = {
  children: React.ReactNode;
  alignment?: 'start' | 'end';
};

export const TagGroup: React.FC<TagGroupProps> = ({
  children,
  alignment = 'start'
}) => {
  return (
    <div
      className="flex w-full flex-wrap"
      style={{ justifyContent: `flex-${alignment}` }}
    >
      {children}
    </div>
  );
};

export default TagGroup;
