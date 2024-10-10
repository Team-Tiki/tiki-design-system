import { css } from "@emotion/react";
import { colors } from "@tiki/color";
import { font } from "@tiki/font";

import { MenuItemProps } from "./MenuItem";

export const containerStyle = css({
  display: "flex",
  gap: "0.8rem",

  cursor: "pointer",
});

export const variantStyle = (variant: Required<MenuItemProps>["variant"]) => {
  const style = {
    primary: {
      padding: "0.8rem",

      backgroundColor: colors.gray_100,
      borderRadius: "8px",
      border: 0,

      ...font.text.body06,
      color: colors.black,
      fontWeight: 600,

      ":hover, :focus": {
        outline: 0,
        backgroundColor: colors.blue_100,
      },
    },
  };

  return style[variant];
};
