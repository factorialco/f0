import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/modules/Software.tsx
var SvgSoftware = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M3 7.5a3.6 3.6 0 0 1 3.6-3.6h10.8A3.6 3.6 0 0 1 21 7.5v5.4a3.6 3.6 0 0 1-3.6 3.6h-1.8v1.8h.9a.9.9 0 1 1 0 1.8h-9a.9.9 0 0 1 0-1.8h.9v-1.8H6.6A3.6 3.6 0 0 1 3 12.9zm3.6 7.2h10.8a1.8 1.8 0 0 0 1.8-1.8V7.5a1.8 1.8 0 0 0-1.8-1.8H6.6a1.8 1.8 0 0 0-1.8 1.8v5.4a1.8 1.8 0 0 0 1.8 1.8"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgSoftware);
var Software_default = ForwardRef;

export { Software_default as default };
//# sourceMappingURL=Software.mjs.map
//# sourceMappingURL=Software.mjs.map