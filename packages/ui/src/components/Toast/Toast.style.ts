import { css } from "@emotion/react";
import { colors } from "@tiki/color";
import { font } from "@tiki/font";

import { fadeIn, fadeOut, moveUp } from "../../animation";

export const containerStyle = (isShown: boolean) =>
  css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",

    padding: "10px 20px",

    borderRadius: "24px",
    color: colors.white,
    backgroundColor: "rgba(44, 48, 48, 0.8)",

    animation: isShown
      ? `${moveUp} 0.2s ease-in, ${fadeIn} .2s ease-in`
      : `${fadeOut} .2s ease-in forwards`,

    "& > svg": {
      width: "20px",
      height: "20px",
    },
  });

export const textStyle = css({
  fontSize: font.text.body06.fontSize,
  lineHeight: font.text.body06.lineHeight,
})
