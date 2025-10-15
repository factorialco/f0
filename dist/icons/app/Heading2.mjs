import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Heading2.tsx
var SvgHeading2 = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M4 7v5m0 5v-5m0 0h7V7v10M15 9.5A2.5 2.5 0 0 1 17.5 7v0A2.5 2.5 0 0 1 20 9.5v0a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 0-2.5 2.5V17h5"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgHeading2);
var Heading2_default = ForwardRef;

export { Heading2_default as default };
//# sourceMappingURL=Heading2.mjs.map
//# sourceMappingURL=Heading2.mjs.map