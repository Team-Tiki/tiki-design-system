import { css } from "@emotion/react";

import { theme } from "../../style";

export const containerStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",

  position: "fixed",
  bottom: "40px",

  width: "100%",

  zIndex: theme.zIndex.overlayTop,
});
