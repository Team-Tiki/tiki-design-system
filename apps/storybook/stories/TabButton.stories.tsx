import type { Meta, StoryObj } from '@storybook/react';

import { TabButton } from '@tiki/ui';

const meta: Meta<typeof TabButton> = {
  title: 'Common/TabButton',
  component: TabButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { children: 'TabButton', tabId: 0, isSelected: false },
}

type Story = StoryObj<typeof meta>;
export default meta;

export const RoundTabButton: Story = {
  args: { variant: 'round' },
  argTypes: { variant: { control: 'radio', options: ['round'] } },
};
