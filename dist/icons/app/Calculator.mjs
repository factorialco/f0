import Svg, { Rect, Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Calculator.tsx
var SvgCalculator = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Rect, { width: 12, height: 16, x: 6, y: 4, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", d: "M18 8H6M14 8v12M10 8v12M18 12H6M14 16H6" })
    ]
  }
);
var ForwardRef = forwardRef(SvgCalculator);
var Calculator_default = ForwardRef;

export { Calculator_default as default };
//# sourceMappingURL=Calculator.mjs.map
//# sourceMappingURL=Calculator.mjs.map