export const theme = {
  zIndex: {
    overlayTop: 4,
    overlayHigh: 3,
    overlayMiddle: 2,
    overlayBottom: 1,
  } as const,
};

import { css } from '@emotion/react';

export const GlobalStyle = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
  }

  ul,
  ol,ㅁ
  li {
    list-style: none;
  }

  html,
  body {
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
  }
`;
