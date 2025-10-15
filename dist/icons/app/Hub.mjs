import Svg, { Rect } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Hub.tsx
var SvgHub = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Rect,
        {
          width: 6,
          height: 6,
          x: 4.5,
          y: 4.5,
          stroke: "currentColor",
          strokeLinejoin: "round",
          rx: 3
        }
      ),
      /* @__PURE__ */ jsx(
        Rect,
        {
          width: 6,
          height: 6,
          x: 4.5,
          y: 13.5,
          stroke: "currentColor",
          strokeLinejoin: "round",
          rx: 1.5
        }
      ),
      /* @__PURE__ */ jsx(
        Rect,
        {
          width: 6,
          height: 6,
          x: 13.5,
          y: 4.5,
          stroke: "currentColor",
          strokeLinejoin: "round",
          rx: 1.5
        }
      ),
      /* @__PURE__ */ jsx(
        Rect,
        {
          width: 6,
          height: 6,
          x: 13.5,
          y: 13.5,
          stroke: "currentColor",
          strokeLinejoin: "round",
          rx: 1.5
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgHub);
var Hub_default = ForwardRef;

export { Hub_default as default };
//# sourceMappingURL=Hub.mjs.map
//# sourceMappingURL=Hub.mjs.map