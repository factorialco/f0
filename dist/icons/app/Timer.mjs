import Svg, { Circle, Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Timer.tsx
var SvgTimer = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Circle, { cx: 12, cy: 13, r: 7.35, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 10.33v2.667l3 1.666"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 5.5V3M10 3h4M19.09 6l1.414 1.414M4.91 6 3.496 7.414"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgTimer);
var Timer_default = ForwardRef;

export { Timer_default as default };
//# sourceMappingURL=Timer.mjs.map
//# sourceMappingURL=Timer.mjs.map