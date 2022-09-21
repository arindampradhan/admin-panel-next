import React, {
  ReactNode,
  useCallback,
  useState,
  Children,
  useRef
} from 'react';
import { TabListContext, TabPanelContext } from './internal/context';

type TabProps = {
  children: ReactNode[];
  defaultSelected?: number;
  onChange?: (index: number) => void;
  selected?: number;
  shouldUnmountTabPanelOnChange?: boolean;
  id?: number | string;
};

const getTabPanelWithContext = ({
  tabPanel,
  index,
  isSelected,
  tabsId
}: {
  tabPanel?: ReactNode;
  isSelected: boolean;
  index: number;
  tabsId: string | number;
}) =>
  // Ensure tabPanel exists in case it has been removed
  tabPanel && (
    <TabPanelContext.Provider
      value={{
        role: 'tabpanel',
        id: `${tabsId}-${index}-tab`,
        hidden: isSelected ? undefined : true,
        'aria-labelledby': `${tabsId}-${index}`,
        tabIndex: isSelected ? 0 : -1
      }}
      key={index}
    >
      {tabPanel}
    </TabPanelContext.Provider>
  );

export const Tabs: React.FC<TabProps> = ({
  children,
  defaultSelected = 0,
  onChange: onChangeProp,
  selected: selectedProp,
  shouldUnmountTabPanelOnChange = false,
  id
}) => {
  const [selectedState, setSelected] = useState(
    selectedProp || defaultSelected
  );

  const selected = selectedProp === undefined ? selectedState : selectedProp;
  const childrenArray = Children.toArray(children).filter(Boolean);
  const visited = useRef<Set<any>>(new Set([selected]));

  const [tabList, ...tabPanels] = childrenArray;

  const onChange = useCallback(
    (index: number) => {
      onChangeProp && onChangeProp(index);
      setSelected(index);
    },
    [onChangeProp]
  );

  const tabPanelsWithContext = shouldUnmountTabPanelOnChange
    ? getTabPanelWithContext({
        tabPanel: tabPanels[selected],
        index: selected,
        isSelected: true,
        tabsId: id
      })
    : // If a panel has already been visited, don't unmount it
      Array.from(visited.current).map((tabIndex: number) =>
        getTabPanelWithContext({
          tabPanel: tabPanels[tabIndex],
          index: tabIndex,
          isSelected: tabIndex === selected,
          tabsId: id
        })
      );

  return (
    <div className="flex min-h-0 max-w-full flex-grow basis-full flex-col before:absolute before:bottom-0 before:left-2 before:right-2 before:m-0 before:rounded-sm before:bg-lightneutral-400 before:content-['']">
      <TabListContext.Provider
        value={{
          selected,
          tabsId: id,
          onChange
        }}
      >
        {tabList}
      </TabListContext.Provider>
      {tabPanels}
    </div>
  );
};

export default Tabs;
