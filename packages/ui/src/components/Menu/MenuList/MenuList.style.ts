import { css } from "@emotion/react";
import { colors } from "@tiki/color";

import { theme } from "../../../style";
import { MenuListProps } from "./MenuList";

export const containerStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "2px",

  position: "absolute",

  whiteSpace: "nowrap",
  zIndex: theme.zIndex.overlayTop,
});

export const variantStyle = (variant: Required<MenuListProps>["variant"]) => {
  const style = {
    primary: {
      padding: "8px",

      border: `1px solid ${colors.gray_300}`,
      borderRadius: "10px",
      boxShadow: "0 4px 6px 0 rgba(53, 63, 155, 0.15)",

      backgroundColor: colors.gray_100,
    },
  };

  return style[variant];
};
