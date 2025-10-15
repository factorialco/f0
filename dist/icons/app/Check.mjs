import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Check.tsx
var SvgCheck = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "m10.75 16.75 7-9.5M6.25 11.75l4.5 5"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgCheck);
var Check_default = ForwardRef;

export { Check_default as default };
//# sourceMappingURL=Check.mjs.map
//# sourceMappingURL=Check.mjs.map