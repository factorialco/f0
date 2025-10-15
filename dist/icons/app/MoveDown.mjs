import Svg, { Path, Rect } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/MoveDown.tsx
var SvgMoveDown = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M12.5 7H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m8 19 2-2-2-2"
        }
      ),
      /* @__PURE__ */ jsx(
        Rect,
        {
          width: 6.7,
          height: 6.7,
          x: 0.65,
          y: -0.65,
          fill: "currentColor",
          stroke: "currentColor",
          rx: 1.35,
          transform: "matrix(1 0 0 -1 12 19.7)"
        }
      ),
      /* @__PURE__ */ jsx(
        Rect,
        {
          width: 6.7,
          height: 6.7,
          x: 0.65,
          y: -0.65,
          stroke: "currentColor",
          rx: 1.35,
          transform: "matrix(1 0 0 -1 12 9.7)"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgMoveDown);
var MoveDown_default = ForwardRef;

export { MoveDown_default as default };
//# sourceMappingURL=MoveDown.mjs.map
//# sourceMappingURL=MoveDown.mjs.map