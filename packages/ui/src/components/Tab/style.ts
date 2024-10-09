import { css } from "@emotion/react";
import { colors } from "@tiki/color";
import { font } from "@tiki/font";

import { TabProps } from "ui/components/Tab/TabButton";

export const tabListStyle = css({
  display: "flex",
});

export const tabDefaultStyle = () =>
  css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",

    whiteSpace: "nowrap",

    cursor: "pointer",
  });

export const tabVariantStyle = (variant: Required<TabProps>["variant"]) => {
  const style = {
    round: css({
      gap: "0.8rem",

      padding: "1.6rem 2rem",

      font: `${font.text.body04}`,
      fontWeight: 500,

      border: "none",
      borderRadius: "8px",
    }),
  };
  return style[variant];
};

export const tabActiveStyle = (
  isSelected: boolean,
  variant: Required<TabProps>["variant"]
) => {
  const style = {
    round: isSelected
      ? css({
          backgroundColor: colors.white,

          color: colors.blue_900,
          fontWeight: "600",

          pointerEvents: "none",
        })
      : css({
          backgroundColor: colors.blue_100,

          color: colors.gray_800,
          fontWeight: "500",
        }),
  };
  return style[variant];
};
