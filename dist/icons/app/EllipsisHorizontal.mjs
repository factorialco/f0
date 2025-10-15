import Svg, { Circle } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/EllipsisHorizontal.tsx
var SvgEllipsisHorizontal = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 1.5, fill: "currentColor" }),
      /* @__PURE__ */ jsx(Circle, { cx: 6.5, cy: 12, r: 1.5, fill: "currentColor" }),
      /* @__PURE__ */ jsx(Circle, { cx: 17.5, cy: 12, r: 1.5, fill: "currentColor" })
    ]
  }
);
var ForwardRef = forwardRef(SvgEllipsisHorizontal);
var EllipsisHorizontal_default = ForwardRef;

export { EllipsisHorizontal_default as default };
//# sourceMappingURL=EllipsisHorizontal.mjs.map
//# sourceMappingURL=EllipsisHorizontal.mjs.map