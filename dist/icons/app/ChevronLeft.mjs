import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/ChevronLeft.tsx
var SvgChevronLeft = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "m15 6-6 6M15 18l-6-6"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgChevronLeft);
var ChevronLeft_default = ForwardRef;

export { ChevronLeft_default as default };
//# sourceMappingURL=ChevronLeft.mjs.map
//# sourceMappingURL=ChevronLeft.mjs.map