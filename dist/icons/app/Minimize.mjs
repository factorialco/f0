import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Minimize.tsx
var SvgMinimize = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "m19 5-5.5 5.5m0 0h4m-4 0v-4M5 19l5.5-5.5m0 0h-4m4 0v4"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgMinimize);
var Minimize_default = ForwardRef;

export { Minimize_default as default };
//# sourceMappingURL=Minimize.mjs.map
//# sourceMappingURL=Minimize.mjs.map