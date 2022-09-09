import React, { useEffect, useState } from 'react';
import BreadcrumbsItem from './BreadcrumbsItem';

type BreadcrumbsProps = {
  children: React.ReactNode[];
  defaultExpanded?: boolean;
  isExpanded?: boolean;
  maxItems?: number;
  onExpand?: (Event) => void;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  label?: string;
  ellipsisLabel?: string;
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  children,
  maxItems = 8,
  isExpanded = false,
  onExpand,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = children?.length - 1
}) => {
  const breadcrumbsNumber = children?.length;
  const [isExpand, setIsExpand] = useState(false);

  const handleExpanded = () => {
    setIsExpand(true);
    onExpand(true);
  };

  useEffect(() => {
    setIsExpand(isExpanded);
  }, [isExpanded]);

  // check if children has length
  // check if is not expanded
  // itemsAfterCollapse should be greater than itemsBeforeCollapse
  if (
    !isExpand &&
    breadcrumbsNumber &&
    breadcrumbsNumber > maxItems &&
    itemsAfterCollapse > itemsBeforeCollapse
  ) {
    const first = children.slice(0, itemsBeforeCollapse);
    const last = children.slice(itemsAfterCollapse);
    return (
      <nav aria-label="Breadcrumbs">
        <ol className="m-0 flex flex-wrap p-0 text-neutral-600">
          {first}
          <BreadcrumbsItem type="button" text="..." onClick={handleExpanded} />
          {last}
        </ol>
      </nav>
    );
  }

  return (
    <nav aria-label="Breadcrumbs">
      <ol className="m-0 flex flex-wrap p-0 text-neutral-600">{children}</ol>
    </nav>
  );
};

Breadcrumbs.defaultProps = {
  onExpand: () => null
};

export default Breadcrumbs;
