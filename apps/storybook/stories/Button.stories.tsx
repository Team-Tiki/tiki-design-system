import type { Meta, StoryObj } from '@storybook/react';

import { Button, type ButtonProps } from '@tiki/ui';

const meta = {
  title: 'Common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'text', 'action'],
    },
    size: {
      control: { type: 'radio' },
      options: ['xLarge', 'large', 'medium', 'small'],
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const createButtonStory = (variant: ButtonProps['variant']) => ({
  args: {
    variant,
  },
  argsType: {
    variant: {
      control: false,
    },
  },
});

export const Primary: Story = createButtonStory('primary');

export const Secondary: Story = createButtonStory('secondary');

export const Text: Story = createButtonStory('text');

export const Action: Story = createButtonStory('action');
