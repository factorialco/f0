import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/CheckDouble.tsx
var SvgCheckDouble = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "m12 18 7.5-10M4.5 13l3.178 3.178a1 1 0 0 0 1.512-.114L15.5 7.5"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgCheckDouble);
var CheckDouble_default = ForwardRef;

export { CheckDouble_default as default };
//# sourceMappingURL=CheckDouble.mjs.map
//# sourceMappingURL=CheckDouble.mjs.map