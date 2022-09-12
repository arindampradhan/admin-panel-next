import {
  Children,
  createRef,
  KeyboardEvent,
  ReactNode,
  useCallback,
  useMemo
} from 'react';
import { useTabList } from './internal/hooks';
import { TabContext } from './internal/context';

type Props = {
  children: React.ReactNode[];
};

export const TabList = ({ children }: Props) => {
  const { tabsId, selected, onChange } = useTabList();

  const childrenArray = Children.toArray(children).filter(Boolean);
  const childrenLength = childrenArray.length;

  const ref = createRef<HTMLDivElement>();

  const selectTabByIndex = useCallback(
    (index: number) => {
      onChange(index);
    },
    [tabsId, ref, onChange]
  );

  return (
    <div
      role="tablist"
      className="relative m-0 flex p-0 font-medium before:absolute before:bottom-0 before:left-2 before:right-2 before:m-0 before:h-[2px] before:w-inherit before:rounded-sm before:bg-lightneutral-400 before:content-['']"
    >
      {childrenArray.map((child, index) => {
        const isSelected = index === selected;
        return (
          <TabContext.Provider
            key={index}
            value={{
              role: 'tab',
              onClick: () => onChange(index),
              isSelected,
              tabIndex: isSelected ? 0 : -1,
              index
            }}
          >
            {child}
          </TabContext.Provider>
        );
      })}
      {children}
    </div>
  );
};
