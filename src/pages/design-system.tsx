import React, { useState } from 'react';
import Background from '../components/Background';
import { Breadcrumbs, BreadcrumbsItem } from '../components/Breadcrumbs';
import Button from '../components/Button';

const DesignSystem = () => {
  const [isExpanded, setExpanse] = useState(false);

  return (
    <div>
      <Background className="bg-white">
        <Breadcrumbs
          maxItems={1}
          itemsBeforeCollapse={1}
          itemsAfterCollapse={3}
          isExpanded={isExpanded}
          onExpand={() => setExpanse(!isExpanded)}
        >
          <BreadcrumbsItem href="/item" text="Item 1" />
          <BreadcrumbsItem href="/item" text="Item 2" />
          <BreadcrumbsItem href="/item" text="Item 3" />
          <BreadcrumbsItem href="/item" text="Item 4" />
          <BreadcrumbsItem href="/item" text="Item 5" />
          <BreadcrumbsItem href="/item" text="Item 6" />
          <BreadcrumbsItem href="/item" text="Item 7" />
          <BreadcrumbsItem href="/item" text="Item 8" />
          <BreadcrumbsItem href="/item" text="Item 9" />
          <BreadcrumbsItem href="/item" text="Item 10" />
        </Breadcrumbs>
        <Button appearance="primary" onClick={() => setExpanse(!isExpanded)}>
          Toggle
        </Button>
      </Background>
    </div>
  );
};

export default DesignSystem;
