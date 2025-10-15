import Svg, { Circle, Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/AlertCircleLine.tsx
var SvgAlertCircleLine = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", strokeLinecap: "round", d: "M12 12V9M12 15.1V15" })
    ]
  }
);
var ForwardRef = forwardRef(SvgAlertCircleLine);
var AlertCircleLine_default = ForwardRef;

export { AlertCircleLine_default as default };
//# sourceMappingURL=AlertCircleLine.mjs.map
//# sourceMappingURL=AlertCircleLine.mjs.map