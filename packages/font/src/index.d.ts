import "@emotion/react";

import { HeadingTypes, TextTypes } from "@font/font";

declare module "@emotion/react" {
  export interface Theme {
    font: {
      heading: HeadingTypes;
      text: TextTypes;
    };
  }
}
