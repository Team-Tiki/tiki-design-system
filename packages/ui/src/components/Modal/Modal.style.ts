import { css } from "@emotion/react";
import { colors } from "color";

import { fadeIn } from "ui/animation";
import { theme } from "ui/theme";

export const backgroundStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: theme.zIndex.overlayHigh,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  animation: `${fadeIn} 0.2s ease-in`,
});

export const dialogStyle = css({
  display: "block",
  position: "fixed",
  top: "50%",
  left: "50%",
  width: "51.1rem",

  zIndex: theme.zIndex.overlayTop,
  paddingTop: "4.8rem",
  paddingBottom: "4.8rem",
  borderRadius: "16px",
  border: "none",
  outline: "none",
  background: colors.white,
  transform: "translate(-50%, -50%)",
});
