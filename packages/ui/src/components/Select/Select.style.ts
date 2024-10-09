import { css } from "@emotion/react";
import { colors } from "color";
import { font } from "font";

export const overlayStyle = css({
  marginTop: "0.8rem",

  borderRadius: "8px",

  maxHeight: "48rem",

  overflowY: "auto",
  overscrollBehavior: "contain",
});

export const itemStyle = css({
  display: "flex",

  padding: "1rem 1.2rem",
  margin: "0.4rem 1.2rem",
  borderRadius: "8px",

  fontSize: font.text.body05.fontSize,
  lineHeight: font.text.body05.lineHeight,

  "&:hover, &:focus": {
    color: colors.blue_900,
    backgroundColor: colors.blue_100,
  },
});
