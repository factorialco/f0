import Svg, { Circle, Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Placeholder.tsx
var SvgPlaceholder = (props, ref) => /* @__PURE__ */ jsxs(
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
          strokeLinejoin: "round",
          d: "m17.5 6.5-11 11M17.5 17.5l-11-11"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgPlaceholder);
var Placeholder_default = ForwardRef;

export { Placeholder_default as default };
//# sourceMappingURL=Placeholder.mjs.map
//# sourceMappingURL=Placeholder.mjs.map