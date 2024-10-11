import type { Meta, StoryObj } from '@storybook/react';

import { IcLogoTikiMd } from '@tiki/icon';
import { Menu, MenuItem, MenuList } from '@tiki/ui';
import { useOverlay } from '@tiki/ui/src/hooks/useOverlay';

const meta: Meta<typeof Menu> = {
  title: 'Common/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
  },
  args: {
    onClose: () => {},
    children: (
      <>
        <button>trigger button</button>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
        </ul>
      </>
    ),
  },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({}) => {
    const { isOpen, close, toggle } = useOverlay();

    return (
      <Menu onClose={close}>
        <button onClick={toggle}>Trigger</button>
        <MenuList variant={'primary'} isOpen={isOpen} css={{ left: '100%', top: 0 }}>
          <MenuItem LeftIcon={<IcLogoTikiMd width={16} height={16} />} onSelect={toggle}>
            first item
          </MenuItem>
          <MenuItem LeftIcon={<IcLogoTikiMd width={16} height={16} />} onSelect={toggle}>
            second item
          </MenuItem>
        </MenuList>
      </Menu>
    );
  },
  args: {
    onClose: () => {},
  },
  argTypes: {},
};
