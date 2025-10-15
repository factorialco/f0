import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Delete.tsx
var SvgDelete = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M17 8v9a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V8m10 0h-1.5M17 8h1.5M7 8h1.5M7 8H5.5m10 0V5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v3m7 0h-7"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgDelete);
var Delete_default = ForwardRef;

export { Delete_default as default };
//# sourceMappingURL=Delete.mjs.map
//# sourceMappingURL=Delete.mjs.map