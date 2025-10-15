import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/ChevronDown.tsx
var SvgChevronDown = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "m18 10-6 6M6 10l6 6"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgChevronDown);
var ChevronDown_default = ForwardRef;

export { ChevronDown_default as default };
//# sourceMappingURL=ChevronDown.mjs.map
//# sourceMappingURL=ChevronDown.mjs.map