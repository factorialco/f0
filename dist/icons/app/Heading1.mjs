import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Heading1.tsx
var SvgHeading1 = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M5 7v5m0 5v-5m0 0h7V7v10M18 7v10M16 9c1 0 2-1 2-2"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgHeading1);
var Heading1_default = ForwardRef;

export { Heading1_default as default };
//# sourceMappingURL=Heading1.mjs.map
//# sourceMappingURL=Heading1.mjs.map