import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { TabButton, TabContainer, TabList, TabPanel } from '@tiki/ui';

const meta = {
  title: 'Common/Tab',
  component: TabContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { children: <></> },
} satisfies Meta<typeof TabContainer>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Tabtest: Story = {
  render: () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabClick = (tabId: number) => {
      setSelectedTab(tabId);
    };
    return (
      <TabContainer>
        <TabList selectedTab={selectedTab} onTabClick={handleTabClick}>
          <TabButton variant="round">선택된 블록</TabButton>
          <TabButton variant="round">전체 문서</TabButton>
        </TabList>
        <TabPanel selectedTab={selectedTab}>
          <div>1번 탭</div>
          <div>2번 탭</div>
        </TabPanel>
      </TabContainer>
    );
  },
};
