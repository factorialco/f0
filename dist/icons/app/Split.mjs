import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Split.tsx
var SvgSplit = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M5 12h4l1.619-2.59A3 3 0 0 1 13.163 8H19m0 0-2-2m2 2-2 2M19 16h-5.837a3 3 0 0 1-2.544-1.41L9 12H5m14 4-2-2m2 2-2 2"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgSplit);
var Split_default = ForwardRef;

export { Split_default as default };
//# sourceMappingURL=Split.mjs.map
//# sourceMappingURL=Split.mjs.map