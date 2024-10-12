import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcMoney2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <path fill="url(#ic_money_2_svg__a)" d="M0 0h24v24H0z" />
    <defs>
      <pattern id="ic_money_2_svg__a" width={1} height={1} patternContentUnits="objectBoundingBox">
        <use xlinkHref="#ic_money_2_svg__b" transform="scale(.01389)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="ic_money_2_svg__b"
        width={72}
        height={72}
      />
    </defs>
  </svg>
);
export default SvgIcMoney2;
