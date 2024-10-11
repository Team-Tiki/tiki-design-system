import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '@tiki/ui';

const meta: Meta<typeof Label> = {
  title: 'Common/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    children: 'Label',
    id: 'label',
  },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
