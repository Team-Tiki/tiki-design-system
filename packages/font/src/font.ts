import "../index.css";

const generateFontObj = ({ fontSize, lineHeight }: { fontSize: string; lineHeight: string }) => ({
  fontFamily: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
  fontSize,
  lineHeight,
});

const heading = {
  heading01: generateFontObj({ fontSize: "40px", lineHeight: "40px" }),
  heading02: generateFontObj({ fontSize: "32px", lineHeight: "32px" }),
  heading03: generateFontObj({ fontSize: "28px", lineHeight: "28px" }),
  heading04: generateFontObj({ fontSize: "24px", lineHeight: "24px" }),
  heading05: generateFontObj({ fontSize: "20px", lineHeight: "20px" }),
  heading06: generateFontObj({ fontSize: "16px", lineHeight: "16px" }),
} as const;

const text = {
  body01: generateFontObj({ fontSize: "24px", lineHeight: "24px" }),
  body02: generateFontObj({ fontSize: "24px", lineHeight: "33.6px" }),
  body03: generateFontObj({ fontSize: "20px", lineHeight: "20px" }),
  body04: generateFontObj({ fontSize: "16px", lineHeight: "16px" }),
  body05: generateFontObj({ fontSize: "16px", lineHeight: "22.4px" }),
  body06: generateFontObj({ fontSize: "14px", lineHeight: "14px" }),
  body07: generateFontObj({ fontSize: "14px", lineHeight: "16.8px" }),
  body08: generateFontObj({ fontSize: "12px", lineHeight: "12px" }),
} as const;

export type HeadingTypes = typeof heading;
export type TextTypes = typeof text;

export const font = {
  heading,
  text,
} as const;
