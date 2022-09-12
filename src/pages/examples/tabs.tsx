import type { NextPage } from 'next';
import React from 'react';
import Background from '@/components/Background';
import { Tabs, TabPanel, TabList, Tab } from '@/components/Tabs';

const DesignSystem: NextPage = () => {
  return (
    <>
      <Background background="white">
        <Tabs
          onChange={index => console.log('Selected Tab', index + 1)}
          id="default"
        >
          <TabList>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </TabList>
          <TabPanel>
            <div className="bg-lightneutral-500 p-8  text-center text-5xl text-neutral-700">
              One
            </div>
          </TabPanel>
          <TabPanel>
            <div className="bg-lightneutral-500 p-8  text-center text-5xl text-neutral-700">
              Two
            </div>
          </TabPanel>
          <TabPanel>
            <div className="bg-lightneutral-500 p-8  text-center text-5xl text-neutral-700">
              Three
            </div>
          </TabPanel>
        </Tabs>
      </Background>
    </>
  );
};

export default DesignSystem;
