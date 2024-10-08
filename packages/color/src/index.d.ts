import "@emotion/react";

import { ColorsTypes } from "./index";

declare module "@emotion/react" {
  export interface Theme {
    colors: ColorsTypes;
  }
}
