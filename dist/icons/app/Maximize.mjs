import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Maximize.tsx
var SvgMaximize = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M13.5 10.5 19 5m0 0h-4m4 0v4M10.5 13.5 5 19m0 0h4m-4 0v-4"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgMaximize);
var Maximize_default = ForwardRef;

export { Maximize_default as default };
//# sourceMappingURL=Maximize.mjs.map
//# sourceMappingURL=Maximize.mjs.map