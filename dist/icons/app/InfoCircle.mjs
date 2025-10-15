import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/InfoCircle.tsx
var SvgInfoCircle = (props, ref) => /* @__PURE__ */ jsx(
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
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8.65-2.9a.65.65 0 1 0 1.3 0V9a.65.65 0 1 0-1.3 0zm0 6a.65.65 0 1 0 1.3 0v-3a.65.65 0 1 0-1.3 0z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgInfoCircle);
var InfoCircle_default = ForwardRef;

export { InfoCircle_default as default };
//# sourceMappingURL=InfoCircle.mjs.map
//# sourceMappingURL=InfoCircle.mjs.map