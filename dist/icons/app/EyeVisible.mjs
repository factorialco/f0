import Svg, { Path, Circle } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/EyeVisible.tsx
var SvgEyeVisible = (props, ref) => /* @__PURE__ */ jsxs(
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
          strokeLinejoin: "round",
          d: "M20 12c-1-3-4-6-8-6s-7 3-8 6c1 3 4 6 8 6s7-3 8-6Z"
        }
      ),
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 2.35, stroke: "currentColor" })
    ]
  }
);
var ForwardRef = forwardRef(SvgEyeVisible);
var EyeVisible_default = ForwardRef;

export { EyeVisible_default as default };
//# sourceMappingURL=EyeVisible.mjs.map
//# sourceMappingURL=EyeVisible.mjs.map