import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Heading3.tsx
var SvgHeading3 = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 9a2 2 0 0 1 2-2h.5A2.5 2.5 0 0 1 20 9.5v0a2.5 2.5 0 0 1-2.5 2.5v0M15 15a2 2 0 0 0 2 2h.5a2.5 2.5 0 0 0 2.5-2.5v0a2.5 2.5 0 0 0-2.5-2.5v0M4 7v5m0 5v-5m0 0h7V7v10"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgHeading3);
var Heading3_default = ForwardRef;

export { Heading3_default as default };
//# sourceMappingURL=Heading3.mjs.map
//# sourceMappingURL=Heading3.mjs.map