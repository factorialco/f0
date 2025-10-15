import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/ArrowRight.tsx
var SvgArrowRight = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "m13 6 6 6-6 6M5 12h13.5"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgArrowRight);
var ArrowRight_default = ForwardRef;

export { ArrowRight_default as default };
//# sourceMappingURL=ArrowRight.mjs.map
//# sourceMappingURL=ArrowRight.mjs.map