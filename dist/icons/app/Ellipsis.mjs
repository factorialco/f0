import Svg, { Circle } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Ellipsis.tsx
var SvgEllipsis = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Circle,
        {
          cx: 12,
          cy: 12,
          r: 1.5,
          fill: "currentColor",
          transform: "rotate(90 12 12)"
        }
      ),
      /* @__PURE__ */ jsx(
        Circle,
        {
          cx: 12,
          cy: 6.5,
          r: 1.5,
          fill: "currentColor",
          transform: "rotate(90 12 6.5)"
        }
      ),
      /* @__PURE__ */ jsx(
        Circle,
        {
          cx: 12,
          cy: 17.5,
          r: 1.5,
          fill: "currentColor",
          transform: "rotate(90 12 17.5)"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgEllipsis);
var Ellipsis_default = ForwardRef;

export { Ellipsis_default as default };
//# sourceMappingURL=Ellipsis.mjs.map
//# sourceMappingURL=Ellipsis.mjs.map