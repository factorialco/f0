import Svg, { Path, Circle } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/InfoCircleLine.tsx
var SvgInfoCircleLine = (props, ref) => /* @__PURE__ */ jsxs(
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
          strokeLinejoin: "round",
          d: "M12 12v3"
        }
      ),
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 9v.1"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgInfoCircleLine);
var InfoCircleLine_default = ForwardRef;

export { InfoCircleLine_default as default };
//# sourceMappingURL=InfoCircleLine.mjs.map
//# sourceMappingURL=InfoCircleLine.mjs.map