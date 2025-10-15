import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/ArrowLeft.tsx
var SvgArrowLeft = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "m11 18-6-6 6-6M19 12H5.5"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgArrowLeft);
var ArrowLeft_default = ForwardRef;

export { ArrowLeft_default as default };
//# sourceMappingURL=ArrowLeft.mjs.map
//# sourceMappingURL=ArrowLeft.mjs.map