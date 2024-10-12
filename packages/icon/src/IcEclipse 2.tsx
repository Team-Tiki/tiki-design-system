import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcEclipse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={92}
    height={92}
    fill="none"
    {...props}>
    <rect width={86} height={86} x={3} y={3} fill="#fff" rx={43} />
    <rect width={86} height={86} x={3} y={3} stroke="#FAFAFA" strokeWidth={6} rx={43} />
    <path fill="url(#ic_eclipse_svg__a)" d="M28 28h36v36H28z" />
    <defs>
      <pattern id="ic_eclipse_svg__a" width={1} height={1} patternContentUnits="objectBoundingBox">
        <use xlinkHref="#ic_eclipse_svg__b" transform="scale(.01389)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="ic_eclipse_svg__b"
        width={72}
        height={72}
      />
    </defs>
  </svg>
);
export default SvgIcEclipse;
