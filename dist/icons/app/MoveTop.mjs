import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/MoveTop.tsx
var SvgMoveTop = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M13 19H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2.8"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m8 3 2 2-2 2"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          stroke: "currentColor",
          d: "M14 2.65h4c.746 0 1.35.604 1.35 1.35v2A1.35 1.35 0 0 1 18 7.35h-4A1.35 1.35 0 0 1 12.65 6V4c0-.746.604-1.35 1.35-1.35Z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          d: "M14 9.65h4c.746 0 1.35.604 1.35 1.35v2A1.35 1.35 0 0 1 18 14.35h-4A1.35 1.35 0 0 1 12.65 13v-2c0-.746.604-1.35 1.35-1.35ZM14 16.65h4c.746 0 1.35.604 1.35 1.35v2A1.35 1.35 0 0 1 18 21.35h-4A1.35 1.35 0 0 1 12.65 20v-2c0-.746.604-1.35 1.35-1.35Z"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgMoveTop);
var MoveTop_default = ForwardRef;

export { MoveTop_default as default };
//# sourceMappingURL=MoveTop.mjs.map
//# sourceMappingURL=MoveTop.mjs.map