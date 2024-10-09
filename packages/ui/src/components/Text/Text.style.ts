import { css } from "@emotion/react";

import { font } from "@tiki/font";
import { TextProps } from "./Text";

export const textStyle = (tag: Required<TextProps>["tag"]) => {
  const style = {
    body1: css({
      fontSize: font.text.body01.fontSize,
      lineHeight: font.text.body01.lineHeight,
    }),
    body2: css({
      fontSize: font.text.body02.fontSize,
      lineHeight: font.text.body02.lineHeight,
    }),
    body3: css({
      fontSize: font.text.body03.fontSize,
      lineHeight: font.text.body03.lineHeight,
    }),
    body4: css({
      fontSize: font.text.body04.fontSize,
      lineHeight: font.text.body04.lineHeight,
    }),
    body5: css({
      fontSize: font.text.body05.fontSize,
      lineHeight: font.text.body05.lineHeight,
    }),
    body6: css({
      fontSize: font.text.body06.fontSize,
      lineHeight: font.text.body06.lineHeight,
    }),
    body7: css({
      fontSize: font.text.body07.fontSize,
      lineHeight: font.text.body07.lineHeight,
    }),
    body8: css({
      fontSize: font.text.body08.fontSize,
      lineHeight: font.text.body08.lineHeight,
    }),
  };
  return style[tag];
};
