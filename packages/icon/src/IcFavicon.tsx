import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcFavicon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} fill="none" {...props}>
    <g clipPath="url(#ic_favicon_svg__a)">
      <path
        stroke="#353F9B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M8.8 1.2 7.103 2.897 8.8 4.594"
      />
      <path
        fill="#353F9B"
        fillRule="evenodd"
        d="M0 3a.8.8 0 0 1 .8-.8h2a.8.8 0 0 1 .8.82l-.063-.002.063.002-.003.115a115 115 0 0 0-.022 1.322c-.009.788-.007 1.626.022 1.996.024.29.152.754.44 1.125.263.34.67.622 1.363.622.692 0 1.1-.283 1.363-.622.288-.37.416-.834.44-1.125a.8.8 0 0 1 1.594.128 3.85 3.85 0 0 1-.77 1.979c-.54.695-1.4 1.24-2.627 1.24-1.228 0-2.087-.545-2.627-1.24a3.85 3.85 0 0 1-.77-1.979c-.037-.457-.036-1.377-.028-2.141.002-.227.006-.445.009-.64H.8A.8.8 0 0 1 0 3"
        clipRule="evenodd"
      />
      <rect width={1.6} height={3.2} x={2} y={0.6} fill="#353F9B" rx={0.8} />
    </g>
    <defs>
      <clipPath id="ic_favicon_svg__a">
        <path fill="#fff" d="M0 .2h9.6v9.6H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcFavicon;
