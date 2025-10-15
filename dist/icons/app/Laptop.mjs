import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Laptop.tsx
var SvgLaptop = (props, ref) => /* @__PURE__ */ jsx(
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
        strokeLinejoin: "round",
        d: "M5 15V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8M18 19H6a3 3 0 0 1-3-3 1 1 0 0 1 1-1h5.5a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5H20a1 1 0 0 1 1 1 3 3 0 0 1-3 3Z"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgLaptop);
var Laptop_default = ForwardRef;

export { Laptop_default as default };
//# sourceMappingURL=Laptop.mjs.map
//# sourceMappingURL=Laptop.mjs.map