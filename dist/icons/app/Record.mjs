import Svg, { Circle } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Record.tsx
var SvgRecord = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 6, fill: "currentColor" })
    ]
  }
);
var ForwardRef = forwardRef(SvgRecord);
var Record_default = ForwardRef;

export { Record_default as default };
//# sourceMappingURL=Record.mjs.map
//# sourceMappingURL=Record.mjs.map