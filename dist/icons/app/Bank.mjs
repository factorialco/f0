import Svg, { Rect, Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Bank.tsx
var SvgBank = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Rect, { width: 16, height: 4, x: 4, y: 16, stroke: "currentColor", rx: 1 }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M4 5.78a1 1 0 0 1 .757-.97l7-1.75a1 1 0 0 1 .486 0l7 1.75a1 1 0 0 1 .757.97V8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM6 9v7M18 9v7M14 9v7M10 9v7"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgBank);
var Bank_default = ForwardRef;

export { Bank_default as default };
//# sourceMappingURL=Bank.mjs.map
//# sourceMappingURL=Bank.mjs.map