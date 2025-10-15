import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Deny.tsx
var SvgDeny = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 20 20",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M3.983 10a6.017 6.017 0 0 1 9.787-4.69l-8.46 8.46A6 6 0 0 1 3.983 10m2.247 4.69a6.017 6.017 0 0 0 8.46-8.46zM10 2.682a7.317 7.317 0 1 0 0 14.634 7.317 7.317 0 0 0 0-14.634",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgDeny);
var Deny_default = ForwardRef;

export { Deny_default as default };
//# sourceMappingURL=Deny.mjs.map
//# sourceMappingURL=Deny.mjs.map