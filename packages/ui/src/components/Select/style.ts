import { css } from "@emotion/react";
import { colors } from "color";

export const scrollStyle = css`
  ::-webkit-scrollbar {
    width: 0.8rem;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.gray_300};
    border-radius: 10rem;
  }
`;
