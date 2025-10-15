import Svg, { Path, Rect } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/MoveUp.tsx
var SvgMoveUp = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M12.5 17H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.5"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m8 5 2 2-2 2"
        }
      ),
      /* @__PURE__ */ jsx(
        Rect,
        {
          width: 6.7,
          height: 6.7,
          x: 12.65,
          y: 3.65,
          fill: "currentColor",
          stroke: "currentColor",
          rx: 1.35
        }
      ),
      /* @__PURE__ */ jsx(
        Rect,
        {
          width: 6.7,
          height: 6.7,
          x: 12.65,
          y: 13.65,
          stroke: "currentColor",
          rx: 1.35
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgMoveUp);
var MoveUp_default = ForwardRef;

export { MoveUp_default as default };
//# sourceMappingURL=MoveUp.mjs.map
//# sourceMappingURL=MoveUp.mjs.map