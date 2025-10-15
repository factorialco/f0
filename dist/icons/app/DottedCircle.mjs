import Svg, { Circle } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/DottedCircle.tsx
var SvgDottedCircle = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor", strokeDasharray: "2 2" })
  }
);
var ForwardRef = forwardRef(SvgDottedCircle);
var DottedCircle_default = ForwardRef;

export { DottedCircle_default as default };
//# sourceMappingURL=DottedCircle.mjs.map
//# sourceMappingURL=DottedCircle.mjs.map