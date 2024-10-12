import type { Meta, StoryObj } from '@storybook/react';

import { ToastContainer, ToastProvider, useToastAction } from '@tiki/ui';

const meta: Meta = {
  title: 'Common/Toast',
  decorators: [
    (Story) => (
      <div>
        <ToastProvider />
        <Story />
        <ToastContainer />
      </div>
    ),
  ],
}

export default meta;

export const Default: StoryObj = {
  render: () => {
    const { createToast } = useToastAction();

    return (
      <button onClick={() => createToast('토스트 띄우기 성공!')}>Create Toast</button>
    );
  },
};

export const Error: StoryObj = {
  render: () => {
    const { createToast } = useToastAction();

    return (
      <>
        <button onClick={() => createToast('에러가 발생하였어요 에러가 발생하였어요 에러가 발생하였어요', 'error')}>
          Create Toast
        </button>
      </>
    );
  },
};

export const Success: StoryObj = {
  render: () => {
    const { createToast } = useToastAction();

    return (
      <>
        <button onClick={() => createToast('축하드려요 ! 성공했습니다.', 'success')}>Create Toast</button>
      </>
    );
  },
};