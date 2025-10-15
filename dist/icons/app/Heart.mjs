import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Heart.tsx
var SvgHeart = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M15.063 6C12.875 6 12 8 12 8s-.875-2-3.062-2C7.188 6 5 7.714 5 10.286 5 14.57 12 19 12 19s7-4.429 7-8.714C19 8.143 17.25 6 15.063 6"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgHeart);
var Heart_default = ForwardRef;

export { Heart_default as default };
//# sourceMappingURL=Heart.mjs.map
//# sourceMappingURL=Heart.mjs.map