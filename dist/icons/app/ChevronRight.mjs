import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/ChevronRight.tsx
var SvgChevronRight = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "m9 6 6 6M9 18l6-6"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgChevronRight);
var ChevronRight_default = ForwardRef;

export { ChevronRight_default as default };
//# sourceMappingURL=ChevronRight.mjs.map
//# sourceMappingURL=ChevronRight.mjs.map