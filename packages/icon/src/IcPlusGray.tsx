import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcPlusGray = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill="none" {...props}>
    <rect width={36} height={36} fill="#CDCDCD" rx={18} />
    <g
      stroke="#2C3030"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      clipPath="url(#ic_plus_gray_svg__a)">
      <path d="M18 11v14M11 18h14" />
    </g>
    <defs>
      <clipPath id="ic_plus_gray_svg__a">
        <path fill="#fff" d="M10 10h16v16H10z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcPlusGray;
