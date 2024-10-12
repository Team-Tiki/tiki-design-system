import { css } from "@emotion/react";

import { colors } from "@tiki/color";
import { font } from "@tiki/font";

import { ButtonProps } from "./Button";

export const buttonStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",

  width: "100%",

  padding: "16px 24px",

  border: "none",
  borderRadius: "8px",

  fontWeight: 500,

  whiteSpace: "nowrap",

  cursor: "pointer",

  "&:disabled:not(:focus)": {
    backgroundColor: colors.gray_400,
    color: colors.white,
  },

  transition: "all .2s ease-in",
});

export const variantStyle = (variant: Required<ButtonProps>["variant"]) => {
  const style = {
    primary: css({
      color: colors.white,
      backgroundColor: colors.blue_900,

      "&:hover": {
        backgroundColor: colors.blue_700,
      },
    }),
    secondary: css({
      color: colors.black,
      backgroundColor: colors.gray_100,

      "&:hover": {
        backgroundColor: colors.blue_100,
      },
    }),
    text: css({
      backgroundColor: "transparent",
      ...font.text.body04,
    }),
    action: css({
      color: colors.white,
      backgroundColor: colors.blue_900,
    }),
  };
  return style[variant];
};

export const sizeStyle = (size: Required<ButtonProps>["size"]) => {
  const style = {
    large: css({
      ...font.text.body04,
    }),
    medium: css({
      ...font.text.body05,
    }),
    small: css({
      ...font.text.body06,
    }),
  };
  return style[size];
};
