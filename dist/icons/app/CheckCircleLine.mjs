import Svg, { Circle, Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/CheckCircleLine.tsx
var SvgCheckCircleLine = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m9 12 2.4 2.4L15 9.6"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgCheckCircleLine);
var CheckCircleLine_default = ForwardRef;

export { CheckCircleLine_default as default };
//# sourceMappingURL=CheckCircleLine.mjs.map
//# sourceMappingURL=CheckCircleLine.mjs.map