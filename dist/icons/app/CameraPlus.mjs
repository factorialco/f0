import Svg, { Path, Circle } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/CameraPlus.tsx
var SvgCameraPlus = (props, ref) => /* @__PURE__ */ jsxs(
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
          strokeLinecap: "round",
          d: "M20 10v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h.28a1 1 0 0 0 .948-.684l.088-.265A3 3 0 0 1 11.162 4H14"
        }
      ),
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 3, stroke: "currentColor", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", strokeLinecap: "round", d: "M19 6.5h-3M17.5 8V5" })
    ]
  }
);
var ForwardRef = forwardRef(SvgCameraPlus);
var CameraPlus_default = ForwardRef;

export { CameraPlus_default as default };
//# sourceMappingURL=CameraPlus.mjs.map
//# sourceMappingURL=CameraPlus.mjs.map