const heading = {
  heading01: {
    fontSize: "4rem",
    lineHeight: "4rem",
  },
  heading02: {
    fontSize: "3.2rem",
    lineHeight: "3.2rem",
  },
  heading03: {
    fontSize: "2.8rem",
    lineHeight: "2.8rem",
  },
  heading04: {
    fontSize: "2.4rem",
    lineHeight: "2.4rem",
  },
  heading05: {
    fontSize: "2rem",
    lineHeight: "2rem",
  },
  heading06: {
    fontSize: "1.6rem",
    lineHeight: "1.6rem",
  },
} as const;

const text = {
  body01: {
    fontSize: "2.4rem",
    lineHeight: "2.4rem",
  },
  body02: {
    fontSize: "2.4rem",
    lineHeight: "3.36rem",
  },
  body03: {
    fontSize: "2rem",
    lineHeight: "2rem",
  },
  body04: {
    fontSize: "1.6rem",
    lineHeight: "1.6rem",
  },
  body05: {
    fontSize: "1.6rem",
    lineHeight: "2.24rem",
  },
  body06: {
    fontSize: "1.4rem",
    lineHeight: "1.4rem",
  },
  body07: {
    fontSize: "1.4rem",
    lineHeight: "1.68rem",
  },
  body08: {
    fontSize: "1.2rem",
    lineHeight: "1.2rem",
  },
} as const;

export type HeadingTypes = typeof heading;
export type TextTypes = typeof text;

export const font = {
  heading,
  text,
} as const;
