import Svg, { Circle, Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Clock.tsx
var SvgClock = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M12 9v3l3.5 2"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgClock);
var Clock_default = ForwardRef;

export { Clock_default as default };
//# sourceMappingURL=Clock.mjs.map
//# sourceMappingURL=Clock.mjs.map