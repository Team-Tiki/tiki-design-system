import { css } from "@emotion/react";
import { colors } from "@tiki/color";
import { font } from "@tiki/font";

export const overlayStyle = css({
  marginTop: "8px",

  borderRadius: "8px",

  maxHeight: "480px",

  overflowY: "auto",
  overscrollBehavior: "contain",
});

export const itemStyle = css({
  display: "flex",

  padding: "10px 12px",
  margin: "4px 12px",
  borderRadius: "8px",

  fontSize: font.text.body05.fontSize,
  lineHeight: font.text.body05.lineHeight,

  "&:hover, &:focus": {
    color: colors.blue_900,
    backgroundColor: colors.blue_100,
  },
});
