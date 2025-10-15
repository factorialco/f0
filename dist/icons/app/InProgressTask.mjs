import Svg, { Circle, Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/InProgressTask.tsx
var SvgInProgressTask = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(Path, { fill: "currentColor", d: "M12 18a6 6 0 0 0 0-12z" })
    ]
  }
);
var ForwardRef = forwardRef(SvgInProgressTask);
var InProgressTask_default = ForwardRef;

export { InProgressTask_default as default };
//# sourceMappingURL=InProgressTask.mjs.map
//# sourceMappingURL=InProgressTask.mjs.map