import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Target.tsx
var SvgTarget = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "m12 12 3-3m0 0V6l3-3 1 2 2 1-3 3z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M19 12a7 7 0 1 1-7-7"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15.5 12A3.5 3.5 0 1 1 12 8.5"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgTarget);
var Target_default = ForwardRef;

export { Target_default as default };
//# sourceMappingURL=Target.mjs.map
//# sourceMappingURL=Target.mjs.map