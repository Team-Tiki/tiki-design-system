import { css } from "@emotion/react";
import { colors } from "color";
import { theme } from "ui/theme";

export const containerStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",

  position: "relative",
});

export const listStyle = css({
  position: "absolute",
  top: "100%",

  width: "100%",

  zIndex: theme.zIndex.overlayHigh,

  backgroundColor: colors.white,
});

export const itemStyle = css({
  textAlign: "center",

  cursor: "pointer",
});
