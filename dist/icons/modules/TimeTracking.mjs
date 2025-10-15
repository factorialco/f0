import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/modules/TimeTracking.tsx
var SvgTimeTracking = (props, ref) => /* @__PURE__ */ jsxs(
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
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M8.85 2.05a.9.9 0 1 0 0 1.8h2.25v.95a8.101 8.101 0 1 0 1.8 0v-.95h2.25a.9.9 0 1 0 0-1.8zM12.9 9.7a.9.9 0 0 0-1.8 0v2.628a1.8 1.8 0 0 0 .907 1.563l2.697 1.54a.9.9 0 1 0 .893-1.562L12.9 12.328z",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: "currentColor",
          d: "M6.336 5.836a.9.9 0 1 0-1.272-1.272l-1.8 1.8a.9.9 0 0 0 1.272 1.272zM18.936 4.564a.9.9 0 0 0-1.272 1.272l1.8 1.8a.9.9 0 0 0 1.272-1.272z"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgTimeTracking);
var TimeTracking_default = ForwardRef;

export { TimeTracking_default as default };
//# sourceMappingURL=TimeTracking.mjs.map
//# sourceMappingURL=TimeTracking.mjs.map