import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <g stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} clipPath="url(#ic_add_svg__a)">
      <path d="M8 1v14M1 8h14" />
    </g>
    <defs>
      <clipPath id="ic_add_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcAdd;
