import { useEffect, SyntheticEvent, useState, useCallback } from 'react';
import { Button } from '@/components/Button';
import { Left, Right } from '@/components/Icons';
import CollapseRange from './CollapseRange';

type Props = {
  pages: number[];
  defaultSelectedIndex?: number;
  getPageLabel?: (any) => void;
  label?: string;
  nextLabel?: string;
  previousLabel?: string;
  className?: string;
  max?: number;
  onChange?: (activeIndex: number) => void;
  selectedIndex?: number;
};

interface OnChangeData {
  event: SyntheticEvent;
  selectedPageIndex: number;
}

export function Pagination({
  pages,
  defaultSelectedIndex = 0,
  max = 7,
  onChange = () => {}
}: Props) {
  const [activeIndex, setactiveIndex] = useState(defaultSelectedIndex);

  const handleChange = (activeIndex: number) => {
    setactiveIndex(activeIndex);
    onChange(activeIndex);
  };

  useEffect(() => {
    handleChange(defaultSelectedIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultSelectedIndex]);

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === pages?.length - 1;

  return (
    <nav className="flex text-black">
      <Button
        isDisabled={isFirst}
        onClick={() => handleChange(activeIndex - 1)}
        appearance="subtle"
        spacing="none"
        className="h-8 !items-center leading-8 "
      >
        <Left height="24px" width="24px" />
      </Button>
      <CollapseRange
        pages={pages}
        current={activeIndex}
        max={max}
        handleChange={handleChange}
      />
      <Button
        isDisabled={isLast}
        onClick={() => handleChange(activeIndex + 1)}
        appearance="subtle"
        spacing="none"
        className="h-8 !items-center leading-8"
      >
        <Right height="24px" width="24px" />
      </Button>
    </nav>
  );
}

export default Pagination;
