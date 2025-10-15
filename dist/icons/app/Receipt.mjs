import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Receipt.tsx
var SvgReceipt = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M18 7v11.826a1 1 0 0 1-1.65.759l-1.184-1.014a1 1 0 0 0-1.319.015l-1.187 1.067a1 1 0 0 1-1.34-.003l-1.167-1.058a1 1 0 0 0-1.322-.018l-1.18 1.011A1 1 0 0 1 6 18.825V7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3ZM9 8h6M9 12h4"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgReceipt);
var Receipt_default = ForwardRef;

export { Receipt_default as default };
//# sourceMappingURL=Receipt.mjs.map
//# sourceMappingURL=Receipt.mjs.map