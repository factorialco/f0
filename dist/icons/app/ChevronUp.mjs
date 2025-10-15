import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/ChevronUp.tsx
var SvgChevronUp = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "m18 14-6-6M6 14l6-6"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgChevronUp);
var ChevronUp_default = ForwardRef;

export { ChevronUp_default as default };
//# sourceMappingURL=ChevronUp.mjs.map
//# sourceMappingURL=ChevronUp.mjs.map