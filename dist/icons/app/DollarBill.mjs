import Svg, { Rect, Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/DollarBill.tsx
var SvgDollarBill = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Rect, { width: 16, height: 12, x: 4, y: 6, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14 9h-2.5a1.5 1.5 0 0 0-1.5 1.5v0a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5H10"
        }
      ),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", strokeLinecap: "round", d: "M7 12v.1M17 12v.1" })
    ]
  }
);
var ForwardRef = forwardRef(SvgDollarBill);
var DollarBill_default = ForwardRef;

export { DollarBill_default as default };
//# sourceMappingURL=DollarBill.mjs.map
//# sourceMappingURL=DollarBill.mjs.map