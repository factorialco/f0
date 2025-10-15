import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Filter.tsx
var SvgFilter = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M5.415 6.65A1 1 0 0 1 6.175 5h11.65a1 1 0 0 1 .76 1.65l-4.344 5.07a1 1 0 0 0-.241.65v4.13a1 1 0 0 1-.4.8l-2 1.5A1 1 0 0 1 10 18v-5.63a1 1 0 0 0-.24-.65z"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgFilter);
var Filter_default = ForwardRef;

export { Filter_default as default };
//# sourceMappingURL=Filter.mjs.map
//# sourceMappingURL=Filter.mjs.map