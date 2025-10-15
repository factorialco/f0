import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Flag.tsx
var SvgFlag = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M6 5.5c3.5-1 5-.5 6.5.5S16 7 18 5.5V15c-2 1.5-4 1.5-5.5.5S9.5 14 6 15M6 4v16"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgFlag);
var Flag_default = ForwardRef;

export { Flag_default as default };
//# sourceMappingURL=Flag.mjs.map
//# sourceMappingURL=Flag.mjs.map