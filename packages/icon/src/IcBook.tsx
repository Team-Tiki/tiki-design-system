import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcBook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <path fill="url(#ic_book_svg__a)" d="M0 0h24v24H0z" />
    <defs>
      <pattern id="ic_book_svg__a" width={1} height={1} patternContentUnits="objectBoundingBox">
        <use xlinkHref="#ic_book_svg__b" transform="scale(.01389)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="ic_book_svg__b"
        width={72}
        height={72}
      />
    </defs>
  </svg>
);
export default SvgIcBook;
