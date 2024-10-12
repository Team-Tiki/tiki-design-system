import { css } from "@emotion/react";
import { colors } from "@tiki/color";
import { font } from "@tiki/font";

import { InputProps } from "./Input";

export const containerStyle = css({
  display: "flex",
  flexDirection: "column",

  gap: "8px",

  width: "100%",
});

export const inputSupportStyle = css({
  display: "flex",
  flexDirection: "column",

  gap: "8px",
});

export const warpperStyle = css({
  display: "flex",
  alignItems: "center",

  paddingLeft: "8px",
});

export const inputStyle = css({
  width: "100%",

  border: "none",
  backgroundColor: "transparent",
  fontWeight: 400,
  ...font.text.body04,

  outline: "none",

  "::placeholder": {
    color: colors.gray_500,
    ...font.text.body04,
  },
});

export const variantStyle = (
  variant: Required<InputProps>["variant"],
  isError: boolean
) => {
  const borderColor = isError ? `${colors.red}` : `${colors.gray_400}`;
  const focusBorderColor = isError ? `${colors.red}` : `${colors.blue_900}`;

  const style = {
    default: {
      boxShadow: `inset 0px 0px 0px 1px ${borderColor}`,
      borderRadius: "8px",

      "&:focus-within": {
        boxShadow: `inset 0px 0px 0px 1px ${focusBorderColor}`,
      },
    },
    underline: {
      boxShadow: `inset 0px -1px 0px ${borderColor}`,

      "&:focus-within": {
        boxShadow: `inset 0px -1px 0px ${focusBorderColor}`,
      },
    },
    colored: {
      borderRadius: "100px",
      backgroundColor: colors.gray_100,

      "& > input": {
        "::placeholder": {
          color: colors.gray_500,
          ...font.text.body06,
        },
      },
      "&:focus-within": {
        boxShadow: `inset 0px 0px 0px 1px ${focusBorderColor}`,
      },
    },
  };

  return style[variant];
};

export const sizeStyle = (size: Required<InputProps>["size"]) => {
  const style = {
    small: { padding: "8px 12px" },
    medium: { padding: "12px 12px" },
    large: { padding: "16px 12px" },
  };

  return style[size];
};
