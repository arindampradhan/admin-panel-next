import Ellipsis from './Ellipsis';
import React, { memo } from 'react';
import Button from '../Button';

type CollapseRangeProps = {
  pages: number[];
  current: number;
  max: number;
  handleChange: Function;
};

type PageComponentProps = {
  pages: number[];
  startIndex: number;
  lastIndex: number;
  activeIndex?: number;
  handleChange?: any;
};

const PageComponent = memo(function PageComponent({
  pages,
  startIndex,
  lastIndex,
  activeIndex,
  handleChange
}: PageComponentProps) {
  return (
    <>
      {pages
        ?.slice(startIndex, lastIndex)
        ?.map((pageNo: number, index: number) => {
          const currentIndex = startIndex + index;
          return (
            <Button
              onClick={() => handleChange(startIndex + index)}
              key={index}
              appearance="subtle"
              spacing="none"
              isSelected={pages[activeIndex] === pages[currentIndex]}
              className="h-8 px-[10px] leading-8"
            >
              {pageNo}
            </Button>
          );
        })}
    </>
  );
});

const CollapseRange = ({
  pages,
  current,
  max,
  handleChange
}: CollapseRangeProps) => {
  const total = pages.length;
  const needEllipsis = total > max;
  const hasStartEllipsis = needEllipsis && max - 4 < current;
  const hasEndEllipsis = needEllipsis && current < total - max + 3;

  if (!needEllipsis) {
    return <PageComponent pages={pages} startIndex={0} lastIndex={total} />;
  }

  if (hasStartEllipsis && !hasEndEllipsis) {
    const pageCount = max - 2;
    return (
      <>
        <PageComponent
          handleChange={handleChange}
          activeIndex={current}
          pages={pages}
          startIndex={0}
          lastIndex={1}
        />
        <Ellipsis uid="elipses-1" />
        <PageComponent
          handleChange={handleChange}
          activeIndex={current}
          pages={pages}
          startIndex={total - pageCount}
          lastIndex={total}
        />
      </>
    );
  }

  if (!hasStartEllipsis && hasEndEllipsis) {
    const pageCount = max - 2;
    return (
      <>
        <PageComponent
          handleChange={handleChange}
          activeIndex={current}
          pages={pages}
          startIndex={0}
          lastIndex={pageCount}
        />
        <Ellipsis uid="elipses-1" />
        <PageComponent
          handleChange={handleChange}
          activeIndex={current}
          pages={pages}
          startIndex={total - 1}
          lastIndex={total}
        />
      </>
    );
  }

  const pageCount = max - 4;
  return (
    <>
      <PageComponent
        handleChange={handleChange}
        activeIndex={current}
        pages={pages}
        startIndex={0}
        lastIndex={1}
      />
      <Ellipsis uid="elipses-1" />
      <PageComponent
        handleChange={handleChange}
        activeIndex={current}
        pages={pages}
        startIndex={current - Math.floor(pageCount / 2)}
        lastIndex={current + pageCount - 1}
      />
      <Ellipsis uid="elipses-2" />
      <PageComponent
        handleChange={handleChange}
        activeIndex={current}
        pages={pages}
        startIndex={total - 1}
        lastIndex={total}
      />
    </>
  );
};

export default CollapseRange;
