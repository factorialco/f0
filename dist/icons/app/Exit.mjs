import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Exit.tsx
var SvgExit = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M10 12h9m0 0-3-3m3 3-3 3M11 19H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h3"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgExit);
var Exit_default = ForwardRef;

export { Exit_default as default };
//# sourceMappingURL=Exit.mjs.map
//# sourceMappingURL=Exit.mjs.map