import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Reset.tsx
var SvgReset = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 13.5a7 7 0 1 0 7-7H5.5"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m8 3.5-3 3 3 3"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgReset);
var Reset_default = ForwardRef;

export { Reset_default as default };
//# sourceMappingURL=Reset.mjs.map
//# sourceMappingURL=Reset.mjs.map