import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Minus.tsx
var SvgMinus = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M19 12H5"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgMinus);
var Minus_default = ForwardRef;

export { Minus_default as default };
//# sourceMappingURL=Minus.mjs.map
//# sourceMappingURL=Minus.mjs.map