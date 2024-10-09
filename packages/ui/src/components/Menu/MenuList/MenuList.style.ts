import { css } from "@emotion/react";
import { colors } from "color";

import { MenuListProps } from "ui/components/Menu/MenuList/MenuList";
import { theme } from "ui/theme";

export const containerStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",

  position: "absolute",

  whiteSpace: "nowrap",
  zIndex: theme.zIndex.overlayTop,
});

export const variantStyle = (variant: Required<MenuListProps>["variant"]) => {
  const style = {
    primary: {
      padding: "0.8rem",

      border: `1px solid ${colors.gray_300}`,
      borderRadius: "10px",
      boxShadow: "0 0.4rem 0.6rem 0 rgba(53, 63, 155, 0.15)",

      backgroundColor: colors.gray_100,
    },
  };

  return style[variant];
};
