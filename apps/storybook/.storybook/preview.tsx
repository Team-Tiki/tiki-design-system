import { Global, ThemeProvider } from '@emotion/react';
import type { Preview } from "@storybook/react";
import { GlobalStyle } from "@tiki/ui";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={{}}>
      <Global styles={GlobalStyle} />
      <Story />
    </ThemeProvider>
  )
]

export default preview;
