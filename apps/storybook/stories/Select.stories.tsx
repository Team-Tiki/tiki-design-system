import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { useEffect, useState } from 'react';

import { colors } from '@tiki/color';
import { IcArrowDown } from '@tiki/icon';
import { Button, Select } from '@tiki/ui';
import { useOutsideClick } from '@tiki/ui/src/hooks/useOutsideClick';
import { useOverlay } from '@tiki/ui/src/hooks/useOverlay';

const meta: Meta<typeof Select>= {
  title: 'Common/Select',
  component: Select,
  decorators: [
    (Story) => (
      <div css={{ width: '240px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    label: 'Select',
    options: ['option 1', 'option 2', 'option 3'],
    trigger: <></>,
  },
  argTypes: {
    trigger: {
      control: false,
    },
  },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const { isOpen, close, toggle } = useOverlay();
    const ref = useOutsideClick<HTMLDivElement>(close);
    const [selected, setSelected] = useState('');

    useEffect(() => {
      close?.();
    }, [selected, close]);

    const handleSelect = (id: string) => {
      setSelected(id);
    };

    return (
      <Select
        {...args}
        ref={ref}
        isOpen={isOpen}
        onSelect={handleSelect}
        trigger={
          <Button css={buttonStyle} onClick={toggle}>
            {selected || 'Select'}
            <IcArrowDown width={16} height={16} />
          </Button>
        }
      />
    );
  },
};

export const Scroll: Story = {
  render: (args) => {
    const { isOpen, close, toggle } = useOverlay();
    const ref = useOutsideClick<HTMLDivElement>(close);
    const [selected, setSelected] = useState('');

    useEffect(() => {
      close?.();
    }, [selected, close]);

    const handleSelect = (id: string) => {
      setSelected(id);
    };

    return (
      <Select
        {...args}
        ref={ref}
        isOpen={isOpen}
        onSelect={handleSelect}
        options={[
          'Option 1',
          'Option 2',
          'Option 3',
          'Option 4',
          'Option 5',
          'Option 6',
          'Option 7',
          'Option 8',
          'Option 9',
          'Option 10',
          'Option 11',
          'Option 12',
        ]}
        trigger={
          <Button css={buttonStyle} onClick={toggle}>
            {selected || 'Select'}
            <IcArrowDown />
          </Button>
        }
      />
    );
  },
};

const buttonStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '10px 12px',
  color: colors.gray_500,
  border: `1px solid ${colors.gray_400}`,
  backgroundColor: 'white',
  borderRadius: '8px',
});
