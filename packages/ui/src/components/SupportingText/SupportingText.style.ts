import { css } from "@emotion/react";
import { colors } from "@tiki/color";
import { font } from "@tiki/font";

export const textStyle = (isError: boolean, isNotice: boolean) => {
  const textColor = isError
    ? colors.red
    : isNotice
      ? colors.blue_900
      : colors.gray_400;

  return css({
    color: textColor,
    wordBreak: "break-word",
    ...font.text.body04,
  });
};
