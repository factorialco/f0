import Svg, { Rect } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Circle.tsx
var SvgCircle = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(Rect, { width: 16, height: 16, x: 4, y: 4, fill: "currentColor", rx: 8 })
  }
);
var ForwardRef = forwardRef(SvgCircle);
var Circle_default = ForwardRef;

export { Circle_default as default };
//# sourceMappingURL=Circle.mjs.map
//# sourceMappingURL=Circle.mjs.map