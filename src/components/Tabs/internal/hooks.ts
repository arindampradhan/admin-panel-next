import { useContext } from 'react';
import { TabContext, TabListContext, TabPanelContext } from './context';

export const useTab = () => {
  const tabData = useContext(TabContext);
  // if (tabData == null || typeof tabData === 'undefined') {
  //   debugger;
  //   throw Error('tabs: A Tab must have a TabList parent.');
  // }
  return tabData;
};

export const useTabList = () => {
  const tabListData = useContext(TabListContext);
  // if (tabListData === null || typeof tabListData === 'undefined') {
  //   debugger;
  //   throw Error('tabs: A TabList must have a Tabs parent.');
  // }
  return tabListData;
};

export const useTabPanel = () => {
  const tabPanelData = useContext(TabPanelContext);
  // if (tabPanelData === null || typeof tabPanelData === 'undefined') {
  //   debugger;
  //   throw Error('tabs:  A TabPanel must have a Tabs parent.');
  // }
  return tabPanelData;
};
